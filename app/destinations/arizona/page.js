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

const slug = 'arizona';

export function generateMetadata() {
  return {
    title: 'Arizona Car Shipping: Highways, Costs & Delivery Rules',
    description:
      'Arizona car shipping guide — four-highway convergence, monsoon logistics, Scottsdale luxury handling, and winter-visitor timing. Request a free quote.',
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title: 'Arizona Car Shipping: Highways, Costs & Delivery Rules',
      description:
        'How the Southwest crossroads lane actually works — four-interstate convergence, Barrett-Jackson enclosed demand, and monsoon-aware dispatch.',
      type: 'website'
    }
  };
}

// 10 NEW insider FAQs — unique vs both FL FAQ sets and the old AZ FAQ set
const faqs = [
  {
    q: 'If my car ships through Flagstaff in January, is snow damage covered?',
    a: 'Yes. Cargo insurance covers weather damage caused during active transit, including a snowstorm on I-40 or I-17 near Flagstaff. Carriers reroute around closures when ADOT issues one. Flagstaff and Northern Arizona see real winter weather — plan a 1 to 2 day buffer if your lane crosses the Mogollon Rim between December and March.'
  },
  {
    q: 'Can I ship a car to a Scottsdale consignment lot for sale during Barrett-Jackson week?',
    a: 'Yes, and it is one of the busiest enclosed-carrier weeks of the year in Arizona. The late-January auction (held at WestWorld of Scottsdale) draws thousands of collector vehicles. Book enclosed service 6 to 8 weeks ahead — specialty carrier supply tightens hard the first three weeks of January.'
  },
  {
    q: 'What happens if a monsoon flash flood closes I-10 overnight — does the carrier wait or detour?',
    a: 'Short closures (under 6 hours) usually just wait. Longer closures trigger a detour via I-8 or state routes depending on the flood zone. Monsoon activity peaks mid-afternoon; carriers often adjust departure times to avoid the daily storm window during July and August.'
  },
  {
    q: 'If my Luke AFB household goods carrier is separate from the auto carrier, how do they coordinate?',
    a: 'They do not. Military PCS auto transport is managed through the Personal Property Transportation Office (PPTO), separate from household goods. Build 3 to 5 days between HHG delivery and vehicle delivery so neither sits waiting. Keep both tracking numbers accessible to your sponsor on base.'
  },
  {
    q: 'Can I ship a car across the Arizona-California inspection stop on I-10 without issue?',
    a: 'Yes. The California-side agricultural inspection on I-10 at Blythe is a quick stop for commercial carriers. Private vehicles move through on their own; shipped cars inside a trailer are checked at the carrier level, not the vehicle level. The stop adds 5 to 15 minutes to transit, not more.'
  },
  {
    q: 'Does an Arizona emissions test have to be completed before the car is shipped out?',
    a: 'No. Emissions compliance is tied to registration, not shipping. If you move out of Arizona, your emissions obligation ends. If you ship within Arizona, the emissions check happens at your next registration renewal in Maricopa or Pima County, per AZDOT. Verify current rules at azdot.gov.'
  },
  {
    q: 'If my winter home in Yuma is only accessible by a private dirt road, will the carrier deliver?',
    a: 'Not to the door. Full-size auto carriers avoid unpaved residential roads — turnaround space, soft shoulders, and axle weight limits all become problems. Meet the driver at the nearest paved cross-street or the RV resort office. Confirm the meet-up spot with your dispatcher at booking, not on pickup day.'
  },
  {
    q: 'Can I ship a car to Nogales for export into Mexico from Arizona?',
    a: 'Yes to Nogales delivery; export is a separate process. Carriers deliver to a staging yard or private address in Nogales, Arizona. Clearance into Nogales, Sonora requires Mexican customs paperwork handled by you or a licensed customs broker. Export logistics are not covered by domestic cargo insurance.'
  },
  {
    q: 'If my delivery is in Sedona or Prescott, does the final-mile pricing shift?',
    a: 'Yes. Both towns sit above 4,000 feet with winding highway access and lower carrier frequency. Expect a $75 to $200 premium on top of a Phoenix-base quote. Final-mile delivery usually stages out of Phoenix, with the driver running up the day of your delivery window.'
  },
  {
    q: 'What is the correct Arizona DMV handling when I register a car I just shipped in?',
    a: 'Arizona law requires registration as soon as you become a resident. Bring the out-of-state title (or current registration if a lienholder holds the title), Form 96-0236, proof of AZ insurance, photo ID, and your out-of-state plates. Phoenix and Tucson residents also need emissions compliance. First-time registration must be done in person at an AZ MVD office. Confirm the current checklist at azdot.gov before you go.'
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

export default function ArizonaCarShippingPage() {
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
        { label: 'Arizona' }
      ]} />

      <DestinationHeroImage destination={dest} height="h-40 sm:h-48 lg:h-56" />

      {/* HERO — H1 primary only; direct answer in sentence 1; PAS flow; primary bolded in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">Arizona Service Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              Arizona Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>Arizona car shipping</strong> sits at the crossroads of the Southwest, with four major interstates converging on Phoenix and a mixed demand profile that most states do not share. Winter visitors from the Pacific Northwest, Mountain West, and Midwest book heavy October through December; Barrett-Jackson collectors drive enclosed demand through late January; Luke, Davis-Monthan, and Fort Huachuca PCS orders fill the shoulders. First-time Arizona shippers often price the state like a single lane and miss that Yuma, Scottsdale, and Flagstaff each run on different rules. This page walks the four-highway geography, the pricing math, timing windows, and the delivery details specific to Arizona addresses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request an Arizona quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>• Four-highway coverage (I-10, I-40, I-15, I-17)</li>
              <li>• Monsoon-aware dispatch (Jun 15&ndash;Sep 30)</li>
              <li>• Scottsdale enclosed specialists</li>
              <li>• Sun City, Yuma RV, Luke AFB experience</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="destination" pageUrl={`/destinations/${slug}`} destinationState="Arizona" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer under per §6 */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Why Arizona car shipping runs differently
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              Arizona car shipping behaves like a crossroads market, not a single lane. Four major interstates feed Phoenix, three distinct demand groups overlap at different times of year, and three climate zones (low desert, high desert, mountain) each change how a shipment runs.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            That mix matters because it shapes carrier supply week by week. Winter visitor volume peaks in November and April. Barrett-Jackson collector demand spikes enclosed capacity in late January. Military PCS seasons fill the shoulders. A broker that sees only the snowbird curve will quote the shoulder weeks wrong.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Elevation adds another layer. Phoenix sits at roughly 1,100 feet with mild winters. Flagstaff clears 7,000 feet with real snow and chain-up laws. A January shipment landing in Scottsdale and a January shipment landing in Prescott are different jobs, even if they both cross Arizona state lines.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions only matter if you care about reliability and price. A straightforward Phoenix delivery in February is easy for any licensed broker. The complexity shows up at the edges — Yuma private roads, Flagstaff winter weather, Barrett-Jackson week in Scottsdale, PCS coordination at Luke. If you need help there, our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers the base mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "arizona auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How much should I pay for Arizona auto transport?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Arizona auto transport pricing lands somewhere between a short regional lane and a cross-country haul, depending on origin. A quick San Diego-to-Phoenix run on open transport runs around $500 to $750. A Northeast-to-Phoenix run can clear $1,500 in peak winter visitor weeks. Enclosed service adds 40 to 60 percent on top of the open rate.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Three inputs move the final number: origin corridor, timing (peak or off-peak), and transport tier. Vehicle size nudges the rate a little; destination zip code can nudge it more if the drop is in Yuma, Sedona, or Prescott instead of central Phoenix.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="p-3 text-left">Origin corridor</th>
                  <th className="p-3 text-left">Typical lane</th>
                  <th className="p-3 text-left">Open rate</th>
                  <th className="p-3 text-left">Winter peak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-3">Southern California (I-10 west)</td><td className="p-3">350&ndash;500 mi</td><td className="p-3">$500&ndash;$750</td><td className="p-3">+$75&ndash;$150</td></tr>
                <tr><td className="p-3">Pacific Northwest (I-5 south then I-10)</td><td className="p-3">1,300&ndash;1,700 mi</td><td className="p-3">$800&ndash;$1,200</td><td className="p-3">+$125&ndash;$225</td></tr>
                <tr><td className="p-3">Mountain West (I-15, I-70, I-40)</td><td className="p-3">600&ndash;900 mi</td><td className="p-3">$600&ndash;$950</td><td className="p-3">+$100&ndash;$175</td></tr>
                <tr><td className="p-3">Midwest (I-40 or I-70 west)</td><td className="p-3">1,700&ndash;2,000 mi</td><td className="p-3">$900&ndash;$1,350</td><td className="p-3">+$175&ndash;$275</td></tr>
                <tr><td className="p-3">Northeast (I-40 or I-70 cross-country)</td><td className="p-3">2,200&ndash;2,600 mi</td><td className="p-3">$1,100&ndash;$1,600</td><td className="p-3">+$200&ndash;$350</td></tr>
                <tr><td className="p-3">Texas (I-10 east)</td><td className="p-3">900&ndash;1,200 mi</td><td className="p-3">$700&ndash;$1,050</td><td className="p-3">+$100&ndash;$200</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 industry per-mile averages (roughly $0.75/mi on short lanes down to $0.35/mi on cross-country). Rates shift weekly with fuel, demand, and carrier supply.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. For the pricing picture across the whole snowbird market, our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link> walks every input.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: lowball quotes are especially common on short SoCal-to-Phoenix lanes. A quote 25 percent below the market usually means a carrier never accepted the dispatch. Expect a surcharge call before pickup, or no carrier at all.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping to arizona" + four-highway framing (unique AZ angle) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping to Arizona: the four highway lanes
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping to Arizona runs on four distinct interstate corridors, each with its own carrier density and seasonal rhythm. Understanding which lane your origin uses helps you book smarter and spot a mispriced quote.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-10 West (SoCal corridor)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Short lane from Los Angeles, Orange County, San Diego. Highest carrier frequency in the Arizona market. 1 to 2 day transit standard. Agricultural inspection at the California border adds minutes, not hours.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-10 East (Texas / Gulf corridor)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Dallas, Houston, San Antonio, El Paso. Transit 3 to 5 days. The long desert stretch between El Paso and Tucson is empty highway, which keeps the lane reliable in good weather and vulnerable to monsoon reroutes in summer.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-40 (Midwest + East Coast corridor)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Oklahoma City, Memphis, Nashville, Little Rock, Albuquerque. The dominant long-haul path for Chicago, Detroit, Ohio, and East Coast origins. Flagstaff elevation causes winter weather delays in January and February.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-15 South (Mountain West corridor)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Salt Lake City, Las Vegas, St. George. Primary route from Utah, Idaho, and parts of Montana. Last-leg delivery into Phoenix shifts to I-17 or US-93 depending on destination.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            I-17 and US-93 handle last-mile delivery into northern Arizona (Flagstaff, Sedona, Prescott, Kingman). Both can slow in winter weather. Yuma and Lake Havasu deliveries stage from Phoenix or Southern California depending on the carrier’s route plan.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route taken is the carrier’s call. Weather, fuel stops, and driver hours of service drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit times; the carrier plans the specific drive.
          </p>
        </div>
      </section>

      {/* H2.4 — "snowbird car shipping arizona" + winter visitor economy (unique AZ angle) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Snowbird car shipping Arizona and the winter visitor economy
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Snowbird car shipping Arizona is a different animal from Florida’s version. Arizonans call seasonal residents "winter visitors," and the volume concentrates in different cities than the Sun Belt average. Yuma alone sees its winter population more than double from October through April. Phoenix metro and Tucson absorb most of the rest.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Three winter visitor booking patterns dominate: one-way southbound in October-November, one-way northbound in April-May, and round-trip bookings covering both legs. Round-trip usually saves 10 to 15 percent on the combined price, if the schedule holds. For the trade-off, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Arizona winter visitor timing</div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>Peak southbound: Oct 15 &ndash; Dec 10</li>
              <li>Peak northbound: Mar 20 &ndash; May 10</li>
              <li>January: quietest month inbound</li>
              <li>Yuma volume peaks Dec-Feb</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Our snowbird-focused brokerage was built around this seasonal volume. We know which carriers run Washington-to-Yuma and which run Minnesota-to-Mesa. The specialization matters because generalist brokers often miss the Yuma leg entirely and quote a Phoenix stop with a self-drive extension, which costs more and adds time. For a week-by-week map, our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link> walks every month.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: not every winter visitor needs a snowbird-focused broker. A short Las Vegas-to-Phoenix run with flexible dates is a mainstream lane any licensed broker handles well. The specialization matters most on long-haul origins, RV resort destinations, and 55+ community deliveries.
          </p>
        </div>
      </section>

      {/* H2.5 — "arizona vehicle shipping" + tier framing (different from FL's 4 service types) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking an Arizona vehicle shipping tier that matches your car
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Arizona vehicle shipping breaks into four practical tiers, from budget open to climate-controlled enclosed. Picking the right tier depends on car value, paint condition, and how much summer sun exposure you want to accept.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Tier 1 — Economy open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open trailer, 7 to 10 cars per load. The right choice for daily drivers and most SUVs. $100K to $250K cargo insurance per vehicle is typical. Summer sun exposure is real but survivable for a 3 to 5 day transit.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Tier 2 — Top-load or premium open</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Open trailer, upper deck only. Avoids drip exposure from vehicles stacked above. $75 to $200 premium over standard open. Worth it for darker paint colors and anyone paranoid about desert haul grime.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Tier 3 — Standard enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer, 2 to 6 cars inside. Shields the car from UV, dust, and road debris. 40 to 60 percent above open rates. Insurance limits typically $250K to $750K per vehicle. The baseline for $75K+ cars and fresh paint.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Tier 4 — Climate-controlled enclosed</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Humidity- and temperature-regulated trailer. The right choice for recently restored cars (fresh paint still curing) or vehicles moving between extreme climates. Costs 20 to 40 percent above standard enclosed. Common for Barrett-Jackson consignments.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a longer tier walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed service</Link> comparison, plus the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> guide for high-value vehicles.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: tier 4 is usually overkill. Most restored cars ship fine on standard enclosed. Climate-controlled is really for cars moving within 30 days of a fresh paint job, or for extreme-climate transits (Minnesota winter to Phoenix summer, say).
          </p>
        </div>
      </section>

      {/* H2.6 — Monsoon PAA mirror (unique AZ weather angle) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How do monsoon and haboob storms affect carrier dispatch?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Arizona monsoon season runs June 15 through September 30, per the National Weather Service. Afternoon thunderstorms, flash floods, and haboob dust storms shut down I-10, I-8, and I-17 corridors on short notice. Most monsoon delays last 1 to 3 hours per event rather than full-day holds.
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
                <tr><td className="p-3">Haboob advisory, carrier holds in place</td><td className="p-3">1&ndash;3 hours</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Flash flood closes I-10 overnight</td><td className="p-3">6&ndash;18 hours</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Flagstaff winter snow, chain-up required</td><td className="p-3">4&ndash;24 hours</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Wildfire evacuation, terminal hold</td><td className="p-3">2&ndash;5 days</td><td className="p-3">Possible $25&ndash;$75/day storage after 48 hours</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Summer shipping also carries heat risk. July and August ambient highs in Phoenix regularly top 110&deg;F. For high-value cars, enclosed with climate control is a real risk-reduction move during those months. For claims mechanics when weather does cause damage, our <Link href="/resources/snowbird-car-shipping-insurance-claims" className="text-brand-navy underline font-semibold">insurance claims walkthrough</Link> explains who pays what.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: a January or February Arizona shipment carries almost no monsoon risk. The weather angle only applies to summer deliveries, and even then most weeks run clean.
          </p>
        </div>
      </section>

      {/* H2.7 — Scottsdale luxury PAA mirror (unique AZ angle) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What should Scottsdale luxury-car owners know before shipping?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Scottsdale is one of the highest-density luxury and collector car markets in the country, anchored by the January Barrett-Jackson auction at WestWorld. The auction draws thousands of collector vehicles and compresses enclosed-carrier capacity for most of January.
          </p>
          <ul className="mt-5 space-y-2 text-slate-700 leading-relaxed">
            <li>&bull; Book enclosed service <strong>6 to 8 weeks ahead</strong> for Barrett-Jackson consignments</li>
            <li>&bull; Confirm the receiving lot has after-hours access if the carrier arrives outside business hours</li>
            <li>&bull; Request soft-strap wheel ties, not frame chains, on any car over $75K</li>
            <li>&bull; For cars with fresh paint under 60 days, climate-controlled enclosed is worth the premium</li>
            <li>&bull; Buyers shipping cars out post-auction face the same tight supply through early February</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Scottsdale residents year-round also benefit from a dense specialty-carrier network. Phoenix-based enclosed carriers run regular routes to Los Angeles, Miami, Dallas, and the Northeast, so a mid-season Scottsdale shipment to any major metro is usually a straightforward book.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: luxury-car shipping is one area where our broker model and a direct specialty carrier are genuinely competitive. If you have an existing relationship with a specialty hauler who runs your route, booking direct can work. For first-time luxury shippers, broker vetting still adds value — see our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link>.
          </p>
        </div>
      </section>

      {/* H2.8 — Military PCS (unique AZ content) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Military PCS to Luke, Davis-Monthan, or Fort Huachuca
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Arizona’s three main military installations drive steady year-round car shipping volume: Luke AFB in Glendale, Davis-Monthan AFB in Tucson, and Fort Huachuca in Sierra Vista. PCS orders peak in May-August but run on a continuous cycle.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Military auto transport is managed through the Personal Property Transportation Office (PPTO), separate from household goods. The two carriers do not coordinate directly, so you need to sequence both yourself. Delivery to on-base addresses works for most carriers with 48 to 72 hours of gate notice; off-base residential delivery is easier logistically.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">PCS planning checklist</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Build 3 to 5 days between HHG delivery and vehicle delivery</li>
              <li>Confirm your sponsor on base has both tracking numbers</li>
              <li>Share the gate access process with your dispatcher at booking</li>
              <li>For stop-move or amended orders, call the broker before the carrier dispatches</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For first-time military shippers, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time snowbird shipping checklist</Link> covers the broader prep workflow. Many of the pre-pickup steps apply across civilian and military shipments.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: PCS auto transport can be claimed as a weight allowance in some cases. Check with your installation Transportation Office before booking commercially; you may be entitled to a POV shipment at government expense.
          </p>
        </div>
      </section>

      {/* H2.9 — Routes + metros + northern AZ (uses destination data) */}
      {(cities.length > 0 || inboundRoutes.length > 0) && (
        <section className="bg-brand-cream py-16">
          <div className="container-page max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-brand-navy">
              Routes, metros, and northern Arizona elevation notes
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Arizona’s highest-volume destination metros cluster in the Phoenix basin — Phoenix, Scottsdale, Mesa, Chandler, Glendale, and Surprise. Tucson and Yuma anchor the Southern Arizona volume. Northern Arizona (Flagstaff, Sedona, Prescott, Kingman) sits above 4,000 feet and often adds a last-mile premium plus winter-weather delay risk.
            </p>
            {cities.length > 0 && (
              <>
                <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">Popular Arizona destination cities</h3>
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
              Delivery notes for specific destination types sit in our{' '}
              <Link href="/resources/55-plus-community-car-delivery" className="text-brand-navy underline font-semibold">55+ community delivery</Link>{' '}
              and{' '}
              <Link href="/resources/rv-resort-car-delivery" className="text-brand-navy underline font-semibold">RV resort delivery</Link>{' '}
              resource pages.
            </p>
          </div>
        </section>
      )}

      {/* H2.10 — How we run the Arizona lane */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we run the Arizona lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal Arizona shipments and work the four-highway convergence daily. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, and on-time delivery history on I-10, I-40, and I-15. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
            <li>&bull; Four-highway carrier network</li>
            <li>&bull; Monsoon- and heat-aware dispatch</li>
            <li>&bull; Barrett-Jackson week enclosed capacity planning</li>
            <li>&bull; Sun City, Robson Ranch, and Yuma RV delivery</li>
            <li>&bull; Luke AFB and Davis-Monthan PCS coordination</li>
            <li>&bull; Insurance-claim advocacy on your behalf</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a side-by-side with other sunbelt options, see our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link>. For timing specifically, our <Link href="/resources/when-to-ship-your-car-south-for-winter" className="text-brand-navy underline font-semibold">when to ship south</Link> guide walks the fall window.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run inside Southern California headed to Phoenix where you know a route specialist, booking direct can beat our quote. For most residential Arizona shipments, our broker model wins on reliability and claim support.
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
                Get your Arizona car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and an Arizona specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="destination" pageUrl={`/destinations/${slug}`} destinationState="Arizona" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions per §10) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Arizona car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases, winter weather, border logistics, and the registration rules Arizona newcomers ask us about. For base cost and timing, see the sections above.
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
            Done right, Arizona car shipping is a four-corridor book-and-dispatch exercise with a few seasonal tells worth learning. The pattern is simple: match your origin to the right highway, time the booking around winter visitor and Barrett-Jackson peaks, confirm every fee in writing, and plan for elevation if your delivery sits above 4,000 feet. Request a free quote and an Arizona specialist will walk you through the corridor and transport tier that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get an Arizona quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, routes, and registration rules shift with market conditions &mdash; verify current pricing and AZ MVD requirements before booking.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car to Arizona" />
    </>
  );
}
