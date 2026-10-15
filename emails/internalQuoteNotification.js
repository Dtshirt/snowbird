import { site } from '@/data/site';

function formatDate(date) {
  if (!date) return '';
  try {
    return new Date(date).toLocaleDateString('en-US', {
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
  return phone || '';
}

function money(n) {
  if (n === null || n === undefined || !Number.isFinite(Number(n))) return '';
  return `$${Number(n).toLocaleString('en-US')}`;
}

export function internalQuoteNotification(quote) {
  const displayName = quote.fullName || `${quote.firstName || ''} ${quote.lastName || ''}`.trim();
  const subject = `New Snowbird Quote — ${quote.quoteId} — ${displayName}${quote.calculatorUsed ? ' · Calculator' : ''}`;

  const pickupLine = quote.pickupAddress || `${quote.pickupCity}, ${quote.pickupState} ${quote.pickupZip}`;
  const deliveryLine = quote.deliveryAddress || `${quote.deliveryCity}, ${quote.deliveryState} ${quote.deliveryZip}`;

  const html = `<!doctype html>
<html>
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:'Helvetica Neue',Arial,sans-serif;color:#0B2545;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#0B2545;padding:16px 24px;color:#ffffff;">
              <div style="font-size:13px;color:#8DA9C4;">New Snowbird Lead</div>
              <div style="font-family:Georgia,serif;font-size:20px;font-weight:700;">Quote #${quote.quoteId}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                ${sectionHeader('Customer')}
                ${detailRow('Name', escapeHtml(displayName))}
                ${detailRow('Email', `<a href="mailto:${escapeHtml(quote.email)}" style="color:#0B2545;">${escapeHtml(quote.email)}</a>`)}
                ${detailRow('Phone', `<a href="tel:${escapeHtml(quote.phone)}" style="color:#0B2545;">${escapeHtml(formatPhone(quote.phone))}</a>`)}

                ${sectionHeader('Route')}
                ${detailRow('Pickup', escapeHtml(pickupLine))}
                ${detailRow('Delivery', escapeHtml(deliveryLine))}
                ${detailRow('Pickup Date', formatDate(quote.pickupDate))}

                ${sectionHeader('Vehicle')}
                ${detailRow('Vehicle', `${quote.vehicleYear} ${escapeHtml(quote.vehicleMake)} ${escapeHtml(quote.vehicleModel)}`)}
                ${detailRow('Condition', escapeHtml(quote.vehicleCondition))}
                ${detailRow('Transport', escapeHtml(quote.transportType))}

                ${
                  quote.calculatorUsed
                    ? `${sectionHeader('Calculator Estimate')}
                      ${detailRow('Range Shown', `${money(quote.estimatedLow)} – ${money(quote.estimatedHigh)}`)}
                      ${detailRow('Distance', quote.estimatedDistance ? `${quote.estimatedDistance} mi` : '—')}
                      ${detailRow('Transit', quote.estimatedTransitDaysMin ? `${quote.estimatedTransitDaysMin}–${quote.estimatedTransitDaysMax} days` : '—')}
                      ${detailRow('Season', escapeHtml(quote.calculatorSeasonLabel || '—'))}
                      ${detailRow('Version', escapeHtml(quote.calculatorVersion || '—'))}`
                    : ''
                }

                ${sectionHeader('Source')}
                ${detailRow('Page Type', escapeHtml(quote.pageType || ''))}
                ${detailRow('Page URL', escapeHtml(quote.pageUrl || ''))}
                ${detailRow('Route Slug', escapeHtml(quote.routeSlug || '—'))}
                ${detailRow('Origin State', escapeHtml(quote.originState || '—'))}
                ${detailRow('Destination', escapeHtml(quote.destinationState || '—'))}
                ${detailRow('Source', escapeHtml(quote.source || 'website'))}
                ${detailRow('IP', escapeHtml(quote.ipAddress || '—'))}
                ${detailRow('Submitted', new Date(quote.createdAt || Date.now()).toLocaleString('en-US'))}
              </table>

              <div style="margin-top:24px;padding:16px;background:#EEF4ED;border-radius:6px;font-size:13px;color:#334155;">
                Reply to this email to reach the customer at <strong>${escapeHtml(quote.email)}</strong>.
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:12px 24px;border-top:1px solid #e2e8f0;font-size:11px;color:#64748b;">
              ${site.name} · internal notification · ${site.domain}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `NEW SNOWBIRD QUOTE — ${quote.quoteId}`,
    '',
    `Customer: ${displayName}`,
    `Email: ${quote.email}`,
    `Phone: ${formatPhone(quote.phone)}`,
    '',
    `Pickup: ${pickupLine}`,
    `Delivery: ${deliveryLine}`,
    `Pickup Date: ${formatDate(quote.pickupDate)}`,
    '',
    `Vehicle: ${quote.vehicleYear} ${quote.vehicleMake} ${quote.vehicleModel}`,
    `Condition: ${quote.vehicleCondition}`,
    `Transport: ${quote.transportType}`,
    '',
    ...(quote.calculatorUsed
      ? [
          'CALCULATOR ESTIMATE',
          `Range: ${money(quote.estimatedLow)} – ${money(quote.estimatedHigh)}`,
          `Distance: ${quote.estimatedDistance || '-'} mi`,
          `Transit: ${quote.estimatedTransitDaysMin || '-'}–${quote.estimatedTransitDaysMax || '-'} days`,
          `Season: ${quote.calculatorSeasonLabel || '-'}`,
          ''
        ]
      : []),
    `Page Type: ${quote.pageType}`,
    `Page URL: ${quote.pageUrl}`,
    `Route Slug: ${quote.routeSlug || '-'}`,
    `Origin: ${quote.originState || '-'}`,
    `Destination: ${quote.destinationState || '-'}`,
    `Source: ${quote.source}`,
    `IP: ${quote.ipAddress || '-'}`,
    `Submitted: ${new Date(quote.createdAt || Date.now()).toISOString()}`
  ].join('\n');

  return { subject, html, text };
}

function sectionHeader(label) {
  return `<tr><td colspan="2" style="padding:12px 0 6px 0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#8DA9C4;border-bottom:1px solid #e2e8f0;">${label}</td></tr>`;
}

function detailRow(label, value) {
  return `<tr>
    <td style="padding:8px 0;width:140px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;color:#0B2545;font-weight:600;">${value}</td>
  </tr>`;
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
