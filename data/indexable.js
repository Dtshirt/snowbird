// Pages with hand-built, page-specific content (static overrides of the dynamic routes).
// Dynamic-template pages outside these sets render as noindex,follow and stay out of the
// sitemap until they get their own static page. Add a slug here when its page ships.

export const staticRouteSlugs = new Set([
  'new-york-to-florida',
  'new-jersey-to-florida',
  'pennsylvania-to-florida',
  'massachusetts-to-florida',
  'connecticut-to-florida',
  'maryland-to-florida',
  'ohio-to-florida',
  'virginia-to-florida'
]);

export const staticOriginStateSlugs = new Set([
  'new-york',
  'new-jersey',
  'pennsylvania',
  'massachusetts',
  'connecticut',
  'maryland',
  'ohio',
  'virginia'
]);

export const staticDestinationSlugs = new Set(['florida', 'arizona', 'texas', 'california']);

// "state/city" keys, e.g. 'florida/naples'.
export const staticCityKeys = new Set([]);

export const templatePageRobots = { index: false, follow: true };
