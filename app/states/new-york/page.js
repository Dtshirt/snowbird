import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getStateBySlug, originStates } from '@/data/states';
import { getRoutesByOrigin } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';

const slug = 'new-york';

export function generateMetadata() {
  return {
    title: 'New York Car Shipping: NYC, Hudson Valley & Upstate',
    description:
      'New York car shipping guide — NYC street pickup logistics, Hudson Valley luxury runs, upstate I-81 cost advantage, and snowbird timing to Florida and Arizona.',
    alternates: { canonical: `/states/${slug}` },
    openGraph: {
      title: 'New York Car Shipping: NYC, Hudson Valley & Upstate',
      description:
        'Three New Yorks, three different shipping lanes — a practical origin-state guide for snowbirds and relocators heading south or west.',
      type: 'website'
    }
  };
}

// 10 NEW York-specific insider FAQs — zero overlap with any destination page FAQ set
const faqs = [
  {
    q: 'Can a carrier legally pick up on a Manhattan or Brooklyn street with alternate-side parking in effect?',
    a: 'Yes but only during the posted no-parking windows for street cleaning, which usually leave a 30 to 90 minute pickup window. Most carriers prefer to stage pickup at a nearby garage or a block with commercial loading zones. Full-size car carriers cannot legally park on most residential NYC streets, and a ticket plus tow can delay the whole load.'
  },
  {
    q: 'My apartment building has a doorman and no driveway. How do pickups actually work?',
    a: 'The carrier arranges a meeting point — most commonly a nearby parking garage, a wide avenue with legal commercial parking (10th Avenue, West End Avenue, Queens Boulevard), or a FedEx/UPS freight bay. You drive the car to the staging point and meet the driver. Door-to-door is marketing language in Manhattan; staging is the physical reality.'
  },
  {
    q: 'If I\'m shipping from the Hamptons after Labor Day, is pricing different from a Long Island pickup?',
    a: 'Yes. Hamptons pickups between Labor Day and Columbus Day price 15 to 25 percent above standard Long Island rates because of carrier reluctance to run Montauk Highway or NY 27 at peak traffic. Carriers prefer early-morning or Sunday-night pickups on that corridor. Factor a 2 to 3 day wider pickup window into any late-September Hamptons booking.'
  },
  {
    q: 'Does New York\'s no-fault insurance apply to my car during transit?',
    a: 'No. New York\'s PIP coverage follows the policyholder as a driver or passenger — not the vehicle as freight. During transit the carrier\'s cargo insurance ($100K to $250K per vehicle on open; $1M+ on specialty enclosed) handles damage to the car. Your personal policy returns to coverage the moment you take delivery.'
  },
  {
    q: 'If I register my car at a Florida winter address, do I lose my NY registration?',
    a: 'Not automatically. Dual registration is complicated — most people choose one state as their legal residence and register the vehicle there. Florida and New York each have residency tests that look at days present, voter registration, driver license, and tax filings. Consult an accountant before changing registration; the car-shipping decision is simpler than the tax one.'
  },
  {
    q: 'Buffalo and Rochester lake-effect snow — when should I actually book my pickup?',
    a: 'For Buffalo, Rochester, and the Southern Tier, lock in pickup by October 10 to beat the first serious lake-effect event (usually mid to late October). Carriers raise rates and widen pickup windows the moment a major event forecasts. Western New York snowbirds who book after November 1 routinely pay 20 percent more than those who book by October 10.'
  },
  {
    q: 'There\'s a "pre-salt" rush in early October. What is it and does it matter?',
    a: 'New York DOT and county road crews begin pre-treating highways with brine solution in mid to late October, and road salting ramps up with the first snow. Many snowbirds book pickup by October 1 to 15 specifically to ship the car south before salt touches the undercarriage. If your car is new, leased, or has a fresh underbody, the pre-salt window is worth the booking push.'
  },
  {
    q: 'Can a carrier pick up from a Westchester or Hudson Valley country club?',
    a: 'Most Westchester and Hudson Valley country clubs allow carrier access through the service entrance with 48 to 72 hours of notice. A few older clubs with narrow cart paths may require you to meet the carrier in the main parking lot. Larger member events (member-guest weekends, charity tournaments) can block carrier access entirely — ask your club ahead of booking.'
  },
  {
    q: 'My pickup is in Queens or the Bronx. Will a carrier show up to a residential street there?',
    a: 'Yes but with a shorter pickup window than suburban addresses. Carriers prefer corner lots, intersections with wide curb cuts, or nearby strip-mall parking lots in Queens and the Bronx. Narrow residential streets with double-parked cars often force a staging change on arrival. Mobile reach matters — stay reachable during the pickup window because the driver may call to reroute.'
  },
  {
    q: 'If I ship my car to Florida for winter, is the drive back worth it over a return shipment?',
    a: 'Depends on your schedule. A round-trip shipment typically runs 10 to 15 percent below two one-ways booked separately. A drive back saves the shipping fee but costs 2 to 3 travel days, 2 nights in hotels, fuel, and the wear on the car. Many New York snowbirds who first drove south end up shipping both legs after the first winter. The time-value math usually favors shipping.'
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

export default function NewYorkCarShippingPage() {
  const state = getStateBySlug(slug);
  const allRoutes = getRoutesByOrigin(slug);
  const destinationsShown = state.popularDestinationStates
    .map((d) => getDestinationBySlug(d))
    .filter(Boolean);
  const otherOrigins = originStates.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Origin States', href: '/#origins' },
        { label: 'New York' }
      ]} />

      {/* HERO — H1 primary only; direct answer in sentence 1; PAS; primary in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">New York Origin Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              New York Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>New York car shipping</strong> is not one market. A pickup in Midtown Manhattan runs on different logistics than one in Westchester or Buffalo — different carrier networks, different pricing, different pickup realities. First-time shippers often get quoted a single statewide rate, book, and then discover the carrier can&rsquo;t legally park on their street or won&rsquo;t cross the Tappan Zee during rush hour. This page walks the three distinct New York lanes, the I-95 and I-81 corridor split, snowbird timing, and the pickup-location details that decide whether your car ships smoothly or sits a week.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request a New York quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; NYC street-pickup and staging expertise</li>
              <li>&bull; Hudson Valley luxury enclosed experience</li>
              <li>&bull; Upstate I-81 cost-advantage routing</li>
              <li>&bull; Pre-salt October booking windows</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="New York" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            The three New Yorks: downstate, Hudson Valley, upstate
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              New York car shipping splits into three markets that behave like separate states. Downstate (NYC, Long Island) runs on dense urban pickup logistics with staging as the norm. The Hudson Valley and Westchester run on suburban residential pickups with a heavy luxury-vehicle tilt. Upstate (Buffalo, Rochester, Syracuse, Albany) runs on standard residential pickups routed primarily through the I-81 corridor rather than I-95.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Each market has its own carrier network, pickup conventions, and price band. A downstate quote carries a built-in staging surcharge. A Westchester quote assumes a long private driveway and often favors enclosed transport. An upstate quote routes through PA on I-81 and typically prices below the equivalent-distance downstate run.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Timing matters too, but differently. Lake-effect snow hits Buffalo and Rochester weeks before NYC sees its first storm. Downstate carrier supply tightens around NYC Marathon weekend and Thanksgiving. Luxury-vehicle collectors in the Hudson Valley often book enclosed transport in late September to beat the fall salt treatment.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions matter most for first-time shippers and anything with tight timing. A straightforward residential pickup in a suburban Nassau County driveway in March behaves like any suburban lane in the country. The nuance shows up on urban pickups, early-season bookings, and high-value vehicles. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "new york auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What does New York auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            New York auto transport prices sit mid-pack among East Coast origins. Short regional lanes (NY to NJ, PA, MA) run $400 to $750. Mid-Atlantic lanes (NY to VA, NC, SC) run $700 to $1,200. Florida lanes run $950 to $1,600 open. Cross-country Arizona and California lanes run $1,300 to $2,200.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: origin within New York (NYC vs upstate), destination, timing (snowbird peak or shoulder), and transport type. NYC street pickups add $75 to $200 for staging complexity. Enclosed transport runs 30 to 50 percent above open on the same lane.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="p-3 text-left">Lane</th>
                  <th className="p-3 text-left">Typical range</th>
                  <th className="p-3 text-left">Open rate</th>
                  <th className="p-3 text-left">Peak surcharge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-3">NYC &rarr; Florida (I-95)</td><td className="p-3">1,200&ndash;1,400 mi</td><td className="p-3">$950&ndash;$1,600</td><td className="p-3">+$150&ndash;$275</td></tr>
                <tr><td className="p-3">Upstate NY &rarr; Florida (I-81)</td><td className="p-3">1,300&ndash;1,500 mi</td><td className="p-3">$875&ndash;$1,500</td><td className="p-3">+$125&ndash;$250</td></tr>
                <tr><td className="p-3">NY &rarr; Texas (I-81 / I-40)</td><td className="p-3">1,800&ndash;2,000 mi</td><td className="p-3">$1,150&ndash;$1,850</td><td className="p-3">+$150&ndash;$300</td></tr>
                <tr><td className="p-3">NY &rarr; Arizona cross-country</td><td className="p-3">2,300&ndash;2,500 mi</td><td className="p-3">$1,300&ndash;$2,100</td><td className="p-3">+$175&ndash;$325</td></tr>
                <tr><td className="p-3">NY &rarr; California cross-country</td><td className="p-3">2,700&ndash;3,000 mi</td><td className="p-3">$1,400&ndash;$2,200</td><td className="p-3">+$200&ndash;$375</td></tr>
                <tr><td className="p-3">NYC enclosed to FL luxury</td><td className="p-3">1,200&ndash;1,400 mi</td><td className="p-3">$1,400&ndash;$2,400</td><td className="p-3">+$200&ndash;$400</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 per-mile averages (~$0.75/mi short lane down to ~$0.35/mi cross-country). Rates shift weekly with fuel, demand, and carrier supply.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the NYC-to-Florida lane is one of the most densely-serviced corridors in the country. Short-notice pickups work on this lane in a way they don&rsquo;t on cross-country runs. If your dates slip, you have flexibility.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping from new york" + corridor framing */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping from New York: I-95, I-81, and the cross-country lanes
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping from New York rides on two primary southbound corridors plus a cross-country option for Western destinations. The corridor the carrier chooses depends more on your pickup zip code than your destination.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-95 (Downstate &rarr; Florida)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The East Coast backbone. NYC to Miami is roughly 1,280 miles, 4 to 7 days transit, $950 to $1,600 open. Dense carrier supply year-round. Peak-week bottlenecks in late November and early December.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-81 (Upstate &rarr; Southeast)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Runs south through Pennsylvania, Virginia, and Tennessee. The upstate NY cost advantage lives here — fewer tolls, no NYC staging, and carriers that run full both directions. 10 to 15 percent cheaper than I-95 for equivalent distance.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-70 / I-40 (NY &rarr; Southwest)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Cross-country lane via Ohio, Missouri, and Oklahoma. The common route for New York to Arizona or Southern California. 7 to 11 days transit. Fewer carriers run this lane than I-95, so pickup windows widen.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-78 / I-80 (NY &rarr; Chicago hub)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Connector to the Chicago freight hub. Common first leg for shipments bound for Texas or the Mountain West. Often used by carriers that aggregate loads at Chicago staging terminals before the long-haul leg.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            The George Washington Bridge, Lincoln Tunnel, and Verrazzano-Narrows Bridge all restrict commercial carriers at certain hours. A carrier running out of New Jersey may stage pickup on the Jersey side (Jersey City, Weehawken, Teterboro) rather than crossing into NYC with a full-size trailer.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier&rsquo;s call. Weather, tolls, driver hours, and load mix drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "nyc car shipping" + unique NYC-specific content */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            NYC car shipping: Manhattan, Brooklyn, Queens, and the parking reality
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            NYC car shipping is the trickiest urban auto transport market in the country. Full-size car carriers (75- to 80-foot rigs with 8 to 10 vehicles aboard) cannot legally park on most Manhattan or Brooklyn residential streets. Alternate-side parking rules eliminate most curb space during business hours. The result: nearly every NYC pickup is a staged pickup, not a true door-to-door run.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">How NYC pickups actually work</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Carrier calls 24 to 48 hours ahead to confirm a staging point near your address</li>
              <li>Common staging: nearby parking garage, wide avenue (10th, West End), FedEx/UPS freight bay, or a bridge-approach lot</li>
              <li>You drive the car to the staging point and meet the carrier (typically 10 to 30 minute walk from your door)</li>
              <li>Loading takes 20 to 45 minutes depending on carrier position on the trailer</li>
              <li>For Manhattan: expect to stage; for outer boroughs: residential pickup sometimes works but still requires wide-street access</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Brokers that promise &ldquo;door-to-door&rdquo; from a Manhattan address without caveats are misrepresenting the physical reality. Loading a $45K sedan on a residential block in Chelsea, Park Slope, or Astoria is not something a licensed carrier will do without a legal parking exemption.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Outer boroughs (Queens, Brooklyn, Bronx) have more legal pickup options than Manhattan, but still require careful staging planning. Staten Island behaves more like suburban NJ than NYC — most pickups are standard residential.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: our NYC shipping expertise is specific to residential and small-business pickups. Fleet moves, dealership transfers, and port pickups follow different protocols. For the broader broker-vs-direct-carrier context, see our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link>.
          </p>
        </div>
      </section>

      {/* H2.5 — "snowbird car shipping from new york" + October pre-salt angle (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Snowbird car shipping from New York and the October pre-salt window
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Snowbird car shipping from New York concentrates heavily between early October and mid-December, with the peak four-week window falling between October 15 and November 15. New York DOT and county road crews begin pre-treating highways with brine solution in mid to late October, and road salting ramps up with the first snow event — typically late October upstate, early-to-mid November downstate.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            That pre-salt timeline drives a booking pattern unique to Northeast origins. New York snowbirds who care about undercarriage condition — anything new, leased, high-value, or with a fresh underbody — target an October 1-15 pickup window. Shipping before salt touches the car preserves the undercarriage, brake lines, and exhaust components that New York winter chemistry corrodes aggressively.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Pre-salt sweet spot</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Oct 1 &ndash; Oct 15</li>
                <li>Pre-brine treatment</li>
                <li>Best supply + pricing</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Peak expensive weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Oct 20 &ndash; Nov 15</li>
                <li>Thanksgiving week</li>
                <li>Dec 20 &ndash; Jan 3</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Return sweet spot</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late April</li>
                <li>Mid-May</li>
                <li>Post-salt-cleanup rains</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a week-by-week year view, our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link> walks every month. For the southbound timing decision specifically, our <Link href="/resources/when-to-ship-your-car-south-for-winter" className="text-brand-navy underline font-semibold">when to ship south</Link> guide walks the trade-offs.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: not every New York car needs the pre-salt treatment. Older vehicles with existing underbody wear, winter-beater sedans, and cars that will see salt on the return leg anyway don&rsquo;t benefit much. The pre-salt booking push matters most for new, leased, or collector vehicles.
          </p>
        </div>
      </section>

      {/* H2.6 — Service tier selection */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking a service tier for your New York shipment
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most New York shipments fit into one of four service choices. The right pick depends on car value, pickup location, and schedule firmness.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-brand-cream/40 p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of New York shipments. Insurance limits of $100K to $250K per vehicle are typical.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-brand-cream/40 p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer. Costs 30 to 50 percent more than open. Right for Hudson Valley luxury vehicles, Hamptons collectors, and anything over $75K. Insurance limits reach $1M+ per vehicle.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-brand-cream/40 p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Expedited (guaranteed pickup)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A locked pickup date rather than a 3- to 5-day window. Adds $150 to $400. Worth it when a closing, lease start, or flight date is fixed.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-brand-cream/40 p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Terminal-to-terminal</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Common NYC solution. You deliver to a Jersey City, Weehawken, or Teterboro staging yard rather than wrestle with Manhattan street parking. Saves $75 to $200 for anyone who can get across the Hudson.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value vehicles bound for Palm Beach, Naples, or the Hamptons return trip, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on the NY-to-FL lane. Peak-season carrier supply is strong enough that a flexible 3-day pickup window usually matches on reliability without the premium.
          </p>
        </div>
      </section>

      {/* H2.7 — timing PAA mirror */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car from New York?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Florida-bound snowbird shipments, the strongest booking weeks run late September through October 15. Carrier supply tightens through late October and compresses sharply in the first two weeks of November. For year-round moves (job relocations, student moves, dealer-to-buyer sales), timing follows a flatter cycle with summer peaks tied to school-year closings.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Upstate NY timing runs 2 to 3 weeks ahead of downstate. Buffalo and Rochester snowbirds should book their pickup by October 10; NYC-area snowbirds can usually hold until October 20 without a supply crunch.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: NYC Marathon weekend (first Sunday in November) and Thanksgiving week both create short-term supply crunches on NYC pickups. Book around those weeks rather than through them if your dates have any flexibility.
          </p>
        </div>
      </section>

      {/* H2.8 — Hudson Valley / Westchester luxury angle (unique) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Hudson Valley, Westchester, and the luxury enclosed market
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Westchester and the lower Hudson Valley (Scarsdale, Rye, Larchmont, Bronxville, Chappaqua, Bedford) ship a disproportionate share of enclosed-transport luxury vehicles south each fall. The corridor pattern is predictable: country club residences, long private driveways, high-value vehicles, and schedule-sensitive owners who prefer a locked pickup window.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Carrier dynamics follow. Specialty enclosed carriers that run the Northeast-to-Florida luxury lane take bookings 4 to 8 weeks out, run smaller fleets, and often work through broker relationships rather than public load boards. Pricing runs 30 to 50 percent above open on the same lane; insurance limits reach $1M+ per vehicle.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">What luxury Hudson Valley owners book</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Enclosed hard-side trailers with liftgate loading (not winch)</li>
              <li>Soft-tie or wheel-strap tie-downs (not frame hooks)</li>
              <li>Driver-assisted loading for low-clearance vehicles</li>
              <li>Insurance certificates sent to the destination gatehouse ahead of delivery</li>
              <li>GPS tracking throughout transit</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the full luxury-shipping walk-through, see our <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> guide. For first-time Westchester shippers, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> walks the prep basics.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: enclosed transport is often oversold. For a stock late-model vehicle under $75K with no fresh paintwork, open transport delivers the same reliability at a significantly lower price. The enclosed premium pays for itself mainly on exotics, classics, and collectors.
          </p>
        </div>
      </section>

      {/* H2.9 — Upstate NY cost-advantage angle (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Upstate New York: Buffalo, Rochester, Syracuse and the I-81 cost advantage
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Upstate New York origins get a routing advantage downstate pickups do not. Buffalo, Rochester, Syracuse, and the Southern Tier all ship primarily on the I-81 corridor south through Pennsylvania and Virginia rather than down I-95. Fewer tolls, no NYC-area staging friction, and consistent carrier supply from the Chicago-to-Atlanta freight pipeline keep upstate rates 10 to 15 percent below equivalent-distance downstate quotes.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Lake-effect snow drives earlier upstate booking windows. Buffalo and Rochester regularly see 12-inch overnight events by late October — before NYC sees any accumulation at all. Carriers factor the forecast risk into pricing starting November 1. An October 1-10 upstate booking consistently prices 15 to 20 percent below a November 1-15 booking from the same city.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Upstate booking advantages</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Residential pickups almost always work (no NYC-style staging)</li>
              <li>&bull; I-81 corridor carriers run full both directions year-round</li>
              <li>&bull; Rates 10 to 15 percent below NYC-area for the same destination</li>
              <li>&bull; Earlier booking cadence (October 1-10 target) is normal</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For Buffalo and Rochester snowbirds comparing drive-versus-ship on the Florida lane, our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link> walks the time-value math. Pacific Northwest and Mountain West snowbirds routinely pair auto transport with flights down; the same math usually favors shipping for upstate NY.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the I-81 cost advantage holds for Florida and Southeast destinations but shrinks on cross-country runs. For Arizona and California bookings, upstate pricing is only marginally below downstate because the long-haul leg dominates total mileage.
          </p>
        </div>
      </section>

      {/* H2.10 — How we run the NY lane + destinations table */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the New York lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal New York shipments and run both the downstate I-95 and upstate I-81 corridors daily during peak season. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, and on-time delivery history. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          {destinationsShown.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-xl font-bold text-brand-navy">Popular New York snowbird destinations</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {destinationsShown.map((d) => (
                  <Link key={d.slug} href={`/destinations/${d.slug}`} className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4 hover:border-brand-gold transition">
                    <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{d.abbr}</div>
                    <div className="mt-1 font-display text-lg font-bold text-brand-navy">{d.name}</div>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">{d.tagline}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
          {allRoutes.length > 0 && (
            <>
              <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">Featured outbound routes</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {allRoutes.map((r) => (
                  <Link key={r.slug} href={`/routes/${r.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 hover:border-brand-gold transition">
                    <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                      {r.origin} &rarr; {r.destination}
                    </div>
                    <div className="mt-1 font-display text-base font-bold text-brand-navy">
                      {r.origin} to {r.destination}
                    </div>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">{r.summary}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
            <li>&bull; NYC staging and street-pickup expertise</li>
            <li>&bull; Westchester / Hudson Valley enclosed experience</li>
            <li>&bull; Buffalo and Rochester lake-effect-aware timing</li>
            <li>&bull; I-95 and I-81 corridor carrier network</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; Insurance-claim advocacy on your behalf</li>
            <li>&bull; Pre-salt October booking expertise</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds weighing a return trip versus a drive back, our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown walks the trade-offs. First-time shippers should also run through our <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link> before pickup day.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run on the NY-to-FL I-95 lane with rigid dates, a direct carrier already running that corridor can sometimes beat our quote. For most New York shipments and anything requiring NYC staging, our broker model wins on reliability and claim support.
          </p>
          <BrokerNote className="mt-6" />
        </div>
      </section>

      {/* Secondary quote form rail */}
      <section className="bg-brand-cream py-16">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="eyebrow">Ready to Ship</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Get your New York car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a New York specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="New York" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            New York car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases, NYC street-pickup realities, Hudson Valley country-club protocol, and the New York insurance questions snowbirds actually ask us. For base cost and timing, see the sections above.
          </p>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
                <summary className="cursor-pointer font-semibold text-brand-navy list-none flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug">{f.q}</h3>
                  <span className="text-brand-gold text-xl leading-none group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-slate-700 leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Compare other origin states */}
      <section className="bg-brand-cream py-14">
        <div className="container-page max-w-3xl">
          <div className="eyebrow">Compare Origin States</div>
          <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy">
            Shipping from a nearby state?
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Every origin state has its own corridor map, timing, and carrier network.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {otherOrigins.map((s) => (
              <Link key={s.slug} href={`/states/${s.slug}`} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-gold">
                {s.name} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion — primary once, clear CTA */}
      <section className="bg-white py-14">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-navy">
            Ship with confidence
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Done right, New York car shipping comes down to picking the right lane for the New York you&rsquo;re shipping from. Downstate pickups need realistic staging plans. Hudson Valley and Westchester benefit from specialty enclosed options. Upstate runs cheapest on I-81 and should book earliest to beat lake-effect snow. Match the plan to the pickup zip code and the shipment runs predictably. Request a free quote and a New York specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get a New York quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, parking regulations, and carrier access rules shift with market conditions &mdash; verify current pricing with your broker and current parking rules at nyc.gov/dot before pickup day.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car from New York" />
    </>
  );
}
