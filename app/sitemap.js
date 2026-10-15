import { site } from '@/data/site';
import { originStates } from '@/data/states';
import { destinationStates } from '@/data/destinations';
import { destinationCities } from '@/data/cities';
import { routes } from '@/data/routes';
import { resources } from '@/data/resources';

export default function sitemap() {
  const now = new Date();
  const base = site.url;
  const entries = [];

  entries.push({ url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 });
  entries.push({ url: `${base}/destinations`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 });
  entries.push({ url: `${base}/snowbird-car-shipping-cost-calculator`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 });
  entries.push({ url: `${base}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 });
  entries.push({
    url: `${base}/resources/snowbird-destination-comparison`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7
  });

  for (const d of destinationStates) {
    entries.push({
      url: `${base}/destinations/${d.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9
    });
  }

  for (const c of destinationCities) {
    entries.push({
      url: `${base}/destinations/${c.destinationSlug}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75
    });
  }

  for (const s of originStates) {
    entries.push({
      url: `${base}/states/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8
    });
  }

  for (const r of routes) {
    entries.push({
      url: `${base}/routes/${r.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85
    });
  }

  for (const r of resources) {
    entries.push({
      url: `${base}/resources/${r.slug}`,
      lastModified: new Date(r.updated || now),
      changeFrequency: 'monthly',
      priority: 0.6
    });
  }

  return entries;
}
