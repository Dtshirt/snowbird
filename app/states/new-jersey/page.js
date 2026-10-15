import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getStateBySlug, originStates } from '@/data/states';
import { getRoutesByOrigin } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';

const slug = 'new-jersey';

export function generateMetadata() {
  return {
    title: 'New Jersey Car Shipping: Shore, Gold Coast & Suburbs',
    description:
      'New Jersey car shipping guide — Shore snowbird logistics, Gold Coast staging reality, Turnpike toll impact, and the 60-day MVC rule for returning residents.',
    alternates: { canonical: `/states/${slug}` },
    openGraph: {
      title: 'New Jersey Car Shipping: Shore, Gold Coast & Suburbs',
      description:
        'Three distinct New Jersey shipping markets with their own carrier mechanics — the practical guide for Shore snowbirds, Gold Coast residents, and central corridor suburbs.',
      type: 'website'
    }
  };
}

// 10 NJ-specific insider FAQs — zero overlap with NY/FL/AZ/TX/CA FAQ sets
const faqs = [
  {
    q: 'Do NJ Turnpike tolls factor into my car shipping quote?',
    a: 'Yes, but less than you might think. Multi-axle commercial carrier tolls on the New Jersey Turnpike are built into the broker\'s dispatch rate, not billed separately after booking. The Turnpike is one of the most expensive toll roads in the country for commercial vehicles, but on a 1,200-mile Florida run the toll is a small fraction of total fuel and driver cost. A legitimate quote on the I-95 lane never adds a toll surcharge after booking.'
  },
  {
    q: 'Can a car carrier even use the Garden State Parkway?',
    a: 'No, not north of Exit 105. The Garden State Parkway prohibits commercial truck traffic (over 7,000 lbs gross or with trailers) in the northern section — a rule dating back to the Parkway\'s design as a passenger-only highway. All full-size auto transport carriers reroute to the New Jersey Turnpike, I-287, or Route 9. This is why Shore pickups routinely add a day to transit from Exit 100 south.'
  },
  {
    q: 'Why do Hoboken and Jersey City pickups work when Manhattan pickups don\'t?',
    a: 'Jersey Gold Coast streets are wider than Manhattan grids, and commercial-vehicle regulations are far less restrictive. Full-size carriers can usually find legal pickup space in Hoboken (Washington Street side streets), Jersey City (Grove Street area), and Weehawken (Boulevard East). Some older Hoboken brownstone blocks still require staging at a nearby garage, but the city overall is friendly to residential carrier pickups.'
  },
  {
    q: 'My pickup is in Lakewood. What should I know about Florida-bound carrier supply?',
    a: 'Lakewood\'s Orthodox Jewish community migrates heavily to South Florida (Miami Beach, Hollywood, Hallandale) and the carrier network reflects it. Winter southbound supply from Lakewood is strong but concentrates in windows that avoid Shabbat and holiday pickups. Book Friday-morning or Sunday-morning pickup slots in winter for best availability. Carriers familiar with the lane build around the schedule without issues.'
  },
  {
    q: 'If I\'m shipping from a Toms River or Ocean County 55+ community, is RV resort delivery any different?',
    a: 'Most Ocean County active-adult communities (Holiday City, Leisure Village, Four Seasons) accept carrier delivery with 48 to 72 hours of gate notice. A few private 55+ developments require a certificate of insurance from the carrier. Narrow interior streets occasionally force a short walk-and-meet at the community entrance. Confirm policy with your HOA before pickup day.'
  },
  {
    q: 'My pickup is a Hoboken apartment building with no driveway. How does that work?',
    a: 'Carriers coordinate a pickup window on a nearby legal commercial parking block (often Observer Highway, Marin Boulevard, or near the PATH station). You drive the car to the meeting point and the carrier loads from there. Pickup is almost always completed within 30 minutes once the driver is on-site. Full door-to-door at a Hoboken brownstone is rarely physically possible.'
  },
  {
    q: 'Does New Jersey\'s 60-day MVC window apply if I\'m becoming a part-time NJ resident after a Florida winter?',
    a: 'The 60-day rule applies to new NJ residents transferring an out-of-state title or registration. If you remain a Florida resident and only visit NJ seasonally, you keep your Florida registration. The MVC\'s moving page is the authoritative reference. Confirm current rules at nj.gov/mvc before changing registration — penalties for late transfer apply once you establish residency, not from the date the car arrives in NJ.'
  },
  {
    q: 'I need the car inspected after it ships back to NJ. What\'s the current rule?',
    a: 'New Jersey eliminated the mandatory safety inspection for passenger vehicles in August 2010. Emissions inspection is still required in most counties for gasoline vehicles older than 5 years. Hybrids, electrics, diesel passenger vehicles, and newer vehicles have different schedules. The NJ MVC inspection schedule is published at nj.gov/mvc — check your county and model year before scheduling.'
  },
  {
    q: 'Can a carrier pick up from a Short Hills, Summit, or Bedminster country club?',
    a: 'Most central-NJ and Morris County country clubs allow carrier access through the service entrance with 48 to 72 hours of notice. A few older private clubs with cart-path interior roads require you to meet the carrier in the main lot. Larger member events (member-guest, charity tournaments) can block carrier access entirely — ask your club ahead of booking.'
  },
  {
    q: 'Is Jersey Shore summer pickup supply different from winter snowbird supply?',
    a: 'Yes — opposite seasons. Summer Shore demand (June through August) is for inbound deliveries (vacation homes, beach rentals) with light outbound supply. Winter Shore demand (October through December) is heavy outbound to Florida with light inbound. Carriers run both lanes but adjust rates based on which direction has backhaul demand. A winter Toms River to Florida pickup usually prices below the equivalent summer run.'
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

export default function NewJerseyCarShippingPage() {
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
        { label: 'New Jersey' }
      ]} />

      {/* HERO — H1 primary only; direct answer sentence 1; PAS; primary in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">New Jersey Origin Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              New Jersey Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>New Jersey car shipping</strong> gets lumped in with New York, and that’s the first mistake first-time shippers make. The two states have different corridor economics, different pickup realities, and different seasonal rhythms. A Hoboken pickup behaves nothing like a Toms River or Short Hills pickup, and the Garden State Parkway’s commercial-truck ban reshapes carrier routing in ways most NJ residents never notice. This page walks the three distinct New Jersey shipping markets, the Turnpike-versus-GSP routing reality, the Shore snowbird season, and the MVC rules that catch returning residents off guard.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request a New Jersey quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; Jersey Shore snowbird specialists</li>
              <li>&bull; Gold Coast staging experience</li>
              <li>&bull; I-95 Turnpike corridor coverage</li>
              <li>&bull; 60-day MVC transfer guidance</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="New Jersey" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Three New Jersey shipping markets: Gold Coast, Shore, and central corridor
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              New Jersey car shipping splits into three distinct markets. The Gold Coast (Hoboken, Jersey City, Weehawken, Fort Lee) runs on dense urban logistics that look more like Manhattan than suburban NJ. The Shore corridor (Monmouth, Ocean, Atlantic counties) runs on heavy seasonal snowbird volume with a Garden State Parkway reroute built into every carrier trip. The central and northern suburbs (Short Hills, Summit, Princeton, Bedminster, Morristown) run on standard residential pickups with a strong luxury-vehicle tilt.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Each market has its own pricing and pickup conventions. Gold Coast quotes assume staging. Shore quotes build in a Turnpike reroute cost. Central suburb quotes are the most predictable and usually the cheapest per mile.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Timing varies by market too. The Shore’s snowbird season concentrates October through December southbound and March through May northbound. Gold Coast residents ship more evenly through the year, tied to job relocations and apartment moves. Central NJ sees a bump in summer tied to school-year closings.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions matter most for first-time shippers and anyone with tight timing. A straightforward residential pickup in a Mercer County driveway in April behaves like any suburban lane in the country. The nuance shows up on Gold Coast pickups, Shore seasonal timing, and high-value vehicles. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "new jersey auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What does New Jersey auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            New Jersey auto transport prices run slightly below the equivalent New York lane because carrier supply is deeper and NYC-style staging surcharges don’t apply. Short regional lanes (NJ to NY, PA, MD) run $400 to $700. Mid-Atlantic lanes (NJ to VA, NC, SC) run $650 to $1,100. Florida lanes run $900 to $1,700 open on a roughly 1,100-mile route. Cross-country Arizona and California lanes run $1,250 to $2,100.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: pickup zip code (Gold Coast adds complexity, Shore adds the GSP reroute, suburbs are straightforward), destination, timing (snowbird peak or shoulder), and transport type. Enclosed transport runs 30 to 50 percent above open on the same lane.
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
                <tr><td className="p-3">NJ &rarr; Florida (I-95 Turnpike)</td><td className="p-3">1,100&ndash;1,250 mi</td><td className="p-3">$900&ndash;$1,700</td><td className="p-3">+$125&ndash;$275</td></tr>
                <tr><td className="p-3">Shore &rarr; Florida (GSP reroute)</td><td className="p-3">1,150&ndash;1,300 mi</td><td className="p-3">$950&ndash;$1,750</td><td className="p-3">+$150&ndash;$275</td></tr>
                <tr><td className="p-3">Gold Coast &rarr; Florida</td><td className="p-3">1,150&ndash;1,250 mi</td><td className="p-3">$1,000&ndash;$1,800</td><td className="p-3">+$150&ndash;$300</td></tr>
                <tr><td className="p-3">NJ &rarr; Texas (I-81 / I-40)</td><td className="p-3">1,700&ndash;1,900 mi</td><td className="p-3">$1,100&ndash;$1,800</td><td className="p-3">+$150&ndash;$275</td></tr>
                <tr><td className="p-3">NJ &rarr; Arizona cross-country</td><td className="p-3">2,250&ndash;2,450 mi</td><td className="p-3">$1,250&ndash;$2,100</td><td className="p-3">+$175&ndash;$325</td></tr>
                <tr><td className="p-3">NJ enclosed to FL luxury</td><td className="p-3">1,100&ndash;1,250 mi</td><td className="p-3">$1,350&ndash;$2,300</td><td className="p-3">+$200&ndash;$400</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 per-mile averages and recent published guides from FreightWaves and moveBuddha. Rates shift weekly with fuel, demand, and carrier supply; verify a current quote before booking.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the NJ-to-FL lane is one of the densest in the country. Short-notice pickups work on this corridor in ways they don’t on cross-country runs. Flexibility of 2 to 3 days on pickup typically saves 10 to 15 percent off the posted rate.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping from new jersey" + corridor framing */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping from New Jersey: I-95, Turnpike, and the GSP reality
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping from New Jersey rides primarily on the New Jersey Turnpike (I-95 south of Exit 7A), which connects into I-95 south through Delaware, Maryland, Virginia, and the Carolinas to Florida. The Garden State Parkway is not a carrier option north of Exit 105 — commercial trucks over 7,000 lbs are banned from the Parkway’s northern section by state statute. That one rule shapes every Shore and northern-NJ pickup.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">NJ Turnpike / I-95 (southbound)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The dominant Florida corridor. Carrier supply is dense year-round. 1,100 to 1,250 miles depending on pickup zip, 3 to 7 days transit. Multi-axle commercial tolls built into dispatch rate.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">GSP reroute (Shore pickups)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Carriers can’t take the GSP from Shore pickups north of Exit 105. The reroute runs via Route 9, I-195, or Route 70 to meet the Turnpike. Adds 20 to 45 minutes to carrier staging time.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-78 / I-80 (NJ to Chicago hub)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Connector west for Texas, Mountain West, and California shipments. Often used by carriers that aggregate at Chicago staging terminals before the long-haul leg.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Teterboro / Carlstadt staging</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                North Jersey is where NYC-area carriers physically consolidate loads. Many &ldquo;Manhattan pickups&rdquo; actually ship from a Teterboro or Carlstadt yard after the customer drives the car across the Hudson.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            The NJ Turnpike’s truck-only lanes (south of Exit 8A) move commercial traffic faster than passenger lanes during peak hours. Carriers familiar with the corridor use the dedicated truck lanes to meet transit windows that passenger-car drivers couldn’t replicate.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier’s call. Weather, tolls, driver hours, and load mix drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "jersey shore car shipping" + unique Shore snowbird content */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Jersey Shore car shipping and the Ocean County snowbird corridor
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Jersey Shore car shipping concentrates in Ocean, Monmouth, and Atlantic counties. The Ocean County corridor — Toms River, Brick, Lakewood, Manchester, Jackson — holds one of the highest per-capita 55+ populations in the Northeast, and the shipping volume reflects it. Dozens of active-adult communities (Holiday City, Leisure Village, Four Seasons at Lakewood, Greenbriar) send concentrated snowbird volume to Florida between October and December.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Lakewood specifically has an unusual destination pattern. The town’s large Orthodox Jewish community migrates heavily to the Miami Beach, Hollywood, and Hallandale corridor rather than the Gulf Coast or Central Florida destinations that dominate other NJ pickups. Carriers familiar with the Lakewood lane know to schedule pickups around Shabbat and major Jewish holidays.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Shore snowbird timing</div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>Peak southbound: Oct 15 &ndash; Dec 15</li>
              <li>Peak northbound: Apr 1 &ndash; May 15</li>
              <li>Return trip supply: lightest in June</li>
              <li>Summer inbound rush: Jun through Aug (opposite flow)</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Round-trip bookings covering both the southbound and northbound legs often save 10 to 15 percent on the combined price. For the trade-off, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown. For 55+ community-specific logistics, our <Link href="/resources/55-plus-community-car-delivery" className="text-brand-navy underline font-semibold">55+ community delivery</Link> guide walks the gatehouse protocol.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat on volume figures: Ocean County’s snowbird population is widely reported in local tourism and planning context but is not a formal Census category. Treat the “highest per-capita 55+” framing as directional. The practical point stands — the Shore ships a lot of cars south every October.
          </p>
        </div>
      </section>

      {/* H2.5 — "snowbird car shipping from new jersey" + MVC 60-day angle */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Snowbird car shipping from New Jersey and the 60-day MVC window
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Snowbird car shipping from New Jersey concentrates between early October and mid-December southbound, with a return rush in April and early May. The booking cadence looks a lot like New York’s but with one meaningful difference: NJ snowbirds who establish Florida residency to escape New Jersey’s property-tax environment face a specific MVC rule on their eventual return.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The NJ Motor Vehicle Commission requires new or returning residents to transfer out-of-state title and registration within 60 days of establishing NJ residency. Penalties for late transfer apply from the residency establishment date, not from the date the car arrives in NJ. If you spent six months in Florida with Florida plates and are returning to NJ as a resident, the clock starts the moment you re-establish NJ residency.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">NJ MVC vehicle transfer essentials</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; 60-day transfer window from NJ residency date</li>
              <li>&bull; In-person MVC appointment required (online scheduling at nj.gov/mvc)</li>
              <li>&bull; Standard transfer fee: $60 (one-lien $85, two-lien $110)</li>
              <li>&bull; Emissions inspection required for most passenger vehicles (county-dependent)</li>
              <li>&bull; Safety inspection ended for passenger vehicles in August 2010</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For first-time snowbirds working through residency decisions, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> walks the prep basics. For the full snowbird calendar across both legs, our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link> covers each month.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the 60-day rule applies only to NJ residents. If you remain a Florida resident and visit NJ seasonally without establishing residency, your Florida registration continues to be valid. Residency is a separate tax and legal question — consult an accountant, not a car shipper, on the residency piece.
          </p>
        </div>
      </section>

      {/* H2.6 — Gold Coast urban reality (unique NJ content) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Gold Coast: Hoboken, Jersey City, and the carrier staging reality
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The New Jersey Gold Coast (Hoboken, Jersey City, Weehawken, Fort Lee, Edgewater) behaves more like NYC than like suburban NJ for carrier logistics. Dense residential blocks, limited street parking, and PATH-adjacent commercial corridors mean most Gold Coast pickups rely on a staging point rather than door-to-door loading.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The upside: NJ Gold Coast streets are generally wider than Manhattan grids, and commercial-vehicle rules are far less restrictive. Full-size carriers can usually find legal pickup space in Hoboken (side streets off Washington), Jersey City (Grove Street area, Journal Square), and Weehawken (Boulevard East). Staging is still the norm, but it’s a 5- to 15-minute walk, not the 30-minute walk Manhattan residents often face.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">What Gold Coast pickups actually look like</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Carrier calls 24 to 48 hours ahead to confirm a staging point</li>
              <li>Common staging: nearby parking garage, wide boulevard, or commercial loading zone</li>
              <li>Loading takes 20 to 45 minutes depending on carrier position on the trailer</li>
              <li>Many &ldquo;NYC pickups&rdquo; are actually staged at a Teterboro or Carlstadt yard</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds comparing a Gold Coast staged pickup against trucking the car to the suburbs first, our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link> walks the trade-offs. For first-time Gold Coast shippers, our <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link> covers the pickup-day prep steps.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: a Gold Coast staged pickup is not a disadvantage — it’s the normal pattern for urban auto transport. Any broker that promises a true residential pickup from a Hoboken brownstone or a Jersey City high-rise is overselling what’s physically possible.
          </p>
        </div>
      </section>

      {/* H2.7 — Service tier selection */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking a service tier for your New Jersey shipment
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most New Jersey shipments fit into one of four service choices. The right pick depends on car value, pickup location, and schedule firmness.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of New Jersey shipments. Insurance limits of $100K to $250K per vehicle are typical.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer. Costs 30 to 50 percent more than open. Right for Short Hills, Bedminster, and Alpine luxury vehicles, and anything over $75K. Insurance limits reach $1M+ per vehicle.
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
                You drop and collect at a carrier staging yard (Teterboro, Carlstadt, Linden) instead of residential address. Saves $75 to $200 for anyone who can get to a staging yard.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value Hudson Valley-adjacent luxury runs, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on the NJ-to-FL lane. Peak-season carrier supply is deep enough that a flexible 2- to 3-day pickup window usually matches on reliability without the premium.
          </p>
        </div>
      </section>

      {/* H2.8 — timing PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car from New Jersey?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Florida-bound snowbird shipments, the strongest booking weeks run late September through October 20. Carrier supply tightens through late October and compresses sharply in the first two weeks of November. For year-round moves (job relocations, student moves, dealer transfers), timing follows a flatter cycle with summer peaks tied to school-year closings.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Shore pickups benefit from booking 2 to 3 weeks earlier than non-Shore NJ pickups because the GSP reroute adds carrier scheduling friction. Gold Coast pickups benefit from booking around NYC Marathon weekend (first Sunday in November) which creates area-wide supply pressure.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Thanksgiving week and the December 20 to January 3 holiday window both create short-term supply crunches on NJ pickups. Book around those weeks rather than through them if your dates have any flexibility.
          </p>
        </div>
      </section>

      {/* H2.9 — Princeton / Mercer academic migration (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Princeton, Mercer County, and the academic migration pattern
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Mercer County (Princeton, Lawrenceville, West Windsor, Hopewell) ships on an academic calendar more than a snowbird calendar. Princeton University faculty, graduate students, and campus staff drive volume peaks in late August (fall semester start), mid-December (winter break), and mid-May (spring semester end). The shipping pattern is distinct from the retiree-dominated Shore and the year-round Gold Coast.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Common Mercer County destinations include university towns elsewhere (Palo Alto, Cambridge, Durham, Ann Arbor), partial-year sabbatical destinations (California coast, Pacific Northwest), and traditional retirement destinations for faculty transitioning out. The Princeton corridor also sees above-average volume on the Northeast-to-Southwest cross-country lane.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Mercer County shipping cadence</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Peak outbound: mid-August (fall semester start)</li>
              <li>&bull; Peak inbound: mid-May (spring semester end)</li>
              <li>&bull; Secondary peaks: mid-December, mid-January</li>
              <li>&bull; Lightest demand: late July, early November</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For Mercer County residents comparing their shipping needs against a traditional snowbird pattern, our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link> helps frame the trade-offs. EV owners heading to or from Princeton should see our <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline font-semibold">EV shipping notes</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the academic calendar cadence applies most strongly to the immediate Princeton area. Trenton and the southern Mercer County suburbs follow a more conventional residential pattern.
          </p>
        </div>
      </section>

      {/* H2.10 — How we run the NJ lane + destinations table */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the New Jersey lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal New Jersey shipments and run the Turnpike corridor daily during peak season. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, and on-time delivery history. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          {destinationsShown.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-xl font-bold text-brand-navy">Popular New Jersey snowbird destinations</h3>
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
            <li>&bull; Shore corridor (Toms River, Ocean County) snowbird specialists</li>
            <li>&bull; Gold Coast (Hoboken, Jersey City) staging expertise</li>
            <li>&bull; Teterboro / Carlstadt consolidated carrier yards</li>
            <li>&bull; NJ Turnpike corridor and GSP reroute knowledge</li>
            <li>&bull; Insurance-claim advocacy on your behalf</li>
            <li>&bull; 60-day MVC transfer guidance</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
            <li>&bull; Round-trip Shore snowbird booking expertise</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run on the NJ-to-FL Turnpike corridor with rigid dates, a direct carrier already running that lane can sometimes beat our quote. For most New Jersey shipments and anything requiring Gold Coast staging, our broker model wins on reliability and claim support.
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
                Get your New Jersey car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a New Jersey specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="New Jersey" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            New Jersey car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases: GSP commercial restrictions, Shore 55+ community protocol, Gold Coast staging reality, and the NJ MVC questions returning residents ask us. For base cost and timing, see the sections above.
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
            Done right, New Jersey car shipping comes down to picking the right lane for the New Jersey you&rsquo;re shipping from. Shore pickups need the GSP reroute built into the quote. Gold Coast pickups need realistic staging plans. Central and suburban NJ runs cheapest and simplest on the Turnpike. Match the plan to your pickup zip code and the shipment runs predictably. Request a free quote and a New Jersey specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get a New Jersey quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, MVC rules, and inspection schedules shift with policy &mdash; verify current pricing with your broker and current rules at nj.gov/mvc before booking.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car from New Jersey" />
    </>
  );
}
