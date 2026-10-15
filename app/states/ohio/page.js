import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getStateBySlug, originStates } from '@/data/states';
import { getRoutesByOrigin } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';

const slug = 'ohio';

export function generateMetadata() {
  return {
    title: 'Ohio Car Shipping: Cleveland, Columbus, Cincinnati 2026',
    description:
      'Ohio car shipping guide — the Three C\'s, I-75 Florida corridor, Lake Erie snow timing, and seven-county E-Check rules for returning snowbirds.',
    alternates: { canonical: `/states/${slug}` },
    openGraph: {
      title: 'Ohio Car Shipping: Cleveland, Columbus, Cincinnati',
      description:
        'Three Ohio shipping markets with their own carriers — Cleveland lake-effect, Columbus central crossroads, and Cincinnati I-75 gateway to Florida.',
      type: 'website'
    }
  };
}

// 10 OH-specific insider FAQs — zero overlap with any prior state FAQ set
const faqs = [
  {
    q: 'Which seven Ohio counties require E-Check and what\'s the model-year window?',
    a: 'E-Check applies in Cuyahoga, Geauga, Lake, Lorain, Medina, Portage, and Summit — all in northeast Ohio. Most vehicles 4 to 25 model years old registered in those counties must pass biennial testing. Confirm current age thresholds at bmv.ohio.gov. Vehicles registered in the other 81 Ohio counties are exempt from emissions testing entirely.'
  },
  {
    q: 'What is a "deputy registrar" and why does Ohio use that term instead of BMV office?',
    a: 'Ohio\'s BMV (Bureau of Motor Vehicles) contracts most in-person registration transactions to independent deputy registrar license agencies. These are private agencies authorized to process BMV business for the public. Many are run as small businesses in strip malls or standalone offices. The deputy registrar handles the registration transaction itself; the BMV sets the rules and issues the state-level documents.'
  },
  {
    q: 'Cleveland and the Lake Erie snow belt — when should I actually book my pickup?',
    a: 'Lock in pickup by October 10 for Cleveland, Mentor, Painesville, and the Lake Erie snow belt. Lake-effect snow events hit NE Ohio weeks before Buffalo or NY-area storms — Cleveland averages 68 inches annually, with 20+ inch events possible by Halloween. Carriers raise rates and widen pickup windows the moment major events forecast. Snow belt residents who book after November 1 routinely pay 15 to 25 percent more.'
  },
  {
    q: 'Which highway does my carrier actually take — I-75, I-71, or I-77?',
    a: 'It depends on your pickup city. Cincinnati feeds I-75 south (the dominant Ohio-to-Florida corridor). Columbus feeds I-71 south to I-75 at Cincinnati or I-64 east to I-77. Cleveland feeds I-77 south through West Virginia and the Carolinas, converging with I-95 in South Carolina. Carriers familiar with your lane know the backhaul patterns and price accordingly.'
  },
  {
    q: 'Why do so many Ohioans end up at The Villages in Florida specifically?',
    a: 'The Villages (Sumter, Lake, and Marion County, FL) has one of the strongest Ohio migration patterns in the US. The community\'s decades-long marketing presence in Ohio, combined with the I-75 corridor making travel back-and-forth easy, built a self-reinforcing pipeline. Carriers familiar with the Ohio-to-Villages run know the Spanish Springs, Lake Sumter Landing, and Brownwood district gate protocols and prefer early-morning deliveries to avoid afternoon golf-cart traffic.'
  },
  {
    q: 'If I register in an E-Check county, can I use multi-year registration?',
    a: 'Yes. E-Check county residents are eligible for 2- to 5-year multi-year registration options. The multi-year option saves time at the deputy registrar window but doesn\'t exempt you from the biennial E-Check requirement for qualifying vehicles. Non-compliance with E-Check triggers registration suspension and plate confiscation, so stay on top of the test cycle even with multi-year plates.'
  },
  {
    q: 'How does the Ohio Turnpike factor into my carrier\'s route and cost?',
    a: 'The Ohio Turnpike (I-80/90) is the east-west commercial backbone across the northern tier of the state. Carriers headed to Chicago, the Midwest, or cross-country Arizona and California use it as the primary route. Multi-axle commercial carrier tolls are built into the broker dispatch rate, not billed separately. Toledo-area pickups route directly onto the Turnpike west; Cleveland-area pickups connect via I-271 or I-480.'
  },
  {
    q: 'Does Ohio charge an EV surcharge after I register a Tesla or Rivian I just shipped in?',
    a: 'Yes. Under Ohio HB 62, electric vehicle owners pay an annual $200 surcharge at registration, and plug-in hybrid owners pay $100. The surcharge is in addition to the standard state registration fee. The surcharge is required even for an EV you just shipped in from another state. Confirm current EV fee amounts at bmv.ohio.gov before budgeting.'
  },
  {
    q: 'Youngstown, Warren, and the Mahoning Valley — any Rust Belt pickup realities?',
    a: 'Youngstown and the Mahoning Valley have smaller carrier supply than the Three C\'s, but residential pickups work well in most suburban addresses (Boardman, Canfield, Poland, Austintown). Downtown Youngstown and tight city blocks occasionally require staging at a nearby commercial lot. Carriers running the Youngstown-to-Florida lane typically route via I-76 to I-77, converging on the standard Cleveland-origin pattern.'
  },
  {
    q: 'Toledo pickups seem to overlap with Michigan carriers. Does that affect pricing?',
    a: 'Yes, in a good way. Toledo sits on the Michigan-Ohio border and shares carrier supply with the Detroit metro freight pipeline. Carriers that originate loads in Michigan often pick up a Toledo-area vehicle on the first leg south, which can price slightly below equivalent Columbus or Cincinnati pickups. The I-75 south feed is the same corridor; Toledo just has a broader origin-side carrier pool.'
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

export default function OhioCarShippingPage() {
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
        { label: 'Ohio' }
      ]} />

      {/* HERO — H1 primary only; direct answer sentence 1; PAS; primary in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">Ohio Origin Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              Ohio Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>Ohio car shipping</strong> is three separate markets wearing one state name — Cleveland, Columbus, and Cincinnati each ship on different interstate corridors with different carrier networks. Cleveland feeds I-77 south through West Virginia. Columbus feeds I-71 to I-75. Cincinnati sits on I-75 directly and prices the cheapest I-75 Florida sub-lane in the Midwest. Lake-effect snow in northeast Ohio starts weeks before anything in New York State. E-Check applies in only seven northern counties but with teeth — registration suspension and plate confiscation for non-compliance. Add the state&rsquo;s unusually strong migration pipeline to The Villages in Florida, and Ohio shipping needs its own playbook.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request an Ohio quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; Three C&rsquo;s corridor expertise</li>
              <li>&bull; I-75 Florida gateway specialists</li>
              <li>&bull; Lake Erie snow belt early booking</li>
              <li>&bull; The Villages (FL) delivery experience</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Ohio" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            The three Ohios: Cleveland lake effect, Columbus crossroads, Cincinnati I-75 gateway
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              Ohio car shipping splits into three distinct markets that behave like separate states. Cleveland and the Lake Erie snow belt (NE Ohio counties) ship via I-77 south through West Virginia, with heavy lake-effect-driven early booking cadence. Columbus sits at the center of I-70, I-71, and I-270, with the broadest corridor options and the most predictable carrier supply. Cincinnati sits directly on I-75 — the main Midwest-to-Florida interstate — and prices the cheapest I-75 sub-lane out of the Three C&rsquo;s.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Each market has its own pricing and pickup conventions. Cleveland quotes build in snow-belt scheduling. Columbus quotes are the most predictable statewide. Cincinnati quotes benefit from direct I-75 carrier supply running full both directions. Toledo adds Detroit-metro backhaul pricing. Youngstown and the Mahoning Valley run on thinner Rust Belt carrier supply with suburban residential loading.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Timing differs sharply by region. Cleveland snowbirds book 2 to 3 weeks earlier than Cincinnati snowbirds because Lake Erie delivers 20-inch snow events by Halloween. Southern Ohio holds pickup flexibility into early November without a supply crunch.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions matter most for first-time shippers and anyone with tight timing. A straightforward residential pickup in a Dublin or Mason driveway in April behaves like any suburban lane. The nuance shows up on Cleveland pre-snow booking, Cincinnati Villages lane expertise, and NE Ohio E-Check registration mechanics. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "ohio auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What does Ohio auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Ohio auto transport prices sit toward the low end of the Northeast/Midwest range on Florida lanes because carriers run the I-75 corridor at near-full capacity year-round. Short regional lanes (OH to PA, IN, KY, MI) run $400 to $750. Mid-South lanes (OH to TN, NC, GA) run $650 to $1,100. Florida lanes run $825 to $1,600 open depending on origin and destination within Florida. Cross-country Arizona lanes run $1,200 to $2,000.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: pickup city (Cincinnati prices cheapest, Cleveland second, Columbus between), destination in Florida, timing, and transport type. Enclosed transport runs 50 to 75 percent above open on Ohio routes consistent with 2026 published industry data.
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
                <tr><td className="p-3">Ohio &rarr; Florida (statewide avg)</td><td className="p-3">1,059 mi</td><td className="p-3">$970&ndash;$1,599</td><td className="p-3">+$125&ndash;$275</td></tr>
                <tr><td className="p-3">Cincinnati &rarr; Tampa (I-75)</td><td className="p-3">~940 mi</td><td className="p-3">$825&ndash;$950</td><td className="p-3">+$100&ndash;$175</td></tr>
                <tr><td className="p-3">Cincinnati &rarr; Miami (I-75)</td><td className="p-3">~1,180 mi</td><td className="p-3">$925&ndash;$1,025</td><td className="p-3">+$125&ndash;$200</td></tr>
                <tr><td className="p-3">Columbus &rarr; Tampa (I-71 / I-75)</td><td className="p-3">~1,030 mi</td><td className="p-3">$925&ndash;$1,200</td><td className="p-3">+$125&ndash;$225</td></tr>
                <tr><td className="p-3">Cleveland &rarr; Miami (I-77)</td><td className="p-3">1,247 mi</td><td className="p-3">$925&ndash;$1,100</td><td className="p-3">+$150&ndash;$250</td></tr>
                <tr><td className="p-3">Ohio &rarr; Arizona (I-70 west)</td><td className="p-3">1,900&ndash;2,100 mi</td><td className="p-3">$1,200&ndash;$2,000</td><td className="p-3">+$175&ndash;$300</td></tr>
                <tr><td className="p-3">Ohio enclosed to FL luxury</td><td className="p-3">1,000&ndash;1,250 mi</td><td className="p-3">$1,750&ndash;$2,275</td><td className="p-3">+$200&ndash;$400</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 FreightWaves and Sherpa published data for Ohio lanes. Rates shift weekly with fuel, demand, and carrier supply; verify a current quote before booking.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the Cincinnati-to-Tampa sub-lane prices unusually low ($825-$950) because the I-75 corridor has such consistent carrier backhaul demand. This is one of the cheapest Midwest-to-Florida sub-corridors in the country.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping from ohio" + corridor framing */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping from Ohio: I-75, I-71, I-77, and the Ohio Turnpike
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping from Ohio uses four main corridor options, each tied to a region of the state. The split is unusually clean: your pickup city largely determines which interstate your carrier takes.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-75 (Cincinnati &rarr; Florida)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The dominant Midwest-to-Florida interstate. Cincinnati sits on it directly, with the lowest I-75 origin pricing in the Three C&rsquo;s. 2 to 7 days transit to Florida, dense carrier supply year-round.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-71 (Columbus / Cleveland feed)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Columbus to Cincinnati, then connects to I-75 south. Also the Cleveland-to-Columbus feeder. Standard carrier supply with easy loading access across most of the central Ohio corridor.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-77 (Cleveland &rarr; Southeast)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Cleveland’s preferred southbound Florida corridor via West Virginia and the Carolinas. Converges with I-95 in South Carolina. Fewer tolls than I-75 but tighter mountain curves through the Appalachians.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Ohio Turnpike / I-80/90 (east-west)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The commercial backbone across the northern tier of the state. Used by carriers heading to Chicago staging terminals before cross-country Arizona or California moves. Toll fees are built into dispatch rate.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            The Ohio Turnpike has dedicated truck-service plazas and e-ZPass commercial lanes that keep carrier transit moving. Carriers familiar with the corridor time Turnpike runs around weekday rush windows to avoid Cleveland and Toledo bottlenecks.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier&rsquo;s call. Weather, tolls, driver hours, and load mix drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "cleveland car shipping" + lake-effect snow angle (unique) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Cleveland car shipping and the Lake Erie snow-belt booking cadence
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Cleveland car shipping has one timing dynamic that reshapes the entire booking calendar: Lake Erie lake-effect snow. The lake stays unfrozen deep into winter, which fuels heavy, narrow snow bands that hit the shoreline communities (Cleveland, Mentor, Painesville, Chardon, Chesterland) with 20-inch overnight events as early as late October. Cleveland averages roughly 68 inches of annual snow — more than Buffalo in some seasons.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The practical effect for shippers: NE Ohio snowbirds book pickup 2 to 3 weeks earlier than Columbus or Cincinnati snowbirds because carriers raise rates and widen pickup windows the moment major lake-effect events forecast. Snow-belt residents who book after November 1 routinely pay 15 to 25 percent more than those who book by October 10.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Cleveland metro pickup pattern</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; East-side suburbs (Shaker Heights, Chagrin Falls, Pepper Pike): standard residential</li>
              <li>&bull; West-side suburbs (Westlake, Avon, Rocky River, Lakewood): standard residential</li>
              <li>&bull; Downtown and Ohio City: urban staging at nearby lot or garage</li>
              <li>&bull; Snow-belt communities east of Cleveland: book by October 10</li>
              <li>&bull; I-77 south to West Virginia and the Carolinas, converging with I-95 in SC</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For NE Ohio snowbirds comparing drive-versus-ship on the Florida lane, our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link> walks the time-value math. First-time shippers should see our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the 68-inch average is a long-term NOAA figure for Cleveland proper. Snow-belt communities east of the city (specifically Chardon, Burton, and parts of Geauga County) average well above the city figure. Treat the Cleveland number as the lower bound for the broader snow-belt region.
          </p>
        </div>
      </section>

      {/* H2.5 — "cincinnati car shipping" + The Villages pipeline (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Cincinnati car shipping and the I-75 pipeline to The Villages
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Cincinnati car shipping has one geographic advantage no other Ohio metro matches: it sits directly on I-75, the main Midwest-to-Florida interstate. Carriers running the Cincinnati-to-Florida lane dispatch daily year-round, and the sub-lane prices among the cheapest in the Midwest ($825-$950 to Tampa per 2026 Sherpa data).
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Ohio has one of the strongest migration pipelines to The Villages, Florida — the sprawling 55+ community in Sumter, Lake, and Marion counties south of Ocala. Decades of Ohio marketing presence and the straight-shot I-75 geography built a self-reinforcing pattern. Carriers familiar with the Cincinnati-to-Villages run know the Spanish Springs, Lake Sumter Landing, and Brownwood district gate protocols and prefer early-morning deliveries to avoid afternoon golf-cart traffic on multi-modal paths.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Cincinnati metro pickup pattern</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Mason, West Chester, Blue Ash, Montgomery: standard suburban residential</li>
              <li>&bull; Hyde Park, Oakley, Mariemont: residential works for most driveways</li>
              <li>&bull; Downtown and OTR: urban staging at a nearby garage</li>
              <li>&bull; Northern Kentucky (Covington, Newport, Florence): same carrier network as Cincinnati</li>
              <li>&bull; I-75 south through Lexington, Knoxville, Chattanooga, Atlanta to Florida</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For 55+ Villages residents, our <Link href="/resources/55-plus-community-car-delivery" className="text-brand-navy underline font-semibold">55+ community delivery</Link> guide covers gate protocol. For round-trip booking logic across both legs, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the Cincinnati I-75 price advantage shrinks on cross-country Arizona and California runs, where the long-haul leg west dominates total mileage. Cincinnati’s edge is specifically on the Florida lane.
          </p>
        </div>
      </section>

      {/* H2.6 — Columbus central crossroads + BMV / E-Check (unique OH) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Columbus central crossroads, BMV mechanics, and the seven-county E-Check map
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Columbus sits at the geographic and logistical center of Ohio — the intersection of I-70 east-west, I-71 north-south, and the I-270 outer belt. The city handles the most predictable carrier dispatch in the state because loads route through Columbus from every direction. Suburban Columbus (Dublin, Powell, Westerville, New Albany, Upper Arlington, Bexley) handles standard residential pickup with easy driveway access.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Ohio has one of the simpler new-resident registration windows in the Midwest: 30 days from establishing residency. The 30-day clock starts from residency events — signing a lease, buying a home, taking a job, or enrolling children in school. Registration happens at a deputy registrar license agency (Ohio’s private-contracted BMV office equivalent), not at a state-run office.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            E-Check emissions testing applies in only seven northeast Ohio counties: Cuyahoga, Geauga, Lake, Lorain, Medina, Portage, and Summit. Most vehicles 4 to 25 model years old registered in those counties must pass biennial E-Check. The other 81 Ohio counties are exempt entirely. If your snowbird registration moves between Florida and Ohio, which Ohio county you register in determines whether E-Check applies.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Ohio vehicle transfer essentials</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; 30-day registration window from residency establishment</li>
              <li>&bull; In-person at a deputy registrar license agency</li>
              <li>&bull; State registration fee $31 for passenger vehicles (plus county/municipal permissive tax $0-$30)</li>
              <li>&bull; E-Check required for 4- to 25-year-old vehicles in 7 NE Ohio counties</li>
              <li>&bull; EV surcharge $200/year, plug-in hybrid $100/year under HB 62</li>
              <li>&bull; Multi-year registration (2 to 5 years) available in E-Check counties</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            E-Check non-compliance in a required county leads to registration suspension and plate confiscation. For returning snowbirds who skip the test cycle during Florida winters, catching up the E-Check before the registration renewal date avoids both. Confirm current rules and fees at bmv.ohio.gov.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Ohio BMV rules shift at the state and county permissive-tax level. The fee range and E-Check county list above comes from the BMV’s own guidance plus 2026 third-party summaries. Verify current amounts at your deputy registrar before budgeting.
          </p>
        </div>
      </section>

      {/* H2.7 — Service tier selection */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking a service tier for your Ohio shipment
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most Ohio shipments fit into one of four service choices. The right pick depends on car value, pickup location, and schedule firmness.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of Ohio shipments. Insurance limits of $100K to $250K per vehicle are typical.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer. Costs 50 to 75 percent more than open on Ohio routes per 2026 published data. Right for Shaker Heights, Indian Hill, New Albany luxury vehicles. Insurance limits reach $1M+ per vehicle.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Expedited (guaranteed pickup)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A locked pickup date rather than a 3- to 5-day window. Adds $150 to $400. Worth it when a closing, lease start, or flight date is fixed.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Terminal-to-terminal</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                You drop and collect at a staging yard (Cleveland Hopkins area, Columbus Rickenbacker, Cincinnati-NKY) rather than residential. Saves $75 to $200 for anyone with transportation flexibility.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value Hunting Valley or Indian Hill runs, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on the OH-to-FL lane. Peak-season I-75 carrier supply is deep enough that a flexible 3-day pickup window usually matches on reliability without the premium.
          </p>
        </div>
      </section>

      {/* H2.8 — timing PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car from Ohio?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Florida-bound snowbird shipments, the strongest booking weeks run late September through October 20 statewide. Cleveland and the NE Ohio snow belt specifically should book by October 10. Carrier supply tightens through late October and compresses sharply in the first two weeks of November.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Smart Ohio weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late September</li>
                <li>Oct 1-10 (Cleveland)</li>
                <li>Oct 10-20 (Columbus/Cincinnati)</li>
                <li>Mid-April (return)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Expensive weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Oct 25 &ndash; Nov 15</li>
                <li>Ohio State home game weekends</li>
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
            Caveat: Ohio State home game weekends (September through November) create localized hotel and carrier supply pressure in Columbus. If your pickup is in the Short North, OSU campus area, or Grandview, add 2 to 3 days to pickup flexibility.
          </p>
        </div>
      </section>

      {/* H2.9 — Toledo + Youngstown + Mahoning Valley (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Toledo, Youngstown, and the quieter Ohio markets
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Toledo and Youngstown round out Ohio’s shipping map with carrier dynamics distinct from the Three C’s. Toledo sits on the Michigan-Ohio border and overlaps carrier supply with the Detroit metro freight pipeline — a Toledo pickup can price slightly below equivalent Columbus or Cincinnati pickups because carriers heading south from Detroit often grab a Toledo-area vehicle on the first leg.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Youngstown and the Mahoning Valley (Warren, Niles, Boardman, Canfield, Poland, Austintown) have thinner Rust Belt carrier supply than Cleveland but residential pickups work well in most suburban addresses. Downtown Youngstown and some older city blocks occasionally require staging at a nearby commercial lot. Carriers running the Youngstown-to-Florida lane typically route via I-76 to I-77, converging on the standard Cleveland pattern.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Quieter Ohio markets</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Toledo: Michigan backhaul advantage, I-75 direct south</li>
              <li>&bull; Youngstown: I-76 to I-77, Cleveland corridor convergence</li>
              <li>&bull; Dayton: I-75 direct south, Cincinnati corridor convergence</li>
              <li>&bull; Akron: I-77 south, direct Cleveland alternative</li>
              <li>&bull; Canton, Mansfield, Lima: rural staging considerations</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For Toledo, Youngstown, Akron, or Dayton snowbirds, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> covers prep basics across any Ohio pickup. For EV owners, our <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline font-semibold">EV shipping notes</Link> cover the HB 62 surcharge and charging considerations.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: carrier supply in smaller Ohio metros (Lima, Zanesville, Steubenville) is thinner than the Three C’s plus Toledo/Youngstown. Allow 3 to 5 days of pickup window flexibility if your pickup is more than 60 miles from a major Ohio metro.
          </p>
        </div>
      </section>

      {/* H2.10 — How we run the OH lane + destinations table */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the Ohio lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal Ohio shipments and run both the I-75 Cincinnati corridor and the I-77 Cleveland corridor daily during peak season. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, and on-time delivery history. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          {destinationsShown.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-xl font-bold text-brand-navy">Popular Ohio snowbird destinations</h3>
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
            <li>&bull; Three C&rsquo;s corridor expertise</li>
            <li>&bull; I-75 Cincinnati gateway to Florida</li>
            <li>&bull; Lake Erie snow-belt early-booking guidance</li>
            <li>&bull; The Villages (FL) gate-protocol familiarity</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; Ohio Turnpike cross-country routing</li>
            <li>&bull; BMV / deputy registrar / E-Check guidance</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds weighing a return trip against a drive back, our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown walks the trade-offs. Hurricane-season Florida shippers should also see our <Link href="/resources/hurricane-season-florida-shipping" className="text-brand-navy underline font-semibold">hurricane season car shipping</Link> notes.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run on the OH-to-FL I-75 lane with rigid dates, a direct carrier already running that corridor can sometimes beat our quote. For most Ohio shipments and anything requiring Cleveland snow-belt timing or Villages destination expertise, our broker model wins on reliability and claim support.
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
                Get your Ohio car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and an Ohio specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Ohio" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Ohio car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases: E-Check county mechanics, deputy registrar terminology, Lake Erie snow-belt timing, I-75 vs I-77 routing, The Villages migration pattern, and the BMV questions returning Ohio snowbirds actually ask us. For base cost and timing, see the sections above.
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
            Done right, Ohio car shipping comes down to picking the right lane for the Ohio you&rsquo;re shipping from. Cincinnati runs cheapest on I-75 and is the gateway to The Villages. Columbus sits at the state&rsquo;s central crossroads with the broadest route options. Cleveland and the Lake Erie snow belt should book earliest to beat lake-effect snow. NE Ohio residents should check their county’s E-Check status before registration. Match the plan to your pickup zip and the shipment runs predictably. Request a free quote and an Ohio specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get an Ohio quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, BMV rules, and E-Check county assignments shift with policy &mdash; verify current pricing with your broker and current rules at bmv.ohio.gov before pickup day.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car from Ohio" />
    </>
  );
}
