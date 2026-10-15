import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getRouteBySlug, routes } from '@/data/routes';

const slug = 'ohio-to-florida';
const route = getRouteBySlug(slug);

export function generateMetadata() {
  return {
    title: 'Ohio to Florida Car Shipping | Snowbird Auto Transport',
    description:
      'Ship your car from Ohio to Florida with transparent pricing from $825 open and $1,350 enclosed. Typical 3–6 day transit via I-75, door-to-door service, free quote in two minutes.',
    alternates: { canonical: `/routes/${slug}` },
    openGraph: {
      title: 'Ohio to Florida Car Shipping | Snowbird Auto Transport',
      description:
        'Dense I-75 snowbird corridor from Cleveland, Columbus, and Cincinnati to every Florida metro. Transparent pricing, 3–6 day transit, strong carrier backhaul.',
      type: 'website'
    }
  };
}

const cityPairs = [
  {
    pair: 'Cleveland, OH → Naples, FL',
    distance: '1,330 mi',
    open: '$975 – $1,575',
    enclosed: '$1,450 – $1,850',
    transit: '4–6 days'
  },
  {
    pair: 'Cleveland, OH → Fort Myers, FL',
    distance: '1,310 mi',
    open: '$970 – $1,550',
    enclosed: '$1,450 – $1,850',
    transit: '4–6 days'
  },
  {
    pair: 'Columbus, OH → Tampa, FL',
    distance: '1,060 mi',
    open: '$900 – $1,450',
    enclosed: '$1,400 – $1,750',
    transit: '3–5 days'
  },
  {
    pair: 'Columbus, OH → The Villages, FL',
    distance: '1,030 mi',
    open: '$900 – $1,425',
    enclosed: '$1,400 – $1,725',
    transit: '3–5 days'
  },
  {
    pair: 'Cincinnati, OH → Tampa, FL',
    distance: '975 mi',
    open: '$825 – $1,350',
    enclosed: '$1,325 – $1,650',
    transit: '3–5 days'
  },
  {
    pair: 'Cincinnati, OH → Miami, FL',
    distance: '1,175 mi',
    open: '$925 – $1,475',
    enclosed: '$1,425 – $1,800',
    transit: '4–6 days'
  },
  {
    pair: 'Dayton, OH → Jacksonville, FL',
    distance: '870 mi',
    open: '$850 – $1,350',
    enclosed: '$1,325 – $1,650',
    transit: '3–5 days'
  },
  {
    pair: 'Toledo, OH → Fort Lauderdale, FL',
    distance: '1,300 mi',
    open: '$975 – $1,575',
    enclosed: '$1,450 – $1,850',
    transit: '4–6 days'
  }
];

const vehiclePricing = [
  { type: 'Sedan (Camry, Accord, 3-Series)', open: '$825 – $1,300', enclosed: '$1,350 – $1,650' },
  { type: 'Small SUV (RAV4, CR-V, X3)', open: '$900 – $1,350', enclosed: '$1,400 – $1,700' },
  { type: 'Pickup Truck (F-150, Silverado)', open: '$1,000 – $1,450', enclosed: '$1,500 – $1,800' },
  { type: 'Full-Size SUV (Tahoe, Suburban, Escalade)', open: '$1,100 – $1,550', enclosed: '$1,600 – $1,900' },
  { type: 'Minivan / Cargo Van', open: '$1,050 – $1,500', enclosed: '$1,550 – $1,850' },
  { type: 'Luxury / Classic / EV (Porsche, Tesla, Bentley)', open: '$1,150 – $1,600', enclosed: '$1,650 – $2,100' }
];

const faqs = [
  {
    q: 'How much does it cost to ship a car from Ohio to Florida?',
    a: 'Open transport typically runs $825 to $1,575 for a standard sedan or SUV between major Ohio and Florida metros. Enclosed transport runs $1,325 to $1,850. Cincinnati prices lowest on the Ohio-to-Florida lane because it sits closest to the I-75 Florida corridor; Cleveland and Toledo price highest because of the extra 300 to 400 miles. Final cost depends on exact ZIP codes, vehicle size, and lead time.'
  },
  {
    q: 'How long does it take to ship a car from Ohio to Florida?',
    a: 'Typical transit is 3 to 6 days once the carrier picks up the vehicle. Shorter runs like Dayton to Jacksonville or Cincinnati to Tampa land at 3 to 5 days. Cleveland or Toledo to the Gulf Coast runs 4 to 6 days. Pickup can be scheduled within a 1 to 3 day window after booking confirms.'
  },
  {
    q: 'Why does Cincinnati price lower than Cleveland or Columbus on this lane?',
    a: 'Cincinnati sits on the I-75 corridor that carries dense carrier backhaul traffic between Michigan, Ohio, and Florida year-round. Carriers running empty north from Florida often reload south out of Cincinnati, which drops the asking rate by $75 to $150 compared with Cleveland or Toledo pickups. If you have flexibility, Cincinnati pickups almost always come in cheapest.'
  },
  {
    q: 'When should Cleveland and Northeast Ohio snowbirds book southbound?',
    a: 'Target a pickup window between October 1 and October 15. Cleveland and the Lake Erie snow belt (Mentor, Painesville, Chardon, Ashtabula) see the first serious lake-effect snow by late October most years, and road salting ramps up fast. Many Cleveland snowbirds book pickup specifically to beat the first salt event. Booking after November 1 routinely costs 15 percent more and widens pickup windows to 3 to 5 days.'
  },
  {
    q: 'Can you ship to The Villages, Florida from Columbus or Dayton?',
    a: 'Yes. The Columbus and Dayton to The Villages corridor is one of our regular runs, and we handle gated-community access notes at delivery. The Villages is a dense pickup point for returning snowbirds in April and May, so round-trip bookings on this specific lane often beat two one-ways by 10 to 15 percent. Mention your Villages address at booking so the carrier gets the right internal gate instructions.'
  },
  {
    q: 'Should I choose open or enclosed transport from Ohio to Florida?',
    a: 'Open transport is the standard choice for daily drivers, SUVs, and pickups on this lane. Enclosed makes sense for luxury, classic, exotic, low-clearance, newly purchased, or leased vehicles. Enclosed runs about $450 to $500 above open. If your car is new, has a fresh paint job, or stays garage-kept, enclosed is usually worth the premium.'
  },
  {
    q: 'What if my car is not running?',
    a: 'Non-running vehicles ship from Ohio to Florida as long as they roll, brake, and steer. We dispatch a carrier with a winch and build a short pickup window for inoperable vehicles. Non-running pricing adds roughly $100 to $200 to the open rate. Share the condition when you book so dispatch matches the correct carrier.'
  },
  {
    q: 'Can a carrier reach a rural Ohio or Amish-country pickup?',
    a: 'Yes. Holmes County Amish country, rural Appalachian Southeast Ohio, and farmland in Northwest Ohio are served every week on the OH to FL lane. Carriers prefer a staging point on a paved driveway or wide shoulder. Narrow dirt lanes may require a short drive to a nearby main road. Share the pickup address at booking and dispatch handles the carrier match.'
  },
  {
    q: 'What should I do before the carrier picks up my car?',
    a: 'Remove personal belongings and the E-ZPass transponder, leave about a quarter tank of fuel, wash the car so you can photograph it clearly, note existing damage on the bill of lading, make sure the key you hand the driver works, and keep your phone reachable during the pickup window. If you\'re in a gated Florida community or 55+ park, share the gate code and access notes at booking.'
  },
  {
    q: 'Can I book round-trip shipping for both legs of my snowbird season?',
    a: 'Yes. Round-trip bookings locked in before October usually run 10 to 15 percent below two one-way shipments bought separately. We confirm the southbound pickup window immediately and schedule the April or May northbound leg once your return date is set. The Villages and Fort Myers to Ohio round-trip lanes are especially well-priced because of the strong carrier backhaul on I-75.'
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

export default function OhioToFloridaRoutePage() {
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
          { label: 'Ohio to Florida' }
        ]}
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Ohio &rarr; Florida
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Ohio to Florida Car Shipping
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-200">
              The I-75 snowbird superhighway. Dense carrier backhaul from Cleveland, Columbus, Cincinnati,
              Dayton, and Toledo to every Florida metro. From $825 open.
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
              <li>&bull; Starting at $825 open / $1,350 enclosed</li>
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
                  originState="Ohio"
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
            Ohio to Florida route overview
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-brand-cream/60">
                  <th className="w-1/3 px-5 py-3 font-semibold text-brand-navy">Origin</th>
                  <td className="px-5 py-3 text-slate-700">Ohio (all metros)</td>
                </tr>
                <tr>
                  <th className="px-5 py-3 font-semibold text-brand-navy">Destination</th>
                  <td className="px-5 py-3 text-slate-700">Florida (all metros)</td>
                </tr>
                <tr className="bg-brand-cream/60">
                  <th className="px-5 py-3 font-semibold text-brand-navy">Approx. Distance</th>
                  <td className="px-5 py-3 text-slate-700">1,150 miles (Columbus to Tampa corridor)</td>
                </tr>
                <tr>
                  <th className="px-5 py-3 font-semibold text-brand-navy">Typical Transit</th>
                  <td className="px-5 py-3 text-slate-700">3&ndash;6 days once picked up</td>
                </tr>
                <tr className="bg-brand-cream/60">
                  <th className="px-5 py-3 font-semibold text-brand-navy">Starting Price</th>
                  <td className="px-5 py-3 text-slate-700">$825 open &middot; $1,350 enclosed</td>
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
                  <td className="px-5 py-3 text-slate-700">I-75 &middot; I-77 &middot; I-71</td>
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
            Ohio to Florida auto transport
          </h2>
          <div className="mt-5 space-y-4 text-slate-700">
            <p>
              Ohio sits on top of the single busiest snowbird carrier corridor in the eastern U.S. &mdash; the
              I-75 lane that runs from Michigan straight down through Toledo, Dayton, and Cincinnati into
              Florida. That constant southbound and northbound carrier flow means Ohio pickups almost
              always have a loaded truck on the way, which keeps pricing competitive and transit times
              short.
            </p>
            <p>
              Three origin markets feed the lane. Cleveland and Northeast Ohio ship south on I-77. Columbus
              and Central Ohio feed in via I-71 or I-70. Cincinnati, Dayton, and the I-75 corridor itself
              get the lowest Ohio-to-Florida pricing because they sit directly on the carrier backhaul.
              Pricing is transparent, transit sits in the 3 to 6 day range, and both open and enclosed
              carriers run the lane every week.
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
              Popular Ohio to Florida shipping routes
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
            Car shipping cost from Ohio to Florida by vehicle type
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
            Add roughly $100&ndash;$200 for non-running vehicles and $75&ndash;$150 for rural Southeast Ohio
            or Appalachian pickups more than 30 miles from a major interstate.
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
            How to save money on Ohio to Florida car shipping
          </h2>
          <ul className="mt-6 space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Pick up on the I-75 corridor if you can.</strong>
                Cincinnati, Dayton, and Toledo pickups price $75&ndash;$150 below Cleveland or Columbus
                because carriers reload south on I-75 from Michigan daily.
              </span>
            </li>
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
                window gives dispatch more room to load you on an existing I-75 route.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Choose open transport when it fits.</strong> Open carriers
                cost $450&ndash;$500 less than enclosed and run I-75 daily in both directions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Compare real quotes, not estimates.</strong> Each quote
                should name the carrier, insurance level, and pickup window &mdash; not just a price.
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
                Ohio round-trip bookings are especially well-priced because of I-75 carrier backhaul.
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
              We&rsquo;re a licensed FMCSA broker focused on snowbird corridors like Ohio to Florida.
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
                h: 'I-75 backhaul access',
                p: 'Daily carrier flow between Michigan, Ohio, and Florida keeps Ohio pickups loaded faster than most Northeast lanes.'
              },
              {
                h: 'Door-to-door service',
                p: 'Pickup and delivery at your address, or the nearest safe staging point when access is tight.'
              },
              {
                h: 'Snowbird-season scheduling',
                p: 'We book October through May around real snowbird dates — return legs, winter-rental timing, and gated-community access.'
              },
              {
                h: 'The Villages experience',
                p: 'We handle Villages gate codes, internal address instructions, and the April/May northbound return rush as routine.'
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
            How Ohio to Florida car shipping works
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
              <li>&bull; Pickup location (I-75 corridor vs. Northeast Ohio I-77)</li>
              <li>&bull; Delivery location (metro Florida vs. Panhandle or Keys)</li>
              <li>&bull; Carrier availability during snowbird peak (Oct&ndash;Dec, Apr&ndash;May)</li>
              <li>&bull; Scheduled stops along the carrier&rsquo;s route</li>
              <li>&bull; I-75 corridor traffic through Georgia and Tennessee</li>
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
              Ohio to Florida snowbird car shipping
            </h2>
            <p className="mt-3 text-slate-700">
              Columbus and Dayton retirees headed to The Villages, Cleveland and Akron snowbirds moving to
              Naples and Fort Myers, and Cincinnati households wintering in Tampa and Sarasota make this
              one of the highest-volume snowbird corridors in the Midwest. Cleveland snowbirds should plan
              around lake-effect snow timing.
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
                Southbound volume starts the first week of October and peaks mid-November. Cleveland and
                lake-effect snow belt snowbirds should target an October 1&ndash;15 pickup to beat the
                first serious salt event on Ohio highways.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Book southbound shipments 2&ndash;4 weeks ahead</li>
                <li>&bull; Cleveland/NE Ohio: target an October 10 pickup</li>
                <li>&bull; Pricing runs 10&ndash;15% above shoulder months at peak</li>
                <li>&bull; Thanksgiving week is the single tightest window</li>
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
                Northbound volume peaks mid-April through late May. The Villages creates its own April
                pickup surge as the community empties out. Book your return as soon as your Florida
                departure date is set.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Book northbound shipments 2&ndash;3 weeks ahead</li>
                <li>&bull; Villages April pickup window is especially tight</li>
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
              <div className="mt-1 text-sm text-slate-600">Most common &middot; $825&ndash;$1,600 range</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Standard choice for daily drivers, SUVs, and pickups</li>
                <li>&bull; Faster pickup &mdash; I-75 open carriers run daily</li>
                <li>&bull; Vehicle is exposed to road dust and weather in transit</li>
                <li>&bull; Cargo insurance typically $100K&ndash;$250K per vehicle</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="font-display text-xl font-bold text-brand-navy">Enclosed Transport</div>
              <div className="mt-1 text-sm text-slate-600">Best for luxury &middot; $1,350&ndash;$2,100 range</div>
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
            Ready to ship your car from Ohio to Florida?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Get a free quote in about two minutes. No obligation. We&rsquo;ll show you open and enclosed options,
            carrier ranges, and the next available pickup window on the Ohio to Florida lane.
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
            <Link href="/states/ohio" className="text-brand-navy font-semibold hover:underline">
              See all Ohio origin routes &rarr;
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA title="Ship your car from Ohio to Florida" />
    </>
  );
}
