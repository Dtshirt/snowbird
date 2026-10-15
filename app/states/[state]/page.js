import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SnowbirdSeasonSection from '@/components/SnowbirdSeasonSection';
import PopularLocations from '@/components/PopularLocations';
import QuoteCTA from '@/components/QuoteCTA';
import PricingSection from '@/components/PricingSection';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getStateBySlug, originStates } from '@/data/states';
import { getRoutesByOrigin } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';

export function generateStaticParams() {
  const staticSlugs = new Set(['new-york', 'new-jersey', 'pennsylvania', 'massachusetts', 'connecticut', 'maryland', 'ohio', 'virginia']);
  return originStates
    .filter((s) => !staticSlugs.has(s.slug))
    .map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return { title: 'State Not Found' };
  const destList = state.popularDestinationStates
    .map((d) => getDestinationBySlug(d)?.name)
    .filter(Boolean)
    .join(', ');
  return {
    title: `${state.name} Snowbird Car Shipping — Ship to ${destList}`,
    description: `Snowbird auto transport from ${state.name} to popular winter destinations including ${destList}. Seasonal pricing, transit times and coordinated pickup.`,
    alternates: { canonical: `/states/${state.slug}` }
  };
}

export default async function StatePage({ params }) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  const allRoutes = getRoutesByOrigin(state.slug);
  const routesByDest = {};
  for (const r of allRoutes) {
    if (!routesByDest[r.destinationSlug]) routesByDest[r.destinationSlug] = [];
    routesByDest[r.destinationSlug].push(r);
  }
  const destinationsShown = state.popularDestinationStates
    .map((d) => getDestinationBySlug(d))
    .filter(Boolean);

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Origin States', href: '/#origins' },
        { label: state.name }
      ]} />

      <Hero
        eyebrow={`${state.name} Snowbirds`}
        title={`Snowbird car shipping from ${state.name}`}
        description={`${state.demographics} Get pricing and pickup options for your seasonal shipment.`}
        bullets={[
          `Winter climate: ${state.winterClimate}`,
          `Peak southbound season: ${state.peakSeason}`,
          `Popular destinations: ${destinationsShown.map((d) => d.name).join(', ')}`,
          `Typical door-to-door transit: ${state.typicalTransit}`
        ]}
        pageType="state"
        pageUrl={`/states/${state.slug}`}
        originState={state.name}
      />

      <TrustBar />

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Overview</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
              Auto transport for {state.name} snowbirds
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{state.demographics}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Winters in {state.name} bring {state.winterClimate.toLowerCase()} Rather than driving south themselves, many {state.name} snowbirds ship their vehicle and fly to their winter destination — arriving to a car already waiting.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Peak Season" value={state.peakSeason} />
            <Stat label="Return Season" value={state.returnSeason} />
            <Stat label="Typical Transit" value={state.typicalTransit} />
            <Stat label="From (Estimate)" value={`$${state.priceLow}`} />
          </div>
        </div>
      </section>

      {destinationsShown.length > 0 && (
        <section className="bg-brand-cream py-16">
          <div className="container-page">
            <div className="max-w-3xl">
              <div className="eyebrow">Popular Destinations</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Where {state.name} snowbirds go for the winter
              </h2>
              <p className="mt-3 text-slate-600">
                We coordinate {state.name} shipments to each of the leading US snowbird destinations. Choose one to see routes, cities, and pricing.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {destinationsShown.map((d) => {
                const routes = routesByDest[d.slug] || [];
                return (
                  <div key={d.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                          {state.name} → {d.name}
                        </div>
                        <h3 className="mt-1 font-display text-2xl font-bold text-brand-navy">
                          {d.name}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm text-slate-600 leading-relaxed">
                          {d.tagline} Popular cities: {d.cityLead}.
                        </p>
                      </div>
                      <Link href={`/destinations/${d.slug}`} className="btn-secondary self-start">
                        Explore {d.name} →
                      </Link>
                    </div>
                    {routes.length > 0 && (
                      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {routes.map((r) => (
                          <Link
                            key={r.slug}
                            href={`/routes/${r.slug}`}
                            className="rounded-lg border border-slate-200 bg-brand-cream/50 p-3 text-sm hover:border-brand-goldLight"
                          >
                            <div className="font-semibold text-brand-navy">
                              {state.name} to {d.name}
                            </div>
                            <div className="mt-1 text-xs text-slate-500">
                              {r.transitDays} · from ${r.priceLow}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <PopularLocations
        title={`Snowbird pickups across ${state.name}`}
        description={`We coordinate pickups in metro areas and communities across ${state.name}.`}
        items={state.majorCities}
      />

      <SnowbirdSeasonSection />

      <HowItWorks />

      <PricingSection routeRange={{ low: state.priceLow, high: state.priceHigh }} />

      <section className="bg-white py-16">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="eyebrow">Ready to Book</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Get your {state.name} snowbird quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share your details and a snowbird specialist will follow up with carrier options for your route.
              </p>
              <BrokerNote className="mt-6" />
            </div>
            <div className="lg:col-span-3">
              <QuoteForm
                pageType="state"
                pageUrl={`/states/${state.slug}`}
                originState={state.name}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <QuoteCTA title={`Snowbird shipping from ${state.name}`} />
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{label}</div>
      <div className="mt-1 font-display text-lg font-bold text-brand-navy">{value}</div>
    </div>
  );
}
