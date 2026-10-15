import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'ev-snowbird-car-shipping';

export function generateMetadata() {
  const r = getResourceBySlug(slug);
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: `/resources/${slug}` }
  };
}

const faqs = [
  {
    q: 'What state of charge (SOC) should my EV be at for pickup?',
    a: 'Most carriers want EVs between 20 and 50 percent charge. Enough to load, drive on and off the trailer, and start again at delivery — not so much that a thermal event becomes a bigger risk. Confirm the exact SOC range with your dispatcher before pickup.'
  },
  {
    q: 'Can my Tesla go into "transport mode" during shipping?',
    a: 'Yes. Tesla transport mode disables parking brake and keeps the car in neutral for loading. Enable it before the driver arrives (Controls > Service > Transport Mode in-car). The driver cannot enable it without your Tesla account. Rivian and Lucid have similar modes.'
  },
  {
    q: 'Do carriers have special equipment for EVs?',
    a: 'Not really. EVs load on standard open or enclosed trailers like gas cars. The main differences are the SOC range, transport-mode handling, and the carrier\'s awareness of EV weight (EVs are 400 to 800 pounds heavier than equivalent gas cars). Confirm your carrier has shipped EVs before.'
  },
  {
    q: 'Is EV car shipping more expensive than gas car shipping?',
    a: 'Usually $50 to $150 more. The weight difference reduces how many cars a carrier can load, and some carriers add an EV surcharge for the handling knowledge. Enclosed EV shipping may be $100 to $250 more than enclosed gas.'
  },
  {
    q: 'What happens if my EV battery drains below 10 percent during transit?',
    a: 'Rare but possible on long shipments if the car is left in a wake state. If SOC drops below 10 percent, the car may enter deep-sleep mode and may not restart without a jump. Carriers minimize this risk by keeping the car locked in transport mode throughout transit.'
  },
  {
    q: 'Should I unplug any accessories or dash cams?',
    a: 'Yes. Dash cams, OBD-II dongles, and anything drawing power from the 12V system should be unplugged before pickup. These accessories can drain the 12V battery during transit and leave the car unresponsive at delivery.'
  },
  {
    q: 'What should I do about my charging cable and adapter during shipping?',
    a: 'Remove the mobile charging cable and any adapters from the trunk before pickup. These are expensive and FMCSA personal items rules exclude them from standard carrier cargo coverage. Store them separately or ship them another way.'
  },
  {
    q: 'If my EV needs a service recall addressed, should I ship before or after?',
    a: 'Address safety recalls before shipping, especially for high-voltage system updates. A recall notice is a reason to delay a long-distance shipment. Confirm there are no active high-voltage safety recalls on your VIN at nhtsa.gov before booking.'
  },
  {
    q: 'Can I ship my EV during very cold weather without battery damage?',
    a: 'Yes. EVs handle cold storage fine between -20F and 100F ambient temperatures. The battery self-protects. Short exposures to extreme cold during open-trailer transit do not cause damage. For long shipments through severe cold, enclosed transport adds thermal protection. [INSERT EXPERIENCE]'
  },
  {
    q: 'Can the carrier charge my EV during transit if the SOC drops?',
    a: 'No. Carriers do not charge EVs mid-transit — no equipment to plug in and no truck-stop charging that fits a hauled car. The 20 to 50 percent starting SOC is sized to last the full transit with margin. If you need the car fully charged at delivery, charge it after unloading.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Shipping an EV south for the winter</strong> is almost identical to shipping a gas car — but a few EV-specific details matter: state of charge at pickup, transport mode, accessory disconnection, and carrier EV experience. Tesla, Rivian, Lucid, Ford Lightning, and other EV snowbirds should know these details before booking. This page walks through how EV car shipping works, what to prep before pickup, and the questions to ask your carrier.
      </p>

      <h2>How EV car shipping differs from gas car shipping</h2>
      <p>
        Three main differences:
      </p>
      <ol>
        <li><strong>State of charge (SOC) at pickup.</strong> Most carriers want 20 to 50 percent charge. Enough to drive on and off the trailer; low enough to minimize thermal risk.</li>
        <li><strong>Transport mode.</strong> Teslas, Rivians, and Lucids have a transport mode that disables the parking brake and keeps the car in neutral. You must enable it; the driver cannot.</li>
        <li><strong>Weight.</strong> EVs are 400 to 800 pounds heavier than equivalent gas cars. Carriers adjust trailer loading accordingly.</li>
      </ol>

      <h2>What state of charge should your EV be at for pickup?</h2>
      <p>
        General guidance by brand:
      </p>
      <ul>
        <li><strong>Tesla (all models):</strong> 20 to 50 percent</li>
        <li><strong>Rivian R1T/R1S:</strong> 25 to 50 percent</li>
        <li><strong>Lucid Air:</strong> 20 to 50 percent</li>
        <li><strong>Ford F-150 Lightning:</strong> 20 to 50 percent</li>
        <li><strong>Chevy Bolt / Equinox EV:</strong> 20 to 50 percent</li>
      </ul>
      <p>
        Confirm with your dispatcher. Some carriers prefer closer to 20 percent for liability; others prefer closer to 50 for operational flexibility.
      </p>

      <h2>How to enable transport mode on each major EV</h2>
      <p>
        Enable transport mode before the driver arrives:
      </p>
      <ul>
        <li><strong>Tesla:</strong> Controls → Service → Transport Mode. Requires your Tesla account.</li>
        <li><strong>Rivian:</strong> Service menu → Transport Mode.</li>
        <li><strong>Lucid Air:</strong> Service menu → Transport Mode.</li>
        <li><strong>Ford F-150 Lightning:</strong> Dealer service tool only — ask dealer to enable before pickup, or use neutral tow mode via dash.</li>
      </ul>
      <p>
        Transport mode disables the parking brake. Keep the car on level ground once enabled, and chock the wheels until the carrier loads it.
      </p>

      <h2>EV car shipping cost expectations</h2>
      <p>
        For a typical Northeast → Florida snowbird shipment:
      </p>
      <ul>
        <li><strong>EV open transport:</strong> $950 to $1,350</li>
        <li><strong>EV enclosed transport:</strong> $1,500 to $2,100</li>
      </ul>
      <p>
        Add $50 to $150 above gas-car rates. For a route-specific EV quote, use the{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        .
      </p>

      <h2>How to prep your EV for shipping</h2>
      <p>
        Checklist before pickup day:
      </p>
      <ul>
        <li>Charge to 20 to 50 percent (per your dispatcher)</li>
        <li>Enable transport mode just before the driver arrives</li>
        <li>Unplug all 12V accessories (dash cam, OBD-II dongle, phone chargers)</li>
        <li>Remove mobile charging cable and adapters from the trunk</li>
        <li>Clean the car for pre-pickup inspection photos</li>
        <li>Document the car with time-stamped photos of all four corners, roof, and interior</li>
        <li>Note current SOC on the bill of lading</li>
      </ul>
      <p>
        For the general snowbird prep workflow, see our{' '}
        <Link href="/resources/snowbird-vehicle-preparation-checklist">snowbird vehicle preparation checklist</Link>
        .
      </p>

      <h2>Insurance for EV car shipping</h2>
      <p>
        EV cargo insurance works the same as gas car insurance. The one gotcha: battery-pack damage from a trailer accident is covered by the carrier's cargo insurance, but battery degradation from normal storage is not. Keep your personal comprehensive auto policy active during transport as a backup layer.
      </p>
      <p>
        For high-value EVs ($100K+), consider supplemental cargo insurance. For insurance basics, see our{' '}
        <Link href="/resources/snowbird-car-shipping-insurance-claims">snowbird car shipping insurance guide</Link>
        .
      </p>

      <h2>Questions to ask your carrier about EV experience</h2>
      <p>
        Before booking, ask:
      </p>
      <ul>
        <li>Have you shipped EVs before? Which brands?</li>
        <li>What SOC do you want at pickup?</li>
        <li>Do you have experience with transport mode on my EV brand?</li>
        <li>Have you had any EV incidents (thermal, electrical) in your history?</li>
        <li>Can you handle an EV&rsquo;s extra weight on a mixed load?</li>
      </ul>
      <p>
        Carriers with no EV experience are not automatically bad — EV handling is straightforward — but newer carriers may be nervous and ask you to drive your car extra for them during pickup. Pick a carrier that treats EV shipping as routine.
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to ship your EV south?</h2>
      <p>
        EV snowbird car shipping is standard practice now — Tesla, Rivian, Lucid, and others ship south in volume every fall. The right SOC at pickup, transport mode on, accessories unplugged, and a carrier with EV experience is all it takes. Request a free quote and we will match you with an EV-experienced carrier on your route.
      </p>
    </ArticleShell>
  );
}
