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

const slug = 'florida';

export function generateMetadata() {
  return {
    title: 'Florida Car Shipping: Costs, Corridors & Timing (2026)',
    description:
      'Florida car shipping explained — Atlantic vs Gulf corridor pricing, snowbird-season timing, hurricane logistics, and insider tips for a smooth delivery.',
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title: 'Florida Car Shipping: Costs, Corridors & Timing',
      description:
        'The real how-it-works on the busiest car shipping lane in the US — dual-corridor geography, snowbird-season dispatch, and hurricane-aware delivery.',
      type: 'website'
    }
  };
}

// 10 NEW insider FAQs — completely different from previous set
const faqs = [
  {
    q: 'If my car is held at a Florida terminal because the receiver cannot take delivery, who pays the storage fee?',
    a: 'The receiver (you, usually) pays. Terminals grant 24 to 48 hours free; after that most charge $25 to $75 per day. Communicate with your dispatcher the moment you know delivery will slip. A quick phone call often buys an extra 24 hours of grace at no cost.'
  },
  {
    q: 'Does driving through the Georgia Welcome Center weigh station on I-75 count against my transit time?',
    a: 'Rarely. Georgia DOT weigh stations near Lake Park and Valdosta on I-75 are quick checks for carriers running Florida-bound loads. A standard weigh adds 10 to 20 minutes. A deeper hours-of-service check can add an hour, which is still inside most quoted delivery windows.'
  },
  {
    q: 'Can I have my car shipped to a Florida PO box or UPS Store?',
    a: 'No. Carriers deliver to a physical street address only. A seasonal rental, a friend\'s driveway, or a staffed storage yard all work. A hotel lot can work with manager permission. Give the carrier a backup contact who can sign the bill of lading if you are not on-site.'
  },
  {
    q: 'What happens if my Florida home closes on the same day the carrier arrives?',
    a: 'Risky timing. If the closing delays, you cannot accept delivery and the carrier charges terminal storage. Build a 2 to 3 day buffer between closing day and your delivery window. Have a friend or realtor authorized as a backup receiver with a notarized Power of Attorney on file.'
  },
  {
    q: 'If my car is dropped at a Florida truck stop lot overnight before final delivery, is theft covered?',
    a: 'Theft of the vehicle itself is covered by the carrier\'s cargo insurance during transit. Theft of items packed inside the car is not — carrier cargo policies exclude personal contents. Remove all personal belongings before pickup. Confirm overnight staging policy with your dispatcher in writing.'
  },
  {
    q: 'Does Florida law require any special registration period for shipped vehicles?',
    a: 'If you are moving to Florida permanently, state law gives you 30 days to register the vehicle after establishing residency, per the Florida Department of Highway Safety and Motor Vehicles. Seasonal residents keep their home-state registration. Verify current rules at flhsmv.gov before booking.'
  },
  {
    q: 'Can a snowbird on a seasonal lease have the car shipped to the rental address?',
    a: 'Yes, with written landlord permission. Many seasonal rental agreements prohibit commercial deliveries on the property; a one-time written approval covers you. Confirm access, carrier parking, and HOA rules with the landlord 48 hours before pickup.'
  },
  {
    q: 'If I am shipping a vehicle I just bought from a Florida dealer, who holds the title during transit?',
    a: 'The selling dealer typically sends the signed title separately via FedEx or UPS once payment clears. The carrier never transports the title. Confirm the title-handling timeline with the dealer before dispatch. A delayed title can hold up registration on your end for days.'
  },
  {
    q: 'Does my Florida HOA have liability if the carrier damages a resident\'s car during delivery access?',
    a: 'No. The carrier\'s commercial auto liability covers damage to third-party vehicles or property during access. The HOA is not liable even if it approved the carrier\'s entry. FMCSA regulations require interstate carriers to hold a $1,000,000 primary auto liability minimum, filed on BMC-91 with the MCS-90 endorsement.'
  },
  {
    q: 'What is the correct way to notarize a Power of Attorney when someone else accepts delivery in Florida?',
    a: 'Florida requires the POA to be signed in front of a notary and include your car\'s VIN, the pickup and delivery addresses, and the authorized representative\'s legal name. A limited POA covering a single shipment is enough; a full POA is not required. Keep a signed copy with the dispatcher and a second copy with your representative.'
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

export default function FloridaCarShippingPage() {
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
        { label: 'Florida' }
      ]} />

      <DestinationHeroImage destination={dest} height="h-40 sm:h-48 lg:h-56" />

      {/* HERO — H1 primary only; direct answer sentence 1; PAS flow; primary bolded in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">Florida Service Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              Florida Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>Florida car shipping</strong> is the busiest state-to-state vehicle transport market in the country, with roughly one million seasonal residents and twin interstate corridors each moving at a different pace. Carriers run harder here, prices move faster, and the small details — your pickup lane, your delivery window, which gate your HOA uses — matter more than almost anywhere else. First-time shippers often grab the cheapest quote on paper and later pay more than the mid-market option would have cost once dispatch surcharges and delays hit. This page walks you through what makes the Florida lane different, how to price it fairly, when to book, and the fine print specific to Sunshine State deliveries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Get a Florida car shipping quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>• Dual corridor coverage — I-95 and I-75</li>
              <li>• Hurricane-aware dispatch (Jun&ndash;Nov)</li>
              <li>• Snowbird-season specialists</li>
              <li>• FMCSA-vetted carrier network</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="destination" pageUrl={`/destinations/${slug}`} destinationState="Florida" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — PRIMARY in heading; direct answer under per §6 */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What makes Florida car shipping its own beast
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              Florida car shipping is unlike any other state market for four reasons: a seasonal population of roughly a million winter residents, twin interstate corridors that run at different speeds, a hurricane season that reshapes dispatch for half the year, and the densest 55+ community network in the US.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Each factor changes something about how your shipment runs. Market scale means carriers are plentiful but demand compresses supply in peak weeks. Twin corridors (I-95 Atlantic, I-75 Gulf) mean two routes with different pricing and transit times. Hurricane season means weather-driven reroutes and insurance questions no inland state deals with. And 55+ community density means a lot of deliveries involve gates, HOA notice, and advance meet-up planning.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Treat Florida like a nationwide lane with regional personality, not a generic "Southern" delivery. A broker that knows the corridor split and the snowbird-week pattern will quote and deliver differently from one that does not. For a wider primer on how the whole industry works, our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> is a good warm-up read.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: not every Florida shipment needs every one of these angles. A January delivery to Orlando is not really a hurricane shipment, and a dealer-to-buyer run from Jacksonville to Fort Lauderdale is a short-regional move with none of the snowbird premium. Match the planning depth to the real risk on your route.
          </p>
        </div>
      </section>

      {/* H2.2 — "florida auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How does Florida auto transport pricing actually work?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Florida auto transport pricing is set on a dispatch market, not a sticker price. Your broker posts your load to a national dispatch board; licensed carriers accept at a rate they will actually run. The quote you see is the rate the broker expects a carrier to accept, plus a flat broker margin.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs change the dispatch rate: origin corridor, carrier type (open or enclosed), timing (peak or off-peak), and vehicle size. Peak snowbird weeks compress carrier supply by roughly 20 to 30 percent, which pushes dispatch rates up. It is not a markup — it is a market-clearing price for a load no carrier would otherwise accept.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="p-3 text-left">Origin corridor</th>
                  <th className="p-3 text-left">Typical lane</th>
                  <th className="p-3 text-left">Open rate</th>
                  <th className="p-3 text-left">Peak surcharge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-3">I-95 Northeast (NY, NJ, MA, PA)</td><td className="p-3">1,000–1,400 mi</td><td className="p-3">$800–$1,200</td><td className="p-3">+$150–$250</td></tr>
                <tr><td className="p-3">I-75 Midwest (OH, MI, IL, IN)</td><td className="p-3">1,100–1,600 mi</td><td className="p-3">$850–$1,250</td><td className="p-3">+$150–$300</td></tr>
                <tr><td className="p-3">I-10 Panhandle origins (TX, LA, AL)</td><td className="p-3">500–1,200 mi</td><td className="p-3">$650–$1,050</td><td className="p-3">+$100–$200</td></tr>
                <tr><td className="p-3">I-95 South (GA, SC, NC)</td><td className="p-3">250–700 mi</td><td className="p-3">$500–$800</td><td className="p-3">+$75–$150</td></tr>
                <tr><td className="p-3">Western long-haul (CA, WA, OR)</td><td className="p-3">2,500–3,000 mi</td><td className="p-3">$1,250–$1,750</td><td className="p-3">+$200–$350</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against 2026 industry per-mile averages (roughly $0.75/mi on 0&ndash;500 mi lanes down to $0.35/mi on 2,000+ mi lanes). Rates shift weekly with fuel, demand, and carrier supply.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>, or read the full <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">detailed cost breakdown</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the cheapest quote is almost always a load no carrier will accept at that price. Expect a dispatch surcharge call 5 to 7 days after booking from any broker whose quote is 25 to 40 percent below the mid-market.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping to florida" + corridor split (unique FL angle) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping to Florida: Atlantic corridor vs Gulf corridor
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping to Florida splits into two distinct corridors. I-95 runs down the Atlantic coast from the Northeast, feeding Jacksonville, Daytona, the Space Coast, and the South Florida metros. I-75 drops from the Midwest through Georgia into Tampa, Fort Myers, and Naples on the Gulf side. The two highways do not meet in Florida — the Florida Turnpike bridges them through the center of the state.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-95 Atlantic corridor</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li><strong>Primary origins:</strong> NY, NJ, PA, MA, CT, DC area</li>
                <li><strong>Primary destinations:</strong> Jacksonville, Daytona, West Palm, Fort Lauderdale, Miami</li>
                <li><strong>Carrier density:</strong> Very high — easiest supply in the US</li>
                <li><strong>Typical transit:</strong> 2 to 5 days from NY</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-75 Gulf corridor</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li><strong>Primary origins:</strong> OH, MI, IL, IN, KY, TN</li>
                <li><strong>Primary destinations:</strong> Tampa, St. Pete, Fort Myers, Naples, Sarasota</li>
                <li><strong>Carrier density:</strong> High in peak months, moderate off-peak</li>
                <li><strong>Typical transit:</strong> 3 to 6 days from Chicago</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Cross-corridor deliveries add real time. A Chicago-to-Miami shipment arrives via I-75 to Central Florida, then east on the Turnpike or I-4 — adding 4 to 6 hours compared with an I-95 run. A Boston-to-Naples shipment does the opposite. Pricing is similar on both corridors, but Gulf-side destinations often cost $50 to $100 more because of that extra leg.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            A third, lower-volume corridor runs through the Panhandle on I-10 from Texas, Louisiana, and the Deep South. Carrier frequency on I-10 is thinner — expect wider pickup windows and a 1-day pricing premium versus the main corridors.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: carriers do not love being told which highway to take. The route is their call, based on load mix, driver hours, and weather. Pick a corridor-aware broker, then let the carrier run the leg they planned.
          </p>
        </div>
      </section>

      {/* H2.4 — "ship car to florida for winter" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship car to Florida for winter?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The strongest weeks to ship car to Florida for winter are late September through October 20. Demand builds the last week of October and peaks the week before Thanksgiving. Shipping in that late-October window gets your car in place before the family-arriving-with-car-already-there pattern that drives Thanksgiving-week pricing.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Smart fall weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late September</li>
                <li>Oct 20&ndash;31</li>
                <li>First two weeks of December</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Expensive weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Week before Thanksgiving</li>
                <li>Mid-September (storm peak)</li>
                <li>Dec 20 &ndash; Jan 3</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Spring return</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Early March (pre-peak)</li>
                <li>Mid-May (post-peak)</li>
                <li>Avoid Easter week + Daytona Bike Week</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            The Florida population peaks in January — most seasonal residents are already in place by then. Supply loosens again in February. For a week-by-week year view, see our <Link href="/resources/snowbird-shipping-calendar" className="text-brand-navy underline font-semibold">snowbird car shipping calendar</Link>. For a timing-only decision, the <Link href="/resources/when-to-ship-your-car-south-for-winter" className="text-brand-navy underline font-semibold">when to ship south</Link> guide walks the trade-offs.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One under-noticed fact: outbound Florida carrier supply is tighter than inbound in March through May. The whole seasonal fleet is heading south during fall peak and north during spring peak, which starves the "wrong direction" at both ends. A spring Florida-to-Northeast move needs the same booking lead time as a fall Northeast-to-Florida move.
          </p>
        </div>
      </section>

      {/* H2.5 — "snowbird car shipping to florida" */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Snowbird car shipping to Florida: inside the biggest seasonal migration
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Snowbird car shipping to Florida is the single largest seasonal lane in US auto transport. Widely cited estimates put the number of seasonal residents at roughly one million, with the population peaking in January in Tampa Bay, Miami, and the Gulf Coast retirement corridor. Some counties see noticeable local effects — Palm Beach County, for example, cites a winter population swing of about 11 percent, per county figures.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Three snowbird booking patterns dominate this lane: one-way southbound in October-November, one-way northbound in April-May, and round-trip bookings covering both legs. Round-trip usually saves 10 to 15 percent if the schedule holds, because the carrier can plan both legs at once. For the trade-off, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way economics</Link>.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Snowbird-lane facts worth knowing</div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>Peak southbound: Oct 20 &ndash; Dec 10</li>
              <li>Peak northbound: Mar 20 &ndash; May 10</li>
              <li>Season origins skew Northeast + Midwest</li>
              <li>January is the quiet month</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds specifically, broker expertise on this lane matters more than on any other state market. The combination of volume, timing compression, and residential delivery means a generalist broker will miss things a snowbird-focused broker catches. We built this subdomain around that use case.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat on the one-million figure: that number comes from older government studies and tourism estimates, not a 2026 federal count. Treat it as the right order of magnitude, not an exact census.
          </p>
        </div>
      </section>

      {/* H2.6 — "florida vehicle shipping" + 4 service options (unique vs AZ page) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Which Florida vehicle shipping option fits your car?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Florida vehicle shipping comes in four service types, not two. Most comparisons stop at open versus enclosed, but on the Florida lane expedited and terminal-to-terminal are also real options worth knowing.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-brand-cream/30 p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The standard. Two-level open-air trailer with 7 to 10 cars. Right for about 85 percent of Florida shipments. Insurance limits of $100K to $250K per vehicle are typical.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-brand-cream/30 p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Enclosed transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fully covered trailer with 2 to 6 cars. Costs 30 to 50 percent more. Right for classics, exotics, $75K+ cars, or fresh paint. Insurance limits reach $1M+ per vehicle.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-brand-cream/30 p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Expedited (guaranteed pickup)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A locked pickup date instead of a 3- to 5-day window. Adds $150 to $400 to the base rate. Worth it when a move-in date, closing, or flight is non-negotiable.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-brand-cream/30 p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Terminal-to-terminal</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                You drop and collect at carrier staging yards instead of residential addresses. Common in Jacksonville and Miami because of port-adjacent infrastructure. Saves $50 to $150 but requires a car at each end.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a longer open-versus-enclosed decision framework, our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link> walks the trade-offs. Door-to-door delivery still works for 95 percent of residential customers; terminal-to-terminal is really a budget option for buyers who can plan around it.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited service is often oversold. For most snowbird shipments, a flexible 3-day pickup window beats expedited on price without losing much on reliability.
          </p>
        </div>
      </section>

      {/* H2.7 — Hurricane PAA mirror (unique FL content) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What does hurricane season mean for my Florida delivery?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Atlantic hurricane season runs June 1 through November 30. Fall snowbird dispatch overlaps the back half of that window, which is where most delivery delays come from. Carriers reroute or hold loads when the National Hurricane Center issues a watch or warning within 48 hours of their route. Weather delays are listed as a non-penalty cause in most carrier contracts.
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
                <tr><td className="p-3">NHC watch issued, carrier reroutes</td><td className="p-3">1&ndash;3 days</td><td className="p-3">No charge change</td></tr>
                <tr><td className="p-3">NHC warning, carrier holds at terminal</td><td className="p-3">2&ndash;5 days</td><td className="p-3">Possible $25&ndash;$75/day storage after day 2</td></tr>
                <tr><td className="p-3">Mandatory evacuation zone active</td><td className="p-3">3&ndash;7 days</td><td className="p-3">Hold until evacuation lifts</td></tr>
                <tr><td className="p-3">Post-landfall FEMA restrictions</td><td className="p-3">5&ndash;14 days</td><td className="p-3">Rebooking at current rate</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Cargo insurance usually covers damage caused by weather during transit, but staging-lot flood damage falls in a gray zone with some carriers. Keep your personal comprehensive auto policy active during the shipment. For claims mechanics, our <Link href="/resources/snowbird-car-shipping-insurance-claims" className="text-brand-navy underline font-semibold">insurance claims walkthrough</Link> explains who pays what. For a storm-aware booking playbook, see our <Link href="/resources/hurricane-season-florida-shipping" className="text-brand-navy underline font-semibold">hurricane season Florida car shipping</Link> notes.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: a January or February Florida shipment carries no hurricane risk at all. The planning layer only applies during active season, and even then most weeks pass without a named storm.
          </p>
        </div>
      </section>

      {/* H2.8 — Common mistakes (not in AZ page) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Mistakes first-time Florida shippers make
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most first-time Florida problems come from the same five mistakes. Each is easy to avoid once you know it.
          </p>
          <ol className="mt-5 space-y-3 text-slate-700 leading-relaxed list-decimal pl-6">
            <li><strong>Choosing on price alone.</strong> The cheapest quote is usually a load no carrier will accept. Expect a dispatch surcharge call a week in; the final price lands near the mid-market anyway.</li>
            <li><strong>Booking too late.</strong> A late-October shipment booked three days ahead faces a tighter market than one booked three weeks ahead. Pricing matches that lead-time gap.</li>
            <li><strong>Misunderstanding insurance.</strong> The carrier’s cargo policy covers the car, not the items packed inside. Keep your personal comprehensive policy active during the move.</li>
            <li><strong>Skipping the pre-pickup walk-around.</strong> Dated photos of all four corners, the roof, and the interior are your damage-claim foundation. Take them before the carrier arrives.</li>
            <li><strong>Missing the Power of Attorney.</strong> If someone else accepts delivery in Florida, a notarized limited POA naming them, your VIN, and the delivery address prevents a signing-day mess.</li>
          </ol>
          <p className="mt-5 text-slate-700 leading-relaxed">
            A longer walk-through of each prep step lives in our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time snowbird shipping checklist</Link> and the <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: mistake #4 (skipping photos) matters whether or not you ever file a claim. Shippers who document on both ends almost never have delivery disputes; shippers who do not have them more often than you would expect.
          </p>
        </div>
      </section>

      {/* H2.9 — Routes + Panhandle quirks (uses destination data) */}
      {(cities.length > 0 || inboundRoutes.length > 0) && (
        <section className="bg-brand-cream py-16">
          <div className="container-page max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-brand-navy">
              Routes, metros, and Panhandle quirks
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Florida’s highest-volume destination metros split neatly along the two main corridors. Jacksonville, Daytona, West Palm, Fort Lauderdale, and Miami live on I-95. Tampa, St. Petersburg, Sarasota, Fort Myers, and Naples live on I-75. The Panhandle (Pensacola, Panama City, Tallahassee) runs off I-10 with thinner carrier frequency and wider pickup windows.
            </p>
            {cities.length > 0 && (
              <>
                <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">Popular Florida destination cities</h3>
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
          </div>
        </section>
      )}

      {/* H2.10 — How we handle the Florida lane */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the Florida lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal Florida shipments. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, and on-time delivery history on I-95, I-75, and I-10. Quotes are all-in, with no dispatch surcharges after booking. If weather or a delivery hiccup forces a change, we call before we charge.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
            <li>&bull; Corridor-aware dispatch (I-95, I-75, I-10)</li>
            <li>&bull; Hurricane-season routing experience</li>
            <li>&bull; Snowbird-week pricing calibrated weekly</li>
            <li>&bull; Residential delivery into gated and 55+ communities</li>
            <li>&bull; Insurance-claim advocacy on your behalf</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run inside a dense Northeast origin where you already know a route specialist, booking direct can beat our quote. For most residential Florida shipments, our broker model wins on reliability and claim support. Our <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping" className="text-brand-navy underline font-semibold">broker vs direct carrier guide</Link> walks the trade-offs. For 55+ community delivery specifically, see our <Link href="/resources/55-plus-community-car-delivery" className="text-brand-navy underline font-semibold">55+ community car delivery</Link> notes.
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
                Get your Florida car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a Florida specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="destination" pageUrl={`/destinations/${slug}`} destinationState="Florida" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions per §10) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Florida car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases, title handling, and the paperwork questions snowbirds and relocators actually ask us. For base cost and timing, see the sections above.
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
          <div className="mt-4">
            <Link href="/resources/snowbird-destination-comparison" className="text-sm font-semibold text-brand-navy underline">
              See the full destination comparison
            </Link>
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
            Done right, Florida car shipping is the most predictable long-distance lane in the country. The pattern is simple: pick the corridor-aware broker, time the booking around peak weeks, confirm every fee in writing, and keep your paperwork ready before the carrier arrives. Request a free quote and a Florida specialist will walk you through the right corridor and the smartest booking window for your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Request a Florida quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 13, 2026 &middot; Rates and timing shift with market conditions &mdash; verify current pricing and carrier insurance limits before booking.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car to Florida" />
    </>
  );
}
