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
import { destinationCities, getCity, getAllCityRoutes } from '@/data/cities';
import { getDestinationBySlug } from '@/data/destinations';
import { getRoutesByDestination } from '@/data/routes';
import { DestinationHeroImage } from '@/components/DestinationScenes';

export function generateStaticParams() {
  return getAllCityRoutes();
}

export async function generateMetadata({ params }) {
  const { state, city } = await params;
  const c = getCity(state, city);
  if (!c) return { title: 'City Not Found' };
  return {
    title: `Snowbird Car Shipping to ${c.city}, ${c.stateAbbr}`,
    description: `${c.tagline} Compare seasonal pricing, transit times and origin routes for shipping a vehicle to ${c.city}, ${c.state}.`,
    alternates: { canonical: `/destinations/${state}/${city}` }
  };
}

export default async function CityPage({ params }) {
  const { state, city } = await params;
  const c = getCity(state, city);
  if (!c) notFound();

  const dest = getDestinationBySlug(state);
  const relatedRoutes = getRoutesByDestination(state).slice(0, 6);
  const siblingCities = destinationCities
    .filter((x) => x.destinationSlug === state && x.slug !== city)
    .slice(0, 4);

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: c.state, href: `/destinations/${state}` },
        { label: c.city }
      ]} />

      <DestinationHeroImage destination={dest} height="h-36 sm:h-44 lg:h-52" />

      <Hero
        eyebrow={`Winter Destination · ${c.state}`}
        title={`Snowbird car shipping to ${c.city}, ${c.stateAbbr}`}
        description={c.tagline}
        bullets={[
          `Winter climate: ${c.climate}`,
          `Snowbird season: ${c.seasonWindow}`,
          `Popular origins: ${c.popularOrigins.slice(0, 3).join(', ')}`,
          `Typical pricing: $${c.typicalPrices.low}–$${c.typicalPrices.high}`
        ]}
        pageType="destination"
        pageUrl={`/destinations/${state}/${city}`}
        destinationState={c.state}
      />

      <TrustBar />

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Why {c.city}</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
              Why snowbirds choose {c.city}
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">{c.snowbirdAppeal}</p>
            <p className="mt-3 text-slate-600 leading-relaxed">{c.community}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Season Window" value={c.seasonWindow} />
            <Stat label="Climate" value={c.climate.split(',')[0]} />
            <Stat label="Top Origins" value={c.popularOrigins.slice(0, 2).join(', ')} />
            <Stat label="Typical Cost" value={`$${c.typicalPrices.low}–$${c.typicalPrices.high}`} />
          </div>
          {c.nearbyMarkets?.length > 0 && (
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Nearby Markets</div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {c.nearbyMarkets.map((m) => (
                  <li key={m} className="rounded-full border border-slate-200 bg-brand-cream/50 px-3 py-1 text-xs font-semibold text-brand-navy">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {c.popularOrigins.length > 0 && (
        <section className="bg-brand-cream py-16">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="eyebrow">Popular Origin States</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Where {c.city} snowbirds ship from
              </h2>
              <p className="mt-3 text-slate-600">
                The most common origin states for snowbird vehicles arriving in {c.city}.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.popularOrigins.map((s) => (
                <span key={s} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-brand-navy">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedRoutes.length > 0 && (
        <section className="bg-white py-16">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="eyebrow">Related Snowbird Routes</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Routes into {c.state}
              </h2>
              <p className="mt-3 text-slate-600">
                Featured corridors for snowbirds shipping to {c.city} and neighboring markets.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedRoutes.map((r) => (
                <Link key={r.slug} href={`/routes/${r.slug}`} className="card card-hover border border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                    {r.origin} → {r.destination}
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-brand-navy">
                    {r.origin} to {r.destination}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PricingSection routeRange={c.typicalPrices} />

      <HowItWorks />

      <section className="bg-brand-cream py-16">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="eyebrow">Ready to Ship</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Get your {c.city} quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share your pickup and delivery details and we'll follow up with carrier options for your trip to {c.city}.
              </p>
              <BrokerNote className="mt-6" />
            </div>
            <div className="lg:col-span-3">
              <QuoteForm
                pageType="destination"
                pageUrl={`/destinations/${state}/${city}`}
                destinationState={c.state}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ items={dest?.faqs} />

      {siblingCities.length > 0 && (
        <section className="bg-white py-14">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="eyebrow">More {c.state} Cities</div>
              <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy">
                Other snowbird destinations in {c.state}
              </h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {siblingCities.map((sc) => (
                <Link key={sc.slug} href={`/destinations/${state}/${sc.slug}`} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-goldLight">
                  {sc.city}, {sc.stateAbbr} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <QuoteCTA title={`Ship your car to ${c.city}, ${c.stateAbbr}`} />
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{label}</div>
      <div className="mt-1 text-sm font-semibold text-brand-navy leading-snug">{value}</div>
    </div>
  );
}
