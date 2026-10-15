import nodemailer from 'nodemailer';

let cachedTransporter = null;

function buildTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is incomplete');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    pool: true,
    maxConnections: 3,
    maxMessages: 100
  });
}

export function getTransporter() {
  if (!cachedTransporter) {
    cachedTransporter = buildTransporter();
  }
  return cachedTransporter;
}

export async function sendMail({ to, subject, html, text, replyTo }) {
  const transporter = getTransporter();
  const from = process.env.MAIL_FROM || 'Snowbird Car Shipping <quotes@snowbird.carshippinghub.com>';

  return transporter.sendMail({
    from,
    to,
    subject,
    html,
    text,
    replyTo
  });
}
