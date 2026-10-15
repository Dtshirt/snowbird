import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getRouteBySlug, routes } from '@/data/routes';

const slug = 'virginia-to-florida';
const route = getRouteBySlug(slug);

export function generateMetadata() {
  return {
    title: 'Virginia to Florida Car Shipping | Snowbird Auto Transport',
    description:
      'Ship your car from Virginia to Florida with transparent pricing from $650 open and $1,200 enclosed. The shortest East Coast corridor — Richmond to Jacksonville in 2–3 days. Free quote in two minutes.',
    alternates: { canonical: `/routes/${slug}` },
    openGraph: {
      title: 'Virginia to Florida Car Shipping | Snowbird Auto Transport',
      description:
        'The shortest East Coast snowbird lane. Snowbird + Hampton Roads military PCS experience, NoVA enclosed depth, 2–5 day transit, from $650.',
      type: 'website'
    }
  };
}

const cityPairs = [
  {
    pair: 'Richmond, VA → Jacksonville, FL',
    distance: '580 mi',
    open: '$650 – $1,050',
    enclosed: '$1,100 – $1,400',
    transit: '2–3 days'
  },
  {
    pair: 'Richmond, VA → Miami, FL',
    distance: '980 mi',
    open: '$800 – $1,300',
    enclosed: '$1,250 – $1,600',
    transit: '3–5 days'
  },
  {
    pair: 'Virginia Beach, VA → Fort Lauderdale, FL',
    distance: '1,000 mi',
    open: '$825 – $1,325',
    enclosed: '$1,275 – $1,625',
    transit: '3–5 days'
  },
  {
    pair: 'Norfolk, VA → Tampa, FL',
    distance: '975 mi',
    open: '$810 – $1,290',
    enclosed: '$1,250 – $1,600',
    transit: '3–5 days'
  },
  {
    pair: 'Alexandria, VA → Orlando, FL',
    distance: '870 mi',
    open: '$775 – $1,250',
    enclosed: '$1,225 – $1,575',
    transit: '3–4 days'
  },
  {
    pair: 'Fairfax, VA → Naples, FL',
    distance: '1,050 mi',
    open: '$850 – $1,375',
    enclosed: '$1,325 – $1,675',
    transit: '3–5 days'
  },
  {
    pair: 'Charlottesville, VA → Sarasota, FL',
    distance: '910 mi',
    open: '$775 – $1,275',
    enclosed: '$1,225 – $1,575',
    transit: '3–4 days'
  },
  {
    pair: 'Roanoke, VA → Fort Myers, FL',
    distance: '900 mi',
    open: '$775 – $1,275',
    enclosed: '$1,225 – $1,575',
    transit: '3–4 days'
  }
];

const vehiclePricing = [
  { type: 'Sedan (Camry, Accord, 3-Series)', open: '$750 – $1,150', enclosed: '$1,200 – $1,500' },
  { type: 'Small SUV (RAV4, CR-V, X3)', open: '$800 – $1,200', enclosed: '$1,250 – $1,550' },
  { type: 'Pickup Truck (F-150, Silverado)', open: '$900 – $1,300', enclosed: '$1,350 – $1,650' },
  { type: 'Full-Size SUV (Tahoe, Suburban, Escalade)', open: '$1,000 – $1,400', enclosed: '$1,450 – $1,750' },
  { type: 'Minivan / Cargo Van', open: '$950 – $1,350', enclosed: '$1,400 – $1,700' },
  { type: 'Luxury / Classic / EV (Porsche, Tesla, Bentley)', open: '$1,050 – $1,450', enclosed: '$1,500 – $1,950' }
];

const faqs = [
  {
    q: 'How much does it cost to ship a car from Virginia to Florida?',
    a: 'Open transport typically runs $650 to $1,375 for a standard sedan or SUV between major Virginia and Florida metros. Enclosed transport runs $1,100 to $1,675. Virginia is the single shortest Northeast corridor to Florida, so pricing floor sits lower than any other East Coast state. Richmond to Jacksonville at under 600 miles can book as low as $650 open on an existing route. Final cost depends on exact ZIP codes, vehicle size, and lead time.'
  },
  {
    q: 'How long does it take to ship a car from Virginia to Florida?',
    a: 'Typical transit is 2 to 5 days once the carrier picks up the vehicle. Richmond to Jacksonville is one of the fastest I-95 runs in the country at 2 to 3 days. Alexandria or Fairfax to Central Florida lands at 3 to 4 days. Hampton Roads to the Gulf Coast runs 3 to 5 days. Pickup can be scheduled within a 1 to 3 day window after booking confirms.'
  },
  {
    q: 'How do I schedule a Hampton Roads military PCS move to Florida?',
    a: 'Share your orders at booking and we match the carrier timing to your reporting date. We handle PCS shipments from Naval Station Norfolk, Naval Amphibious Base Little Creek, NAS Oceana, Dam Neck Annex, Naval Weapons Station Yorktown, Langley AFB, Fort Eustis, Joint Expeditionary Base Fort Story, and the Portsmouth Naval Shipyard every week. We can also help coordinate GTCC billing, DITY/PPM reimbursement paperwork, and gate-access timing on both ends. Enclosed is available for junior officers transporting a high-value POV; most E-ranks and O-ranks ship open.'
  },
  {
    q: 'Should I inspect for my Virginia safety sticker before shipping if the car is almost expired?',
    a: 'If your Virginia annual safety inspection sticker expires within the next 30 days and you plan to register the car in Florida immediately upon arrival, you can usually skip the Virginia re-inspection. Florida has no equivalent safety inspection, so once the title transfers you&rsquo;re no longer bound to the Virginia rule. If you&rsquo;re only shipping the car to Florida seasonally and the Virginia registration stays active, renew the inspection before pickup &mdash; the sticker is enforceable in Virginia whether the car is in state or not.'
  },
  {
    q: 'Can a carrier pick up during the I-95 Fredericksburg rush-hour bottleneck?',
    a: 'The I-95 stretch through Stafford County and Fredericksburg between Exit 143 and Exit 126 is one of the worst I-95 chokepoints anywhere on the East Coast, especially 6 to 10 AM northbound and 2 to 7 PM southbound. Carriers routing between NoVA and Richmond deliberately avoid these windows. For pickups in Woodbridge, Stafford, Fredericksburg, Spotsylvania, or Caroline County, offer a 2 to 3 day pickup window so dispatch can route around peak congestion. The timing is less flexible than the I-95 lanes north of DC.'
  },
  {
    q: 'How does Northern Virginia enclosed carrier demand compare to the rest of the state?',
    a: 'Great Falls, McLean, Potomac Falls, Loudoun horse country, and the Dulles tech corridor feed a dense enclosed-carrier flow to Palm Beach, Boca Raton, and Naples. Enclosed demand from Fairfax and Loudoun counties alone matches most of the rest of the state combined. If you have a luxury, exotic, or classic vehicle in NoVA, book 3 to 4 weeks ahead for peak-season enclosed slots; carriers running Great-Falls-to-Palm-Beach every week price it as a standing route rather than a one-off.'
  },
  {
    q: 'Can you reach a Shenandoah Valley or rural I-81 pickup?',
    a: 'Yes. Harrisonburg, Staunton, Lexington, Winchester, Front Royal, and the farms along I-81 are served every week on the VA to FL lane. Carriers typically route via I-81 south to connect with I-77 or I-85 before picking up I-95 in North Carolina, so a Valley pickup is often routed through Tennessee or the Carolinas rather than straight down I-95. That routing doesn&rsquo;t change the pricing meaningfully but can shift pickup by a day. Share your address at booking and dispatch confirms the carrier match.'
  },
  {
    q: 'Should I choose open or enclosed transport from Virginia to Florida?',
    a: 'Open transport is the standard choice for daily drivers, SUVs, and pickups on this lane. Enclosed makes sense for luxury, classic, exotic, low-clearance, newly purchased, or leased vehicles, which is why NoVA enclosed demand is so high. Enclosed runs about $400 to $500 above open. If your car is new, has a fresh paint job, or over $80K in value, enclosed is usually worth the premium.'
  },
  {
    q: 'What if my car is not running?',
    a: 'Non-running vehicles ship from Virginia to Florida as long as they roll, brake, and steer. We dispatch a carrier with a winch and build a short pickup window for inoperable vehicles. Non-running pricing adds roughly $100 to $200 to the open rate. Share the condition when you book so dispatch matches the correct carrier.'
  },
  {
    q: 'Can I book round-trip shipping for both legs of my snowbird season?',
    a: 'Yes. Round-trip bookings locked in before October usually run 10 to 15 percent below two one-way shipments bought separately. Virginia round-trip is especially well-priced because the short distance means both legs stay affordable. We confirm the southbound pickup window immediately and schedule the April or May northbound leg once your return date is set.'
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

export default function VirginiaToFloridaRoutePage() {
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
          { label: 'Virginia to Florida' }
        ]}
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Virginia &rarr; Florida
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Virginia to Florida Car Shipping
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-200">
              The shortest East Coast corridor to Florida. Snowbird + Hampton Roads military PCS experience,
              NoVA enclosed depth to Palm Beach, Richmond-to-Jacksonville in 2&ndash;3 days. From $650.
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
              <li>&bull; 2&ndash;5 day typical transit</li>
              <li>&bull; Starting at $650 open / $1,100 enclosed</li>
              <li>&bull; Snowbird + Hampton Roads PCS experienced</li>
              <li>&bull; NoVA enclosed Palm Beach weekly runs</li>
            </ul>
          </div>
          <div className="lg:col-span-2" id="quote"> 
              <div className="mt-4">
                <QuoteForm
                  pageType="route"
                  pageUrl={`/routes/${slug}`}
                  routeSlug={slug}
                  originState="Virginia"
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
            Virginia to Florida route overview
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-brand-cream/60">
                  <th className="w-1/3 px-5 py-3 font-semibold text-brand-navy">Origin</th>
                  <td className="px-5 py-3 text-slate-700">Virginia (all metros)</td>
                </tr>
                <tr>
                  <th className="px-5 py-3 font-semibold text-brand-navy">Destination</th>
                  <td className="px-5 py-3 text-slate-700">Florida (all metros)</td>
                </tr>
                <tr className="bg-brand-cream/60">
                  <th className="px-5 py-3 font-semibold text-brand-navy">Approx. Distance</th>
                  <td className="px-5 py-3 text-slate-700">850 miles (Richmond to Central Florida corridor)</td>
                </tr>
                <tr>
                  <th className="px-5 py-3 font-semibold text-brand-navy">Typical Transit</th>
                  <td className="px-5 py-3 text-slate-700">2&ndash;5 days once picked up</td>
                </tr>
                <tr className="bg-brand-cream/60">
                  <th className="px-5 py-3 font-semibold text-brand-navy">Starting Price</th>
                  <td className="px-5 py-3 text-slate-700">$650 open &middot; $1,100 enclosed</td>
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
                  <td className="px-5 py-3 text-slate-700">I-95 &middot; I-64 &middot; I-81 &middot; I-85</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. SHORT ROUTE INTRODUCTION — expanded with 4 origin-market framing */}
      <section className="bg-white py-14">
        <div className="container-narrow">
          <div className="eyebrow">About This Route</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            Virginia to Florida auto transport
          </h2>
          <div className="mt-5 space-y-4 text-slate-700">
            <p>
              Virginia is the single shortest East Coast lane to Florida. Richmond to Jacksonville is just
              under 600 miles &mdash; two days of transit on a lane carriers run every day. That short
              distance drops the pricing floor below every other East Coast state and makes Virginia the
              best round-trip value in the Northeast.
            </p>
            <p>
              Four very different origin markets feed the corridor. <strong>Northern Virginia</strong> (Arlington,
              Alexandria, Fairfax, Loudoun, McLean, Great Falls) ships enclosed luxury vehicles to Palm
              Beach and Boca Raton on standing weekly runs. <strong>Richmond and central Virginia</strong>
              load open carriers for Jacksonville, Orlando, and Tampa in volume. <strong>Hampton Roads</strong>
              (Norfolk, Virginia Beach, Chesapeake, Newport News, Hampton) carries the world&rsquo;s densest
              military PCS flow &mdash; eight major installations plus the Portsmouth Naval Shipyard move
              service members to Jacksonville, Pensacola, and Mayport bases year-round. The
              <strong> Shenandoah Valley</strong> and I-81 corridor (Winchester, Harrisonburg, Staunton,
              Roanoke) feed carriers heading south through Tennessee and the Carolinas.
            </p>
            <p>
              Both open and enclosed carriers run the lane every week. The main pickup logistics gotcha is
              the I-95 Fredericksburg bottleneck between NoVA and Richmond, which pushes carriers to
              midday and weekend pickups through Stafford, Spotsylvania, and Caroline counties. Transit
              otherwise sits in the 2 to 5 day range, among the shortest of any Northeast-to-Florida route.
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
              Popular Virginia to Florida shipping routes
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
            Car shipping cost from Virginia to Florida by vehicle type
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
            Add roughly $100&ndash;$200 for non-running vehicles and $75&ndash;$150 for Shenandoah Valley or
            Eastern Shore pickups more than 30 miles from a major interstate.
          </p>
          <div className="mt-6">
            <Link href="#quote" className="btn-primary">
              Get a Quote for My Vehicle
            </Link>
          </div>
        </div>
      </section>

      {/* 6. HOW TO SAVE MONEY — Virginia-specific tactics */}
      <section className="border-y border-slate-200 bg-brand-cream py-16">
        <div className="container-narrow">
          <div className="eyebrow">Save On This Route</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            How to save money on Virginia to Florida car shipping
          </h2>
          <ul className="mt-6 space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Richmond pickups price lowest.</strong> Richmond to
                Jacksonville is the shortest I-95 run in the country, and carriers reloading south from
                DC often take Richmond at a discount.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Avoid I-95 Fredericksburg peak hours.</strong> Offer
                a midday or weekend pickup window in Stafford, Spotsylvania, or Prince William &mdash;
                carriers quote 5&ndash;10% below rush-hour pickups.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Book two to four weeks ahead.</strong> NoVA enclosed
                slots to Palm Beach fill 3&ndash;4 weeks out during peak snowbird season.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Hampton Roads military PCS: use orders early.</strong>
                Share orders at booking so dispatch locks in the carrier before reporting-date surges hit.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand-gold">&#10003;</span>
              <span>
                <strong className="text-brand-navy">Choose open transport when it fits.</strong> Open carriers
                cost $400&ndash;$500 less than enclosed and run every VA corridor weekly.
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
                Virginia round-trip is the best-priced snowbird round-trip on the East Coast because of
                the short distance.
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

      {/* 7. WHY CHOOSE US — 2 VA-specific cards */}
      <section className="bg-white py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="eyebrow">Why Snowbird Auto Transport</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
              Why ship your car with us
            </h2>
            <p className="mt-3 text-slate-700">
              We&rsquo;re a licensed FMCSA broker focused on the Virginia to Florida corridor &mdash; snowbird,
              Hampton Roads military PCS, and NoVA enclosed depth. Clear pricing, vetted carriers, and
              seasonal scheduling.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                h: 'Transparent pricing',
                p: 'Quotes name the carrier range, insurance, and pickup window. No surprise upcharges at pickup.'
              },
              {
                h: 'Hampton Roads PCS experience',
                p: 'Norfolk, Little Creek, Oceana, Dam Neck, Langley, Fort Eustis, Fort Story, and Portsmouth Shipyard PCS moves run through our dispatch every week.'
              },
              {
                h: 'NoVA enclosed depth',
                p: 'Standing weekly enclosed runs from Great Falls, McLean, Loudoun, and the Dulles tech corridor to Palm Beach, Boca Raton, and Naples.'
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
                h: 'Vetted carrier network',
                p: 'FMCSA-licensed carriers with cargo insurance up to $250K open and $1M+ enclosed.'
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
            How Virginia to Florida car shipping works
          </h2>
          <ol className="mt-8 space-y-5">
            {[
              ['Get a Quote', 'Share pickup and delivery ZIP codes, vehicle details, and preferred pickup date. Takes about two minutes. For PCS moves, share orders at this step.'],
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
              'Confirm Virginia safety inspection sticker status if returning to VA',
              'Leave about a quarter tank of fuel — no more',
              'Wash the car so you can photograph it clearly',
              'Note existing damage on the bill of lading',
              'Confirm the key you hand the driver works',
              'Mention any non-running or mechanical issues upfront',
              'Have ID, registration, insurance, and (for PCS) orders ready',
              'Share gate codes, base access notes, or Florida community codes'
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
          <div className="mt-3 font-display text-5xl font-bold text-white md:text-6xl">2&ndash;5 days</div>
          <p className="mt-3 text-slate-200">once your carrier picks the car up</p>
          <div className="mx-auto mt-10 max-w-2xl text-left">
            <h3 className="font-display text-xl font-bold text-white">What affects transit time</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>&bull; Pickup location (I-95 corridor vs. Shenandoah Valley I-81)</li>
              <li>&bull; Delivery location (metro Florida vs. Panhandle or Keys)</li>
              <li>&bull; I-95 Fredericksburg bottleneck timing</li>
              <li>&bull; Hampton Roads base gate access and reporting dates</li>
              <li>&bull; Carrier availability during snowbird peak (Oct&ndash;Dec, Apr&ndash;May)</li>
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
              Virginia to Florida snowbird car shipping
            </h2>
            <p className="mt-3 text-slate-700">
              NoVA retirees headed to Palm Beach and Naples, Richmond snowbirds moving to Jacksonville and
              Orlando, Hampton Roads households wintering in Tampa, and Shenandoah Valley residents
              shipping to Sarasota and Fort Myers make this a steady year-round and heavy seasonal lane.
              Virginia&rsquo;s short distance keeps peak pricing stable &mdash; the Oct/Nov surge is softer
              here than in New England or the Mid-Atlantic.
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
                Southbound volume starts the first week of October and peaks mid-November. NoVA enclosed
                demand fills first and runs 3 to 4 weeks ahead of open-carrier booking windows.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Book southbound shipments 2&ndash;4 weeks ahead</li>
                <li>&bull; NoVA enclosed to Palm Beach fills 3&ndash;4 weeks ahead</li>
                <li>&bull; Pricing runs 10&ndash;15% above shoulder months at peak</li>
                <li>&bull; Short distance softens the peak surge vs. New England</li>
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
                the tightest. Military PCS summer rotation (May&ndash;July) also tightens Hampton Roads
                return pickups.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Book northbound shipments 2&ndash;3 weeks ahead</li>
                <li>&bull; Early April often prices below late May</li>
                <li>&bull; Combine with a southbound booking for round-trip pricing</li>
                <li>&bull; Hampton Roads: book around PCS reporting dates</li>
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
              <div className="mt-1 text-sm text-slate-600">Most common &middot; $650&ndash;$1,450 range</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Standard choice for daily drivers, SUVs, and pickups</li>
                <li>&bull; Faster pickup &mdash; I-95 open carriers run daily in both directions</li>
                <li>&bull; Vehicle is exposed to road dust and weather in transit</li>
                <li>&bull; Cargo insurance typically $100K&ndash;$250K per vehicle</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="font-display text-xl font-bold text-brand-navy">Enclosed Transport</div>
              <div className="mt-1 text-sm text-slate-600">NoVA staple &middot; $1,100&ndash;$1,950 range</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>&bull; Right call for luxury, classic, exotic, or new leases</li>
                <li>&bull; Weekly runs from NoVA to Palm Beach and Naples</li>
                <li>&bull; Protected from weather, debris, and road grime</li>
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
            Ready to ship your car from Virginia to Florida?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Get a free quote in about two minutes. No obligation. We&rsquo;ll show you open and enclosed options,
            carrier ranges, and the next available pickup window on the Virginia to Florida lane.
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
            <Link href="/states/virginia" className="text-brand-navy font-semibold hover:underline">
              See all Virginia origin routes &rarr;
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA title="Ship your car from Virginia to Florida" />
    </>
  );
}
