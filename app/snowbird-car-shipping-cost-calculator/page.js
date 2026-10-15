import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import SectionHeading from '@/components/SectionHeading';
import CalculatorWithQuote from '@/components/snowbird/CalculatorWithQuote';
import CalculatorFAQ from '@/components/snowbird/CalculatorFAQ';
import QuoteCTA from '@/components/QuoteCTA';
import { destinationStates } from '@/data/destinations';
import { site } from '@/data/site';

const CANONICAL_PATH = '/snowbird-car-shipping-cost-calculator';

export const metadata = {
  title: 'Snowbird Car Shipping Cost Calculator | Estimate Your Shipping Cost',
  description:
    'Estimate the cost of shipping your vehicle to a snowbird destination in Florida, Arizona, Texas, or California. Get a planning range based on route, vehicle, transport type, and season.',
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: 'Snowbird Car Shipping Cost Calculator',
    description:
      'Estimate a snowbird auto transport range in about a minute — route, vehicle, transport type, and season, all in one tool.',
    url: CANONICAL_PATH,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snowbird Car Shipping Cost Calculator',
    description:
      'Free planning estimate for snowbird auto transport across Florida, Arizona, Texas, and California.'
  }
};

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Snowbird Car Shipping Cost Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  url: `${site.url}${CANONICAL_PATH}`,
  description:
    'Estimate the cost of shipping your vehicle to a snowbird destination in Florida, Arizona, Texas, or California.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
};

export default function CalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Cost Calculator' }
      ]} />

      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://source.unsplash.com/featured/1920x600/?car-transport,highway,sunset')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(11,37,69,0.92) 0%, rgba(19,49,92,0.85) 60%, rgba(30,67,115,0.75) 100%)' }}
        />
        <div className="absolute inset-0 bg-sun-glow" aria-hidden="true" />
        <div className="container-page relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-goldLight/30 bg-brand-goldLight/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-goldLight">
              Cost Calculator
            </div>
            <h1
              className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl"
              style={{ color: '#ffffff', textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
            >
              Snowbird Car Shipping Cost Calculator
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Enter your route and vehicle details to estimate an auto transport range for shipping to Florida, Arizona, Texas, or California. Estimates take account of distance, vehicle type, transport method, and snowbird seasonality.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Estimates are for planning purposes only. Your final transportation price may vary based on the exact pickup and delivery locations, vehicle characteristics, dates, carrier availability, seasonal demand, and current market conditions.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-brand-cream/50 py-14">
        <div className="container-page">
          <CalculatorWithQuote />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-narrow prose-brand">
          <SectionHeading
            eyebrow="Behind the estimate"
            title="How our snowbird estimate works"
            description="The calculator is a planning tool that uses a transparent pricing model — not a live carrier bid."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Info title="Route distance" text="We estimate distance between your pickup and delivery ZIP codes using US ZIP centroids and road-distance adjustment. Very rural ZIP codes may resolve at a lower precision than metro ZIPs." />
            <Info title="Vehicle & condition" text="Larger vehicles take up more space on a carrier and non-running vehicles need special equipment. Both factors nudge the estimate." />
            <Info title="Transport type" text="Enclosed transport uses a covered trailer and prices meaningfully higher than open transport. Both estimates are shown so you can compare." />
            <Info title="Season" text="Fall (Oct–Dec) and spring (Mar–May) snowbird peaks apply a modest seasonal factor based on your pickup date and destination cluster." />
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Cost Factors"
            title="What determines car shipping cost?"
            description="Understanding these factors helps explain why an estimate is a range, not a single number."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Route distance and lane density',
              'Vehicle size, weight, and clearance',
              'Vehicle condition (runs / does not run)',
              'Open vs enclosed transport',
              'Requested pickup date and window',
              'Seasonal snowbird demand',
              'Carrier supply on your specific route',
              'Rural vs metro pickup and delivery',
              'Fuel and current market conditions',
              'Requested delivery timing flexibility'
            ].map((f) => (
              <li key={f} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Seasonality"
            title="Snowbird seasonal pricing"
            description="Auto transport pricing is peak-driven. Snowbird lanes see two clear demand windows each year."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <PeakCard title="Fall southbound" period="October – December" text="Northbound-home to Sun-Belt lanes see the highest demand in November. Booking 2–3 weeks ahead of your pickup date typically improves pricing and predictability." />
            <PeakCard title="Spring northbound" period="March – May" text="Return-home demand peaks in April, especially on Florida and Texas outbound lanes. Booking earlier gives you the widest carrier options." />
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Transport"
            title="Open vs enclosed transport"
            description="Both are legitimate options; the right choice depends on the vehicle and your priorities."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Info title="Open Transport" text="The most common option, used to move nearly all new-car dealer inventory. Lower cost and widely available on every snowbird corridor." />
            <Info title="Enclosed Transport" text="Covered trailer providing weather and road-debris protection. Best for luxury, classic, exotic, or collector vehicles. Prices ~30–50% higher than open transport." />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Round Trip"
            title="One-way vs round trip"
            description="Snowbirds usually plan both legs of the season. Round-trip is a scheduling advantage, not an automatic discount."
          />
          <div className="mt-6 rounded-xl border border-slate-200 bg-brand-cream/40 p-5 text-sm text-slate-700 leading-relaxed">
            Booking both legs early gives you the widest carrier availability on the fall southbound and spring northbound peaks. It does not automatically apply a discount — any round-trip pricing benefit is confirmed during your exact quote review.
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Popular Snowbird Routes"
            title="Typical snowbird corridors we ship"
            description="Explore destination-specific guides for the four leading US snowbird states."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {destinationStates.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{d.abbr}</div>
                <div className="mt-1 font-display text-xl font-bold text-brand-navy">{d.name}</div>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">{d.tagline}</p>
                <div className="mt-3 text-xs text-slate-500">{d.cityLead}</div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/resources/snowbird-car-shipping-guide" className="btn-secondary">Snowbird Shipping Guide</Link>
            <Link href="/resources/snowbird-vehicle-preparation-checklist" className="btn-secondary">Vehicle Preparation Checklist</Link>
            <Link href="/resources/snowbird-destination-comparison" className="btn-secondary">Compare Destinations</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Booking Timing"
            title="How far in advance should you book?"
            description="Timing your snowbird auto transport carefully can reduce stress and improve pricing."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <TipCard title="Peak windows" text="Book 3–4 weeks ahead of your requested pickup date during October–December and April–May." />
            <TipCard title="Off-peak" text="Two weeks ahead is usually enough. Same-week bookings are possible but limit carrier options." />
            <TipCard title="Flexibility" text="A 2–3 day pickup window gets you the widest supply and usually the best pricing." />
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Cost Control"
            title="How to reduce unexpected shipping costs"
            description="A few small choices during booking can meaningfully affect your final price."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Ship in the shoulder weeks (late September, early October, late May)',
              'Allow a 2–3 day pickup window rather than a single date',
              'Provide accurate ZIP codes for a stable initial estimate',
              'Consider open transport for standard vehicles',
              'Combine trips with other seasonal residents when possible',
              'Address non-running issues before dispatch if feasible'
            ].map((tip) => (
              <li key={tip} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CalculatorFAQ />

      <QuoteCTA
        title="Ready for an exact snowbird quote?"
        description="Our estimate is a planning tool. Submit your details and a snowbird specialist will follow up with carrier options for your specific route."
        anchor="#quote"
      />
    </>
  );
}

function Info({ title, text }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="font-display text-lg font-semibold text-brand-navy">{title}</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function PeakCard({ title, period, text }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-brand-cream/40 p-5">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{title}</div>
        <div className="text-xs font-medium text-slate-500">{period}</div>
      </div>
      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}

function TipCard({ title, text }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{title}</div>
      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}
