export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Safe to call anywhere on the client; a no-op until GA4 is configured.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
