import { site } from '@/data/site';
import { routes } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';
import { getStateBySlug } from '@/data/states';
import { resources } from '@/data/resources';
import { staticRouteSlugs, staticDestinationSlugs, staticOriginStateSlugs } from '@/data/indexable';

export const dynamic = 'force-static';

const usd = (n) => `$${n.toLocaleString('en-US')}`;

export function GET() {
  const u = (path) => `${site.url}${path}`;

  const routeLines = routes
    .filter((r) => staticRouteSlugs.has(r.slug))
    .map((r) => `- [${r.origin} to ${r.destination} car shipping](${u(`/routes/${r.slug}`)}): typically ${usd(r.priceLow)}–${usd(r.priceHigh)} on an open carrier, ${r.transitDays} in transit`);

  const destinationLines = [...staticDestinationSlugs]
    .map(getDestinationBySlug)
    .filter(Boolean)
    .map((d) => `- [Car shipping to ${d.name}](${u(`/destinations/${d.slug}`)})`);

  const stateLines = [...staticOriginStateSlugs]
    .map(getStateBySlug)
    .filter(Boolean)
    .map((s) => `- [${s.name} snowbird car shipping](${u(`/states/${s.slug}`)})`);

  const guideLines = resources.map((r) => `- [${r.title}](${u(`/resources/${r.slug}`)}): ${r.description}`);

  const body = `# ${site.name}

> ${site.description}

${site.brokerDisclaimer}

Key facts:
- Service: door-to-door open and enclosed auto transport for snowbirds, south in the fall and back north in the spring.
- Destinations: Florida, Arizona, Texas and California.
- Payment: a 10% deposit at booking, 100% refundable; the balance is paid at delivery.
- Prices on this site are typical ranges for a standard sedan or SUV, not quotes.
- Phone: ${site.phoneDisplay}. Email: ${site.email}. Hours: ${site.hours}.

## Routes
${routeLines.join('\n')}

## Destinations
${destinationLines.join('\n')}

## Origin states
${stateLines.join('\n')}

## Guides
${guideLines.join('\n')}
- [Snowbird car shipping cost calculator](${u('/snowbird-car-shipping-cost-calculator')})

## About
- [About us and how our broker service works](${u('/about')})
- [Contact](${u('/contact')})
- [Privacy policy](${u('/privacy-policy')})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
