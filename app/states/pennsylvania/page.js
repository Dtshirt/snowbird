import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getStateBySlug, originStates } from '@/data/states';
import { getRoutesByOrigin } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';

const slug = 'pennsylvania';

export function generateMetadata() {
  return {
    title: 'Pennsylvania Car Shipping: Philly, Pittsburgh, Central PA',
    description:
      'Pennsylvania car shipping guide — east-west corridor split, Philly I-95 vs Pittsburgh I-70, PA Turnpike dynamics, and PennDOT inspection rules for returning residents.',
    alternates: { canonical: `/states/${slug}` },
    openGraph: {
      title: 'Pennsylvania Car Shipping: Philly, Pittsburgh, Central PA',
      description:
        'Three distinct Pennsylvania shipping markets — East Coast Philadelphia, Rust Belt Pittsburgh, and the Central PA crossroads — with their own carriers, routes, and cadence.',
      type: 'website'
    }
  };
}

// 10 PA-specific insider FAQs — zero overlap with NY/NJ/FL/AZ/TX/CA FAQ sets
const faqs = [
  {
    q: 'Does PennDOT really require a safety inspection within 10 days of registering a car I just shipped in?',
    a: 'Yes. PennDOT requires a safety inspection within 10 days of registration at an official inspection station. This is one of the strictest post-registration windows in the country. Schedule the inspection appointment before you register, not after, so you don\'t burn the clock. Confirm current rules at dmv.pa.gov.'
  },
  {
    q: 'How much does the PA Turnpike toll add to my carrier\'s cost on a cross-state run?',
    a: 'Multi-axle commercial carrier tolls on the Pennsylvania Turnpike are built into the broker\'s dispatch rate, not billed separately after booking. The full Turnpike west-to-east run (Ohio to NJ) costs commercial carriers roughly $200-$400 depending on axle count and E-ZPass status. On a 1,500-mile Florida shipment the toll is a small fraction of the total; on a short in-state hop the toll is a bigger relative factor.'
  },
  {
    q: 'Can carriers reach a pickup address in Lancaster County or Amish Country?',
    a: 'Yes, but with wider pickup windows than suburban addresses. Many Lancaster County pickups are off narrow rural roads where a full-size car carrier can\'t turn around. Expect the driver to stage pickup at a nearby parking lot (farm market, church, Turkey Hill, or Sheetz) and have you meet them. Allow 2 to 4 days of pickup window flexibility.'
  },
  {
    q: 'What happens if a snow event closes I-80 through the Poconos during my pickup window?',
    a: 'Carriers do not run active PennDOT road closures. Pocono snow events typically close I-80 for 4 to 24 hours. Expect a 1 to 2 day shift in your pickup window during January and February storms. Carriers reroute via I-78 or hold at a Pennsylvania Turnpike service plaza until the closure lifts. Weather delays are listed as non-penalty causes in standard carrier contracts.'
  },
  {
    q: 'Erie and Western PA snow belt — when should I actually book my pickup?',
    a: 'Lock in pickup by October 10 for Erie and the Western PA snow belt. Erie averages 101 inches of snow per year, more than Buffalo in some seasons, and the first serious lake-effect event often hits before Halloween. Carriers raise rates and widen pickup windows the moment major events forecast. Western PA snowbirds who book after November 1 routinely pay 15 to 20 percent more.'
  },
  {
    q: 'My Philadelphia pickup is a row house with no driveway. How does that work?',
    a: 'Row house blocks (Fishtown, Northern Liberties, South Philly, University City) rarely accommodate a full-size car carrier. The driver will coordinate a staging point on a nearby wide street (Broad Street, Columbus Boulevard, or a parking garage). You drive the car to the meeting point. Pickup typically completes within 20 to 45 minutes once the driver is on-site.'
  },
  {
    q: 'Can a carrier pick up from Mt. Washington, Squirrel Hill, or steep-grade Pittsburgh streets?',
    a: 'Steep Pittsburgh neighborhoods are challenging for full-size carriers. Mt. Washington\'s hairpin streets and Squirrel Hill\'s dense residential grid often require staging at a flat commercial lot (Waterfront, SouthSide Works, or a nearby grocery store). The driver may ask you to meet at the bottom of the hill rather than at your door. Confirm access with your dispatcher at booking.'
  },
  {
    q: 'State College and Penn State — is there a shipping-season cadence?',
    a: 'Yes. State College demand peaks mid-August (fall semester move-in), mid-December (winter break), and mid-May (spring semester end). Carrier supply tightens around move-in week in late August — book 3 to 4 weeks ahead if your dates overlap. Summer-session move-outs in early August and January winter-session returns are the shoulder windows with best pricing.'
  },
  {
    q: 'Scranton and Northeast PA ship a lot of snowbirds — any booking tricks?',
    a: 'Northeast PA (Scranton, Wilkes-Barre, Hazleton) has a strong 55+ community base concentrated in Pocono resort developments and Monroe County active-adult communities. Southbound Florida snowbird demand concentrates between October 15 and December 10. Routing is usually via I-81 south through Harrisburg, which keeps rates 10 to 15 percent below Philadelphia-origin equivalents.'
  },
  {
    q: 'If I ship into a PA county without emissions testing, do I escape the biennial emissions check?',
    a: 'Vehicle emissions testing applies to about 25 PA counties under the Drive Clean PA program. If your registered address is in a non-emissions county (most Central and Western rural counties), your vehicle is exempt from the biennial emissions test. Residency, not where you ship the car in, determines the requirement. Confirm your county\'s status at drivecleanpa.state.pa.us.'
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

export default function PennsylvaniaCarShippingPage() {
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
        { label: 'Pennsylvania' }
      ]} />

      {/* HERO — H1 primary only; direct answer sentence 1; PAS; primary in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">Pennsylvania Origin Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              Pennsylvania Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>Pennsylvania car shipping</strong> is really three different markets wearing one state name. Philadelphia runs on the East Coast I-95 corridor, Pittsburgh runs on Midwest-style I-70 and I-76 routing, and Central PA sits at the crossroads of I-81, I-80, and the Pennsylvania Turnpike. First-time shippers quoted a single &ldquo;Pennsylvania rate&rdquo; usually discover their actual pickup zip prices out quite differently. Add PennDOT&rsquo;s 10-day post-registration safety inspection rule, Erie lake-effect snow that beats Buffalo some winters, and a scattered 55+ snowbird population across the Poconos and NEPA, and PA shipping needs its own playbook.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request a Pennsylvania quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; Philadelphia row-house staging expertise</li>
              <li>&bull; Pittsburgh steep-grade carrier network</li>
              <li>&bull; PA Turnpike cross-state corridor coverage</li>
              <li>&bull; PennDOT inspection timing guidance</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Pennsylvania" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            The three Pennsylvanias: Philadelphia, Pittsburgh, Central
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              Pennsylvania car shipping splits into three distinct markets. Philadelphia and its suburbs ship on the East Coast I-95 corridor and behave like NJ or NY downstate. Pittsburgh and Western PA ship on Midwest-style routing via I-70 and I-79, with far more freight overlap with Ohio and West Virginia. Central PA — Harrisburg, State College, Lancaster, Scranton — sits at the junction of I-81, I-80, and the Pennsylvania Turnpike, with the state&rsquo;s broadest route options.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Each market has its own carrier supply pattern, pricing, and pickup conventions. Philadelphia quotes carry an urban-staging premium. Pittsburgh quotes reflect steep-grade pickup challenges and Rust Belt freight dynamics. Central PA runs the cheapest per mile because the carrier network overlaps three major interstate systems.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Timing differs by region. Western PA snowbirds book 2 to 3 weeks earlier than eastern PA because Erie’s lake-effect snow season starts in October. Philadelphia and Lehigh Valley residents can usually hold their southbound booking into late October without a supply crunch.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions matter most for first-time shippers and anyone with tight timing. A straightforward suburban Chester County pickup in April behaves like any suburban lane. The nuance shows up on urban Philadelphia pickups, steep Pittsburgh grades, Pocono winter transit, and Erie-area pre-snow booking. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "pennsylvania auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What does Pennsylvania auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Pennsylvania auto transport pricing lands in the middle of the Northeast range because the state offers three distinct corridor options. Short regional lanes (PA to NY, NJ, OH) run $400 to $750. Mid-Atlantic lanes (PA to VA, NC, SC) run $650 to $1,100. Florida lanes run $850 to $1,750 open depending on origin city. Cross-country Arizona lanes run $1,200 to $2,000.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: origin within PA (East Coast Philadelphia vs cross-state Pittsburgh), destination, timing (snowbird peak or shoulder), and transport type. Enclosed transport commonly runs 50 to 65 percent above open on Philadelphia routes, per published 2026 Sherpa data.
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
                <tr><td className="p-3">Philadelphia &rarr; Florida (I-95)</td><td className="p-3">1,050&ndash;1,250 mi</td><td className="p-3">$825&ndash;$1,575</td><td className="p-3">+$125&ndash;$275</td></tr>
                <tr><td className="p-3">Pittsburgh &rarr; Florida (I-77)</td><td className="p-3">1,000&ndash;1,200 mi</td><td className="p-3">$850&ndash;$1,600</td><td className="p-3">+$125&ndash;$250</td></tr>
                <tr><td className="p-3">Central PA &rarr; Florida (I-81)</td><td className="p-3">1,100&ndash;1,300 mi</td><td className="p-3">$800&ndash;$1,500</td><td className="p-3">+$100&ndash;$225</td></tr>
                <tr><td className="p-3">PA &rarr; Arizona (I-70 west)</td><td className="p-3">2,100&ndash;2,400 mi</td><td className="p-3">$1,200&ndash;$2,000</td><td className="p-3">+$150&ndash;$300</td></tr>
                <tr><td className="p-3">Pittsburgh &rarr; Texas (I-70 / I-44)</td><td className="p-3">1,400&ndash;1,500 mi</td><td className="p-3">$1,100&ndash;$1,800</td><td className="p-3">+$150&ndash;$275</td></tr>
                <tr><td className="p-3">Philadelphia enclosed to FL luxury</td><td className="p-3">1,050&ndash;1,250 mi</td><td className="p-3">$1,350&ndash;$2,350</td><td className="p-3">+$200&ndash;$400</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 per-mile averages and published guides from Sherpa Auto Transport and FreightWaves. Rates shift weekly with fuel, demand, and carrier supply; verify a current quote before booking.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the PA-to-FL lane is one of the densest in the country. Short-notice pickups work on this corridor in ways they don&rsquo;t on cross-country runs. Flexibility of 2 to 3 days on pickup typically saves 10 to 15 percent off the posted rate.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping from pennsylvania" + corridor framing */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping from Pennsylvania: I-95, I-76, I-70, and I-81
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping from Pennsylvania uses more interstate corridors than any other state in the Northeast. The Pennsylvania Turnpike (I-76/I-70/I-276) crosses the full width of the state and connects every major metro. Philadelphia feeds I-95. Pittsburgh feeds I-70, I-77, and I-79. Central PA sits on I-81 (north-south) and I-80 (east-west). Which highway your carrier takes depends more on your pickup zip code than your destination.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-95 (Philadelphia &rarr; Florida)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The East Coast backbone. Dense carrier supply year-round. Philadelphia to Miami runs about 1,200 miles, 3 to 7 days transit, $825 to $1,575 open per 2026 Sherpa data.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-77 (Pittsburgh &rarr; Southeast)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Pittsburgh’s preferred southbound Florida corridor. Runs through West Virginia and the Carolinas. Fewer tolls than I-95, denser Appalachian freight overlap, and typically 10 to 15 percent cheaper than Philadelphia-origin equivalents.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-70 / I-44 (PA &rarr; Southwest)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Pittsburgh’s dominant western route. Carries Pittsburgh and Western PA shipments to Texas, Arizona, and Southern California. 1,400 to 2,400 miles depending on destination.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-81 / PA Turnpike (Central PA hub)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Harrisburg, Scranton, State College, and Lancaster all feed I-81 and the PA Turnpike. Lowest per-mile rates in PA because carriers run full both directions on these corridors year-round.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            The PA Turnpike’s dedicated truck lanes in some segments move commercial traffic faster than passenger lanes during peak hours. Carriers familiar with the corridor use the dedicated lanes to meet transit windows that passenger-car drivers couldn’t replicate.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier&rsquo;s call. Weather, tolls, driver hours, and load mix drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "philadelphia car shipping" + unique Philly content */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Philadelphia car shipping and the row-house reality
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Philadelphia car shipping runs on the East Coast I-95 corridor with a layer of urban pickup complexity. The city’s row-house grid in neighborhoods like Fishtown, Northern Liberties, South Philly, University City, Fairmount, and Point Breeze rarely accommodates a full-size car carrier. Narrow one-way blocks and tight-packed parked cars force most urban Philadelphia pickups into a staged handoff.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">How Philadelphia row-house pickups work</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Driver confirms a staging point 24 to 48 hours ahead (parking lot, wide street, commercial zone)</li>
              <li>You drive the car to the staging point (typically 5 to 15 minutes from your door)</li>
              <li>Loading takes 20 to 45 minutes</li>
              <li>Suburban Philadelphia addresses (Main Line, Chester County, Bucks County) usually accept standard residential pickup</li>
              <li>Columbus Boulevard, Broad Street, and the airport area work as reliable staging zones</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Suburban Philadelphia and Main Line pickups (Bryn Mawr, Villanova, Haverford, Radnor, Wayne) usually behave like standard residential pickups. Carriers can access most Main Line driveways directly without staging. Chester County and Bucks County suburbs are the easiest Philadelphia-area pickups logistically.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For first-time Philadelphia shippers comparing broker and direct-carrier options, our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link> walks the trade-offs. Pickup-day prep is covered in our <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: brokers that promise &ldquo;door-to-door&rdquo; from a Fishtown, Point Breeze, or University City row house without caveats are misrepresenting what’s physically possible. Residential staging in city Philadelphia is the normal pattern, not an inconvenience.
          </p>
        </div>
      </section>

      {/* H2.5 — "pittsburgh car shipping" + unique Pittsburgh content */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Pittsburgh car shipping and the steep-grade neighborhood problem
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Pittsburgh car shipping has one pickup logistics challenge no other PA metro shares: steep urban grades. Mt. Washington, Squirrel Hill, Troy Hill, and Observatory Hill all feature streets too steep or too tight for a 75- to 80-foot full-size car carrier to safely navigate. Pittsburgh’s river-and-ridge geography is beautiful; it’s also the physical reason most urban city pickups stage at a flat commercial lot.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Common Pittsburgh staging options include The Waterfront in Homestead, SouthSide Works, Robinson Town Centre, and large grocery-store lots in East Liberty or Shadyside. The driver will coordinate the staging point 24 to 48 hours ahead based on your specific neighborhood.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Pittsburgh’s western suburbs (Cranberry, Robinson, Moon Township) and northern suburbs (Wexford, Mars, Zelienople) handle standard residential pickups easily. South Hills (Mt. Lebanon, Upper St. Clair, Bethel Park) are a mixed bag — most driveways work but tight residential streets occasionally force staging.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Pittsburgh regional pickup profile</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Downtown and urban neighborhoods: staging almost always required</li>
              <li>&bull; East End (Shadyside, East Liberty): usually staging</li>
              <li>&bull; South Hills: mixed; confirm with dispatcher</li>
              <li>&bull; North and West suburbs: standard residential works</li>
              <li>&bull; Southbound Florida corridor runs I-77 through West Virginia and the Carolinas</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For Pittsburgh snowbirds comparing drive-versus-ship on the Florida lane, our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link> walks the time-value math. First-time shippers should see our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Pittsburgh pricing often beats Philadelphia on equivalent-distance lanes because I-77 avoids the heavier East Coast toll structure. Don’t assume PA pricing is uniform across the state.
          </p>
        </div>
      </section>

      {/* H2.6 — PennDOT inspection + MVC window (unique to PA) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            PennDOT, the 10-day safety inspection, and the registration window
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Pennsylvania has one of the strictest post-registration inspection regimes in the country. PennDOT requires a safety inspection within 10 days of registering a vehicle at an official inspection station. The inspection covers lights, brakes, horn, tires, safety belts, exhaust, mirrors, suspension, turn signals, steering, glazing, wipers, and other major components. The clock starts the day you register, not the day you remember.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Third-party guides consistently cite a 20-day registration window for new PA residents from the date of residency. PennDOT&rsquo;s own moving-page guidance confirms the inspection timing but doesn&rsquo;t clearly publish a single registration deadline figure, so verify current rules at dmv.pa.gov before you depend on a specific date.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">PA vehicle transfer essentials</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; 20-day registration window (verify at dmv.pa.gov)</li>
              <li>&bull; Safety inspection within 10 days of registration at an official station</li>
              <li>&bull; Form MV-4ST plus out-of-state title and PA insurance proof</li>
              <li>&bull; Emissions inspection required in roughly 25 counties under Drive Clean PA</li>
              <li>&bull; AAA and other authorized agents handle registration for a $35-$55 service fee</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Returning snowbirds often arrive back in PA from Florida on a specific weekend and discover they have 10 days to find an inspection appointment. Schedule the inspection before the car arrives, not after — book an appointment with your mechanic at the same time you book the shipment. For a snowbird-specific prep walkthrough, our <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link> covers inspection prep.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the 10-day inspection rule applies to newly-registered vehicles. If your vehicle was already PA-registered and you simply shipped it back from Florida, no fresh inspection is required beyond your normal annual cycle.
          </p>
        </div>
      </section>

      {/* H2.7 — Service tier selection */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking a service tier for your Pennsylvania shipment
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most Pennsylvania shipments fit into one of four service choices. The right pick depends on car value, pickup location, and schedule firmness.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of PA shipments. Insurance limits of $100K to $250K per vehicle are typical.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer. Costs 50 to 65 percent more than open on Philadelphia routes per 2026 published data. Right for Main Line luxury vehicles, Fox Chapel Pittsburgh collectors, and anything over $75K.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Expedited (guaranteed pickup)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A locked pickup date rather than a 3- to 5-day window. Adds $150 to $400. Worth it when a closing, lease start, Penn State move-in, or flight date is fixed.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Terminal-to-terminal</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                You drop and collect at a staging yard (Philadelphia airport area, Pittsburgh airport area) rather than residential. Saves $75 to $200 for anyone with transportation flexibility.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value Main Line or Fox Chapel luxury runs, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on the PA-to-FL lanes. Peak-season carrier supply is deep enough on both I-95 and I-77 that a flexible 3-day pickup window usually matches on reliability without the premium.
          </p>
        </div>
      </section>

      {/* H2.8 — timing PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car from Pennsylvania?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Florida-bound snowbird shipments, the strongest booking weeks run late September through October 20 for Philadelphia and Central PA. Western PA snowbirds should book by October 10 because Erie-area lake-effect snow starts earlier than Philadelphia-area storms. Carrier supply tightens through late October statewide and compresses sharply in the first two weeks of November.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Smart PA weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late September</li>
                <li>Oct 1-20 (Erie by Oct 10)</li>
                <li>Late March</li>
                <li>Mid-April (NEPA)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Expensive weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Oct 25 &ndash; Nov 15</li>
                <li>Penn State move-in week</li>
                <li>Thanksgiving week</li>
                <li>Dec 20 &ndash; Jan 3</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Year-round sweet spot</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late January</li>
                <li>Mid-May</li>
                <li>Mid-September</li>
                <li>Late April (NEPA)</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a week-by-week year view, our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link> walks every month. For a timing-only decision on the southbound leg, the <Link href="/resources/when-to-ship-your-car-south-for-winter" className="text-brand-navy underline font-semibold">when to ship south</Link> guide walks the trade-offs.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Penn State move-in week (late August into early September) creates localized demand pressure on the State College and I-80 Central PA corridor. If your route touches Centre County in that window, add 2 to 3 days to pickup flexibility.
          </p>
        </div>
      </section>

      {/* H2.9 — NEPA / Scranton snowbird + Pocono weather (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Northeast PA snowbirds, the Poconos, and the I-81 cost advantage
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Northeast Pennsylvania (Scranton, Wilkes-Barre, Hazleton, Monroe County Poconos) has a disproportionate 55+ snowbird population concentrated in Pocono resort developments and Monroe County active-adult communities. The NEPA corridor ships south on I-81 through Harrisburg, Virginia, and Tennessee — a routing that keeps rates 10 to 15 percent below Philadelphia-origin equivalents on the same destination.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Pocono weather affects both pickup timing and transit. I-80 across the Poconos closes 1 to 3 times per typical winter for ice or snow events, usually for 4 to 24 hours at a time. Carriers reroute via I-78 or the PA Turnpike when I-80 closes. Build a 1 to 2 day buffer into January and February pickup windows and the lane behaves normally.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">NEPA booking advantages</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; I-81 corridor keeps rates below Philadelphia-origin runs</li>
              <li>&bull; Residential pickups work in most Pocono communities</li>
              <li>&bull; Standard snowbird cadence: Oct 15 southbound, April 15 northbound</li>
              <li>&bull; Pocono weather buffer: 1 to 2 days extra in Jan-Feb pickup windows</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For NEPA snowbirds comparing drive-versus-ship, our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown walks the shipping-both-legs math. For 55+ Pocono resort residents, our <Link href="/resources/55-plus-community-car-delivery" className="text-brand-navy underline font-semibold">55+ community delivery</Link> guide covers gate protocol.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the I-81 cost advantage holds for Florida and Southeast destinations. For Arizona and cross-country runs, NEPA routing merges onto I-70 west and converges with the standard PA Turnpike pattern, so the cost advantage shrinks.
          </p>
        </div>
      </section>

      {/* H2.10 — How we run the PA lane + destinations table */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the Pennsylvania lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal Pennsylvania shipments and run every major PA corridor daily during peak season. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, and on-time delivery history on I-95, I-77, I-70, I-81, and the Pennsylvania Turnpike. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          {destinationsShown.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-xl font-bold text-brand-navy">Popular Pennsylvania snowbird destinations</h3>
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
            <li>&bull; Philadelphia row-house staging expertise</li>
            <li>&bull; Pittsburgh steep-grade carrier network</li>
            <li>&bull; Erie snow-belt early-booking guidance</li>
            <li>&bull; NEPA / Pocono I-81 cost-advantage routing</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; PennDOT 10-day inspection timing coordination</li>
            <li>&bull; Insurance-claim advocacy on your behalf</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds weighing a return trip against a drive back, our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown walks the trade-offs. Hurricane-season Florida shippers can also see our <Link href="/resources/hurricane-season-florida-shipping" className="text-brand-navy underline font-semibold">hurricane season car shipping</Link> notes.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run on the PA-to-FL I-95 or I-77 lane with rigid dates, a direct carrier already running that corridor can sometimes beat our quote. For most Pennsylvania shipments and anything requiring Philadelphia or Pittsburgh urban staging, our broker model wins on reliability and claim support.
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
                Get your Pennsylvania car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a Pennsylvania specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Pennsylvania" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Pennsylvania car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases: PennDOT inspection timing, PA Turnpike toll mechanics, Lancaster Amish Country access, Pittsburgh steep grades, and the questions returning NEPA snowbirds actually ask us. For base cost and timing, see the sections above.
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
            Done right, Pennsylvania car shipping comes down to picking the right lane for the Pennsylvania you&rsquo;re shipping from. Philadelphia pickups need realistic staging plans. Pittsburgh pickups benefit from steep-grade-aware dispatchers. Central and NEPA runs cheapest on I-81 and should book earliest to beat Pocono winter weather. Match the plan to your pickup zip code and the shipment runs predictably. Request a free quote and a Pennsylvania specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get a Pennsylvania quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, PennDOT inspection rules, and emissions county assignments shift with policy &mdash; verify current pricing with your broker and current rules at dmv.pa.gov before pickup day.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car from Pennsylvania" />
    </>
  );
}
