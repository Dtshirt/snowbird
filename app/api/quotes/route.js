import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Quote } from '@/models/Quote';
import { nextQuoteSequence } from '@/models/Counter';
import { validateQuotePayload } from '@/lib/validators';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';
import { sendMail } from '@/lib/mailer';
import { customerQuoteConfirmation } from '@/emails/customerQuoteConfirmation';
import { internalQuoteNotification } from '@/emails/internalQuoteNotification';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function formatQuoteId(year, seq) {
  return `SB-${year}-${String(seq).padStart(6, '0')}`;
}

async function generateQuoteId() {
  const year = new Date().getFullYear();
  const seq = await nextQuoteSequence(year);
  return formatQuoteId(year, seq);
}

function jsonError(status, message, extra = {}) {
  return NextResponse.json({ success: false, message, ...extra }, { status });
}

export async function POST(request) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(`quote:${ip}`);
  if (!rate.allowed) {
    return jsonError(429, 'Too many requests. Please try again in a few minutes.');
  }

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return jsonError(400, 'Invalid request body.');
  }

  if (body && typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ success: true, quoteId: 'SB-0000-000000' });
  }

  const startedAt = Number(body?.formStartedAt);
  if (Number.isFinite(startedAt)) {
    const elapsed = Date.now() - startedAt;
    if (elapsed < 2500) {
      return jsonError(400, 'Please review the form and try again.');
    }
  }

  const { valid, errors, cleaned } = validateQuotePayload(body || {});
  if (!valid) {
    return NextResponse.json(
      { success: false, message: 'Please check the highlighted fields.', errors },
      { status: 400 }
    );
  }

  const userAgent = (request.headers.get('user-agent') || '').slice(0, 300);

  try {
    await dbConnect();
  } catch (err) {
    console.error('[quotes] MongoDB connection error:', err?.message || err);
    return jsonError(503, 'We could not submit your request right now. Please try again shortly.');
  }

  let quoteDoc;
  try {
    const quoteId = await generateQuoteId();

    quoteDoc = await Quote.create({
      quoteId,
      ...cleaned,
      ipAddress: ip,
      userAgent,
      status: 'new',
      emailStatus: { customer: 'pending', sales: 'pending' }
    });
  } catch (err) {
    console.error('[quotes] Save failed:', err?.message || err);
    return jsonError(500, 'We could not submit your request. Please try again.');
  }

  const customerTemplate = customerQuoteConfirmation(quoteDoc.toObject());
  const salesTemplate = internalQuoteNotification(quoteDoc.toObject());
  const salesEmail = process.env.SALES_EMAIL;

  let customerEmailStatus = 'pending';
  let salesEmailStatus = 'pending';

  try {
    await sendMail({
      to: cleaned.email,
      subject: customerTemplate.subject,
      html: customerTemplate.html,
      text: customerTemplate.text
    });
    customerEmailStatus = 'sent';
  } catch (err) {
    customerEmailStatus = 'failed';
    console.error('[quotes] Customer email failed:', err?.message || err);
  }

  if (salesEmail) {
    try {
      await sendMail({
        to: salesEmail,
        subject: salesTemplate.subject,
        html: salesTemplate.html,
        text: salesTemplate.text,
        replyTo: cleaned.email
      });
      salesEmailStatus = 'sent';
    } catch (err) {
      salesEmailStatus = 'failed';
      console.error('[quotes] Sales email failed:', err?.message || err);
    }
  }

  try {
    quoteDoc.emailStatus = { customer: customerEmailStatus, sales: salesEmailStatus };
    await quoteDoc.save();
  } catch (err) {
    console.error('[quotes] Failed to persist email status:', err?.message || err);
  }

  return NextResponse.json({
    success: true,
    quoteId: quoteDoc.quoteId,
    message: 'Your request has been submitted successfully.'
  });
}

export async function GET() {
  return jsonError(405, 'Method not allowed.');
}
