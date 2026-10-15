import { NextResponse } from 'next/server';
import { calculateSnowbirdEstimate } from '@/lib/snowbirdPricing';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function jsonError(status, message) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(`estimate:${ip}`);
  if (!rate.allowed) {
    return jsonError(429, 'Too many requests. Please wait a moment and try again.');
  }

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return jsonError(400, 'Invalid request body.');
  }

  const input = {
    pickupZip: body?.pickupZip,
    deliveryZip: body?.deliveryZip,
    vehicleType: body?.vehicleType,
    vehicleCondition: body?.vehicleCondition,
    transportType: body?.transportType,
    pickupDate: body?.pickupDate,
    tripType: body?.tripType
  };

  const result = calculateSnowbirdEstimate(input);
  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }
  return NextResponse.json(result, { status: 200 });
}

export async function GET() {
  return jsonError(405, 'Method not allowed.');
}
