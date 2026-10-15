import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getRouteBySlug, routes } from '@/data/routes';

const slug = 'new-jersey-to-florida';
const route = getRouteBySlug(slug);

export function generateMetadata() {
  return {
    title: 'New Jersey to Florida Car Shipping | Snowbird Auto Transport',
    description:
      'Ship your car from New Jersey to Florida with transparent pricing from $900 open and $1,350 enclosed. Typical 3–6 day transit, door-to-door service, free quote in two minutes.',
    alternates: { canonical: `/routes/${slug}` },
    openGraph: {
      title: 'New Jersey to Florida Car Shipping | Snowbird Auto Transport',
      description:
        'One of the fastest Northeast snowbird corridors. Transparent pricing, 3–6 day transit, and seasonal scheduling for every New Jersey to Florida city pair.',
      type: 'website'
    }
  };
}

const cityPairs = [
  {
    pair: 'Newark, NJ → Miami, FL',
    distance: '1,220 mi',
    open: '$990 – $1,580',
    enclosed: '$1,450 – $1,850',
    transit: '4–6 days'
  },
  {
    pair: 'Jersey City, NJ → Fort Lauderdale, FL',
    distance: '1,205 mi',
    open: '$975 – $1,560',
    enclosed: '$1,450 – $1,850',
    transit: '4–6 days'
  },
  {
    pair: 'Edison, NJ → Tampa, FL',
    distance: '1,160 mi',
    open: '$950 – $1,500',
    enclosed: '$1,400 – $1,800',
    transit: '3–6 days'
  },
  {
    pair: 'Princeton, NJ → Orlando, FL',
    distance: '1,050 mi',
    open: '$900 – $1,450',
    enclosed: '$1,350 – $1,750',
    transit: '3–5 days'
  },
  {
    pair: 'Cherry Hill, NJ → Naples, FL',
    distance: '1,290 mi',
    open: '$1,000 – $1,600',
    enclosed: '$1,500 – $1,900',
    transit: '4–6 days'
  },
  {
    pair: 'Toms River, NJ → Fort Myers, FL',
    distance: '1,250 mi',
    open: '$995 – $1,590',
    enclosed: '$1,500 – $1,900',
    transit: '4–6 days'
  },
  {
    pair: 'Lakewood, NJ → Boca Raton, FL',
    distance: '1,230 mi',
    open: '$985 – $1,575',
    enclosed: '$1,475 – $1,875',
    transit: '4–6 days'
  },
  {
    pair: 'Atlantic City, NJ → Palm Beach, FL',
    distance: '1,260 mi',
    open: '$990 – $1,580',
    enclosed: '$1,500 – $1,900',
    transit: '4–6 days'
  }
];

const vehiclePricing = [
  { type: 'Sedan (Camry, Accord, 3-Series)', open: '$900 – $1,300', enclosed: '$1,350 – $1,650' },
  { type: 'Small SUV (RAV4, CR-V, X3)', open: '$950 – $1,400', enclosed: '$1,400 – $1,750' },
  { type: 'Pickup Truck (F-150, Silverado)', open: '$1,050 – $1,500', enclosed: '$1,500 – $1,850' },
  { type: 'Full-Size SUV (Tahoe, Suburban, Escalade)', open: '$1,150 – $1,600', enclosed: '$1,600 – $1,950' },
  { type: 'Minivan / Cargo Van', open: '$1,100 – $1,550', enclosed: '$1,550 – $1,900' },
  { type: 'Luxury / Classic / EV (Porsche, Tesla, Bentley)', open: '$1,200 – $1,650', enclosed: '$1,650 – $2,150' }
];

const faqs = [
  {
    q: 'How much does it cost to ship a car from New Jersey to Florida?',
    a: 'Open transport typically runs $900 to $1,500 for a standard sedan or SUV between major New Jersey and Florida metros. Enclosed transport runs $1,350 to $1,900. Final pricing depends on exact pickup and delivery ZIP codes, vehicle size, and lead time. New Jersey is one of the shortest Northeast-to-Florida lanes, so prices typically run $50 to $100 below equivalent New York pickups.'
  },
  {
    q: 'How long does it take to ship a car from New Jersey to Florida?',
    a: 'Typical transit is 3 to 6 days once the carrier picks up the vehicle. Shorter pickups like Princeton to Orlando run 3 to 5 days; longer Gulf Coast routes like Cherry Hill to Naples take 4 to 6 days. Pickup can be scheduled within a 1 to 3 day window after booking confirms.'
  },
  {
    q: 'Can a carrier pick up my car in Hoboken, Jersey City, or Weehawken?',
    a: 'Yes, but staging is often required. Full-size car carriers can\'t legally park on most narrow Hudson County streets. The driver will meet you at a nearby wide avenue, a commercial strip-mall lot, or a parking garage. Pickup from a driveway or garage access point works when available. Share your access situation when you book so the driver stages correctly.'
  },
  {
    q: 'Should I choose open or enclosed transport from New Jersey to Florida?',
    a: 'Open transport is the standard choice for daily drivers, SUVs, and pickups on this lane. Enclosed makes sense for luxury, classic, exotic, low-clearance, newly purchased, or leased vehicles. Enclosed runs about $400 to $500 above open on the same route. If your vehicle is new, garage-kept, or has a fresh paint job, enclosed is usually worth the premium.'
  },
  {
    q: 'What if my car is not running?',
    a: 'Non-running vehicles ship from New Jersey to Florida as long as they roll, brake, and steer. We dispatch a carrier with a winch and build a short pickup window for inoperable vehicles. Non-running pricing adds roughly $100 to $200 to the open rate. Mention the condition up front so dispatch matches you with the correct carrier type.'
  },
  {
    q: 'Do you offer door-to-door service from New Jersey to Florida?',
    a: 'Yes. In most of New Jersey the carrier can reach your driveway or the nearest curb. In dense parts of Jersey City, Hoboken, Newark, and parts of Union City, the pickup moves to a wider nearby street or a parking lot because full-size car carriers can\'t legally stop on narrow residential blocks. Across Florida, door service is standard outside of gated communities and 55+ parks that require advance access notice.'
  },
  {
    q: 'How far ahead should I book a December pickup?',
    a: 'Book two to four weeks ahead for a December southbound pickup. The New Jersey to Florida lane is one of the densest snowbird corridors in the Northeast and fills fast between October 15 and December 15. Last-minute December bookings still move, but prices run 10 to 15 percent higher and pickup windows widen to 3 to 5 days.'
  },
  {
    q: 'What should I do before the carrier picks up my car?',
    a: 'Remove personal belongings and the E-ZPass transponder, leave about a quarter tank of fuel, wash the car so you can photograph it clearly, note existing damage on the bill of lading, make sure the key you hand the driver works, and keep your phone reachable during the pickup window. If you\'re in a gated community in Florida, share the gate code and any access notes at booking.'
  },
  {
    q: 'When is snowbird peak season on the New Jersey to Florida lane?',
    a: 'Southbound peak runs October through December with the heaviest week usually mid-November through the first week of December. Northbound peak runs mid-April through late May. Rates run 10 to 20 percent above shoulder months at peak and pickup windows widen. Booking two to three weeks ahead of your target pickup date keeps you at the lower end of the range.'
  },
  {
    q: 'Can I book round-trip shipping now for both legs of my snowbird season?',
    a: 'Yes. Round-trip bookings locked in before October usually run 10 to 15 percent below two one-way shipments bought separately. We confirm the southbound pickup window immediately and schedule the April or May northbound leg once your return date is set. Most New Jersey snowbirds who try it switch to round-trip the following year.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
};

const relatedRoutes = routes
  .filter((r) => r.destinationSlug === 'florida' && r.slug !== slug)
  .slice(0, 6);

export default function NewJerseyToFloridaRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Routes', href: '/#routes' },
          { label: 'New Jersey to Florida' }
        ]}
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              New Jersey &rarr; Florida
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              New Jersey to Florida Car Shipping
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-200">
              One of the fastest and most affordable Northeast snowbird corridors. Open and enclosed carriers,
              door-to-door service, and transparent pricing from $900.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#quote" className="btn-primary">
                Get My Free Quote
              </Link>
              <a href="tel:+18005551234" className="btn-ghost border border-white/30 text-white">
                Call (800) 555-1234
              </a>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>&bull; 3&ndash;6 day typical transit</li>
              <li>&bull; Starting at $900 open / $1,350 enclosed</li>
              <li>&bull; Licensed FMCSA broker &mdash; MC #1234567</li>
              <li>&bull; Door-to-door with snowbird-season scheduling</li>
            </ul>
          </div>
          <div className="lg:col-span-2" id="quote"> 
              <div className="mt-4">
                <QuoteForm
                  pageType="route"
                  pageUrl={`/routes/${slug}`}
                  routeSlug={slug}
                  originState="New Jersey"
                  destinationState="Florida"
                  compact
                />
              </div> 
          </div>
        </div>
      </section>

      <TrustBar />

      {/* 2. QUICK ROUTE OVERVIEW */}
      <section className="border-b border-slate-200 bg-white py-14">
        <div className="container-narrow">
          <div className="eyebrow">Route At A Glance</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            New Jersey to Florida route overview
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-brand-cream/60">
                  <th className="w-1/3 px-5 py-3 font-semibold text-brand-navy">Origin</th>
                  <td className="px-5 py-3 text-slate-700">New Jersey (all metros)</td>
                </tr>
                <tr>
                  <th className="px-5 py-3 font-semibold text-brand-navy">Destination</th>
                  <td className="px-5 py-3 text-slate-700">Florida (all metros)</td>
                </tr>
                <tr className="bg-brand-cream/60">
                  <th className="px-5 py-3 font-semibold text-brand-navy">Approx. Distance</th>
                  <td className="px-5 py-3 text-slate-700">1,180 miles (Newark to Miami corridor)</td>
                </tr>
                <tr>
                  <th className="px-5 py-3 font-semibold text-brand-navy">Typical Transit</th>
                  <td className="px-5 py-3 text-slate-700">3&ndash;6 days once picked up</td>
                </tr>
                <tr className="bg-brand-cream/60">
                  <th className="px-5 py-3 font-semibold text-brand-navy">Starting Price</th>
                  <td className="px-5 py-3 text-slate-700">$900 open &middot; $1,350 enclosed</td>
                </tr>
                <tr>
                  <th className="px-5 py-3 font-semibold text-brand-navy">Popular Season (Southbound)</th>
                  <td className="px-5 py-3 text-slate-700">October &ndash; December</td>
                </tr>
                <tr className="bg-brand-cream/60">
                  <th className="px-5 py-3 font-semibold text-brand-navy">Return Season (Northbound)</th>
                  <td className="px-5 py-3 text-slate-700">April &ndash; May</td>
                </tr>
                <tr>
                  <th className="px-5 py-3 font-semibold text-brand-navy">Major Corridors</th>
                  <td className="px-5 py-3 text-slate-700">I-95 (NJ Turnpike) &middot; I-295</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. SHORT ROUTE INTRODUCTION */}
      <section className="bg-white py-14">
        <div className="container-narrow">
          <div className="eyebrow">About This Route</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            New Jersey to Florida auto transport
          </h2>
          <div className="mt-5 space-y-4 text-slate-700">
            <p>
              The New Jersey to Florida lane is one of the shortest Northeast-to-Florida corridors, which keeps
              both pricing and transit times at the low end of the region. Dense carrier coverage along the
              NJ Turnpike and I-295 means a pickup rarely waits more than two or three days.
            </p>
            <p>
              The route serves snowbirds in Monmouth and Ocean counties heading to the Gulf Coast, Cherry
              Hill and Delaware Valley residents moving to Central Florida, and the dense North Jersey market
              shipping to Miami, Fort Lauderdale, and West Palm Beach. Pricing is transparent, transit sits
              in the 3 to 6 day range, and both open and enclosed carriers run the lane every week.
            </p>
          </div>
          <div className="mt-6">
            <Link href="#quote" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 4. POPULAR CITY-PAIR ROUTES */}
      <section className="border-y border-slate-200 bg-brand-cream py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Popular City Pairs</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
              Popular New Jersey to Florida shipping routes
            </h2>
            <p className="mt-3 text-slate-700">
              Pricing ranges below reflect typical open and enclosed carrier quotes between the metros listed.
              Final cost depends on exact ZIP codes, vehicle size, and booking lead time.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-brand-navy text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Route</th>
                  <th className="px-4 py-3 font-semibold">Distance</th>
                  <th className="px-4 py-3 font-semibold">Open</th>
                  <th className="px-4 py-3 font-semibold">Enclosed</th>
                  <th className="px-4 py-3 font-semibold">Transit</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cityPairs.map((row) => (
                  <tr key={row.pair} className="odd:bg-white even:bg-brand-cream/40">
                    <td className="px-4 py-3 font-medium text-brand-navy">{row.pair}</td>
                    <td className="px-4 py-3 text-slate-700">{row.distance}</td>
                    <td className="px-4 py-3 text-slate-700">{row.open}</td>
                    <td className="px-4 py-3 text-slate-700">{row.enclosed}</td>
                    <td className="px-4 py-3 text-slate-700">{row.transit}</td>
                    <td className="px-4 py-3">
                      <Link href="#quote" className="text-brand-gold font-semibold hover:underline">
                        Get Quote &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. VEHICLE-TYPE PRICING */}
      <section className="bg-white py-16">
        <div className="container-narrow">
          <div className="eyebrow">Pricing By Vehicle</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            Car shipping cost from New Jersey to Florida by vehicle type
          </h2>
          <p className="mt-3 text-slate-700">
            Vehicle size, weight, and dimensions directly affect how many cars a carrier can load, which drives
            the final price. Here&rsquo;s what to expect by vehicle class on this lane.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-brand-navy text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Vehicle Type</th>
                  <th className="px-4 py-3 font-semibold">Open Transport</th>
                  <th className="px-4 py-3 font-semibold">Enclosed Transport</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {vehiclePricing.map((row) => (
                  <tr key={row.type} className="odd:bg-white even:bg-brand-cream/40">
                    <td className="px-4 py-3 font-medium text-brand-navy">{row.type}</td>
                    <td className="px-4 py-3 text-slate-700">{row.open}</td>
                    <td className="px-4 py-3 text-slate-700">{row.enclosed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Pricing above assumes a running vehicle, standard clearance, and metro-to-metro pickup and delivery.
            Add roughly $100&ndash;$200 for non-running vehicles and $75&ndash;$150 for rural pickup or delivery
            more than 30 miles from a major interstate.
          </p>
          <div className="mt-6">
            <Link href="#quote" className="btn-primary">
              Get a Quote for My Vehicle
            </Link>
          </div>
        </div>
      </section>

      {/* 6. HOW TO SAVE MONEY */}
      <section className="border-y border-slate-200 bg-brand-cream py-16">
        <div className="container-narrow">
          <div className="eyebrow">Save On This Route</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            How to save money on New Jersey to Florida car shipping
          </h2>
          <ul className="mt-6 space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Book two to four weeks ahead.</strong> Early bookings
                during snowbird season routinely price 10&ndash;15% below last-minute quotes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Offer a flexible pickup window.</strong> A 2&ndash;4 day
                pickup window gives dispatch more room to load you on an existing route.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Choose open transport when it fits.</strong> Open carriers
                run the NJ Turnpike constantly and cost $400&ndash;$500 less than enclosed for most vehicles.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Compare real quotes, not estimates.</strong> Make sure
                each quote names the carrier, insurance level, and pickup window &mdash; not just a price.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Pick up near I-95 or I-295.</strong> Addresses within
                15 miles of the NJ Turnpike or I-295 price $75&ndash;$150 below deep-rural pickups.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Give accurate information when you book.</strong>
                Correct year, make, model, trim, and running status prevent price revisions at pickup.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Book round-trip if you&rsquo;ll return.</strong>
                Round-trip snowbird bookings run 10&ndash;15% below two one-ways.
              </span>
            </li>
          </ul>
          <div className="mt-7">
            <Link href="#quote" className="btn-primary">
              See My Shipping Options
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Why Snowbird Auto Transport</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
              Why ship your car with us
            </h2>
            <p className="mt-3 text-slate-700">
              We&rsquo;re a licensed FMCSA broker focused on snowbird corridors like New Jersey to Florida.
              Clear pricing, vetted carriers, and seasonal scheduling &mdash; nothing more complicated.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                h: 'Transparent pricing',
                p: 'Quotes name the carrier range, insurance, and pickup window. No surprise upcharges at pickup.'
              },
              {
                h: 'Vetted carrier network',
                p: 'FMCSA-licensed carriers with cargo insurance up to $250K open and $1M+ enclosed.'
              },
              {
                h: 'Open & enclosed options',
                p: 'Both carrier types run the New Jersey to Florida lane every week. We match you to the right one.'
              },
              {
                h: 'Door-to-door service',
                p: 'Pickup and delivery at your address, or the nearest safe staging point when access is tight.'
              },
              {
                h: 'Snowbird-season scheduling',
                p: 'We book October through May around real snowbird dates &mdash; return legs, winter-rental timing, and gated-community access.'
              },
              {
                h: 'Customer support',
                p: 'Phone, email, and text support from booking through delivery. One contact for both legs of a round-trip.'
              }
            ].map((item) => (
              <div key={item.h} className="rounded-xl border border-slate-200 bg-brand-cream/40 p-6">
                <div className="font-display text-lg font-bold text-brand-navy">{item.h}</div>
                <p className="mt-2 text-sm text-slate-700">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW SHIPPING WORKS */}
      <section className="border-y border-slate-200 bg-brand-cream py-16">
        <div className="container-narrow">
          <div className="eyebrow">The Process</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            How New Jersey to Florida car shipping works
          </h2>
          <ol className="mt-8 space-y-5">
            {[
              ['Get a Quote', 'Share pickup and delivery ZIP codes, vehicle details, and preferred pickup date. Takes about two minutes.'],
              ['Review Options', 'We present open and enclosed options with real carrier ranges and pickup windows.'],
              ['Book Your Shipment', 'Confirm the option that fits. No charge until a carrier is assigned.'],
              ['Carrier Assignment', 'Dispatch assigns a licensed carrier for your pickup window. You get the driver\'s name and contact.'],
              ['Pickup & Inspection', 'Driver meets you, inspects the vehicle, and both parties sign the bill of lading.'],
              ['Delivery in Florida', 'Driver contacts you before arrival. Inspect at delivery, sign the bill of lading, and pay the balance to the driver.']
            ].map(([h, p], i) => (
              <li key={h} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-navy font-display text-lg font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-brand-navy">{h}</div>
                  <p className="mt-1 text-sm text-slate-700">{p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. PRE-PICKUP CHECKLIST */}
      <section className="bg-white py-16">
        <div className="container-narrow">
          <div className="eyebrow">Before Pickup</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            What to do before your vehicle is picked up
          </h2>
          <ul className="mt-6 grid gap-3 text-slate-700 sm:grid-cols-2">
            {[
              'Remove all personal belongings from the car',
              'Remove or bag the E-ZPass transponder',
              'Leave about a quarter tank of fuel — no more',
              'Wash the car so you can photograph it clearly',
              'Note existing damage on the bill of lading',
              'Confirm the key you hand the driver works',
              'Mention any non-running or mechanical issues upfront',
              'Have ID, registration, and insurance ready',
              'Keep your phone reachable during the pickup window',
              'Share gate codes or access notes for the Florida address'
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3 text-sm"
              >
                <span className="mt-0.5 text-brand-gold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. TRANSIT TIME */}
      <section className="border-y border-slate-200 bg-brand-navy py-16 text-white">
        <div className="container-narrow text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Typical Transit
          </div>
          <div className="mt-3 font-display text-5xl font-bold text-white md:text-6xl">3&ndash;6 days</div>
          <p className="mt-3 text-slate-200">once your carrier picks the car up</p>
          <div className="mx-auto mt-10 max-w-2xl text-left">
            <h3 className="font-display text-xl font-bold text-white">What affects transit time</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>&bull; Pickup location (Hudson County staging vs. suburban driveway)</li>
              <li>&bull; Delivery location (metro Florida vs. Panhandle or Keys)</li>
              <li>&bull; Carrier availability during snowbird peak (Oct&ndash;Dec, Apr&ndash;May)</li>
              <li>&bull; Scheduled stops along the carrier&rsquo;s route</li>
              <li>&bull; I-95 corridor traffic and weather</li>
              <li>&bull; Open vs. enclosed carrier (enclosed runs often add 1&ndash;2 days)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. SNOWBIRD SECTION */}
      <section className="bg-white py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Snowbird Season</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
              New Jersey to Florida snowbird car shipping
            </h2>
            <p className="mt-3 text-slate-700">
              Monmouth, Ocean, and Atlantic County snowbird volume dominates this lane each fall. Carrier
              demand swings sharply with the season. Planning your pickup around the dates below keeps
              pricing predictable and pickup windows short.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-brand-cream/40 p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Heading South for Winter
              </div>
              <div className="mt-2 font-display text-2xl font-bold text-brand-navy">
                October &ndash; December
              </div>
              <p className="mt-3 text-slate-700">
                Southbound volume starts the first week of October, peaks mid-November, and tapers after
                December 15. Carriers raise rates and widen pickup windows as volume rises.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Book southbound shipments 2&ndash;4 weeks ahead</li>
                <li>&bull; Thanksgiving week is the single tightest window</li>
                <li>&bull; Pricing runs 10&ndash;20% above shoulder months at peak</li>
                <li>&bull; Flexible pickup dates still find the best rates</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-brand-cream/40 p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Returning North
              </div>
              <div className="mt-2 font-display text-2xl font-bold text-brand-navy">
                April &ndash; May
              </div>
              <p className="mt-3 text-slate-700">
                Northbound volume peaks mid-April through late May. Easter and Mother&rsquo;s Day weeks are
                the tightest. Book your return as soon as your Florida departure date is set.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Book northbound shipments 2&ndash;3 weeks ahead</li>
                <li>&bull; Early April often prices below late May</li>
                <li>&bull; Combine with a southbound booking for round-trip pricing</li>
                <li>&bull; Gated-community access notes speed up pickup</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <Link href="#quote" className="btn-primary">
              Plan My Snowbird Shipment
            </Link>
          </div>
        </div>
      </section>

      {/* 12. OPEN VS ENCLOSED */}
      <section className="border-y border-slate-200 bg-brand-cream py-16">
        <div className="container-narrow">
          <div className="eyebrow">Choose The Right Carrier</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            Open vs. enclosed car transport on this route
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="font-display text-xl font-bold text-brand-navy">Open Transport</div>
              <div className="mt-1 text-sm text-slate-600">Most common &middot; $900&ndash;$1,650 range</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Standard choice for daily drivers, SUVs, and pickups</li>
                <li>&bull; Faster pickup &mdash; more carriers available every week</li>
                <li>&bull; Vehicle is exposed to road dust and weather in transit</li>
                <li>&bull; Cargo insurance typically $100K&ndash;$250K per vehicle</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="font-display text-xl font-bold text-brand-navy">Enclosed Transport</div>
              <div className="mt-1 text-sm text-slate-600">Best for luxury &middot; $1,350&ndash;$2,150 range</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Right call for luxury, classic, exotic, or new leases</li>
                <li>&bull; Protected from weather, debris, and road grime</li>
                <li>&bull; Pickup windows run 1&ndash;3 days longer than open</li>
                <li>&bull; Cargo insurance typically $500K&ndash;$1M+ per vehicle</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-600">
            Not sure which fits your vehicle? Request a quote and we&rsquo;ll show you both options side by side.
          </p>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="bg-white py-16">
        <div className="container-narrow">
          <div className="eyebrow">Common Questions</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-semibold text-brand-navy">
                  <span>{f.q}</span>
                  <span className="mt-1 text-brand-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL QUOTE CTA */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="container-narrow text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Ready To Book
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
            Ready to ship your car from New Jersey to Florida?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Get a free quote in about two minutes. No obligation. We&rsquo;ll show you open and enclosed options,
            carrier ranges, and the next available pickup window on the New Jersey to Florida lane.
          </p>
          <div className="mt-7 flex justify-center">
            <Link href="#quote" className="btn-primary">
              Get My Free Quote
            </Link>
          </div>
          <div className="mt-10">
            <BrokerNote className="mx-auto max-w-2xl bg-white/10 text-slate-200" />
          </div>
        </div>
      </section>

      {/* 15. RELATED SNOWBIRD ROUTES */}
      <section className="bg-brand-cream py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Related Routes</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
              Other popular snowbird routes to Florida
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedRoutes.map((r) => (
              <Link
                key={r.slug}
                href={`/routes/${r.slug}`}
                className="card card-hover border border-slate-200"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  {r.origin} &rarr; {r.destination}
                </div>
                <div className="mt-2 font-display text-lg font-bold text-brand-navy">
                  {r.origin} to {r.destination}
                </div>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{r.summary}</p>
                <div className="mt-3 text-xs text-slate-500">
                  {r.transitDays} &middot; from ${r.priceLow}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/states/new-jersey" className="text-brand-navy font-semibold hover:underline">
              See all New Jersey origin routes &rarr;
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA title="Ship your car from New Jersey to Florida" />
    </>
  );
}
