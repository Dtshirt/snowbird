import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getStateBySlug, originStates } from '@/data/states';
import { getRoutesByOrigin } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';

const slug = 'maryland';

export function generateMetadata() {
  return {
    title: 'Maryland Car Shipping: Baltimore, DC Corridor, Shore',
    description:
      'Maryland car shipping guide — Baltimore/DC corridor, Eastern Shore logistics, VEIP emissions rules, and the new October 2026 MVA enforcement regime.',
    alternates: { canonical: `/states/${slug}` },
    openGraph: {
      title: 'Maryland Car Shipping: Baltimore, DC Corridor, Shore',
      description:
        'Three Maryland shipping zones with their own carrier dynamics — Baltimore/DC core, Eastern Shore seasonal reversal, and the Western Panhandle.',
      type: 'website'
    }
  };
}

// 10 MD-specific insider FAQs — zero overlap with NY/NJ/PA/MA/CT/FL/AZ/TX/CA FAQ sets
const faqs = [
  {
    q: 'What is "Plate Where You Live" and does it affect my car after shipping to Maryland?',
    a: 'Yes. Starting October 1, 2026, Maryland\'s Motor Vehicle Administration added enforcement teeth to the long-standing 60-day new-resident rule. Vehicles with out-of-state tags receive a written warning, then 60 days to come into compliance or claim an exemption. After that, fines of $7 per day accrue for up to 60 more days. If still unregistered after 120 days, local jurisdictions can tow, impound, or boot the vehicle. Confirm current enforcement at mva.maryland.gov.'
  },
  {
    q: 'When does the VEIP emissions notice actually arrive after I register in Maryland?',
    a: 'The MVA\'s new-resident page states the Vehicle Emissions Inspection Program (VEIP) notice arrives about three months after you register. The notice is separate from the safety inspection required at titling. VEIP testing applies in metro counties and the test runs about $30, biennially in most jurisdictions. Confirm your county\'s current VEIP schedule at mva.maryland.gov.'
  },
  {
    q: 'My pickup is a Baltimore row house in Federal Hill, Canton, or Fells Point. How does that work?',
    a: 'Row house blocks in Federal Hill, Canton, Fells Point, Mount Vernon, Hampden, and Patterson Park rarely accommodate a full-size car carrier. The driver stages at a nearby parking lot (Harbor East, Fort McHenry Park, or the Inner Harbor commercial zones). You drive the car to the meeting point. Pickup typically completes within 20 to 45 minutes once the driver is on-site.'
  },
  {
    q: 'How much does I-495 Beltway congestion add to a Montgomery or Prince George\'s County pickup?',
    a: 'I-495 Capital Beltway congestion is among the worst in the US during weekday rush (6-10 AM, 3-7 PM). Carriers familiar with the DC-adjacent lane schedule Montgomery County (Bethesda, Rockville, Potomac) and PG County pickups outside those windows. Expect 1 to 3 hour loading-time variance during peak congestion, not transit-time delay. Transit south from Capital Beltway exits is unaffected.'
  },
  {
    q: 'Can carriers reach Eastern Shore addresses across the Chesapeake Bay Bridge?',
    a: 'Yes. The William Preston Lane Jr. Memorial Bridge (US-50/301) accommodates full-size commercial carriers under standard clearance. Toll fees are built into the carrier dispatch rate. Expect occasional weekend summer traffic back-ups westbound (returning beach traffic) but weekday eastbound crossings are usually smooth. Ocean City snowbird pickups work year-round with the bridge crossing built into the quote.'
  },
  {
    q: 'Ocean City Maryland shipping — is the seasonal pattern different from the mainland?',
    a: 'Yes. Ocean City and the greater Eastern Shore have reverse seasonality from Baltimore and the DC corridor. Summer brings inbound vacation-home vehicle deliveries (June through August). Winter brings outbound snowbird shipments to Central Florida and the Space Coast (October through December). Spring sees the Florida return trip (April through May). Carrier supply follows the pattern — a November Ocean City pickup to Florida rides the main southbound wave with good supply.'
  },
  {
    q: 'Fort Meade, Andrews AFB, Pax River, Aberdeen — can carriers deliver on-base?',
    a: 'Yes with 48 to 72 hours of gate notice and valid base-access credentials. Military PCS shipments can be arranged through the installation Personal Property Office at government expense in some cases — check with your sponsor before booking commercially. For civilian deliveries to on-base housing or the Visitors Center, standard commercial carrier credentials get through the gate.'
  },
  {
    q: 'My Washington DC pickup is technically DC, not Maryland. Does that change anything?',
    a: 'Logistically no — DC and Maryland pickups ride the same carrier network and I-95/I-495 corridor. Rates are typically within $25-$75 of equivalent-distance Maryland pickups. DC residents\' registration and inspection rules fall under DC DMV, not Maryland MVA — if you\'re changing residency, consult the DC DMV directly rather than applying Maryland rules.'
  },
  {
    q: 'What about Western Maryland — Deep Creek Lake, Garrett County, Cumberland?',
    a: 'Western MD pickups work but take extra coordination. Full-size carriers can\'t navigate many narrow mountain roads around Deep Creek Lake or in the Garrett County backcountry. The driver typically stages at a town center (McHenry at Deep Creek, Cumberland commercial lots, Grantsville Route 219 lots). Winter snow adds further variability on rural driveway access. Allow 2 to 4 days of pickup window flexibility.'
  },
  {
    q: 'What\'s the MD titling excise tax when I register a vehicle I shipped in?',
    a: 'Maryland charges an excise tax at vehicle titling. Published guides cite rates in the 6% to 6.5% range depending on the source and year, so verify the current rate at mva.maryland.gov before budgeting. New residents may be eligible for a credit on taxes paid to another state or a reduced flat assessment — ask the MVA which benefit applies to your situation. The excise tax is separate from the registration fee.'
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

export default function MarylandCarShippingPage() {
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
        { label: 'Maryland' }
      ]} />

      {/* HERO — H1 primary only; direct answer sentence 1; PAS; primary in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">Maryland Origin Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              Maryland Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>Maryland car shipping</strong> prices below every other Northeast origin for the same Florida destinations — the state sits roughly 300 miles closer to central Florida than New York, and carriers run full both directions through the DC-Baltimore corridor year-round. That geographic edge is real but it comes with Maryland-specific friction most first-time shippers miss. The MVA just added fresh enforcement teeth to its 60-day new-resident rule starting October 2026, I-495 Beltway congestion rewrites loading windows, Baltimore row houses need staging like Philly, and Eastern Shore snowbird volume runs on a reverse seasonality from the mainland. This page walks the three Maryland markets, the Chesapeake Bay Bridge logistics, snowbird timing, and the fresh MVA rules every returning resident needs to know.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request a Maryland quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; Baltimore row-house staging expertise</li>
              <li>&bull; DC corridor and I-495 Beltway coverage</li>
              <li>&bull; Eastern Shore Chesapeake Bay logistics</li>
              <li>&bull; Military PCS: Fort Meade, Andrews, Pax River</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Maryland" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Three Maryland shipping zones: Baltimore/DC core, Eastern Shore, Western Panhandle
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              Maryland car shipping splits into three distinct markets. The Baltimore/DC corridor runs on dense carrier supply with urban staging in city neighborhoods and I-495 Beltway scheduling. The Eastern Shore (Annapolis, Ocean City, Easton, Salisbury, Chestertown, St. Michaels) runs on standard Chesapeake Bay Bridge access with reverse seasonality from the mainland. Western Maryland (Deep Creek Lake, Cumberland, Hagerstown, Frederick) runs on rural staging logistics tied closer to Pennsylvania than to Baltimore.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Each market has its own carrier network, pricing, and pickup conventions. Baltimore/DC quotes carry the most predictable East Coast pricing because the metro has the deepest carrier supply in the Mid-Atlantic. Eastern Shore quotes build in bridge-crossing time and seasonal direction. Western MD quotes assume staging and winter weather flexibility.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Timing varies by region. The DC corridor supports year-round volume driven by federal workforce transitions. Baltimore and Annapolis snowbird volume concentrates October through December southbound. Ocean City and Eastern Shore volume runs opposite — summer inbound, winter outbound to Florida. Western MD books earliest to beat the first Appalachian snow.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions matter most for first-time shippers and anyone with tight timing. A straightforward residential pickup in a Howard County driveway in April behaves like any suburban lane. The nuance shows up on urban Baltimore row houses, DC Beltway loading windows, Eastern Shore seasonal direction, and Western Maryland winter access. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "maryland auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What does Maryland auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Maryland auto transport prices run below every other Northeast origin on Florida lanes because MD sits closer to central Florida (roughly 950-1,100 miles depending on origin city). Short regional lanes (MD to VA, DE, PA) run $350 to $700. Mid-Atlantic lanes (MD to NC, SC, GA) run $500 to $900. Florida lanes run $800 to $1,700 open depending on origin and destination. Cross-country Arizona lanes run $1,200 to $2,000.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: pickup zip (Baltimore/DC straightforward, Eastern Shore with bridge, Western MD rural), destination within Florida, timing (snowbird peak or shoulder), and transport type. Enclosed transport runs 50 to 100 percent above open on MD routes consistent with 2026 published industry data.
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
                <tr><td className="p-3">MD &rarr; Florida (statewide avg)</td><td className="p-3">949 mi</td><td className="p-3">$996&ndash;$1,544</td><td className="p-3">+$125&ndash;$225</td></tr>
                <tr><td className="p-3">DC/MD &rarr; Miami</td><td className="p-3">1,056 mi</td><td className="p-3">$1,039&ndash;$1,729</td><td className="p-3">+$125&ndash;$275</td></tr>
                <tr><td className="p-3">DC/MD &rarr; Tampa</td><td className="p-3">902 mi</td><td className="p-3">$1,027&ndash;$1,609</td><td className="p-3">+$125&ndash;$225</td></tr>
                <tr><td className="p-3">DC/MD &rarr; Orlando</td><td className="p-3">846 mi</td><td className="p-3">$1,058&ndash;$1,613</td><td className="p-3">+$100&ndash;$225</td></tr>
                <tr><td className="p-3">Baltimore &rarr; Jacksonville</td><td className="p-3">746 mi</td><td className="p-3">$775&ndash;$1,100</td><td className="p-3">+$75&ndash;$175</td></tr>
                <tr><td className="p-3">MD &rarr; Arizona (I-70 / I-40)</td><td className="p-3">2,100&ndash;2,300 mi</td><td className="p-3">$1,200&ndash;$2,000</td><td className="p-3">+$175&ndash;$300</td></tr>
                <tr><td className="p-3">MD enclosed to FL luxury</td><td className="p-3">950&ndash;1,100 mi</td><td className="p-3">$1,350&ndash;$2,400</td><td className="p-3">+$200&ndash;$400</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against published 2026 FreightWaves and Sherpa data for MD lanes. Rates shift weekly with fuel, demand, and carrier supply; verify a current quote before booking.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the Baltimore-to-Jacksonville sub-lane prices unusually low because carriers already head south from the DC federal-workforce freight pipeline. This is one of the cheapest I-95 Northeast-to-Florida sub-corridors in the country.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping from maryland" + corridor framing */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping from Maryland: I-95, I-495, and the Chesapeake crossing
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping from Maryland rides on three primary corridors. I-95 runs north-south through Baltimore and into DC’s Beltway system — the dominant Florida southbound lane. The Capital Beltway (I-495) connects every DC-adjacent suburb and feeds I-95 south at College Park and south of Alexandria. The William Preston Lane Jr. Memorial Bridge (US-50/301, &ldquo;Bay Bridge&rdquo;) connects Baltimore and Annapolis to the Eastern Shore across the Chesapeake Bay.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-95 (Florida corridor)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The East Coast backbone. Baltimore to Miami runs about 1,100 miles, 2 to 7 days transit, $900 to $1,600 open. Dense carrier supply year-round in both directions.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-495 Capital Beltway</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Feeds all DC-adjacent pickups into I-95 south. Among the most congested segments in the US during weekday rush. Carriers schedule DC-area loading between 10 AM and 2 PM to avoid peaks.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">US-50/301 Bay Bridge (Eastern Shore)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The mandatory Chesapeake crossing for Eastern Shore pickups. Standard commercial clearance accommodates full-size carriers. Weekend summer back-ups (westbound Sunday beach returns) can add 60 to 90 minutes.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-70 / I-68 (Western MD / cross-country)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Western MD routes via I-70 west or I-68 across the Appalachians. The common first leg for Arizona and Texas shipments. Weather closures in winter affect transit by 4 to 24 hours.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Maryland’s I-95 express toll lanes (near Baltimore) and the DC-area HOT lanes don’t typically apply to commercial carriers. Carriers use the general-purpose lanes and schedule around congestion rather than paying toll premiums.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier&rsquo;s call. Weather, tolls, driver hours, and load mix drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "baltimore car shipping" + urban reality */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Baltimore car shipping and the Charm City row-house grid
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Baltimore car shipping shares one pattern with Philadelphia: the city’s dense row-house blocks in Federal Hill, Canton, Fells Point, Mount Vernon, Hampden, Patterson Park, and much of South Baltimore rarely accommodate a full-size car carrier. Narrow one-way streets and parked cars force most urban Baltimore pickups into a staged handoff at a nearby lot.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">How Baltimore row-house pickups work</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Driver confirms a staging point 24 to 48 hours ahead (parking lot, Harbor East, Fort McHenry Park area)</li>
              <li>You drive the car to the staging point (typically 5 to 15 minutes from your door)</li>
              <li>Loading takes 20 to 45 minutes</li>
              <li>Suburban Baltimore (Towson, Timonium, Pikesville, Owings Mills, Catonsville) usually accept standard residential dispatch</li>
              <li>Howard County and Anne Arundel County suburbs are the easiest Baltimore-area pickups logistically</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Suburban Baltimore pickups (Towson, Timonium, Lutherville, Pikesville, Owings Mills, Catonsville, Columbia, Ellicott City) usually behave like standard residential pickups. Carriers can access most suburban driveways directly without staging. The Howard County and Anne Arundel suburbs are the easiest Baltimore-area pickups logistically and often price slightly below city pickups.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For first-time Baltimore shippers comparing broker and direct-carrier options, our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link> walks the trade-offs. Pickup-day prep is covered in our <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: brokers that promise &ldquo;door-to-door&rdquo; from a Federal Hill or Canton row house without caveats are overselling what&rsquo;s physically possible. Staging isn’t an inconvenience — it&rsquo;s the normal pattern for Baltimore city auto transport.
          </p>
        </div>
      </section>

      {/* H2.5 — "eastern shore car shipping" + unique seasonal reversal */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Eastern Shore car shipping and the reverse seasonality
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Eastern Shore car shipping has one dynamic the rest of Maryland doesn’t: reverse seasonality. The Eastern Shore (Annapolis, Easton, Oxford, St. Michaels, Chestertown, Salisbury, Ocean City, Rehoboth-adjacent Fenwick Island) runs on heavy summer inbound traffic (vacation homes, beach rentals) and heavy winter outbound traffic (snowbird departures to Florida). Spring and fall are the shoulders.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Ocean City specifically has a well-developed 55+ snowbird community base concentrated in Montego Bay, Caine Woods, West Ocean City, and Berlin-area active-adult developments. The snowbird destination skew runs heavily to Central Florida, Tampa Bay, and the Space Coast rather than the SE Florida Gold Coast favored by Northeast origins.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Eastern Shore seasonal cadence</div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>Summer inbound: Jun through Aug (vacation homes)</li>
              <li>Fall outbound: Oct 15 to Dec 15 (snowbird peak)</li>
              <li>Spring return: Apr 1 to May 15</li>
              <li>Winter shoulder: Jan to Feb (lowest supply)</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Round-trip bookings covering both the southbound and northbound legs often save 10 to 15 percent on the combined price. For the trade-off, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown. For 55+ Ocean City snowbirds, our <Link href="/resources/55-plus-community-car-delivery" className="text-brand-navy underline font-semibold">55+ community delivery</Link> guide covers gatehouse protocol.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Chesapeake Bay Bridge weekend summer traffic (especially westbound Sundays) can delay carrier staging on Eastern Shore pickups between late May and Labor Day. Weekday morning pickups avoid most bridge-related delays.
          </p>
        </div>
      </section>

      {/* H2.6 — Military PCS angle (unique) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Fort Meade, Andrews, Pax River, Aberdeen: Maryland military PCS lanes
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Maryland hosts one of the densest clusters of military and intelligence installations in the US. Fort Meade (NSA, DISA, US Cyber Command), Joint Base Andrews, NAS Patuxent River, Aberdeen Proving Ground, Fort Detrick, and the US Naval Academy at Annapolis all cycle through Permanent Change of Station (PCS) orders year-round, with the heaviest window in May through August.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Military PCS shipments can be arranged through the installation Personal Property Office at government expense in some cases. Civilian commercial shipments to on-base housing or Visitors Center drop-off are straightforward with 48 to 72 hours of gate notice and valid base-access credentials for the carrier driver.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Maryland military installations we work</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Fort Meade (Anne Arundel County)</li>
              <li>&bull; Joint Base Andrews (Prince George&rsquo;s County)</li>
              <li>&bull; NAS Patuxent River (St. Mary’s County)</li>
              <li>&bull; Aberdeen Proving Ground (Harford County)</li>
              <li>&bull; US Naval Academy (Annapolis)</li>
              <li>&bull; Fort Detrick (Frederick County)</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            PCS summer peak lifts military-adjacent zip codes by 10 to 15 percent on open transport and widens pickup windows by 1 to 2 days. Book 4 to 6 weeks ahead for May-through-August military moves. For EV owners handling PCS logistics, see our <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline font-semibold">EV shipping notes</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: PCS reimbursement rates and private-move eligibility change with federal policy. Confirm current benefits with your installation Personal Property Office before booking commercially.
          </p>
        </div>
      </section>

      {/* H2.7 — Service tier selection */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking a service tier for your Maryland shipment
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most Maryland shipments fit into one of four service choices. The right pick depends on car value, pickup location, and schedule firmness.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of Maryland shipments. Insurance limits of $100K to $250K per vehicle are typical.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer. Costs 50 to 100 percent more than open. Right for Potomac, Bethesda, Chevy Chase, and Annapolis luxury vehicles. Insurance limits reach $1M+ per vehicle.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Expedited (guaranteed pickup)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A locked pickup date rather than a 3- to 5-day window. Adds $150 to $400. Worth it when a PCS orders date, closing, or flight is fixed.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Terminal-to-terminal</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                You drop and collect at a staging yard (BWI area, Jessup, Dulles-adjacent for DC pickups) rather than residential. Saves $75 to $200 for anyone with transportation flexibility.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value Potomac or Annapolis luxury runs, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on the MD-to-FL lane. Peak-season carrier supply on I-95 is deep enough that a flexible 2- to 3-day pickup window usually matches on reliability without the premium.
          </p>
        </div>
      </section>

      {/* H2.8 — timing PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car from Maryland?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Florida-bound snowbird shipments, the strongest booking weeks run late September through October 25. Carrier supply tightens through late October and compresses sharply in the first two weeks of November. Military PCS summer peak (May through August) creates demand on all installation-adjacent pickups statewide.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Smart MD weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late September</li>
                <li>Oct 1-25</li>
                <li>Late February</li>
                <li>Mid-April (return)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Expensive weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Oct 25 &ndash; Nov 15</li>
                <li>Military PCS peak (Jun-Aug)</li>
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
                <li>Early March (shoulder)</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a week-by-week year view, our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link> walks every month. For a timing-only decision on the southbound leg, the <Link href="/resources/when-to-ship-your-car-south-for-winter" className="text-brand-navy underline font-semibold">when to ship south</Link> guide walks the trade-offs.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the May-through-August PCS peak is distinct from snowbird peak. If your MD pickup is tied to military orders, book around the installation Personal Property Office cycle, not the snowbird calendar.
          </p>
        </div>
      </section>

      {/* H2.9 — MVA + Plate Where You Live (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            MVA, VEIP, and &ldquo;Plate Where You Live&rdquo;: the October 2026 enforcement reset
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Maryland’s Motor Vehicle Administration (MVA — Maryland’s DMV equivalent) just added enforcement teeth to its long-standing 60-day new-resident vehicle registration rule. Effective October 1, 2026, the state rolled out &ldquo;Plate Where You Live,&rdquo; a program that pairs out-of-state tag detection with staged fines and jurisdictional enforcement.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Plate Where You Live enforcement schedule</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Day 0: Written warning issued, 60 days to register or claim exemption</li>
              <li>&bull; Days 60-120: $7 per day fine accrues (up to $420 over 60 days)</li>
              <li>&bull; Day 120+: Local jurisdictions can tow, impound, or boot the vehicle</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Returning snowbirds who establish Florida residency during winter and come back to Maryland as returning residents need to pay attention to the clock. The 60-day window starts from residency establishment, not from the day the car arrives on Maryland soil.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">MD vehicle transfer essentials</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; 60-day registration window from residency establishment</li>
              <li>&bull; VEIP (Vehicle Emissions Inspection Program) notice arrives about 3 months after registration</li>
              <li>&bull; VEIP test cost around $30, biennial in most covered counties</li>
              <li>&bull; Safety inspection required at titling at a Maryland authorized inspection station</li>
              <li>&bull; Titling excise tax applies (currently 6% to 6.5% range per published guides; verify at mva.maryland.gov)</li>
              <li>&bull; New-resident credit may apply for taxes paid to another state</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds working through residency decisions, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> walks the prep basics. Verify every rule above at mva.maryland.gov before planning around a specific deadline.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Plate Where You Live is new as of October 2026. Enforcement patterns and jurisdictional application will evolve in the first year of the program. Residency is a separate tax and legal question — consult an accountant, not a car shipper, on the residency piece.
          </p>
        </div>
      </section>

      {/* H2.10 — How we run the MD lane + destinations table */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the Maryland lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird, PCS, and seasonal Maryland shipments and run the I-95 corridor and I-495 Beltway daily during peak season. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, base-access credentials for military installations, and on-time delivery history. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          {destinationsShown.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-xl font-bold text-brand-navy">Popular Maryland snowbird destinations</h3>
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
            <li>&bull; Baltimore row-house staging expertise</li>
            <li>&bull; DC Beltway loading-window scheduling</li>
            <li>&bull; Eastern Shore Bay Bridge logistics</li>
            <li>&bull; Fort Meade / Andrews / Pax River / Aberdeen PCS experience</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; Central Florida / Tampa / Space Coast specialist lane</li>
            <li>&bull; Plate Where You Live and MVA guidance</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds weighing a return trip against a drive back, our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown walks the trade-offs. Hurricane-season Florida shippers should also see our <Link href="/resources/hurricane-season-florida-shipping" className="text-brand-navy underline font-semibold">hurricane season car shipping</Link> notes.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run on the MD-to-FL I-95 lane with rigid dates, a direct carrier already running that corridor can sometimes beat our quote. For most Maryland shipments, military PCS logistics, and anything requiring Baltimore city staging or Eastern Shore timing, our broker model wins on reliability and claim support.
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
                Get your Maryland car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a Maryland specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Maryland" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Maryland car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases: the October 2026 Plate Where You Live enforcement, VEIP emissions timing, Baltimore row-house pickup, I-495 Beltway congestion, Eastern Shore reverse seasonality, and the military PCS questions snowbirds and relocating families ask us. For base cost and timing, see the sections above.
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
            Done right, Maryland car shipping comes down to picking the right lane for the Maryland you&rsquo;re shipping from. Baltimore city pickups need realistic staging plans. DC-adjacent suburbs need off-peak Beltway loading windows. Eastern Shore pickups time around the Bay Bridge and the reverse seasonality. Military PCS lanes need base-access carrier credentials. Returning residents watch the October 2026 Plate Where You Live clock. Match the plan to your pickup zip and the shipment runs predictably. Request a free quote and a Maryland specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get a Maryland quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, MVA rules, and Plate Where You Live enforcement shift with policy &mdash; verify current pricing with your broker and current rules at mva.maryland.gov before pickup day.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car from Maryland" />
    </>
  );
}
