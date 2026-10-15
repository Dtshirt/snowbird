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

const slug = 'california';

export function generateMetadata() {
  return {
    title: 'California Car Shipping: Coachella Valley & Coast 2026',
    description:
      'California car shipping guide — Coachella Valley snowbird logistics, CARB-compliant carriers, I-5 and I-15 corridor costs, and new-resident DMV rules.',
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title: 'California Car Shipping: Coachella Valley & Coast',
      description:
        'How California car shipping actually works — three distinct markets, three corridors, and a CARB regulatory layer no other state imposes.',
      type: 'website'
    }
  };
}

// 10 NEW CA insider FAQs — zero overlap with FL / AZ / TX FAQ sets
const faqs = [
  {
    q: 'If my car was built as a 49-state version, can I still register it in California after shipping?',
    a: 'Yes for most passenger vehicles already owned for 7,500+ miles under the direct-import exception. New or near-new 49-state cars face CARB restrictions and may need a California emissions package before registration. Verify VIN emissions coding before shipping. California DMV and CARB websites publish the current list of eligible vehicles.'
  },
  {
    q: 'Does my car need a smog check right after it ships into California?',
    a: 'A smog check is required when you register the car in California as a new resident. The test runs $30 to $60 at a licensed station. Vehicles 8 model years old and newer are exempt from biennial smog but still require an initial inspection on transfer. Hybrids, electrics, and 1975-and-older vehicles are exempt entirely.'
  },
  {
    q: 'If I\'m shipping to Palm Springs during Modernism Week in February, will carrier supply be tight?',
    a: 'Yes, modestly. Modernism Week pulls 150,000+ visitors to the Coachella Valley over 11 days in mid-February, and hotel-adjacent carrier yards fill up. Expect pickup windows to widen by 1 to 2 days and rates to run 10 to 15 percent higher than non-event February weeks. Book 3+ weeks ahead for any delivery between February 10 and 25.'
  },
  {
    q: 'What happens to my pickup if a red flag warning or wildfire closure is active in my origin area?',
    a: 'Carriers cannot stage in zones under active evacuation orders. CalFire closures stop carrier access until the order is lifted — typical holds run 1 to 5 days during peak fire season (May through October). Insurance covers damage during active transit but not voluntary pre-staging in a declared zone. Your dispatcher will reroute pickup to a safer staging point.'
  },
  {
    q: 'I\'m a snowbird in Palm Springs but keep a Washington state address. Does my insurance follow the car?',
    a: 'Yes, your home-state auto policy covers the vehicle anywhere in the US during the shipping transit and after it arrives. California does not require you to register the car here as long as you remain a Washington resident and the car stays under 6 months in CA. Beyond 6 months, California generally considers the vehicle present enough to require registration.'
  },
  {
    q: 'How strict is California\'s 20-day registration window for new residents?',
    a: 'California gives new residents 20 days from the date they establish residency — not from the car\'s arrival date. Expect late penalties of $30+ per month after day 20. Required at the DMV: completed REG 343 application, out-of-state title, smog certificate, VIN verification, proof of insurance, and payment of registration plus Vehicle License Fee (VLF). Confirm current rules at dmv.ca.gov.'
  },
  {
    q: 'Can carriers deliver into a Coachella Valley gated country club?',
    a: 'Most Coachella Valley country clubs — The Vintage Club, Mission Hills, Indian Wells, Bighorn, Toscana — allow carrier access with 48 to 72 hours of gatehouse notice. Some require a certificate of insurance from the carrier. Tight interior cart paths may require you to meet the carrier at the clubhouse lot and drive the car the last quarter mile yourself.'
  },
  {
    q: 'Can I ship a car from California to Arizona when I migrate east for part of winter?',
    a: 'Yes. California-to-Arizona is one of the most heavily serviced lanes in the US — Phoenix to LA runs about 370 miles and prices $500 to $800 open. Many Coachella Valley snowbirds who also keep an Arizona address book round-trip CA-to-AZ transport. Carrier supply is strong both directions year-round, so lead time is short compared to seasonal east-coast lanes.'
  },
  {
    q: 'If I\'m shipping an imported classic through the Port of Long Beach, what\'s different?',
    a: 'Port vehicles come off the ship into a bonded yard, clear customs with a licensed broker (typically 3 to 10 business days), then move to a staging lot for pickup. Carriers that specialize in port deliveries hold TWIC credentials and can enter the restricted terminal zones. Expect $200 to $500 above standard rates for port pickup plus customs broker fees around $150 to $400.'
  },
  {
    q: 'My car is an EV. Should I drive it to California or ship it from the Pacific Northwest?',
    a: 'Shipping often wins for EVs on the long haul. The I-5 corridor from Seattle to Palm Springs is roughly 1,250 miles — about 4 charging stops in a modern EV and 2 full driving days. Shipping takes 3 to 5 days door to door at $900 to $1,400 and you fly down fresh. EVs ride on standard open or enclosed trailers; carriers handle them the same as combustion vehicles.'
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

export default function CaliforniaCarShippingPage() {
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
        { label: 'California' }
      ]} />

      <DestinationHeroImage destination={dest} height="h-40 sm:h-48 lg:h-56" />

      {/* HERO — H1 primary only; direct answer in sentence 1; primary bolded in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">California Service Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              California Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>California car shipping</strong> works nothing like Florida or Arizona. The state is both a top origin and a top destination on the same corridors, which creates the only major auto transport market in the country with heavy two-way flow. The Coachella Valley desert pulls in Pacific Northwest and Mountain West snowbirds while Southern California simultaneously ships thousands of vehicles east to Phoenix and Las Vegas every month. Add CARB emissions rules that limit which carriers can even operate in the state, wildfire closures that can shut down pickup zones, and a 20-day DMV window for new residents, and California shipping needs its own planning model.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request a California quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; Coachella Valley snowbird specialists</li>
              <li>&bull; CARB-compliant carrier network</li>
              <li>&bull; I-5, I-15, I-10 corridor coverage</li>
              <li>&bull; Port of LA/Long Beach vehicle logistics</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="destination" pageUrl={`/destinations/${slug}`} destinationState="California" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer per §6 */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Three Californias on three shipping lanes
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              California car shipping breaks into three distinct markets. The Coachella Valley desert (Palm Springs, Palm Desert, Rancho Mirage, Indian Wells, La Quinta) runs on October-through-April snowbird volume. Coastal Southern California (San Diego, Orange County, LA) runs on year-round relocation and vehicle-sale moves. Northern California (Bay Area, Sacramento, Central Valley) runs primarily on outbound-heavy relocation volume as residents migrate east to lower-tax states.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Three markets, three different seasonal rhythms. Coachella Valley peaks October through April. The SoCal coast is flat all year. NorCal spikes outbound in summer when school-year moves finalize. A broker that prices all three lanes the same is averaging over distinctions that cost or save you real money.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The paradox: California generates more outbound car shipments than any other state and still ranks top-five for inbound snowbird volume. Carrier supply reflects this two-way flow — pricing on the LA-to-Phoenix lane is some of the most competitive in the country because trucks run full in both directions.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: distinctions between the three markets matter most for cross-country routes and seasonal timing. A straightforward Oakland-to-San Diego run in May is easy on any licensed broker. The nuance shows up on long-haul origins and Coachella Valley seasonal timing. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "california auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What should California auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            California auto transport prices higher than Texas or Florida for cross-country lanes because CARB rules restrict which carriers can enter the state. Short regional lanes run $500 to $900. Mountain West origins run $800 to $1,300. East Coast and Pacific Northwest origins run $1,100 to $2,000. In-state California lanes (LA to San Diego, LA to Palm Springs) are among the cheapest in the US because of carrier density.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: origin, destination region (coastal, Coachella, or Bay Area), timing (snowbird season or off-peak), and transport type. The Coachella Valley commands a small premium over LA because final-mile delivery east of Beaumont crosses lower-density territory.
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
                <tr><td className="p-3">In-state CA (LA &harr; SD or Coachella)</td><td className="p-3">120&ndash;200 mi</td><td className="p-3">$400&ndash;$700</td><td className="p-3">+$50&ndash;$100</td></tr>
                <tr><td className="p-3">Phoenix &rarr; Coachella / LA (I-10)</td><td className="p-3">250&ndash;370 mi</td><td className="p-3">$500&ndash;$800</td><td className="p-3">+$75&ndash;$150</td></tr>
                <tr><td className="p-3">Las Vegas &rarr; Coachella / LA (I-15)</td><td className="p-3">270&ndash;300 mi</td><td className="p-3">$500&ndash;$800</td><td className="p-3">+$75&ndash;$125</td></tr>
                <tr><td className="p-3">Seattle / Portland &rarr; CA (I-5)</td><td className="p-3">900&ndash;1,250 mi</td><td className="p-3">$900&ndash;$1,400</td><td className="p-3">+$150&ndash;$275</td></tr>
                <tr><td className="p-3">Mountain West (Denver, SLC) &rarr; CA</td><td className="p-3">800&ndash;1,100 mi</td><td className="p-3">$800&ndash;$1,300</td><td className="p-3">+$100&ndash;$225</td></tr>
                <tr><td className="p-3">Midwest &rarr; CA (I-80 / I-40)</td><td className="p-3">1,800&ndash;2,100 mi</td><td className="p-3">$1,100&ndash;$1,700</td><td className="p-3">+$175&ndash;$300</td></tr>
                <tr><td className="p-3">Northeast &rarr; CA cross-country</td><td className="p-3">2,700&ndash;3,000 mi</td><td className="p-3">$1,400&ndash;$2,100</td><td className="p-3">+$200&ndash;$400</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 per-mile averages (roughly $0.75/mi short lane down to $0.35/mi cross-country). Rates shift weekly with fuel, CARB enforcement, and seasonal demand.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the CA-to-AZ lane runs so heavily that return-trip discounts are real. If you can time your pickup to a carrier already heading east out of LA, round-trip pricing drops meaningfully. Ask your broker specifically about carrier backhauls on the Coachella-Phoenix or LA-Las Vegas lanes.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping to california" + three-corridor framing */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping to California on I-5, I-15, and I-10
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping to California runs on three primary interstate corridors, each serving a different origin region. The three corridors converge in Southern California, which is why LA and the Inland Empire function as the state&rsquo;s dispatch hub.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-5 (Pacific Northwest down the spine)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The main Pacific Northwest snowbird corridor. Seattle to Palm Springs runs about 1,250 miles, 4 to 6 days transit, $900 to $1,400 open. Carrier supply strong year-round; Siskiyou Pass can slow transit in winter.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-15 (Mountain West &rarr; SoCal)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Salt Lake City, Las Vegas, and Mountain West origins into LA and the Coachella Valley. Las Vegas to LA (~270 miles) is one of the densest short-haul lanes in the country. Carriers run this corridor daily.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-10 (Southeast &amp; TX &rarr; CA)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Long east-west backbone from Jacksonville to Los Angeles. Phoenix-to-LA via I-10 is the busiest cross-state truck lane in the US. Final leg into the Coachella Valley is on I-10 east of Palm Springs.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-80 / I-40 (Midwest cross-country)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Chicago and Minneapolis origins into the Bay Area via I-80 or Southern California via I-40. Donner Pass (I-80) can close briefly in winter storms. 1,800 to 2,100 mile routes, 6 to 8 days transit.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Northern California (Bay Area, Sacramento) is reached primarily off I-5 and I-80. Carrier supply is strong but final-mile delivery into coastal towns (Santa Cruz, Monterey) often requires terminal-to-terminal handoff from a smaller carrier.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier&rsquo;s call. CARB restrictions, weather, driver hours, and load mix shape the decision, not shortest distance. A corridor-aware broker anticipates transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "coachella valley car shipping" + unique Coachella deep dive */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Coachella Valley car shipping and the desert snowbird season
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Coachella Valley car shipping is California&rsquo;s snowbird core — Palm Springs, Palm Desert, Rancho Mirage, Indian Wells, La Quinta, and Indio. Local tourism and planning authorities report that Valley population roughly doubles during peak season from a year-round base of ~350,000 to upwards of 700,000 between November and April. The seasonal economy sustains hundreds of 55+ communities and country clubs that drive concentrated carrier demand on a predictable six-month cycle.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Origin states skew toward the Pacific Northwest and Mountain West. Washington, Oregon, Idaho, Montana, and Nevada send the largest volumes. British Columbia Canadians are a notable minority on the I-5 corridor. Midwestern snowbirds — Illinois, Michigan, Minnesota — add volume on the longer I-80 cross-country run.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Coachella Valley seasonal timing</div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>Peak southbound: Oct 15 &ndash; Dec 15</li>
              <li>Peak northbound: Apr 1 &ndash; May 15</li>
              <li>Population crest: Jan through Mar</li>
              <li>Modernism Week spike: Feb 15 &ndash; 25 (approx)</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Three Coachella booking patterns dominate: one-way southbound in October-November, one-way northbound in April-May, and round-trip bookings covering both legs. Round-trip usually saves 10 to 15 percent on the combined price if the schedule holds. For the trade-off, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat on volume figures: the Valley&rsquo;s seasonal doubling is a widely cited tourism-authority estimate, not a federal census figure, so treat it as the right order of magnitude. The point stands either way — the Coachella Valley is one of the densest snowbird markets in the western US with a tightly compressed six-month cycle.
          </p>
        </div>
      </section>

      {/* H2.5 — "california vehicle shipping" + option selection */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking a California vehicle shipping tier that fits your run
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            California vehicle shipping fits most clients into one of four service choices. The right pick depends on car value, how firm your dates are, and whether your delivery is residential or terminal-side.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of California shipments. Insurance limits of $100K to $250K per vehicle are typical. Best per-mile value on long-haul origins.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer. Costs 30 to 50 percent more than open. Right for classics, exotics, Pebble Beach-grade collectors, $75K+ cars, and anything with fresh paint. Insurance limits reach $1M+ per vehicle.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Expedited (guaranteed pickup)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A locked pickup date rather than a 3- to 5-day window. Adds $150 to $400 to the base rate. Worth it when a lease start, home closing, or event date is fixed.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Terminal-to-terminal</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                You drop and collect at carrier staging yards instead of residential addresses. Common in LA, Long Beach, Ontario, and Oakland because of port infrastructure. Saves $75 to $150 if you can plan around it.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value vehicles crossing into the Coachella Valley country-club corridor or Pebble Beach, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on short California lanes. The LA-to-Coachella hop runs daily — a 2-day flexible window often matches on reliability without the premium.
          </p>
        </div>
      </section>

      {/* H2.6 — timing + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car to California?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Coachella Valley shipments, the strongest booking weeks run late September through October 15. Demand firms up through late October and compresses hard the first two weeks of November. For coastal SoCal and NorCal shipments, timing follows a flatter cycle with summer peaks tied to school-year moves and corporate relocation seasons.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Smart Coachella weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late September</li>
                <li>Oct 10&ndash;20 (pre-peak)</li>
                <li>Late March</li>
                <li>Mid-May (post-close)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Expensive weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late Oct &ndash; mid-Nov (Coachella peak)</li>
                <li>Feb 15&ndash;25 (Modernism Week)</li>
                <li>June &ndash; August (PNW migration)</li>
                <li>Dec 20 &ndash; Jan 3</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Year-round sweet spot</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late January</li>
                <li>Mid-May</li>
                <li>Mid-September</li>
                <li>Mid-November (post-peak)</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a week-by-week year view, our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link> walks every month. For a timing-only decision on the southbound leg, the <Link href="/resources/when-to-ship-your-car-south-for-winter" className="text-brand-navy underline font-semibold">when to ship south</Link> guide walks the trade-offs.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Coachella Valley northbound supply tightens again in late March as Easter and spring break overlap with early return traffic. If your spring return is flexible, mid-April through mid-May usually beats late March on both price and carrier availability.
          </p>
        </div>
      </section>

      {/* H2.7 — CARB regulatory angle (totally unique to CA) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            CARB-compliant carriers and what that means for your price
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            California has rules no other state imposes on auto transporters. The California Air Resources Board (CARB) regulates heavy-duty diesel trucks operating in California through the Clean Truck Program. Carriers whose rigs do not meet current CARB emission standards cannot legally operate inside the state. This single rule shapes California shipping pricing more than weather, distance, or any other variable.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The practical effect: the pool of carriers available to run a California lane is smaller than for an equivalent-distance lane elsewhere. Supply is tighter, prices run 10 to 20 percent above comparable lanes outside California, and short-notice pickups are harder to arrange. Legitimate carriers display their CARB registration; brokers that quote suspiciously low California rates sometimes dispatch to non-compliant owner-operators that face fines or impound at the state line.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Signs of a legitimate California carrier</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Active FMCSA MC number and DOT number in good standing</li>
              <li>&bull; Carrier is willing to show CARB TRUCRS compliance verification</li>
              <li>&bull; Written contract that names the pickup carrier (not just the broker)</li>
              <li>&bull; $100K+ cargo insurance filed on the BMC-91 with MCS-90 endorsement</li>
              <li>&bull; Rate aligns with the California range above, not an outlier below it</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a longer discussion of carrier vetting, see our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link>. For claims mechanics when a non-compliant carrier causes problems mid-shipment, the <Link href="/resources/snowbird-car-shipping-insurance-claims" className="text-brand-navy underline font-semibold">insurance claims walkthrough</Link> explains the chain of responsibility.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: CARB rules shift over time. The current compliance framework is public at arb.ca.gov; verify details for your pickup month before booking.
          </p>
        </div>
      </section>

      {/* H2.8 — Weather PAA mirror (fire + mountain passes + marine layer) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What about wildfires, red flag warnings, and mountain passes?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            California weather affects car shipping in three distinct ways. Wildfire season (May through October, increasingly year-round) can close I-5 corridors or Coachella Valley access roads for hours or days. Winter mountain passes (Donner on I-80, Siskiyou on I-5, Tejon Pass on I-5 near Grapevine) can shut briefly in December through February storms. Pacific marine layer fog can slow delivery in San Francisco Bay and the Central Coast.
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
                <tr><td className="p-3">Red flag warning / wildfire closure</td><td className="p-3">1&ndash;5 days</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Donner Pass chain requirement</td><td className="p-3">6&ndash;24 hours</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Grapevine (I-5) snow closure</td><td className="p-3">4&ndash;24 hours</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">Post-fire FEMA/CalFire restriction</td><td className="p-3">3&ndash;14 days</td><td className="p-3">Rebooking at current rate</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Cargo insurance covers weather-caused damage during active transit. Staging-lot damage during an evacuation falls in a gray zone with some carriers — ask your dispatcher at booking. For hurricane-equivalent planning logic adapted to CalFire closures, our <Link href="/resources/hurricane-season-florida-shipping" className="text-brand-navy underline font-semibold">hurricane season shipping</Link> framework translates well to California wildfire season.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: California wildfire closures are unpredictable and can affect pickup even when your destination is clear. Build a 2 to 5 day buffer into any June-through-October delivery window and the lane behaves predictably.
          </p>
        </div>
      </section>

      {/* H2.9 — Dual flow / outbound angle (unique CA) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            California outbound: when snowbirds leave vs arrive
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            California is the only major auto transport market with heavy two-way flow. Pacific Northwest and Mountain West snowbirds move into the Coachella Valley October through April. At the same time, Californians ship vehicles east to Phoenix, Las Vegas, Austin, and Dallas year-round — tax moves, housing moves, and partial-year migrations to lower-cost states.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            This dual flow has one big benefit: trucks run full in both directions. The LA-to-Phoenix lane has such consistent demand that pricing is some of the most competitive in the country, and carrier supply almost never dries up. For partial-year California residents who split time between the state and a secondary home east, two-way or round-trip bookings consistently price under one-way comparables.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">What this means for your booking</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>CA-to-AZ and CA-to-NV lanes have year-round carrier density and fast dispatch</li>
              <li>CA-to-TX lanes benefit from CARB-compliant long-haul carriers running both directions</li>
              <li>Round-trip bookings for CA-AZ or CA-NV routes consistently save 10 to 15 percent</li>
              <li>Short-notice (same-week) pickups work on CA short-haul lanes but not cross-country</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For first-time California shippers, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> walks the prep basics. For a side-by-side with the AZ and TX destinations many Californians also use, see our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: outbound rate advantages assume a carrier is already pre-booked for a return load. For truly short-notice pickups during holiday weeks, the backhaul discount shrinks or disappears.
          </p>
        </div>
      </section>

      {/* H2.10 — Routes + metros + Coachella cities */}
      {(cities.length > 0 || inboundRoutes.length > 0) && (
        <section className="bg-white py-16">
          <div className="container-page max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-brand-navy">
              Routes, metros, and the Coachella Valley snowbird corridor
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              California&rsquo;s highest-volume destination cluster is the Coachella Valley — Palm Springs, Palm Desert, Rancho Mirage, Indio, and Indian Wells, all along the I-10 corridor east of Beaumont. San Diego anchors the Southern California coastal volume. Los Angeles and Ontario function as the state&rsquo;s inland dispatch hubs; Oakland handles Northern California terminal volume.
            </p>
            {cities.length > 0 && (
              <>
                <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">Popular California destination cities</h3>
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

      {/* H2.11 — How we run the CA lane */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the California lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal California shipments and dispatch exclusively to CARB-compliant carriers for every California leg. Our carrier network is pre-vetted against FMCSA safety records, CARB compliance, insurance limits, and on-time delivery history on I-5, I-15, and I-10. Quotes are all-in with no dispatch surcharges after booking.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
            <li>&bull; Coachella Valley snowbird specialists</li>
            <li>&bull; CARB-compliant carrier network</li>
            <li>&bull; I-5, I-15, I-10 corridor coverage</li>
            <li>&bull; Port of LA/Long Beach pickup experience</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; Round-trip CA-AZ and CA-NV booking expertise</li>
            <li>&bull; California DMV-aware new-resident guidance</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            First-time shippers should run through our <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link> before pickup day. Snowbirds comparing California with Arizona or Texas should see our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run inside California with rigid dates, a direct carrier that already runs your lane can beat our quote. For most residential California shipments and anything crossing a state line, our broker model wins on reliability, CARB vetting, and claim support.
          </p>
          <BrokerNote className="mt-6" />
        </div>
      </section>

      {/* Secondary quote form rail */}
      <section className="bg-white py-16">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="eyebrow">Ready to Ship</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Get your California car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a California specialist will follow up with CARB-compliant carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="destination" pageUrl={`/destinations/${slug}`} destinationState="California" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.12 — FAQ (exactly 10 insider questions per §10) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            California car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases: CARB rules, Coachella Valley country-club access, Port of Long Beach pickup, wildfire holds, and the California DMV questions new residents ask us. For base cost and timing, see the sections above.
          </p>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-slate-200 bg-white p-5">
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
      <section className="bg-white py-14">
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
      <section className="bg-brand-cream py-14">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-navy">
            Ship with confidence
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Done right, California car shipping comes down to picking the right lane for the California you are shipping into. The Coachella Valley runs on October-through-April snowbird volume with Pacific Northwest origins. Coastal SoCal runs year-round. NorCal is relocation-driven and more outbound than inbound. Layer in CARB-compliant carriers and the 20-day DMV window, and the plan writes itself. Request a free quote and a California specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get a California quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, CARB enforcement, and California DMV rules shift with policy &mdash; verify current pricing and registration requirements at dmv.ca.gov and arb.ca.gov before booking.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car to California" />
    </>
  );
}
