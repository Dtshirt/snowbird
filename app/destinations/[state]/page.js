import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import PricingSection from '@/components/PricingSection';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import DestinationSeasonStrip from '@/components/DestinationSeasonStrip';
import WeatherConsiderations from '@/components/WeatherConsiderations';
import RoundTripSection from '@/components/RoundTripSection';
import { DestinationHeroImage } from '@/components/DestinationScenes';
import {
  destinationStates,
  getDestinationBySlug
} from '@/data/destinations';
import { getCitiesByDestination } from '@/data/cities';
import { getRoutesByDestination } from '@/data/routes';

export function generateStaticParams() {
  // /destinations/florida and /destinations/arizona are served by their own static
  // pages for the full SEO-optimized hub, so they are excluded from the dynamic
  // route params. Only Texas and California still use this shared template.
  const staticSlugs = new Set(['florida', 'arizona', 'texas', 'california']);
  return destinationStates
    .filter((d) => !staticSlugs.has(d.slug))
    .map((d) => ({ state: d.slug }));
}

export async function generateMetadata({ params }) {
  const { state: slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return { title: 'Destination Not Found' };
  return {
    title: `Snowbird Car Shipping to ${dest.name} — ${dest.heroEyebrow}`,
    description: `${dest.positioning} Get carrier options, seasonal pricing and transit-time estimates for shipping a vehicle to ${dest.name}.`,
    alternates: { canonical: `/destinations/${dest.slug}` },
    openGraph: {
      title: `Snowbird Car Shipping to ${dest.name}`,
      description: dest.tagline,
      type: 'website'
    }
  };
}

export default async function DestinationStatePage({ params }) {
  const { state: slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const cities = getCitiesByDestination(dest.slug);
  const inboundRoutes = getRoutesByDestination(dest.slug);
  const otherDestinations = destinationStates.filter((d) => d.slug !== dest.slug);

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: dest.name }
      ]} />

      <DestinationHeroImage destination={dest} height="h-40 sm:h-48 lg:h-56" />

      <Hero
        eyebrow={dest.heroEyebrow}
        title={`Snowbird car shipping to ${dest.name}`}
        description={dest.positioning}
        bullets={[
          `Regions: ${dest.regions.slice(0, 3).join(', ')}`,
          `Climate: ${dest.climate}`,
          `Popular with: ${dest.popularOriginStates.slice(0, 4).join(', ')}`,
          `Season: ${dest.seasonStart} through ${dest.returnEnd}`
        ]}
        pageType="destination"
        pageUrl={`/destinations/${dest.slug}`}
        destinationState={dest.name}
      />

      <TrustBar />

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Destination Overview</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
              Why snowbirds ship cars to {dest.name}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{dest.description}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Regions" value={dest.regions.length} caption={dest.regions.slice(0, 2).join(' · ')} />
            <Stat label="Cities Covered" value={cities.length} caption={dest.cityLead} />
            <Stat label="Peak Season" value={dest.seasonPeak} />
            <Stat label="Price Range" value={`$${dest.typicalPriceRange.low}–$${dest.typicalPriceRange.high}`} />
          </div>
        </div>
      </section>

      {cities.length > 0 && (
        <section className="bg-brand-cream py-16">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="eyebrow">Popular Destination Cities</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                {dest.name} snowbird cities we ship to
              </h2>
              <p className="mt-3 text-slate-600">
                These are the {dest.name} cities that see the most snowbird auto transport volume. Each has its own guide.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/destinations/${dest.slug}/${c.slug}`}
                  className="card card-hover border border-slate-200"
                >
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{c.stateAbbr}</div>
                  <div className="mt-1 font-display text-xl font-bold text-brand-navy">{c.city}</div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">{c.tagline}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>${c.typicalPrices.low}–${c.typicalPrices.high}</span>
                    <span>{c.seasonWindow}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {dest.popularOriginStates.length > 0 && (
        <section className="bg-white py-16">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="eyebrow">Popular Origin States</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Where {dest.name} snowbirds are shipping from
              </h2>
              <p className="mt-3 text-slate-600">
                These are the states we most commonly arrange {dest.name}-bound shipments from.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {dest.popularOriginStates.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-brand-cream/50 px-3 py-1 text-xs font-semibold text-brand-navy"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {inboundRoutes.length > 0 && (
        <section className="bg-brand-cream py-16">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="eyebrow">Popular Snowbird Routes</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Routes into {dest.name}
              </h2>
              <p className="mt-3 text-slate-600">Featured corridors for snowbirds shipping to {dest.name}.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {inboundRoutes.map((r) => (
                <Link key={r.slug} href={`/routes/${r.slug}`} className="card card-hover border border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                    {r.origin} → {r.destination}
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-brand-navy">
                    {r.origin} to {r.destination}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{r.summary}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>{r.distanceMiles.toLocaleString()} mi</span>
                    <span>From ${r.priceLow}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PricingSection routeRange={dest.typicalPriceRange} />

      <DestinationSeasonStrip destination={dest} />

      <WeatherConsiderations weather={dest.weatherConsiderations} route={dest.routeConsiderations} />

      <RoundTripSection destinationName={dest.name} />

      <HowItWorks />

      <section className="bg-white py-16">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="eyebrow">Ready to Ship</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Get your {dest.name} snowbird quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share your details and a snowbird specialist will follow up with carrier options for {dest.name}.
              </p>
              <BrokerNote className="mt-6" />
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="destination" pageUrl={`/destinations/${dest.slug}`} destinationState={dest.name} />
            </div>
          </div>
        </div>
      </section>

      <FAQ items={dest.faqs} />

      <section className="bg-brand-cream py-14">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Compare Destinations</div>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy">
              Considering other snowbird destinations?
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Every destination has its own timing, routes, and shipping profile. Explore the other three.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {otherDestinations.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-goldLight">
                {d.name} →
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/resources/snowbird-destination-comparison" className="text-sm font-semibold text-brand-navy underline">
              See the full comparison guide
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA title={`Ship your car to ${dest.name}`} />
    </>
  );
}

function Stat({ label, value, caption }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-brand-cream/40 p-4">
      <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{label}</div>
      <div className="mt-1 font-display text-lg font-bold text-brand-navy leading-tight">{value}</div>
      {caption && <div className="mt-1 text-xs text-slate-500">{caption}</div>}
    </div>
  );
}
