import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { DestinationHeroImage } from '@/components/DestinationScenes';
import { getDestinationBySlug, destinationStates } from '@/data/destinations';
import { getCitiesByDestination } from '@/data/cities';
import { getRoutesByDestination } from '@/data/routes';

const slug = 'texas';

export function generateMetadata() {
  return {
    title: 'Texas Car Shipping: Winter Texan Lanes & Costs 2026',
    description:
      'Texas car shipping guide — Winter Texan Rio Grande Valley logistics, I-35 spine pricing, Hill Country routes, and TxDMV new-resident rules.',
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title: 'Texas Car Shipping: Winter Texan Lanes & Costs',
      description:
        'How Texas car shipping really works — a Winter Texan RGV submarket plus a year-round statewide lane, on the I-35 spine from the Dakotas to the border.',
      type: 'website'
    }
  };
}

// 10 NEW TX insider FAQs — zero overlap with any prior FL or AZ FAQ set
const faqs = [
  {
    q: 'If my carrier runs through a Texas ice storm on I-35 in January, is coverage different from summer transit?',
    a: 'No. Carrier cargo insurance covers weather damage during active transit year-round, including ice-storm damage on I-35 corridors from the Red River south through Austin. Carriers reroute or hold off a storm cell when TxDOT issues a closure. Allow a 1 to 2 day buffer in your delivery window during January and February ice-storm season.'
  },
  {
    q: 'Can I ship to a McAllen or Harlingen RV resort if I do not have a permanent Texas address yet?',
    a: 'Yes. The delivery address can be the RV resort office, your assigned lot number, or a staffed park gate. Confirm with the resort manager that commercial carriers are allowed on the day, and ask about any required certificate of insurance. Most RGV Winter Texan parks accept carrier deliveries with 48 to 72 hours of advance notice.'
  },
  {
    q: 'What happens if a tornado watch is issued during my pickup window in Texas?',
    a: 'Carriers do not load vehicles under an active tornado warning. A watch (lower severity) usually continues as normal unless the cell crosses the pickup zip code. Expect a 2 to 6 hour hold during an active warning. Weather delay is listed as a non-penalty cause in most carrier contracts.'
  },
  {
    q: 'Does the Mexico border proximity affect my cargo insurance in the Valley?',
    a: 'Not for domestic delivery. Cargo insurance applies to loading, transit, and unloading inside the US. The moment a vehicle crosses into Mexico, US cargo policies no longer apply — you need a Mexican auto policy and customs clearance for export. Delivery to a US-side RGV address is a standard shipment with no extra insurance step.'
  },
  {
    q: 'If I am shipping to a Winter Texan park and the park closes April 30, when must my car be gone?',
    a: 'Confirm your resort\'s close date in writing. Most RGV parks give residents 7 to 14 days after close to clear vehicles. Carriers can pick up during that window. If you miss it, your car may be towed to a nearby storage lot at your expense. Book the spring return 3 to 4 weeks ahead to secure a slot before the hard close.'
  },
  {
    q: 'Can I ship a car to Fort Cavazos or JBSA without special base paperwork?',
    a: 'Delivery works to any address, including on-base housing, with 48 to 72 hours of gate notice. Military PCS shipments can be arranged through the installation Personal Property Office at government expense in some cases — check with your sponsor before booking commercially. For civilian deliveries, standard commercial carrier credentials get through the gate.'
  },
  {
    q: 'What are the TxDMV rules for registering a car I just shipped in?',
    a: 'Texas gives new residents 30 days to register after establishing residency. Visit your county tax assessor-collector office with Form 130-U, your out-of-state title or registration, proof of Texas liability insurance, and photo ID. Texas eliminated the mandatory safety inspection for non-commercial vehicles in January 2025. Emissions tests still apply in some counties. Verify with TxDMV at txdmv.gov.'
  },
  {
    q: 'Does the Rio Grande Valley have carrier supply limits in peak Winter Texan weeks?',
    a: 'Yes. The last two weeks of October and the first two weeks of November are the tightest supply window of the year for RGV-bound carriers. Dispatch rates run 15 to 25 percent above shoulder weeks, and pickup windows widen from 2 days to 4 or 5 days. Book 3 to 5 weeks ahead for anything landing between October 20 and November 15.'
  },
  {
    q: 'If my Texas delivery is at a dealership lot, does the lot need a certificate of insurance from the carrier?',
    a: 'Most Texas dealerships accept commercial deliveries without a certificate of insurance. A few large franchise groups (especially luxury dealers) require a COI; your broker can produce one in 24 to 48 hours. Confirm the lot\'s policy at booking. If the dealer requires an after-hours drop, confirm access logistics with the service manager, not sales.'
  },
  {
    q: 'Can I ship a car between Texas and Mexico through a Laredo customs broker?',
    a: 'Yes. A licensed Mexican customs broker handles the cross-border clearance in Laredo, Eagle Pass, or Brownsville. US auto transport delivers to a bonded yard on the US side; the broker then clears the vehicle into Mexico. Standard US cargo insurance ends at the US-side yard. Expect 2 to 5 business days for customs paperwork beyond the US delivery time.'
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

export default function TexasCarShippingPage() {
  const dest = getDestinationBySlug(slug);
  const cities = getCitiesByDestination(slug);
  const inboundRoutes = getRoutesByDestination(slug);
  const otherDestinations = destinationStates.filter((d) => d.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'Texas' }
      ]} />

      <DestinationHeroImage destination={dest} height="h-40 sm:h-48 lg:h-56" />

      {/* HERO — H1 primary only; direct answer in sentence 1; PAS; primary bolded in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">Texas Service Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              Texas Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>Texas car shipping</strong> runs on two very different lanes. The Rio Grande Valley handles a tight October-to-March Winter Texan season dominated by Midwest and Great Plains origins. Dallas-Fort Worth, Austin, San Antonio, and Houston run on year-round relocation volume driven by no state income tax, tech growth, and major military bases. First-time Texas shippers often lump the state into one price grid and miss that a Minnesota-to-McAllen run and a California-to-Austin run work on different clocks, different carriers, and different seasonal rhythms. This page walks the two-lane geography, the I-35 spine, pricing, timing, and the paperwork rules unique to Texas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request a Texas quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; Winter Texan RGV specialists</li>
              <li>&bull; I-35, I-10, I-20, I-45 corridor coverage</li>
              <li>&bull; Fort Cavazos and JBSA delivery experience</li>
              <li>&bull; TxDMV-aware new-resident guidance</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="destination" pageUrl={`/destinations/${slug}`} destinationState="Texas" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer under per §6 */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Two Texas lanes: Winter Texan south and year-round statewide
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              Texas car shipping splits into two markets that behave like different states. The Rio Grande Valley runs on seasonal Winter Texan volume, concentrated October through March. Dallas-Fort Worth, Austin, San Antonio, and Houston run on year-round moves — relocations, military PCS, student moves, and dealer-to-buyer sales.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            That split matters because carrier supply and pricing swing on different cycles for each market. The RGV peak lines up with the fall snowbird wave; the DFW/Austin markets peak with summer PCS and corporate relocation moves. A broker that quotes both lanes the same way misses the seasonal cadence on at least one.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Weather matters too, but differently. South Texas sees Gulf storms in late summer. North Texas sees ice storms on I-35 in January and February. West Texas (El Paso, Big Bend) sees long rural stretches with lower carrier frequency year-round. The right planning depends on which Texas you are shipping into.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions matter most for cross-country shipments and seasonal timing decisions. A straightforward Dallas-to-Houston run in April is easy on any licensed broker. The nuance shows up on long-haul origins, Winter Texan destinations, and anything crossing a weather window. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers the industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "texas auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What should Texas auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Texas auto transport pricing lands lower than Florida or Arizona for cross-country lanes because central Texas sits on dense interstate corridors. Short in-state moves run $400 to $750. Interstate moves to neighboring states run $600 to $1,300. Long-haul from California or the East Coast runs $900 to $2,000.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: origin, destination within Texas (urban or rural), timing (Winter Texan peak or shoulder), and transport type. The Austin and Dallas lanes often price below spot-market averages because of carrier density. Rural West Texas and Big Bend price above average because carriers run thinner there.
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
                <tr><td className="p-3">In-state TX-to-TX</td><td className="p-3">~333 mi avg</td><td className="p-3">$475&ndash;$975</td><td className="p-3">+$50&ndash;$125</td></tr>
                <tr><td className="p-3">Upper Midwest &rarr; RGV (I-35)</td><td className="p-3">1,400&ndash;1,700 mi</td><td className="p-3">$900&ndash;$1,400</td><td className="p-3">+$150&ndash;$300</td></tr>
                <tr><td className="p-3">Northeast &rarr; DFW/Austin (I-40/I-30)</td><td className="p-3">1,400&ndash;1,800 mi</td><td className="p-3">$950&ndash;$1,450</td><td className="p-3">+$175&ndash;$275</td></tr>
                <tr><td className="p-3">Southern California &rarr; TX (I-10)</td><td className="p-3">1,200&ndash;1,500 mi</td><td className="p-3">$800&ndash;$1,250</td><td className="p-3">+$100&ndash;$200</td></tr>
                <tr><td className="p-3">Southeast / Florida &rarr; TX (I-10)</td><td className="p-3">800&ndash;1,200 mi</td><td className="p-3">$700&ndash;$1,100</td><td className="p-3">+$75&ndash;$175</td></tr>
                <tr><td className="p-3">Pacific Northwest &rarr; TX</td><td className="p-3">1,800&ndash;2,200 mi</td><td className="p-3">$1,100&ndash;$1,600</td><td className="p-3">+$150&ndash;$275</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 industry per-mile averages (roughly $0.75/mi on short lanes down to $0.35/mi cross-country). Rates shift weekly with fuel, demand, and carrier supply.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The full pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Austin I-35 congestion is a real pickup-time factor during weekday rush. If your pickup address is downtown or along the I-35 corridor between 7 and 10 AM, build an extra hour into your window.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping to texas" + I-35 spine framing (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping to Texas on the I-35 spine
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping to Texas rides mostly on I-35, the vertical spine running from the North Dakota border through Minneapolis, Des Moines, Kansas City, Oklahoma City, and down through Dallas, Austin, San Antonio, and Laredo. The highway cuts through most of the Winter Texan origin pipeline and most of the state\'s major metros before reaching the Mexico border.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-35 (Upper Midwest &rarr; Valley)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The dominant Winter Texan corridor. Minneapolis to McAllen is roughly 1,700 miles, 4 to 6 days transit, $900 to $1,400 open. Carrier supply is strong October through March.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-10 (East-West backbone)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Carries California and Arizona origins into San Antonio and Houston. Also the main route for Florida and Louisiana origins heading west. Long West Texas stretches between Fort Stockton and El Paso.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-20 / I-30 (DFW cross-feeds)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                I-20 brings Southeast origins (Atlanta, Birmingham) into Dallas and Fort Worth. I-30 handles the Memphis-to-DFW leg. Both are high-carrier-density corridors with predictable pricing.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-45 (Dallas &harr; Houston)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                In-state corridor connecting the two largest metros. Also feeds Galveston and Gulf Coast deliveries. 240 miles, 1 day transit, consistently one of the cheapest intra-Texas lanes.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Rural lanes into West Texas, the Panhandle, and Big Bend ride on secondary highways with far lower carrier frequency. Expect wider pickup windows and a 10 to 20 percent lane premium when the delivery address is more than 60 miles from a major interstate.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier\'s call. Weather, driver hours, and load mix drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "winter texan car shipping" + RGV deep dive (unique TX content) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Winter Texan car shipping and the Rio Grande Valley economy
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Winter Texan car shipping is the Texas version of snowbird transport, concentrated in the Rio Grande Valley — McAllen, Harlingen, Mission, Weslaco, and Brownsville. Widely cited estimates put the seasonal population at 100,000 to 150,000 residents from October through March, with the peak hitting between December and February. The Winter Texan population generates a reported $1B+ in annual local economic impact.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Origin states skew heavily toward the Upper Midwest and Great Plains. Minnesota, Wisconsin, Iowa, the Dakotas, and Michigan send the most vehicles south. Illinois and Ohio add to the mix. Canadian Winter Texans are a notable minority on the same lane.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Winter Texan timing</div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>Peak southbound: Oct 15 &ndash; Nov 20</li>
              <li>Peak northbound: Mar 1 &ndash; Apr 15</li>
              <li>Population crest: Dec through Feb</li>
              <li>Park close dates: late April typical</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Three Winter Texan booking patterns dominate: one-way southbound in October-November, one-way northbound in March-April, and round-trip bookings covering both legs. Round-trip usually saves 10 to 15 percent on the combined price if the schedule holds. For the trade-off, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat on volume figures: the 100,000 to 150,000 estimate comes from UTRGV and tourism studies rather than a federal census, so treat it as the right order of magnitude. The point stands either way — the RGV is one of the densest Winter Texan markets in the country and runs on a predictable six-month seasonal cycle.
          </p>
        </div>
      </section>

      {/* H2.5 — "texas vehicle shipping" + option selection */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking a Texas vehicle shipping tier that fits your run
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Texas vehicle shipping fits most clients into one of four service choices. The right pick depends on car value, how firm your dates are, and whether your delivery is residential or terminal-side.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of Texas shipments. Insurance limits of $100K to $250K per vehicle are typical. Best per-mile value on long-haul origins.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer. Costs 30 to 50 percent more than open. Right for classics, exotics, $75K+ cars, and anything with fresh paint. Insurance limits reach $1M+ per vehicle.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Expedited (guaranteed pickup)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A locked pickup date rather than a 3- to 5-day window. Adds $150 to $400 to the base rate. Worth it when a lease start, closing, or PCS report date is fixed.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Terminal-to-terminal</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                You drop and collect at carrier staging yards instead of residential addresses. Common in Dallas, Houston, and San Antonio because of port and freight infrastructure. Saves $75 to $150 if you can plan around it.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value vehicles crossing into Scottsdale or Dallas luxury markets, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on Texas lanes. For most Winter Texan and relocation moves, a flexible 3-day pickup window matches on reliability and saves the premium.
          </p>
        </div>
      </section>

      {/* H2.6 — timing + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car to Texas?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Winter Texan shipments to the Rio Grande Valley, the strongest booking weeks are late September through October 10. Demand firms up through late October and compresses hard in the first two weeks of November. For year-round shipments to DFW, Austin, Houston, and San Antonio, timing follows a flatter cycle with summer peaks tied to military PCS and corporate relocation seasons.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Smart RGV weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late September</li>
                <li>Oct 10&ndash;20 (pre-peak)</li>
                <li>Late February</li>
                <li>Mid-April (post-close)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Expensive weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late Oct &ndash; mid-Nov (RGV peak)</li>
                <li>June &ndash; July (PCS peak)</li>
                <li>Thanksgiving week</li>
                <li>Dec 20 &ndash; Jan 3</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Year-round sweet spot</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late February</li>
                <li>Mid-May</li>
                <li>Mid-September</li>
                <li>Mid-January</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a week-by-week year view, our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link> walks every month. For a timing-only decision on the southbound leg, the <Link href="/resources/when-to-ship-your-car-south-for-winter" className="text-brand-navy underline font-semibold">when to ship south</Link> guide walks the trade-offs.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Winter Texan northbound supply tightens again in late March. If your spring return is flexible, mid-April often beats late March on both price and carrier availability.
          </p>
        </div>
      </section>

      {/* H2.7 — weather PAA mirror (Gulf storms + Texas ice) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What about Gulf storms and Texas ice?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Texas weather affects car shipping in three distinct ways. Gulf hurricanes threaten Houston, Corpus Christi, and the lower RGV from June through November. Winter ice storms shut down I-35 and I-20 in Dallas and north Texas for brief but severe stretches in January and February. Spring tornado season (March through May) adds short-notice holds in the eastern half of the state.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="p-3 text-left">Scenario</th>
                  <th className="p-3 text-left">Typical delay</th>
                  <th className="p-3 text-left">Pricing impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-3">Hurricane watch, Gulf coast reroute</td><td className="p-3">1&ndash;3 days</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Ice storm closes I-35 near Dallas</td><td className="p-3">6&ndash;36 hours</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Tornado warning during pickup</td><td className="p-3">2&ndash;6 hours</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Post-landfall FEMA restriction (Gulf)</td><td className="p-3">3&ndash;10 days</td><td className="p-3">Rebooking at current rate</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Cargo insurance covers weather-caused damage during active transit. Staging-lot damage during a storm falls in a gray zone with some carriers — ask your dispatcher at booking. For claims mechanics, our <Link href="/resources/snowbird-car-shipping-insurance-claims" className="text-brand-navy underline font-semibold">insurance claims walkthrough</Link> explains who pays what. For hurricane-specific booking logic, our <Link href="/resources/hurricane-season-florida-shipping" className="text-brand-navy underline font-semibold">hurricane season car shipping</Link> notes also apply to coastal Texas.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Texas winter ice tends to be brief but severe. A single storm can shut down I-35 for 24 hours and then clear. Build a 1 to 2 day buffer into January and February delivery windows and the lane behaves normally.
          </p>
        </div>
      </section>

      {/* H2.8 — Year-round volume angle (unique TX content) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            DFW relocations, no-income-tax moves, and Texas year-round volume
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Outside the Winter Texan market, Texas car shipping runs on steady year-round demand. No state income tax, affordable housing in several metros, and continued tech expansion in Austin keep inbound relocation volume high. Dallas-Fort Worth, Austin, Houston, and San Antonio each see thousands of inbound vehicles per month.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Military installations drive additional steady volume. Fort Cavazos (formerly Fort Hood) in Killeen, Joint Base San Antonio, Dyess AFB in Abilene, and Sheppard AFB in Wichita Falls all cycle through PCS orders year-round, with the heaviest window in May through August.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">What this means for your booking</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>DFW and Austin have the highest carrier density in Texas — pricing is stable year-round</li>
              <li>Summer PCS peak lifts military-adjacent zip codes by 10 to 15 percent (May through August)</li>
              <li>Mid-January and mid-September often price below the annual average on most lanes</li>
              <li>Austin corporate-relocation volume spikes in Q1 and Q3 tied to fiscal cycles</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For first-time Texas shippers, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> walks the prep basics that apply across both the Winter Texan and year-round markets.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the no-state-income-tax relocation wave does not translate to lower car shipping prices. Carriers still price by distance and demand, not Texas tax policy. The relocation volume helps carrier supply, which keeps prices stable, not cheap.
          </p>
        </div>
      </section>

      {/* H2.9 — Routes + metros + border corridor */}
      {(cities.length > 0 || inboundRoutes.length > 0) && (
        <section className="bg-brand-cream py-16">
          <div className="container-page max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-brand-navy">
              Routes, metros, and the Mexico border corridor
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Texas highest-volume destination metros cluster in four regions: Dallas-Fort Worth on I-35/I-20/I-30, Austin on I-35, San Antonio on I-10/I-35, and Houston on I-45/I-10. The Rio Grande Valley (McAllen, Harlingen, Brownsville) sits at the southern end of I-35. The Mexico border adds Laredo and Eagle Pass to the shipping map, where carriers deliver to US-side bonded yards for customs clearance into Mexico.
            </p>
            {cities.length > 0 && (
              <>
                <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">Popular Texas destination cities</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cities.map((c) => (
                    <Link key={c.slug} href={`/destinations/${slug}/${c.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 hover:border-brand-gold transition">
                      <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{c.stateAbbr}</div>
                      <div className="mt-1 font-display text-lg font-bold text-brand-navy">{c.city}</div>
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">{c.tagline}</p>
                    </Link>
                  ))}
                </div>
              </>
            )}
            {inboundRoutes.length > 0 && (
              <>
                <h3 className="mt-10 font-display text-xl font-bold text-brand-navy">Featured inbound routes</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {inboundRoutes.map((r) => (
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
            <p className="mt-6 text-sm text-slate-600">
              RV resort delivery sits in our{' '}
              <Link href="/resources/rv-resort-car-delivery" className="text-brand-navy underline font-semibold">RV resort delivery</Link>{' '}
              notes, and 55+ community routing is covered in our{' '}
              <Link href="/resources/55-plus-community-car-delivery" className="text-brand-navy underline font-semibold">55+ community delivery</Link>{' '}
              guide.
            </p>
          </div>
        </section>
      )}

      {/* H2.10 — How we run the Texas lane */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the Texas lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal Texas shipments and run the I-35 spine daily during Winter Texan season. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, and on-time delivery history on I-35, I-10, I-20, and I-45. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
            <li>&bull; Winter Texan Rio Grande Valley specialists</li>
            <li>&bull; I-35, I-10, I-20, I-45 corridor coverage</li>
            <li>&bull; Fort Cavazos, JBSA, Dyess PCS experience</li>
            <li>&bull; Dallas, Austin, Houston corporate relocation</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; Insurance-claim advocacy on your behalf</li>
            <li>&bull; TxDMV-aware new-resident guidance</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a side-by-side with other sunbelt options, see our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link>. For broker vs direct carrier context, our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link> walks the trade-offs. First-time shippers should also run through our <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link> before pickup day.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run inside Texas with rigid dates, a direct carrier that already runs your lane can beat our quote. For most residential Texas shipments, our broker model wins on reliability and claim support.
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
                Get your Texas car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a Texas specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="destination" pageUrl={`/destinations/${slug}`} destinationState="Texas" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions per §10) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Texas car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases, Winter Texan park rules, border logistics, and the TxDMV questions new residents ask us. For base cost and timing, see the sections above.
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

      {/* Compare */}
      <section className="bg-brand-cream py-14">
        <div className="container-page max-w-3xl">
          <div className="eyebrow">Compare Destinations</div>
          <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy">
            Weighing other sunbelt destinations?
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Every destination has its own timing, routes, and shipping profile.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {otherDestinations.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-brand-gold">
                {d.name} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion — primary once, clear next step */}
      <section className="bg-white py-14">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-navy">
            Ship with confidence
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Done right, Texas car shipping comes down to picking the right lane for the Texas you are shipping into. Winter Texan runs down the I-35 spine with Midwest origins and tight October-to-March supply. Year-round moves into DFW, Austin, Houston, and San Antonio behave like any mainstream relocation lane. Match the plan to the market and the shipment runs predictably. Request a free quote and a Texas specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get a Texas quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, routes, and registration rules shift with market conditions &mdash; verify current pricing and TxDMV requirements at txdmv.gov before booking.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car to Texas" />
    </>
  );
}
