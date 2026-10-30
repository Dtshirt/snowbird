import { site } from '@/data/site';
import { destinationCities } from '@/data/cities';
import { resources } from '@/data/resources';
import {
  staticRouteSlugs,
  staticOriginStateSlugs,
  staticDestinationSlugs,
  staticCityKeys
} from '@/data/indexable';

// Only pages with page-specific content are listed. lastModified is set only where we
// have a real content date, because a build timestamp on every URL tells Google nothing.
export default function sitemap() {
  const base = site.url;
  const entries = [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/destinations`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/snowbird-car-shipping-cost-calculator`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/resources`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/about`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.4 }
  ];

  for (const slug of staticDestinationSlugs) {
    entries.push({ url: `${base}/destinations/${slug}`, changeFrequency: 'monthly', priority: 0.9 });
  }

  for (const c of destinationCities) {
    if (!staticCityKeys.has(`${c.destinationSlug}/${c.slug}`)) continue;
    entries.push({ url: `${base}/destinations/${c.destinationSlug}/${c.slug}`, changeFrequency: 'monthly', priority: 0.7 });
  }

  for (const slug of staticOriginStateSlugs) {
    entries.push({ url: `${base}/states/${slug}`, changeFrequency: 'monthly', priority: 0.8 });
  }

  for (const slug of staticRouteSlugs) {
    entries.push({ url: `${base}/routes/${slug}`, changeFrequency: 'monthly', priority: 0.9 });
  }

  for (const r of resources) {
    entries.push({
      url: `${base}/resources/${r.slug}`,
      ...(r.updated ? { lastModified: new Date(r.updated) } : {}),
      changeFrequency: 'monthly',
      priority: 0.6
    });
  }

  return entries;
}
