import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'hurricane-season-florida-shipping';

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
    q: 'If a named storm forms the week of my pickup, who decides to delay?',
    a: 'The carrier decides. Most carriers follow NHC (National Hurricane Center) advisories and reroute or hold off the storm zone when a hurricane watch is issued within 48 hours of their route. Your broker should call you with the updated window.'
  },
  {
    q: 'Does cargo insurance cover flood damage if my car is in a staging lot during a storm?',
    a: 'Most carrier cargo policies cover damage during loading, transit, and unloading — but staging-lot flood damage can fall in a gray zone. Confirm with your broker whether the staging lot is covered. Your personal comprehensive auto policy covers garaged flood damage if the car is at your destination address.'
  },
  {
    q: 'My HOA requires the car garaged during a storm — can delivery timing match?',
    a: 'Ask the carrier for a delivery window at least 48 hours before any storm watch. If a watch is issued mid-transit, the carrier may hold the car at a terminal until the storm passes. You will not be delivered a car in the middle of a hurricane. [INSERT EXPERIENCE]'
  },
  {
    q: 'Does FEMA emergency restrictions ever block car carriers from Florida roads?',
    a: 'During active storm response (first 72 hours after landfall), FEMA and state DOT may restrict non-essential commercial traffic on key corridors like I-75, I-95, and I-4. Carriers reroute or hold. This can shift delivery by 2 to 7 days during a direct-hit storm. [INSERT STAT + SOURCE: Florida DOT storm advisory]'
  },
  {
    q: 'Is enclosed transport "hurricane proof" for the drive down?',
    a: 'No. Enclosed trailers protect from rain, flying debris, and dust during normal transit — but no carrier type is driven through an active hurricane. Carriers of both types reroute or hold. Enclosed does protect against saltwater spray on causeways and bridges during named storms.'
  },
  {
    q: 'Should I ship early in September to beat storm season?',
    a: 'Late September is often a sweet spot — carrier supply is strong, snowbird peak is still a few weeks away, and most Atlantic storms have formed and tracked by then. Shipping in the first 2 weeks of September is riskier because peak Atlantic storm activity runs Sep 10 to Oct 10.'
  },
  {
    q: 'What is the "cone of uncertainty" and does it change carrier routing?',
    a: 'The NHC cone shows the probable track of a storm center over 5 days. Carriers avoid delivering into any ZIP code inside the cone during an active watch. If your delivery ZIP is in the cone, expect a 1 to 3 day hold until the storm clears. [INSERT: link to NHC resource]'
  },
  {
    q: 'If a storm hits during round-trip booking, does my spring return leg get affected?',
    a: 'Only if your winter home is damaged. Round-trip bookings are two separate dispatches — the fall leg and the spring leg. A fall-leg storm delay does not affect spring pricing. If your destination property is destroyed, call your broker to pause the spring leg while you work with insurance.'
  },
  {
    q: 'Does my broker have real-time hurricane tracking I can see?',
    a: 'Most brokers use NHC data and third-party dispatch tools. You can watch the same NHC advisories at hurricanes.gov. If a storm forms within 7 days of your pickup, call your broker and get an updated plan in writing — do not wait for them to call you. Verify with your carrier or local authority on specific rerouting rules.'
  },
  {
    q: 'Are off-season (December to April) Florida snowbird shipments ever affected by weather?',
    a: 'Rarely. Atlantic hurricane season ends Nov 30. Winter storms do hit northern Florida (Jacksonville, Pensacola) with freezes, but these cause short delays, not stop-work. Spring severe weather can bring tornadoes to central Florida; these are brief and localized.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Hurricane season affects Florida snowbird car shipping</strong> from June 1 through November 30 — but the real impact lands in September and October, right when fall snowbird volume peaks. If you plan to ship a car to Florida for the winter, understanding storm timing, carrier rerouting rules, and insurance coverage saves you from the worst scheduling traps. This page walks through how storms shift pickup windows, what cargo and personal insurance cover, and how to time a snowbird shipment around the Atlantic hurricane season.
      </p>

      <h2>When is Atlantic hurricane season and why it matters for shipping</h2>
      <p>
        Atlantic hurricane season runs June 1 through November 30, with peak storm activity between August 15 and October 20. For snowbirds, the collision window is late September through mid-October — the start of fall southbound shipping and the end of peak storm risk.
      </p>
      <p>
        For reference on current storm activity, check the National Hurricane Center at hurricanes.gov. Verify with your carrier or local authority on specific routing rules.
      </p>

      <h2>How carriers handle active storm advisories</h2>
      <p>
        When the NHC issues a hurricane watch or warning for a ZIP code on your route, carriers follow one of three options:
      </p>
      <ol>
        <li><strong>Reroute.</strong> Take a longer path around the storm zone. Adds 1 to 3 days to transit.</li>
        <li><strong>Hold off.</strong> Park the truck at a terminal outside the storm zone until the watch is lifted. Adds 1 to 5 days.</li>
        <li><strong>Delay dispatch.</strong> Postpone your pickup until after the storm clears. Adds up to 7 days.</li>
      </ol>
      <p>
        Weather delay is listed in most carrier contracts as a non-penalty cause. You pay no change fee and get no refund — the window just shifts. Expect your broker to call you with the updated plan within 24 hours of the advisory.
      </p>

      <h2>What months are safest to ship to Florida during storm season?</h2>
      <p>
        Safest fall shipping months, ranked by storm risk:
      </p>
      <ul>
        <li><strong>Late June (safest):</strong> Season just started, storm activity still low</li>
        <li><strong>Early July:</strong> Still low storm activity, carrier supply strong</li>
        <li><strong>Late September:</strong> Peak formation has passed; most storms have tracked</li>
        <li><strong>Early October:</strong> Snowbird peak starts; moderate storm risk remains</li>
        <li><strong>Mid-August (riskiest):</strong> Peak formation window begins</li>
        <li><strong>Mid-September (riskiest):</strong> Highest single-week storm probability</li>
      </ul>
      <p>
        For a broader month-by-month view, see our{' '}
        <Link href="/resources/snowbird-shipping-calendar">snowbird shipping calendar</Link>
        . For general fall timing, read our{' '}
        <Link href="/resources/when-to-ship-your-car-south-for-winter">when to ship south guide</Link>
        .
      </p>

      <h2>How much does hurricane-season shipping cost extra?</h2>
      <p>
        Hurricane-driven weather delays usually do not add to your base shipping price — the delay cost is time, not dollars. Where price does rise:
      </p>
      <ul>
        <li><strong>Enclosed demand bump.</strong> Snowbirds shift to enclosed during storm weeks, raising enclosed quotes 5 to 15 percent.</li>
        <li><strong>Short-notice rebooking.</strong> If a storm forces cancellation and rebooking inside 7 days, new rates may be 10 to 20 percent higher.</li>
        <li><strong>Terminal storage.</strong> If the carrier holds your car at a terminal for 3+ days, some apply a nominal $25 to $75 per day storage fee.</li>
      </ul>
      <p>
        For the full pricing picture, see our{' '}
        <Link href="/resources/snowbird-car-shipping-cost">snowbird car shipping cost guide</Link>
        .
      </p>

      <h2>What insurance covers hurricane damage to your vehicle</h2>
      <p>
        Three insurance layers may cover storm damage:
      </p>
      <ol>
        <li><strong>Carrier cargo insurance.</strong> Covers damage during loading, transit, and unloading. Flood or wind damage mid-transit is usually included; staging-lot damage is sometimes excluded. Ask for the carrier's certificate of insurance before booking.</li>
        <li><strong>Your personal comprehensive auto policy.</strong> Covers flood, wind, and falling-debris damage once the car is at your delivery address. Confirm your policy stays active while the car is garaged in Florida.</li>
        <li><strong>Supplemental cargo insurance.</strong> Available from third-party insurers for high-value cars. Worth it only for cars worth $75,000+.</li>
      </ol>
      <p>
        We are not insurance advisors. Confirm every coverage detail with your carrier's dispatcher and your personal insurer before shipping.
      </p>

      <h2>Shipping to Florida after a major storm hits</h2>
      <p>
        Post-storm shipping has its own rules:
      </p>
      <ul>
        <li>FEMA and state DOT may restrict non-essential commercial traffic for 24 to 72 hours after landfall</li>
        <li>Carriers prioritize relief routes over commercial deliveries</li>
        <li>Fuel shortages on evacuation corridors (I-75, I-95) can add refueling delays</li>
        <li>Local roads may be closed to large trucks for a week or more in flood zones</li>
      </ul>
      <p>
        If a major storm hits your delivery area, expect delivery to shift by 5 to 14 days. Confirm with your HOA or property manager that the delivery address is accessible before the carrier rolls.
      </p>

      <h2>Our hurricane-season booking playbook for Florida snowbirds</h2>
      <p>
        What we recommend to clients shipping to Florida during storm season:
      </p>
      <ol>
        <li><strong>Book early.</strong> Lock in your pickup window in late August for a late-September pickup. Early books get flexibility.</li>
        <li><strong>Set a 3-day pickup window.</strong> Carriers can swap days without rebooking you.</li>
        <li><strong>Watch NHC advisories weekly.</strong> If a storm forms 7+ days out, call your broker.</li>
        <li><strong>Confirm destination accessibility.</strong> If your Florida home is in a mandatory evacuation zone, delay delivery.</li>
        <li><strong>Keep comprehensive auto insurance active.</strong> Do not drop coverage over the winter.</li>
      </ol>
      <p>
        See our <Link href="/destinations/florida">Florida snowbird car shipping hub</Link> for destination details.
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to plan your Florida snowbird trip around hurricane season?</h2>
      <p>
        Hurricane season does complicate Florida snowbird car shipping — but with the right timing and a flexible pickup window, most snowbirds ship without weather issues. The riskiest weeks are mid-August through mid-September. The safest fall weeks are late September and early October. Request a free quote and a snowbird specialist will build a storm-aware plan for your route.
      </p>
    </ArticleShell>
  );
}
