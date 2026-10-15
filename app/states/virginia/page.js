import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getStateBySlug, originStates } from '@/data/states';
import { getRoutesByOrigin } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';

const slug = 'virginia';

export function generateMetadata() {
  return {
    title: 'Virginia Car Shipping: NoVA, Richmond, Hampton Roads',
    description:
      'Virginia car shipping guide — NoVA federal-workforce lane, Hampton Roads Navy PCS, Shenandoah I-81 routing, and the annual safety inspection rule.',
    alternates: { canonical: `/states/${slug}` },
    openGraph: {
      title: 'Virginia Car Shipping: NoVA, Richmond, Hampton Roads',
      description:
        'Four Virginia shipping markets with their own carrier dynamics — DC-adjacent federal pipeline, Richmond central, Hampton Roads Navy, and the Shenandoah Valley.',
      type: 'website'
    }
  };
}

// 10 VA-specific insider FAQs — zero overlap with any prior state FAQ set
const faqs = [
  {
    q: 'Does Virginia really require an annual safety inspection on every registered vehicle?',
    a: 'Yes. Virginia is one of the few states that still requires an annual safety inspection on every registered passenger vehicle. The inspection covers brakes, lights, steering, suspension, tires, horn, mirrors, windshield wipers, and exhaust. You display a current sticker on the windshield. Driving without a current sticker can result in a ticket. Find inspection stations through the Virginia State Police or at most repair shops.'
  },
  {
    q: 'Which Northern Virginia counties and cities require emissions testing?',
    a: 'Emissions testing applies in Arlington, Fairfax, Loudoun, Prince William, and Stafford counties, plus the cities of Alexandria, Fairfax, Falls Church, Manassas, and Manassas Park. Motorcycles are exempt. If your vehicle already has a valid emissions certificate from the last 12 months, you may be able to register in Virginia without a new test — confirm the exception with Virginia DMV before scheduling.'
  },
  {
    q: 'Can carriers reach Virginia Eastern Shore addresses across the Chesapeake Bay Bridge-Tunnel?',
    a: 'Yes. The Chesapeake Bay Bridge-Tunnel (CBBT, US-13) accommodates full-size commercial carriers and connects Virginia Beach / Norfolk to the Eastern Shore (Cape Charles, Chincoteague, Onancock). The toll is built into the carrier dispatch rate. CBBT occasionally restricts high-profile vehicles during high wind events — carriers monitor the current restriction status before dispatching Eastern Shore runs.'
  },
  {
    q: 'My pickup is on Norfolk Naval Base or Little Creek. How does on-base delivery work?',
    a: 'Norfolk is the world\'s largest naval base and carriers familiar with the lane know the Visitor Control Center protocols. On-base delivery requires 48 to 72 hours of gate notice and valid base-access credentials for the carrier driver. For PCS shipments, your installation Personal Property Office handles government-arranged transport in some cases — check before booking commercially. The same protocol applies to Oceana, Dam Neck, and Naval Weapons Station Yorktown.'
  },
  {
    q: 'Pentagon, Quantico, Fort Belvoir, Langley, Fort Gregg-Adams — can carriers reach any of them?',
    a: 'Yes, with 48 to 72 hours of gate notice and valid base-access credentials. Pentagon and civilian federal workforce pickups near Crystal City or Rosslyn ride the same carrier network as NoVA. The May-August PCS peak lifts prices 10 to 15 percent on all installation-adjacent zip codes. Fort Gregg-Adams (formerly Fort Lee, renamed 2023) in Prince George County handles Army PCS south of Richmond.'
  },
  {
    q: 'My pickup is in Richmond\'s Fan District or Church Hill. How does that work?',
    a: 'The Fan District, Church Hill, Shockoe Bottom, and Carytown row-house blocks rarely accommodate a full-size car carrier. The driver stages at a nearby commercial lot (Carytown Kroger, Byrd Park, Scott\'s Addition) and has you drive the car to the meeting point. Suburban Richmond (Short Pump, Glen Allen, Chesterfield, Midlothian) usually accepts standard residential dispatch directly from the driveway.'
  },
  {
    q: 'Can I use Dulles or Reagan National as a staging zone for a NoVA pickup?',
    a: 'Not inside the terminal zones — airport parking isn\'t set up for commercial vehicle loading. Carriers often stage near Dulles at Chantilly commercial lots, and near Reagan at Crystal City or Pentagon City park-and-ride lots. If you\'re flying south and need to coordinate airport-adjacent pickup, confirm the specific staging address at booking rather than assuming "Dulles drop-off" works.'
  },
  {
    q: 'What\'s the Virginia Motor Vehicle Sales and Use Tax on a car I just shipped in?',
    a: 'Virginia charges a 4.15% Motor Vehicle Sales and Use Tax on vehicles not previously titled in Virginia, with a minimum assessment. The tax is paid at titling, before registration. New residents who paid sales tax to another state may be eligible for a credit — ask Virginia DMV which benefit applies to your situation. Verify current rates and credits at dmv.virginia.gov before budgeting.'
  },
  {
    q: 'Can carriers reach Shenandoah Valley addresses off I-81 in Harrisonburg, Lexington, or Winchester?',
    a: 'Yes. Shenandoah Valley pickups work well with standard residential dispatch along the I-81 corridor. Rural addresses off narrow country roads sometimes require staging at a nearby town center (Harrisonburg JMU-area lots, Winchester Loudoun Street, Lexington visitor center area). Winter weather on Afton Mountain (I-64) adds variability — allow 2 to 4 days of pickup window flexibility in January-February.'
  },
  {
    q: 'Hampton Roads has the Port of Virginia — any difference for imported vehicle pickup?',
    a: 'Yes. Port of Virginia (Norfolk International Terminals, Virginia International Gateway) handles roll-on/roll-off vehicle imports. Imported vehicles come off the ship into a bonded yard, clear customs with a licensed broker (3 to 10 business days), then move to a staging lot for auto transport pickup. Carriers that specialize in port deliveries hold TWIC credentials for restricted terminal access. Expect $150-$400 above standard rates plus customs broker fees.'
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

export default function VirginiaCarShippingPage() {
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
        { label: 'Virginia' }
      ]} />

      {/* HERO — H1 primary only; direct answer sentence 1; PAS; primary in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">Virginia Origin Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              Virginia Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>Virginia car shipping</strong> benefits from one geographic reality every northern-origin shipper envies — the state sits closer to Florida than almost any other I-95 origin, and carriers run the lane full both directions year-round. But Virginia also packs more distinct shipping markets into one state than most of the Northeast combined. Northern Virginia feeds the federal workforce pipeline. Richmond sits at the central I-95 crossroads. Hampton Roads anchors the world&rsquo;s largest naval base and the busiest East Coast military PCS corridor. The Shenandoah Valley runs on I-81 rural logistics. Add Virginia&rsquo;s annual safety inspection — one of the strictest in the US — and NoVA’s county-specific emissions rules, and VA shipping needs its own regional playbook.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request a Virginia quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; NoVA federal-workforce specialists</li>
              <li>&bull; Hampton Roads Navy PCS experience</li>
              <li>&bull; I-95 and I-81 corridor coverage</li>
              <li>&bull; Annual safety inspection guidance</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Virginia" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Four Virginias: NoVA, Richmond, Hampton Roads, Shenandoah Valley
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              Virginia car shipping splits into four distinct markets. Northern Virginia (Arlington, Alexandria, Fairfax, Loudoun, Prince William) runs on dense DC-adjacent carrier supply with federal-workforce PCS and civilian-relocation volume. Richmond and central Virginia sit at the I-95 crossroads with the state’s most predictable pricing. Hampton Roads (Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton) runs on heavy Navy military PCS cycles plus Port of Virginia imports. The Shenandoah Valley and Western VA (Winchester, Harrisonburg, Staunton, Roanoke, Lexington) ride the I-81 corridor with rural staging logistics.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Each market has its own carrier network and seasonal cadence. NoVA quotes build in Beltway congestion scheduling. Richmond quotes are the most predictable statewide. Hampton Roads quotes assume base-access protocols and summer PCS peak. Shenandoah Valley quotes work with staging flexibility and winter mountain-pass awareness on I-64 and I-66.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Virginia is unusual in that it ships both snowbirds (October-December southbound to Florida, April-May northbound) and military PCS (May-August peak). The combined demand pattern keeps carrier supply strong year-round rather than peaking only in snowbird season.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions matter most for first-time shippers and anyone with tight timing. A straightforward residential pickup in a Chesterfield driveway in April behaves like any suburban lane. The nuance shows up on NoVA Beltway loading, Hampton Roads base access, Richmond urban staging, and Shenandoah Valley rural pickup. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "virginia auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What does Virginia auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Virginia auto transport prices among the lowest on the I-95 Northeast-to-Florida corridor because the state sits roughly 900 miles from central Florida — a shorter run than any origin north of Virginia. Short regional lanes (VA to NC, DC, MD) run $300 to $650. Mid-South lanes (VA to GA, SC) run $500 to $900. Florida lanes run $750 to $1,575 open depending on origin city. Cross-country Arizona lanes run $1,200 to $2,000.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: pickup region (NoVA straightforward, Hampton Roads base-aware, Richmond central, Shenandoah rural), destination in Florida, timing (snowbird peak, PCS peak, or shoulder), and transport type.
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
                <tr><td className="p-3">Virginia &rarr; Florida (statewide avg)</td><td className="p-3">894 mi</td><td className="p-3">$750&ndash;$1,075</td><td className="p-3">+$100&ndash;$225</td></tr>
                <tr><td className="p-3">Virginia Beach &rarr; Jacksonville</td><td className="p-3">~525 mi</td><td className="p-3">$650&ndash;$950</td><td className="p-3">+$75&ndash;$175</td></tr>
                <tr><td className="p-3">Virginia Beach &rarr; Miami</td><td className="p-3">~1,000 mi</td><td className="p-3">$869&ndash;$1,181</td><td className="p-3">+$125&ndash;$225</td></tr>
                <tr><td className="p-3">Richmond &rarr; Tampa</td><td className="p-3">~900 mi</td><td className="p-3">$850&ndash;$1,250</td><td className="p-3">+$125&ndash;$225</td></tr>
                <tr><td className="p-3">NoVA &rarr; SE Florida (I-95)</td><td className="p-3">1,000&ndash;1,100 mi</td><td className="p-3">$950&ndash;$1,400</td><td className="p-3">+$150&ndash;$275</td></tr>
                <tr><td className="p-3">VA &rarr; Arizona cross-country</td><td className="p-3">2,200&ndash;2,400 mi</td><td className="p-3">$1,200&ndash;$2,000</td><td className="p-3">+$175&ndash;$300</td></tr>
                <tr><td className="p-3">VA enclosed to FL luxury</td><td className="p-3">900&ndash;1,100 mi</td><td className="p-3">$1,250&ndash;$2,100</td><td className="p-3">+$200&ndash;$400</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 FreightWaves and Sherpa published data for Virginia lanes. Rates shift weekly with fuel, demand, and carrier supply; verify a current quote before booking.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Virginia Beach to Jacksonville is one of the cheapest I-95 Northeast-to-Florida sub-lanes in the country because carriers run full both directions on the Hampton Roads to Jacksonville Navy and port-adjacent freight pipeline.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping from virginia" + corridor framing */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping from Virginia: I-95, I-81, I-64, and the Beltway factor
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping from Virginia uses three primary interstate corridors. I-95 runs north-south through NoVA, Richmond, and down to the Carolinas as the Florida backbone. I-81 runs down the Shenandoah Valley through Winchester, Harrisonburg, and Roanoke to Tennessee. I-64 cuts east-west across the state connecting Hampton Roads to Richmond to the Shenandoah Valley. The Capital Beltway (I-495) and I-395 feed every NoVA pickup into the main southbound flow.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-95 (NoVA / Richmond &rarr; Florida)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The East Coast backbone. NoVA to Miami runs about 1,100 miles, 2 to 7 days transit, $950 to $1,400 open. Richmond to Florida runs about 900 miles. Dense carrier supply year-round.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-81 (Shenandoah Valley)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Winchester to Bristol via Harrisonburg, Staunton, and Roanoke. Lower congestion than I-95 but longer transit to Florida. Common for Tennessee, Carolinas, and Southeast destinations.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-64 (east-west)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Hampton Roads to Richmond to Charlottesville to the Shenandoah Valley. Afton Mountain west of Charlottesville adds winter weather variability. Common first leg for cross-country Arizona and California moves.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-495 Capital Beltway</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Feeds all NoVA pickups into I-95 south. Weekday rush congestion is severe (6-10 AM, 3-7 PM). Carriers schedule NoVA loading between 10 AM and 2 PM to avoid peaks.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            NoVA pickups benefit from mid-morning or early-afternoon loading windows when the Beltway and I-395 flow at closer to posted speeds. Carriers familiar with the corridor build this into their dispatch from the start.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier&rsquo;s call. Weather, tolls, driver hours, and load mix drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "northern virginia car shipping" + unique NoVA federal angle */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Northern Virginia car shipping and the federal workforce pipeline
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Northern Virginia car shipping serves one of the densest federal civilian and military workforces in the country. Arlington, Alexandria, Fairfax, Loudoun, Prince William, and Stafford counties host the Pentagon, Quantico Marine Corps Base, Fort Belvoir, the FBI Academy, CIA headquarters at Langley, and thousands of federal contractors. The resulting PCS and civilian-relocation volume keeps carriers running the NoVA-to-Florida and NoVA-to-cross-country lanes at near-full capacity year-round.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            NoVA ships on standard suburban residential pickup logistics with one layer added: Beltway congestion scheduling. Full-size carriers can’t navigate I-495 or I-395 during rush hour without major transit delays, so loading windows cluster between 10 AM and 2 PM. Residential driveways across Vienna, Reston, Herndon, Centreville, Burke, and Springfield handle direct pickup without staging.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">NoVA pickup profile</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Suburban residential pickup works for most addresses</li>
              <li>&bull; Loading windows: 10 AM to 2 PM to avoid Beltway peaks</li>
              <li>&bull; Pentagon, Quantico, Fort Belvoir, Langley: 48-72 hour gate notice</li>
              <li>&bull; Emissions testing required (Arlington, Fairfax, Loudoun, PW, Stafford counties)</li>
              <li>&bull; Dulles / Reagan National: airport-adjacent commercial staging, not terminal</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For federal workforce PCS, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> walks the prep basics. EV owners heading cross-country should see our <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline font-semibold">EV shipping notes</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: federal workforce PCS reimbursement rates and private-move eligibility change with policy. Confirm current benefits with your personnel office before booking commercially.
          </p>
        </div>
      </section>

      {/* H2.5 — "richmond car shipping" + unique central-corridor content */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Richmond car shipping and the quieter I-95 crossroads
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Richmond car shipping runs on the state&rsquo;s most predictable corridor. Sitting at the I-95/I-64/I-295 crossroads with no Beltway friction and no military-base access complexity, Richmond and the surrounding counties (Chesterfield, Henrico, Hanover) deliver straightforward residential pickup pricing. Suburban Richmond (Short Pump, Glen Allen, Midlothian, Mechanicsville) accepts standard dispatch directly from the driveway.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Richmond’s urban row-house grid — the Fan District, Church Hill, Shockoe Bottom, Carytown, and parts of Jackson Ward — follows the same staging reality as Baltimore and Philadelphia. Full-size carriers can’t navigate narrow one-way blocks, so pickups stage at nearby commercial lots (Carytown Kroger, Scott\'s Addition, Byrd Park, Rockwood Park area). Suburban Richmond pickups work without staging.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Richmond market advantages</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Standard residential pickup across suburban counties</li>
              <li>&bull; I-95 south is a direct, uncongested routing to Florida</li>
              <li>&bull; No emissions inspection required</li>
              <li>&bull; Pricing typically below NoVA on the same destination</li>
              <li>&bull; Petersburg and Hopewell share the Richmond carrier network</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For Richmond snowbirds comparing drive-versus-ship on the Florida lane, our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link> walks the time-value math. For round-trip booking logic across both legs, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Fort Gregg-Adams (formerly Fort Lee) in Prince George County south of Richmond adds a PCS peak during May-August that lifts installation-adjacent pricing. Non-military Richmond pickups aren’t affected.
          </p>
        </div>
      </section>

      {/* H2.6 — Hampton Roads Navy / PCS angle (unique) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Hampton Roads, Norfolk Navy, and the East Coast PCS corridor
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Hampton Roads (Virginia Beach, Norfolk, Chesapeake, Portsmouth, Newport News, Hampton, Suffolk) hosts the world’s largest naval base — Naval Station Norfolk — plus NAS Oceana, Little Creek, Dam Neck, Langley AFB, Fort Eustis, Yorktown Naval Weapons Station, and the Marine Corps installations across the Hampton Roads region. The result is one of the highest-density military PCS corridors in the US.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            PCS summer peak (May through August) lifts military-adjacent zip codes by 10 to 15 percent on open transport and widens pickup windows by 1 to 2 days. Carriers that specialize in the Hampton Roads lane know Visitor Control Center gate protocols at every major installation. Civilian commercial shipments to on-base housing are straightforward with 48 to 72 hours of gate notice.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Hampton Roads military installations</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Naval Station Norfolk (world\'s largest Navy base)</li>
              <li>&bull; NAS Oceana (Virginia Beach, F/A-18 strike fighter)</li>
              <li>&bull; Joint Expeditionary Base Little Creek-Fort Story</li>
              <li>&bull; Dam Neck Annex (Virginia Beach)</li>
              <li>&bull; Langley AFB (Hampton, F-22 Raptor)</li>
              <li>&bull; Fort Eustis (Newport News, Army Transportation)</li>
              <li>&bull; Naval Weapons Station Yorktown</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Hampton Roads also hosts the Port of Virginia — Norfolk International Terminals and Virginia International Gateway — which handles roll-on/roll-off vehicle imports. Imported vehicles come off the ship into a bonded yard, clear customs with a licensed broker, then move to a staging lot for auto transport pickup. For first-time Hampton Roads shippers, our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link> walks the trade-offs.
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
            Picking a service tier for your Virginia shipment
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most Virginia shipments fit into one of four service choices. The right pick depends on car value, pickup location, and schedule firmness.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of Virginia shipments. Insurance limits of $100K to $250K per vehicle are typical.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer. Costs 50 to 100 percent more than open. Right for McLean, Great Falls, Keswick, and Virginia Beach oceanfront luxury vehicles. Insurance limits reach $1M+ per vehicle.
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
                You drop and collect at a staging yard (Richmond airport area, Norfolk commercial, Chantilly for NoVA) rather than residential. Saves $75 to $200 for anyone with transportation flexibility.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value Great Falls or Keswick luxury runs, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on the VA-to-FL lane. Peak-season I-95 carrier supply is deep enough that a flexible 2- to 3-day pickup window usually matches on reliability without the premium.
          </p>
        </div>
      </section>

      {/* H2.8 — timing PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car from Virginia?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Florida-bound snowbird shipments, the strongest booking weeks run late September through October 25. For military PCS, book 4 to 6 weeks ahead of your orders date during the May-August peak. Virginia’s dual demand pattern (snowbird + PCS) keeps supply more balanced than snowbird-only origin states.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Smart VA weeks</div>
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
                <li>Military PCS peak (May-Aug)</li>
                <li>Thanksgiving week</li>
                <li>Dec 20 &ndash; Jan 3</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Year-round sweet spot</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late January</li>
                <li>Mid-March</li>
                <li>Mid-September</li>
                <li>Early March (shoulder)</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a week-by-week year view, our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link> walks every month. For a timing-only decision on the southbound leg, the <Link href="/resources/when-to-ship-your-car-south-for-winter" className="text-brand-navy underline font-semibold">when to ship south</Link> guide walks the trade-offs.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the May-August PCS peak is distinct from snowbird peak. If your VA pickup is tied to military orders, book around the installation Personal Property Office cycle, not the snowbird calendar.
          </p>
        </div>
      </section>

      {/* H2.9 — DMV + annual inspection (unique VA) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            VA DMV, annual safety inspection, and the 30-day titling window
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Virginia requires new residents to title the vehicle within 30 days of moving to the state, and registration follows titling. The DMV also enforces one of the strictest ongoing requirements in the US: every registered passenger vehicle must pass an annual safety inspection and display a current sticker on the windshield. Driving without a current sticker can result in a ticket.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Emissions inspection applies in Northern Virginia only — Arlington, Fairfax, Loudoun, Prince William, and Stafford counties, plus the cities of Alexandria, Fairfax, Falls Church, Manassas, and Manassas Park. Motorcycles are exempt. The emissions station reports results to DMV electronically.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">VA vehicle transfer essentials</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; 30-day titling window from residency establishment</li>
              <li>&bull; 60-day driver license transfer window (separate rule)</li>
              <li>&bull; Annual safety inspection required (sticker on windshield)</li>
              <li>&bull; Emissions inspection required in NoVA (5 counties + 5 cities)</li>
              <li>&bull; Motor Vehicle Sales and Use Tax: 4.15% of vehicle value (verify current rate)</li>
              <li>&bull; Minimum liability: $25K / $50K / $20K or $500 uninsured motor vehicle fee</li>
              <li>&bull; VSA 14 Application for Registration</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Returning snowbirds who establish Florida residency during winter and come back to Virginia as returning residents need to schedule the safety inspection early — the annual sticker expires on a fixed cycle regardless of winter travel. Confirm current rules at dmv.virginia.gov before planning around specific deadlines.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: VA rules shift at the state level. The 4.15% Motor Vehicle Sales and Use Tax rate above comes from a third-party guide; verify current rates and new-resident credits at dmv.virginia.gov before budgeting.
          </p>
        </div>
      </section>

      {/* H2.10 — How we run the VA lane + destinations table */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the Virginia lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird, military PCS, and seasonal Virginia shipments and run both the I-95 corridor and the Hampton Roads base-adjacent network daily during peak season. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, base-access credentials for military installations, and on-time delivery history. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          {destinationsShown.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-xl font-bold text-brand-navy">Popular Virginia snowbird destinations</h3>
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
            <li>&bull; NoVA federal-workforce specialists</li>
            <li>&bull; Hampton Roads Navy PCS network</li>
            <li>&bull; Richmond I-95 crossroads coverage</li>
            <li>&bull; Shenandoah Valley I-81 corridor expertise</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; Pentagon, Quantico, Norfolk base-access credentials</li>
            <li>&bull; Annual safety inspection timing guidance</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds weighing a return trip against a drive back, our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown walks the trade-offs. Hurricane-season Florida shippers should also see our <Link href="/resources/hurricane-season-florida-shipping" className="text-brand-navy underline font-semibold">hurricane season car shipping</Link> notes.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run on the VA-to-FL I-95 lane with rigid dates, a direct carrier already running that corridor can sometimes beat our quote. For most Virginia shipments and anything requiring NoVA Beltway timing or Hampton Roads base access, our broker model wins on reliability and claim support.
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
                Get your Virginia car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a Virginia specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Virginia" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Virginia car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases: annual safety inspection timing, NoVA emissions counties, Chesapeake Bay Bridge-Tunnel access, Norfolk Navy PCS, Richmond row houses, and the questions returning VA snowbirds and PCS families actually ask us. For base cost and timing, see the sections above.
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
            Done right, Virginia car shipping comes down to picking the right lane for the Virginia you&rsquo;re shipping from. NoVA pickups need off-peak Beltway loading windows and emissions awareness. Richmond runs cheapest and simplest on the I-95 central corridor. Hampton Roads needs base-access carrier credentials and PCS timing. Shenandoah Valley pickups benefit from staging flexibility and winter weather buffers. Match the plan to your pickup zip and the shipment runs predictably. Request a free quote and a Virginia specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get a Virginia quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, DMV rules, and inspection requirements shift with policy &mdash; verify current pricing with your broker and current rules at dmv.virginia.gov before pickup day.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car from Virginia" />
    </>
  );
}
