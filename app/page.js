import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import PopularRoutes from '@/components/PopularRoutes';
import DestinationGrid from '@/components/DestinationGrid';
import PopularOrigins from '@/components/PopularOrigins';
import SnowbirdSeasonSection from '@/components/SnowbirdSeasonSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import QuoteCTA from '@/components/QuoteCTA';
import Testimonials from '@/components/Testimonials';
import BrokerNote from '@/components/BrokerNote';
import RoundTripSection from '@/components/RoundTripSection';
import HomeSEOContent from '@/components/HomeSEOContent';
import Link from 'next/link';
import { site } from '@/data/site';

// Merged homepage FAQ: PAA questions targeting "snowbird car shipping" + a
// handful of logistics questions that have no PAA equivalent (insurance, open
// vs enclosed, presence at pickup, date guarantees). Duplicates removed.
// 6th-grade reading level, written for featured-snippet eligibility.
const homeFaqs = [
  // ── Pricing & cost ─────────────────────────────────────────────────────
  {
    q: 'How much does snowbird car shipping cost?',
    a: 'Most snowbird car shipping costs between $800 and $1,500 one way. The exact price depends on the distance, your vehicle size, the time of year, and whether you pick open or enclosed transport. Peak snowbird season (October to December, April to May) usually adds $150 to $300. For a quick estimate, use our snowbird car shipping cost calculator. For an exact number, ask us for a free quote.'
  },
  {
    q: 'What is the cheapest way to ship a car as a snowbird?',
    a: 'Open transport is the cheapest and most common way to ship a car. To save more, book early and pick a wider pickup window — 2 or 3 days instead of a single day. Shipping just before or just after the peak weeks also saves money. Our free quote shows you both open and enclosed options side by side.'
  },

  // ── Timing & booking ───────────────────────────────────────────────────
  {
    q: 'How long does snowbird car shipping take?',
    a: 'Most snowbird car shipping takes 3 to 8 days once your car is picked up. A short East Coast trip (New York to Florida) can take 2 to 4 days. A long trip (Boston to Phoenix) can take 6 to 9 days. We give you a transit window when you book so you can plan around it.'
  },
  {
    q: 'When should snowbirds ship their car south for the winter?',
    a: 'Most snowbirds ship their car between October and December. The busiest weeks are late October through mid-November. We suggest you book 2 to 3 weeks before your pickup date. That gives you more date choices and often a better price. If you can ship in late September or early October, you may save even more.'
  },
  {
    q: 'How far in advance should snowbirds book car shipping?',
    a: 'Book 2 to 3 weeks ahead of your pickup date for the best mix of price and date choice. In peak weeks (mid-October through November and April), book 3 to 4 weeks ahead. Last-minute booking is possible but often costs more and gives you fewer choices.'
  },
  {
    q: 'Are pickup and delivery dates guaranteed?',
    a: 'Auto transport dates are estimates, not guarantees. Weather, road conditions, hours-of-service rules, and route logistics can shift schedules by a day or two. Your requested pickup date is a target, not a fixed appointment. We give you a date window at booking so you can plan around it.'
  },
  {
    q: 'Can I book a round-trip car shipping for the whole winter?',
    a: 'Yes. Many snowbirds book both legs at once — a southbound trip in the fall and a northbound trip in the spring. You can book both at the same time or one at a time. Booking both legs early helps you lock in both pickup windows during the busiest weeks.'
  },

  // ── Decision & value ───────────────────────────────────────────────────
  {
    q: 'Is it worth shipping a car to Florida for the winter?',
    a: 'For many snowbirds, yes. Driving 1,000 to 2,000 miles twice a year costs gas, hotel stays, time, and wear on the car. Shipping lets you fly to Florida and have your car waiting at your winter home. It is also safer than driving long trips alone in winter weather. Many snowbirds say the time saved is worth the cost.'
  },
  {
    q: 'What is the difference between open and enclosed transport?',
    a: 'Open transport is the most common option and moves your vehicle on a standard multi-car carrier. Enclosed transport uses a covered trailer to protect the vehicle from weather and road debris. Enclosed usually costs 30 to 50 percent more and is often chosen for luxury, classic, or collector cars.'
  },

  // ── Safety, insurance, logistics ───────────────────────────────────────
  {
    q: 'Is snowbird car shipping safe for my vehicle?',
    a: 'Yes. Every carrier we work with is licensed with the FMCSA and carries active cargo insurance. For most standard cars, open transport is safe and widely used. For luxury, classic, or collector cars, you can pick enclosed transport for extra cover from weather and road debris.'
  },
  {
    q: 'Is my vehicle insured during transport?',
    a: 'Yes. Every motor carrier we work with maintains active cargo insurance as required by federal regulations. You can request a copy of the carrier\'s certificate of insurance before pickup, and the policy covers damage that happens while the vehicle is in the carrier\'s care.'
  },
  {
    q: 'Can I pack items in my car when shipping it as a snowbird?',
    a: 'You can usually leave a small amount of personal items in the car — up to about 100 pounds. Keep them low in the car, below the window line. Do not pack anything of high value, important papers, or anything fragile. Each carrier has its own rule, so check before pickup.'
  },
  {
    q: 'Do I need to be present for pickup and delivery?',
    a: 'Yes, or an authorized adult (18 or older) must be there in your place. They will walk around the car with the driver, note any marks on the bill of lading, and confirm condition at pickup. The same check happens at delivery before you drive away.'
  },

  // ── Service area ───────────────────────────────────────────────────────
  {
    q: 'Do you ship snowbird vehicles to all 50 states?',
    a: 'Our main focus is the four leading snowbird destinations: Florida, Arizona, Texas, and California. We also arrange shipping on other U.S. lanes on request. Call us or get a free quote to check your exact route. We work closely with origin states across the Northeast, Midwest, and Mountain West.'
  }
];

export const metadata = {
  title: 'Snowbird Car Shipping — Auto Transport to Florida, Arizona, Texas & California',
  description:
    'Snowbird auto transport for retirees and seasonal residents moving vehicles between northern states and the four leading Sun Belt destinations: Florida, Arizona, Texas and California.',
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Seasonal Auto Transport"
        title="Snowbird car shipping across the Sun Belt."
        description="We help snowbirds move vehicles between northern states and the four leading winter destinations — Florida, Arizona, Texas and California. Licensed broker, seasonal expertise, and coordination from quote to delivery."
        bullets={[
          'Four destination clusters: Florida, Arizona, Texas, California',
          'Open and enclosed transport for seasonal shipments',
          'Concierge coordination for pickup, delivery and check-ins',
          'Transparent quotes with no upfront deposit required'
        ]}
        pageType="home"
        pageUrl="/"
      />

      <TrustBar />

      <DestinationGrid />

      <PopularRoutes />

      <PopularOrigins />

      <SnowbirdSeasonSection />

      <HowItWorks />

      <PricingSection />

      <RoundTripSection />

      <Testimonials />

      <HomeSEOContent />

      <QuoteCTA
        title="Book your snowbird shipment before the seasonal rush."
        description="Fall southbound demand peaks in October and November. Request your free quote today and lock in preferred pickup dates."
      />

      <FAQ items={homeFaqs} />

      <section className="border-t border-slate-200 bg-white py-12">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-2">
            <BrokerNote />
            <div className="rounded-xl border border-slate-200 bg-brand-cream/60 p-5 text-sm text-slate-700">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Talk to a Snowbird Specialist</div>
              <p className="mt-2 leading-relaxed">
                Prefer to speak with someone about your route? Call{' '}
                <a href={site.phoneHref} className="font-semibold text-brand-navy underline">
                  {site.phoneDisplay}
                </a>
                . Our specialists are available {site.hours}.
              </p>
              <p className="mt-3 leading-relaxed">
                New to snowbird shipping?{' '}
                <Link href="/resources/snowbird-car-shipping-guide" className="font-semibold text-brand-navy underline">
                  Learn how snowbird car shipping works
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
