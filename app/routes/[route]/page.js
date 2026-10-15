import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import RouteOverview from '@/components/RouteOverview';
import TransitTime from '@/components/TransitTime';
import RouteMap from '@/components/RouteMap';
import PricingSection from '@/components/PricingSection';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { routes, getRouteBySlug } from '@/data/routes';

export function generateStaticParams() {
  const staticSlugs = new Set([
    'new-york-to-florida',
    'new-jersey-to-florida',
    'pennsylvania-to-florida',
    'massachusetts-to-florida',
    'connecticut-to-florida',
    'maryland-to-florida',
    'ohio-to-florida',
    'virginia-to-florida'
  ]);
  return routes
    .filter((r) => !staticSlugs.has(r.slug))
    .map((r) => ({ route: r.slug }));
}

export async function generateMetadata({ params }) {
  const { route: slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return { title: 'Route Not Found' };

  return {
    title: `${route.origin} to ${route.destination} Car Shipping | Snowbird Auto Transport`,
    description: `Ship your snowbird vehicle from ${route.origin} to ${route.destination}. Typical transit ${route.transitDays}, pricing from $${route.priceLow}. Free quote.`,
    alternates: { canonical: `/routes/${route.slug}` }
  };
}

export default async function RoutePage({ params }) {
  const { route: slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  const otherRoutes = routes
    .filter((r) => r.slug !== route.slug && (r.originSlug === route.originSlug || r.destinationSlug === route.destinationSlug))
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Routes', href: '/#routes' },
        { label: `${route.origin} to ${route.destination}` }
      ]} />

      <Hero
        eyebrow={`${route.origin} → ${route.destination}`}
        title={`${route.origin} to ${route.destination} snowbird car shipping`}
        description={`${route.summary} Typical transit ${route.transitDays}. Get a free quote in about two minutes.`}
        bullets={[
          `Distance: approximately ${route.distanceMiles.toLocaleString()} miles`,
          `Transit time: ${route.transitDays}`,
          `Starting price: $${route.priceLow} (typical range up to $${route.priceHigh})`,
          `Peak snowbird season: ${route.peakMonths.join(', ')}`
        ]}
        pageType="route"
        pageUrl={`/routes/${route.slug}`}
        routeSlug={route.slug}
        originState={route.origin}
        destinationState={route.destination}
      />

      <TrustBar />

      <RouteOverview route={route} />

      <section className="border-b border-slate-200 bg-brand-cream/60 py-16">
        <div className="container-page">
          <RouteMap origin={route.origin} destination={route.destination} corridors={route.highwayCorridors} />
        </div>
      </section>

      <TransitTime route={route} />

      <PricingSection routeRange={{ low: route.priceLow, high: route.priceHigh }} />

      <HowItWorks />

      <section className="bg-white py-16" id="quote-mid">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="eyebrow">Book This Route</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Free quote for {route.origin} to {route.destination}
              </h2>
              <p className="mt-3 text-slate-600">
                Tell us your pickup and delivery ZIP codes and preferred pickup date. We'll follow up with carrier options for your snowbird shipment.
              </p>
              <BrokerNote className="mt-6" />
            </div>
            <div className="lg:col-span-3">
              <QuoteForm
                pageType="route"
                pageUrl={`/routes/${route.slug}`}
                routeSlug={route.slug}
                originState={route.origin}
                destinationState={route.destination}
              />
            </div>
          </div>
        </div>
      </section>

      {otherRoutes.length > 0 && (
        <section className="bg-brand-cream py-16">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="eyebrow">Related Snowbird Routes</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Other popular corridors like {route.origin} to {route.destination}
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {otherRoutes.map((r) => (
                <Link key={r.slug} href={`/routes/${r.slug}`} className="card card-hover border border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                    {r.origin} → {r.destination}
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-brand-navy">
                    {r.origin} to {r.destination}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ />
      <QuoteCTA title={`Ship your car from ${route.origin} to ${route.destination}`} />
    </>
  );
}
