import { site } from '@/data/site';

function formatDate(date) {
  if (!date) return '';
  try {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    return String(date);
  }
}

function formatPhone(phone) {
  const d = String(phone || '').replace(/\D/g, '');
  if (d.length === 10) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  if (d.length === 11 && d.startsWith('1')) return `(${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`;
  return phone || '';
}

function formatMoney(n) {
  if (n === null || n === undefined || !Number.isFinite(Number(n))) return '';
  return `$${Number(n).toLocaleString('en-US')}`;
}

export function customerQuoteConfirmation(quote) {
  const subject = `Your Snowbird Car Shipping Request Has Been Received — Quote #${quote.quoteId}`;
  const firstName = quote.firstName || (quote.fullName ? quote.fullName.split(' ')[0] : 'there');
  const showCalcBlock = quote.calculatorUsed && quote.estimatedLow && quote.estimatedHigh;
  const calcHtml = showCalcBlock
    ? `<div style="margin:16px 0;padding:16px;background:#EEF4ED;border-radius:6px;border-left:4px solid #C29B0C;">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#8DA9C4;margin-bottom:6px;">Estimated Range Shown</div>
        <div style="font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0B2545;">${formatMoney(quote.estimatedLow)} – ${formatMoney(quote.estimatedHigh)}</div>
        <div style="font-size:12px;color:#475569;margin-top:6px;">Final transportation pricing may vary based on current carrier availability and shipment details.</div>
      </div>`
    : '';
  const calcText = showCalcBlock
    ? `\nESTIMATED RANGE SHOWN: ${formatMoney(quote.estimatedLow)} – ${formatMoney(quote.estimatedHigh)}\nFinal transportation pricing may vary based on current carrier availability and shipment details.\n`
    : '';

  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:'Helvetica Neue',Arial,sans-serif;color:#0B2545;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(11,37,69,0.08);">
          <tr>
            <td style="background:#0B2545;padding:24px 32px;color:#ffffff;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-family:Georgia,serif;font-size:22px;font-weight:700;letter-spacing:0.5px;">Snowbird Car Shipping</div>
                    <div style="font-size:12px;color:#8DA9C4;margin-top:4px;">a service of CarShippingHub</div>
                  </td>
                  <td align="right">
                    <div style="font-size:13px;color:#E5B93B;">Quote #${quote.quoteId}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:32px;">
              <h1 style="font-family:Georgia,serif;font-size:24px;margin:0 0 12px 0;color:#0B2545;">Thank you, ${escapeHtml(firstName)}.</h1>
              <p style="font-size:16px;line-height:1.6;margin:0 0 16px 0;">
                Your Snowbird car shipping request has been received. Our team will review your information and contact you shortly to discuss your transportation options.
              </p>
              <p style="font-size:15px;line-height:1.6;margin:0 0 24px 0;color:#334155;">
                Please keep this email for your records. Your reference number is <strong>#${quote.quoteId}</strong>.
              </p>

              ${calcHtml}

              <table width="100%" cellpadding="0" cellspacing="0" style="border-top:2px solid #EEF4ED;border-bottom:2px solid #EEF4ED;margin:24px 0;">
                <tr><td style="padding:16px 0;">
                  <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#8DA9C4;margin-bottom:12px;">Request Details</div>
                  ${row('Quote ID', `#${quote.quoteId}`)}
                  ${row('Name', escapeHtml(quote.fullName || `${quote.firstName || ''} ${quote.lastName || ''}`.trim()))}
                  ${row('Email', escapeHtml(quote.email))}
                  ${row('Phone', escapeHtml(formatPhone(quote.phone)))}
                  ${row('Pickup', escapeHtml(quote.pickupAddress || `${quote.pickupCity}, ${quote.pickupState} ${quote.pickupZip}`))}
                  ${row('Delivery', escapeHtml(quote.deliveryAddress || `${quote.deliveryCity}, ${quote.deliveryState} ${quote.deliveryZip}`))}
                  ${row('Vehicle', `${quote.vehicleYear} ${escapeHtml(quote.vehicleMake)} ${escapeHtml(quote.vehicleModel)}`)}
                  ${row('Condition', escapeHtml(quote.vehicleCondition))}
                  ${row('Transport', escapeHtml(quote.transportType))}
                  ${row('Requested Pickup', formatDate(quote.pickupDate))}
                </td></tr>
              </table>

              <p style="font-size:14px;line-height:1.6;color:#475569;margin:0 0 12px 0;">
                A member of our team will reach out to review your shipping options, discuss carrier availability along your route, and help arrange pickup.
              </p>
              <p style="font-size:13px;line-height:1.6;color:#64748b;margin:0 0 24px 0;">
                Requested pickup dates are estimates and are confirmed once a carrier is dispatched for your shipment.
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background:#C29B0C;border-radius:6px;">
                    <a href="${site.url}" style="display:inline-block;padding:14px 28px;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;letter-spacing:0.5px;">Visit Snowbird Car Shipping</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#EEF4ED;padding:20px 32px;text-align:center;color:#475569;font-size:12px;line-height:1.6;">
              <div style="margin-bottom:8px;">
                <strong style="color:#0B2545;">${site.name}</strong> · a service of ${site.parent}
              </div>
              <div>${site.brokerDisclaimer}</div>
              <div style="margin-top:12px;">
                <a href="${site.url}" style="color:#0B2545;text-decoration:none;">${site.domain}</a>
                &nbsp;·&nbsp;
                <a href="${site.phoneHref}" style="color:#0B2545;text-decoration:none;">${site.phoneDisplay}</a>
              </div>
            </td>
          </tr>
        </table>
        <div style="max-width:600px;margin:16px auto 0 auto;padding:0 16px;font-size:11px;color:#94a3b8;text-align:center;">
          You are receiving this email because you submitted a vehicle shipping request at ${site.domain}.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `Snowbird Car Shipping — Quote #${quote.quoteId}`,
    '',
    `Hello ${firstName},`,
    '',
    'Thank you for requesting a Snowbird Car Shipping quote.',
    'We have received your request and our team will review your shipping details.',
    'A member of our team will contact you shortly to discuss your transportation options.',
    calcText,
    'REQUEST DETAILS',
    `Quote ID: #${quote.quoteId}`,
    `Name: ${quote.fullName || `${quote.firstName || ''} ${quote.lastName || ''}`.trim()}`,
    `Email: ${quote.email}`,
    `Phone: ${formatPhone(quote.phone)}`,
    `Pickup: ${quote.pickupAddress || `${quote.pickupCity}, ${quote.pickupState} ${quote.pickupZip}`}`,
    `Delivery: ${quote.deliveryAddress || `${quote.deliveryCity}, ${quote.deliveryState} ${quote.deliveryZip}`}`,
    `Vehicle: ${quote.vehicleYear} ${quote.vehicleMake} ${quote.vehicleModel}`,
    `Condition: ${quote.vehicleCondition}`,
    `Transport: ${quote.transportType}`,
    `Requested Pickup: ${formatDate(quote.pickupDate)}`,
    '',
    'Requested pickup dates are estimates and are confirmed once a carrier is dispatched.',
    '',
    `${site.name} — ${site.domain}`,
    site.brokerDisclaimer
  ].join('\n');

  return { subject, html, text };
}

function row(label, value) {
  return `<div style="display:block;margin-bottom:10px;">
    <span style="display:inline-block;min-width:130px;font-size:12px;text-transform:uppercase;letter-spacing:0.8px;color:#64748b;">${label}</span>
    <span style="font-size:15px;color:#0B2545;font-weight:600;">${value}</span>
  </div>`;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
