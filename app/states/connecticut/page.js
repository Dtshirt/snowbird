import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBar from '@/components/TrustBar';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { getStateBySlug, originStates } from '@/data/states';
import { getRoutesByOrigin } from '@/data/routes';
import { getDestinationBySlug } from '@/data/destinations';

const slug = 'connecticut';

export function generateMetadata() {
  return {
    title: 'Connecticut Car Shipping: Fairfield, Hartford, Shoreline',
    description:
      'Connecticut car shipping guide — Fairfield County luxury lane, Hartford I-91 routing, Litchfield rural pickups, and the 90-day DMV rule for returning snowbirds.',
    alternates: { canonical: `/states/${slug}` },
    openGraph: {
      title: 'Connecticut Car Shipping: Fairfield, Hartford, Shoreline',
      description:
        'Three Connecticut shipping lanes with their own carrier mechanics — hedge-fund Fairfield County, Hartford/New Haven I-91 corridor, and the Litchfield hills.',
      type: 'website'
    }
  };
}

// 10 CT-specific insider FAQs — zero overlap with NY/NJ/PA/MA/FL/AZ/TX/CA FAQ sets
const faqs = [
  {
    q: 'Did Connecticut really change the new resident vehicle registration deadline?',
    a: 'Yes. Effective October 1, 2021, Connecticut extended the window from 60 days to 90 days for new residents to register an out-of-state vehicle with the DMV. Older third-party guides still cite 60 days — those are outdated. Verify current rules at portal.ct.gov/DMV before you plan around a specific deadline.'
  },
  {
    q: 'Will unpaid property taxes or parking tickets really block my CT vehicle registration?',
    a: 'Yes. Connecticut DMV blocks new or renewal registrations when the applicant has delinquent municipal property taxes, outstanding parking tickets, or a suspended registration privilege. This includes personal property tax on vehicles — CT is one of the few states that bills municipal property tax on cars. Check your city or town\'s records before scheduling a DMV appointment.'
  },
  {
    q: 'My Greenwich or Darien pickup is a long private driveway — do you handle luxury enclosed from Fairfield County?',
    a: 'Yes. Fairfield County (Greenwich, Darien, New Canaan, Westport, Weston, Wilton, Rowayton) is one of the densest luxury-enclosed origin markets in the country. Our enclosed carrier network includes specialty hard-side trailers with liftgate loading, soft-tie wheel straps, and $1M+ per-vehicle insurance limits. Book 4 to 8 weeks ahead for Fairfield-to-Palm Beach runs in October and November.'
  },
  {
    q: 'How much extra transit time does I-95 Fairfield County congestion add to a Florida pickup?',
    a: 'I-95 through Fairfield County (roughly Stamford through Bridgeport) is one of the most congested stretches in the US, especially weekday mornings 6-10 AM and afternoons 3-7 PM. Carriers familiar with the lane schedule Fairfield pickups outside those windows. Transit south of Stamford is unaffected; the delay is purely at the loading end. Expect 1 to 3 hour pickup-time variance during peak congestion windows.'
  },
  {
    q: 'If I commute into NYC on Metro North, should I ship my second car or leave it at the station?',
    a: 'Shipping usually wins when the car won\'t be driven for 4+ months. Metro North commuter parking lots (New Canaan, Darien, Westport, Fairfield) charge $800-$1,800 per permit season. Winter weather plus salt on an unused car accelerates wear. Shipping to Florida and back for a half-year snowbird season often costs similar to the permit plus mileage avoidance, with the car staying usable in Florida.'
  },
  {
    q: 'Can carriers reach a shoreline town like Old Saybrook, Essex, or Guilford?',
    a: 'Yes. CT shoreline towns off I-95 Exits 59-66 have standard residential pickup access. The one tight-corridor exception is some older interior village streets (Essex Village, Stonington Borough) where the driver may stage at a nearby Shoprite or restaurant lot and have you drive the car to the staging point. Allow a 2-day pickup window flexibility for shoreline pickups.'
  },
  {
    q: 'What about Litchfield County — the hills, Kent, Washington, Woodbury?',
    a: 'Litchfield County rural pickups work but take extra coordination. Full-size carriers can\'t navigate many narrow Route 7 or Route 202 side roads. The driver typically stages at a town center lot (Washington Depot, Kent, Woodbury) or a grocery store in Litchfield or Torrington. Allow 2 to 4 days of pickup window flexibility and winter snow adds further variability on rural driveway access.'
  },
  {
    q: 'Hartford snowbirds seem to end up in Palm Beach specifically. Why?',
    a: 'Hartford has one of the longest-running snowbird corridors to Palm Beach County, Boca Raton, and Fort Lauderdale, dating to the insurance industry\'s historical ties with South Florida. Carriers familiar with the Hartford-to-SE Florida run know the gated-community gate protocols in Boca West, Palm Beach Country Club, Admirals Cove, and St. Andrews. That lane expertise matters more than general Florida credentials.'
  },
  {
    q: 'My car is a 2020 model year — do I still need a CT emissions test after shipping back?',
    a: 'Yes. Connecticut requires emissions testing for 2018-and-older vehicles biennially, and the inspection applies to new registrations regardless of model year. Vehicles exempt from the emissions test still need a VIN verification at a licensed emissions station — this is separate from the DMV registration visit. Schedule the emissions appointment before your DMV appointment, not after.'
  },
  {
    q: 'If my pickup is at Yale or near New Haven campuses, is there a timing issue?',
    a: 'Yes, modestly. Yale\'s academic calendar drives localized demand in late August (fall move-in), mid-December (winter break), mid-January (return), and mid-May (commencement and move-out). Carrier supply tightens around August 25 to September 5 and around commencement weekend. Downtown New Haven residential pickups near campus occasionally require staging at a nearby garage; East Rock and Westville suburbs usually accept standard residential dispatch.'
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

export default function ConnecticutCarShippingPage() {
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
        { label: 'Connecticut' }
      ]} />

      {/* HERO — H1 primary only; direct answer sentence 1; PAS; primary in first 100 words */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="eyebrow">Connecticut Origin Hub</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
              Connecticut Car Shipping
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              <strong>Connecticut car shipping</strong> is unusually bifurcated. Fairfield County — Greenwich, Darien, New Canaan, Westport, Weston — ships one of the densest luxury-enclosed loads in the country to Palm Beach, Boca Raton, and Admirals Cove. Hartford, New Haven, and the shoreline run on standard residential pickups along the I-91 and I-95 corridors. Litchfield County and the Northwest hills ship on rural staging logistics closer to the Berkshires than to Fairfield. Add CT’s unique 90-day DMV window (changed from 60 days in October 2021) and the municipal property-tax block on new registrations, and Connecticut shipping needs its own planning model.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Request a Connecticut quote</Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              <li>&bull; Fairfield County luxury enclosed specialists</li>
              <li>&bull; Hartford &amp; I-91 corridor coverage</li>
              <li>&bull; CT shoreline residential pickups</li>
              <li>&bull; 90-day CT DMV guidance</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Connecticut" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* H2.1 — primary in H2; direct answer */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Three Connecticut shipping lanes: Fairfield, I-91, and Litchfield
          </h2>
          <div className="mt-5 rounded-lg border-l-4 border-brand-gold bg-white p-5">
            <p className="text-slate-700 leading-relaxed">
              Connecticut car shipping splits into three distinct markets. Fairfield County (Greenwich through Westport) runs on specialty-enclosed luxury transport bound overwhelmingly for Southeast Florida’s Gold Coast. Hartford, New Haven, and the I-91 corridor run on standard open transport with the state’s most predictable pricing. Litchfield County and the Northwest hills run on rural staging logistics where town-center pickup is often the only option.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Each market has its own carrier network and pricing. Fairfield quotes carry an enclosed premium and often include a layer of concierge service. I-91 quotes are straightforward East Coast pricing. Litchfield quotes assume staging flexibility and build in weather buffers for winter pickups.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Timing varies regionally. Fairfield luxury enclosed books 4 to 8 weeks ahead. I-91 corridor pickups can hold flexibility to 2 to 3 weeks. Litchfield rural pickups benefit from booking before the first November snow event.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            One honest caveat: these distinctions matter most for first-time shippers and anyone with tight timing. A straightforward residential pickup in a Glastonbury driveway in April behaves like any suburban lane. The nuance shows up on Fairfield enclosed bookings, Yale academic-calendar timing, and Litchfield winter weather. Our <Link href="/resources/snowbird-car-shipping-guide" className="text-brand-navy underline font-semibold">complete snowbird car shipping guide</Link> covers industry mechanics first.
          </p>
        </div>
      </section>

      {/* H2.2 — "connecticut auto transport" + PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            What does Connecticut auto transport actually cost?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Connecticut auto transport prices sit between NY and MA on Florida lanes because the state is roughly 1,245 miles to central Florida. Short regional lanes (CT to NY, NJ, MA) run $350 to $700. Mid-Atlantic lanes (CT to VA, NC, SC) run $650 to $1,100. Florida lanes run $950 to $1,700 open depending on origin city. Cross-country Arizona lanes run $1,350 to $2,200.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Four inputs shape your final number: pickup zip (Fairfield enclosed vs Hartford open), destination, timing (snowbird peak or shoulder), and transport type. Enclosed transport runs 50 to 100 percent above open on CT routes, consistent with 2026 published industry data.
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
                <tr><td className="p-3">Hartford &rarr; Jacksonville</td><td className="p-3">1,050&ndash;1,100 mi</td><td className="p-3">$1,060&ndash;$1,712</td><td className="p-3">+$125&ndash;$225</td></tr>
                <tr><td className="p-3">Hartford &rarr; Orlando</td><td className="p-3">1,200&ndash;1,250 mi</td><td className="p-3">$1,132&ndash;$1,721</td><td className="p-3">+$125&ndash;$250</td></tr>
                <tr><td className="p-3">Fairfield County &rarr; Palm Beach</td><td className="p-3">1,250&ndash;1,350 mi</td><td className="p-3">$1,100&ndash;$1,800</td><td className="p-3">+$150&ndash;$275</td></tr>
                <tr><td className="p-3">CT &rarr; SE Florida (I-95)</td><td className="p-3">1,245 mi avg</td><td className="p-3">$984&ndash;$1,475</td><td className="p-3">+$125&ndash;$250</td></tr>
                <tr><td className="p-3">CT &rarr; Texas (I-81 / I-40)</td><td className="p-3">1,750&ndash;1,900 mi</td><td className="p-3">$1,150&ndash;$1,850</td><td className="p-3">+$150&ndash;$275</td></tr>
                <tr><td className="p-3">CT &rarr; Arizona cross-country</td><td className="p-3">2,500&ndash;2,650 mi</td><td className="p-3">$1,350&ndash;$2,200</td><td className="p-3">+$175&ndash;$325</td></tr>
                <tr><td className="p-3">Fairfield enclosed to FL luxury</td><td className="p-3">1,250&ndash;1,350 mi</td><td className="p-3">$1,925&ndash;$2,675</td><td className="p-3">+$200&ndash;$400</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              Figures reflect typical open-carrier dispatch rates benchmarked against published 2026 FreightWaves, Sherpa, and AmeriFreight data for CT lanes. Rates shift weekly with fuel, demand, and carrier supply; verify a current quote before booking.
            </p>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For a lane-specific number, run your route through our <Link href="/snowbird-car-shipping-cost-calculator" className="text-brand-navy underline font-semibold">shipping cost calculator</Link>. The pricing picture across every snowbird state lives in our <Link href="/resources/snowbird-car-shipping-cost" className="text-brand-navy underline font-semibold">cost deep dive</Link>.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Fairfield County enclosed pricing often runs above the generic CT luxury band because specialty carriers price concierge services separately. Confirm what’s included (liftgate loading, soft-tie straps, GPS tracking, destination gatehouse coordination) at booking.
          </p>
        </div>
      </section>

      {/* H2.3 — "car shipping from connecticut" + corridor framing */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Car shipping from Connecticut: I-95, I-91, and the Fairfield bottleneck
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Car shipping from Connecticut rides on two primary corridors. I-95 along the shoreline (Greenwich through New London) feeds Southeast and Mid-Atlantic shipments. I-91 vertically through Hartford and New Haven connects to I-84 west or I-95 south. One stretch of I-95 — the Fairfield County bottleneck between Stamford and Bridgeport — is one of the most congested highway segments in the country and shapes carrier scheduling for the entire southwestern corner of the state.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-95 shoreline (Florida corridor)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                The East Coast backbone. Greenwich to Miami runs about 1,350 miles, 3 to 7 days transit, $1,100 to $1,800 open. Fairfield congestion requires off-peak loading windows.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-91 (Hartford vertical)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Hartford and New Haven feed I-91 south to I-95 at New Haven, or north to I-90 at Springfield for cross-country moves. Lower carrier density than I-95 shoreline but less congestion.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-84 (Hartford &rarr; Northeast / west)</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Hartford&rsquo;s east-west spine. Connects to I-81 for Southeast runs and to I-80 for cross-country. Litchfield County and NW CT typically route via I-84 to the Pennsylvania Turnpike or I-81.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">I-95 Fairfield bottleneck</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Stamford through Bridgeport sees heavy weekday rush congestion (6-10 AM, 3-7 PM). Carriers schedule Fairfield pickups outside these windows. Expect 1 to 3 hour variance on loading time, not transit time.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Fairfield County pickups benefit from mid-morning or early-afternoon loading windows (10 AM through 2 PM) when I-95 flows at closer to posted speeds. Carriers familiar with the corridor build this into their routing from the dispatch stage.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the actual route is the carrier&rsquo;s call. Weather, tolls, driver hours, and load mix drive the choice, not shortest distance. A corridor-aware broker helps you anticipate transit; the carrier plans the leg.
          </p>
        </div>
      </section>

      {/* H2.4 — "fairfield county car shipping" + luxury enclosed deep dive */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Fairfield County car shipping and the Palm Beach luxury pipeline
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Fairfield County car shipping is a specialty-enclosed luxury market concentrated in Greenwich, Darien, New Canaan, Westport, Weston, Wilton, and the backcountry estates along North Street and Round Hill Road. The corridor pattern is predictable: private driveways, high-value vehicles (Range Rovers, Porsches, Mercedes AMG, Teslas, Rolls-Royce, Bentley), and schedule-sensitive owners who prefer specialty enclosed with locked pickup windows.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The Southeast Florida destination pattern is unusually tight. Fairfield County snowbirds concentrate in Palm Beach, Boca Raton, Admirals Cove in Jupiter, Palm Beach Country Club, Mar-a-Lago Club, Everglades Club, and St. Andrews Country Club in Boca. Carriers that run the Fairfield-to-Palm Beach lane know these destinations by gate protocol and preferred staging times.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">What Fairfield luxury owners book</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Specialty-enclosed hard-side trailers with liftgate loading (not winch)</li>
              <li>Soft-tie wheel-strap tie-downs (never frame hooks)</li>
              <li>Low-clearance driver-assisted loading for lowered vehicles</li>
              <li>Insurance certificates sent to the destination country club ahead of delivery</li>
              <li>Full-transit GPS tracking</li>
              <li>$1M+ per-vehicle cargo insurance limits</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the full luxury-shipping walkthrough, see our <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> guide. For first-time Fairfield shippers, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> walks the prep basics.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: enclosed transport is often oversold. For a stock late-model luxury SUV without fresh paintwork or collector status, open transport can deliver the same reliability at significantly lower cost. The enclosed premium pays for itself mainly on exotics, classics, and sub-$150K daily drivers that owners insist on protecting.
          </p>
        </div>
      </section>

      {/* H2.5 — "hartford car shipping" + I-91 corridor content */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Hartford car shipping and the quieter I-91 corridor
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Hartford car shipping runs on standard East Coast residential logistics and prices consistently below Fairfield County on the same destinations. Hartford, West Hartford, Simsbury, Glastonbury, Avon, and Farmington all handle standard open-transport dispatch. New Haven, Branford, and the lower I-91 corridor behave similarly, with a small academic-calendar bump around Yale’s move-in and commencement weeks.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Hartford has one of the longest-running snowbird corridors to Palm Beach, Boca Raton, and Fort Lauderdale — the carrier network reflects decades of experience with the lane. Historical ties between Connecticut’s insurance industry (The Hartford, Travelers, Aetna) and South Florida vacation markets built the pipeline early and it has stayed strong.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Hartford market advantages</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Standard residential pickup access across the metro</li>
              <li>&bull; I-91 south to I-95 is a direct, uncongested routing</li>
              <li>&bull; Palm Beach / Fort Lauderdale carrier specialization</li>
              <li>&bull; Pricing typically 10 to 15 percent below Fairfield-origin equivalents</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For Hartford snowbirds comparing drive-versus-ship on the Florida lane, our <Link href="/resources/snowbird-destination-comparison" className="text-brand-navy underline font-semibold">destination comparison</Link> walks the time-value math. For round-trip booking logic across both legs, see our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Hartford pricing beats Fairfield on open transport but doesn’t help with specialty enclosed. If the Hartford pickup is for a luxury vehicle, pricing converges with Fairfield enclosed rates.
          </p>
        </div>
      </section>

      {/* H2.6 — CT DMV + 90-day rule + property tax (unique) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            The CT DMV 90-day window and the property-tax trap
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Connecticut gives new residents 90 days to register an out-of-state vehicle with the DMV — a window changed from 60 days effective October 1, 2021. The longer window is one of the most generous in the Northeast, but Connecticut adds a second hurdle that catches returning snowbirds off guard: unpaid municipal property taxes on the vehicle block the registration entirely.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Connecticut is one of the few states that bills personal property tax on cars at the municipal level. If a prior CT registration was active with your current city or town and the tax bill wasn’t cleared, the DMV cannot issue your new registration until the municipal collector reports the account current. Unpaid parking tickets block registration the same way.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-brand-cream/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">CT vehicle transfer essentials</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; 90-day registration window (effective October 1, 2021)</li>
              <li>&bull; Emissions test required for model year 2018 and older vehicles</li>
              <li>&bull; VIN verification required for emissions-exempt vehicles</li>
              <li>&bull; Form H-13B registration application + CT insurance proof</li>
              <li>&bull; Appointment-only at DMV hub or branch office</li>
              <li>&bull; Blocked by unpaid property tax, parking tickets, or suspended registration</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Call your city or town’s tax collector before scheduling the DMV appointment. Clearing a property-tax balance can take 48 hours to update in the DMV system. For a snowbird-specific prep walkthrough, our <Link href="/resources/snowbird-vehicle-preparation-checklist" className="text-brand-navy underline font-semibold">vehicle preparation checklist</Link> covers inspection prep.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: the 90-day rule applies to new or returning residents establishing CT residency. If you remain a Florida resident and only visit CT seasonally, your Florida registration continues to be valid. Verify current rules at portal.ct.gov/DMV before changing registration.
          </p>
        </div>
      </section>

      {/* H2.7 — Service tier selection */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Picking a service tier for your Connecticut shipment
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most Connecticut shipments fit into one of four service choices. The right pick depends on car value, pickup location, and schedule firmness.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Open transport</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Standard two-level open-air trailer. Right for about 85 percent of CT shipments outside Fairfield County. Insurance limits of $100K to $250K per vehicle are typical.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Specialty enclosed (Fairfield standard)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Hard-side enclosed trailer with liftgate loading and soft-tie wheel straps. The default for Greenwich, Darien, New Canaan, Westport luxury vehicles. Costs 50 to 100 percent more than open. Insurance limits reach $1M+ per vehicle.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Expedited (guaranteed pickup)</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A locked pickup date rather than a 3- to 5-day window. Adds $150 to $400. Worth it when a closing, lease start, Yale deadline, or flight is fixed.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-brand-gold bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-navy">Terminal-to-terminal</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                You drop and collect at a staging yard (New Haven, Hartford airport area) rather than residential. Saves $75 to $200 for anyone with transportation flexibility.
              </p>
            </div>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For the longer open-versus-enclosed walkthrough, see our <Link href="/resources/open-vs-enclosed-car-shipping-snowbird" className="text-brand-navy underline font-semibold">open vs enclosed guide</Link>. For high-value Fairfield County runs, the <Link href="/resources/shipping-classic-luxury-car-for-winter" className="text-brand-navy underline font-semibold">classic &amp; luxury car shipping</Link> notes walk the specialty-enclosed decision.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: expedited is often oversold on the CT-to-FL lane. Peak-season carrier supply is deep enough on I-95 and I-91 that a flexible 3-day pickup window usually matches on reliability without the premium.
          </p>
        </div>
      </section>

      {/* H2.8 — timing PAA mirror */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            When should I ship a car from Connecticut?
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For Florida-bound snowbird shipments, the strongest booking weeks run late September through October 20. Carrier supply tightens through late October and compresses sharply in the first two weeks of November. Fairfield County enclosed bookings should go 4 to 8 weeks ahead because specialty carrier capacity is limited and books out early.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Smart CT weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Late September</li>
                <li>Oct 1-20</li>
                <li>Late February</li>
                <li>Mid-April (return)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-brand-cream/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Expensive weeks</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Oct 25 &ndash; Nov 15 (peak)</li>
                <li>Yale move-in week</li>
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
            Caveat: Yale commencement weekend (mid-May) creates a localized demand bump on New Haven pickups. If your spring return overlaps with commencement, book an extra 2 to 3 weeks ahead or route pickup to Hartford instead.
          </p>
        </div>
      </section>

      {/* H2.9 — Shoreline & Litchfield (unique) */}
      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Shoreline towns, Litchfield County, and the rural pickup reality
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The Connecticut shoreline (Guilford, Madison, Clinton, Old Saybrook, Essex, Niantic, Mystic, Stonington) runs on standard residential pickups off I-95 exits 59-66. The one tight-corridor exception is some older interior village streets (Essex Village, Stonington Borough, parts of Old Lyme) where the driver may stage at a nearby parking lot. Shoreline snowbird volume is smaller than Fairfield or Hartford but concentrates heavily in Palm Beach and Fort Lauderdale.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Litchfield County and the Northwest hills (Kent, Washington, Woodbury, Litchfield, Norfolk, Salisbury, Lakeville, Cornwall) are the state&rsquo;s rural pickup challenge. Full-size carriers can’t navigate many narrow Route 7, Route 202, or Route 44 side roads. Winter weather compounds access issues — snow-covered unpaved driveways can turn a straightforward pickup into a 2-hour delay or a next-day reschedule.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Litchfield staging options</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>&bull; Washington Depot center lot</li>
              <li>&bull; Kent main village lot or Shagroy/Housatonic staging</li>
              <li>&bull; Litchfield town center</li>
              <li>&bull; Torrington commercial lots (closest full-service staging)</li>
              <li>&bull; Woodbury Route 6 strip center lots</li>
            </ul>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For NW CT and Berkshires-adjacent snowbirds, our <Link href="/resources/first-time-snowbird-shipping" className="text-brand-navy underline font-semibold">first-time shipping checklist</Link> covers rural-pickup prep steps. For 55+ residents in Litchfield County active-adult communities, our <Link href="/resources/55-plus-community-car-delivery" className="text-brand-navy underline font-semibold">55+ community delivery</Link> guide covers gate protocols.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Caveat: Litchfield winter weather is unpredictable. Build a 2 to 4 day pickup window and expect at least one reschedule probability during January-February pickups above 1,000-foot elevations.
          </p>
        </div>
      </section>

      {/* H2.10 — How we run the CT lane + destinations table */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            How we handle the Connecticut lane
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We specialize in snowbird and seasonal Connecticut shipments and run both the I-95 shoreline and I-91 corridor daily during peak season. Our carrier network is pre-vetted against FMCSA safety records, insurance limits, and on-time delivery history, with a dedicated specialty-enclosed network for Fairfield County luxury runs. Quotes are all-in, with no dispatch surcharges after booking.
          </p>
          {destinationsShown.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-xl font-bold text-brand-navy">Popular Connecticut snowbird destinations</h3>
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
            <li>&bull; Fairfield County enclosed luxury specialists</li>
            <li>&bull; Hartford I-91 corridor coverage</li>
            <li>&bull; CT shoreline residential pickup network</li>
            <li>&bull; Litchfield County rural staging expertise</li>
            <li>&bull; <Link href="/resources/ev-snowbird-car-shipping" className="text-brand-navy underline">EV shipping notes</Link> for Tesla and Rivian owners</li>
            <li>&bull; Palm Beach / Boca country club gatehouse familiarity</li>
            <li>&bull; CT 90-day DMV and property-tax guidance</li>
            <li>&bull; Transparent all-in quotes with no surprises</li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            For snowbirds weighing a return trip against a drive back, our <Link href="/resources/round-trip-vs-one-way-snowbird-shipping" className="text-brand-navy underline font-semibold">round-trip vs one-way</Link> breakdown walks the trade-offs. Hurricane-season Florida shippers should also see our <Link href="/resources/hurricane-season-florida-shipping" className="text-brand-navy underline font-semibold">hurricane season car shipping</Link> notes.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Honest caveat: we are a broker, not a direct carrier. For a short-notice run on the CT-to-FL I-95 lane with rigid dates, a direct carrier already running that corridor can sometimes beat our quote. For most Connecticut shipments and anything requiring Fairfield enclosed logistics or Litchfield rural staging, our broker model wins on reliability and claim support.
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
                Get your Connecticut car shipping quote
              </h2>
              <p className="mt-3 text-slate-600">
                Share pickup and delivery details and a Connecticut specialist will follow up with carrier options for your corridor.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="state" pageUrl={`/states/${slug}`} originState="Connecticut" />
            </div>
          </div>
        </div>
      </section>

      {/* H2.11 — FAQ (exactly 10 insider questions) */}
      <section className="bg-white py-16">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Connecticut car shipping: insider FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Edge cases: the 90-day DMV change, municipal property-tax registration blocks, Fairfield enclosed logistics, Metro North commuter trade-offs, and the questions returning CT snowbirds actually ask us. For base cost and timing, see the sections above.
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
            Done right, Connecticut car shipping comes down to picking the right lane for the Connecticut you&rsquo;re shipping from. Fairfield County needs specialty-enclosed logistics and 4 to 8 week lead time. Hartford and the shoreline ride easy I-95 and I-91 corridors with standard residential pickups. Litchfield rural pickups need staging and winter weather buffers. Clear the property-tax check before your DMV appointment. Match the plan to your pickup zip and the shipment runs predictably. Request a free quote and a Connecticut specialist will walk you through the corridor and timing that fit your route.
          </p>
          <div className="mt-5">
            <Link href="/#quote" className="btn-primary">Get a Connecticut quote</Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Last updated October 14, 2026 &middot; Rates, DMV rules, and municipal tax status shift with policy &mdash; verify current pricing with your broker and current rules at portal.ct.gov/DMV before pickup day.
          </p>
        </div>
      </section>

      <QuoteCTA title="Ship your car from Connecticut" />
    </>
  );
}
