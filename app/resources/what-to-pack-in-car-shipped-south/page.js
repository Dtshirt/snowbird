import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'what-to-pack-in-car-shipped-south';

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
    q: 'How many pounds of personal items can I pack in my car during shipping?',
    a: 'FMCSA guidance is up to 100 pounds of personal items, stored below the window line, with no breakable or valuable items. Many carriers enforce stricter limits (50 to 100 pounds). Confirm your carrier\'s specific limit before pickup.'
  },
  {
    q: 'Why do carriers limit how much I can pack in my own car?',
    a: 'Three reasons: weight affects trailer load calculations and DOT limits; loose items can shift and damage the interior during transit; and the carrier cargo insurance does not cover personal items. The limit protects you more than them.'
  },
  {
    q: 'Can I pack my golf clubs, bikes, or luggage for the winter?',
    a: 'Golf clubs and small luggage inside the car are usually fine (under the 100-pound limit, below window line). Bikes on a roof or hitch rack are usually refused — they count as oversized vehicle equipment and add trailer height. Remove bike racks before pickup.'
  },
  {
    q: 'Does carrier cargo insurance cover anything I pack in my car?',
    a: 'No. Carrier cargo insurance covers the vehicle itself — not the contents. If anything you packed is lost, stolen, or damaged, it is not covered. Pack only what you can afford to lose.'
  },
  {
    q: 'Can I ship ski gear or other sports equipment inside my car?',
    a: 'Ski gear, snowboards, and bulky sports equipment usually exceed the 100-pound limit for personal items. Many snowbirds ship these separately via USPS or FedEx. If you want to pack them in-car, confirm with your carrier and keep them below the window line.'
  },
  {
    q: 'What is the risk of hiding valuable items in the trunk during shipping?',
    a: 'If anything is stolen or damaged, no insurance covers it (carrier cargo policies exclude contents; your personal auto comprehensive usually requires reporting theft to police with a specific location, which is complicated with a car in transit). Do not hide valuables.'
  },
  {
    q: 'Can I pack food, drinks, or perishables?',
    a: 'No. Transit times run 7 to 14 days. Perishable food spoils, stains interior, and attracts pests. Any food, drink, or temperature-sensitive item should come out before pickup.'
  },
  {
    q: 'What about my prescription medications or important documents?',
    a: 'Never pack medications, passports, birth certificates, cash, jewelry, or any irreplaceable document in a shipped car. Ship these separately or carry them with you. [INSERT EXPERIENCE]'
  },
  {
    q: 'Can I leave a car seat installed during shipping?',
    a: 'Yes. A properly installed child car seat can stay in the vehicle. Remove any loose items from inside the seat compartment. This is one of the few bulky items carriers routinely allow.'
  },
  {
    q: 'What happens if the DOT inspects a carrier and finds overweight personal items?',
    a: 'The carrier can be fined and the dispatch delayed. Your car may be unloaded for the inspection and reloaded, adding 1 to 2 days. Carriers that find overweight loads at pickup may refuse the shipment entirely. Pack within the 100-pound rule to avoid this.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>What you can pack in a snowbird car being shipped south</strong> is one of the first questions new snowbirds ask — and the answer is "less than you think." FMCSA personal-items guidance caps packed items at about 100 pounds, below the window line, with no breakables or valuables. Some carriers go further. This page covers the exact packing rules for snowbird car shipping, what items snowbirds actually ship in their cars, and what to leave for a separate shipment or carry with you.
      </p>

      <h2>The FMCSA personal-items guidance for car shipping</h2>
      <p>
        The Federal Motor Carrier Safety Administration provides guidance on personal items in shipped vehicles. The general rule is up to 100 pounds, stored below the window line, with no fragile or valuable items. Verify with your carrier for exact policy. The rules exist for three reasons:
      </p>
      <ul>
        <li>Trailer weight limits (DOT caps carrier gross vehicle weight)</li>
        <li>Loose item damage risk during transit</li>
        <li>Insurance exclusions (carrier cargo policies cover the vehicle, not contents)</li>
      </ul>

      <h2>What you can pack in your snowbird car (within the 100-pound limit)</h2>
      <p>
        Snowbirds commonly pack:
      </p>
      <ul>
        <li>Golf clubs (one or two sets)</li>
        <li>Small suitcases or soft duffels</li>
        <li>Light bedding or small blankets</li>
        <li>Books and magazines</li>
        <li>Non-fragile household items (plastic storage bins, lightweight kitchenware)</li>
        <li>Beach gear (chairs, towels, umbrellas)</li>
        <li>Light clothing in sealed bags</li>
      </ul>
      <p>
        All items stay below the window line. Nothing on seats, nothing on the dash, nothing visible through windows (visibility matters for pre-pickup inspection and carrier liability).
      </p>

      <h2>What you cannot pack in a shipped snowbird car</h2>
      <p>
        Avoid packing any of these:
      </p>
      <ul>
        <li>Valuables: jewelry, cash, electronics beyond the car radio</li>
        <li>Fragile items: glass, ceramics, fine art</li>
        <li>Important documents: passports, birth certificates, deeds, car titles</li>
        <li>Medications or prescription supplies</li>
        <li>Firearms (illegal in many states to transport in a shipped vehicle without declaration)</li>
        <li>Perishable food, drinks, or opened cosmetics</li>
        <li>Flammable items: paint, propane, aerosol cans, batteries beyond the car battery</li>
        <li>Pet supplies (loose pet food attracts pests, pet beds smell during transit)</li>
      </ul>

      <h2>How to pack items that are allowed</h2>
      <p>
        Four packing rules:
      </p>
      <ol>
        <li><strong>All items below window line.</strong> Keeps visibility for inspection and reduces shift risk.</li>
        <li><strong>Soft bags over hard cases.</strong> Soft duffels compress and shift less than rigid suitcases.</li>
        <li><strong>Nothing on seats.</strong> Trunk, cargo area, and under-seat only. Seats stay empty.</li>
        <li><strong>Document what you packed.</strong> Take time-stamped photos of items in the trunk before pickup. If a dispute arises later, photos matter.</li>
      </ol>

      <h2>Items snowbirds should ship separately or carry</h2>
      <p>
        For items outside the 100-pound limit or that need insurance:
      </p>
      <ul>
        <li><strong>Ship separately:</strong> Bikes, extra ski/snowboard gear, bulky furniture, large electronics</li>
        <li><strong>USPS, FedEx, or UPS:</strong> Books, non-fragile household goods, clothing in excess of the 100-pound limit</li>
        <li><strong>Carry with you (fly or drive):</strong> Jewelry, cash, important documents, medications, electronics</li>
        <li><strong>Mail ahead:</strong> Mail service to your winter home address 1 to 2 weeks before you arrive</li>
      </ul>

      <h2>How carrier insurance interacts with packed items</h2>
      <p>
        Carrier cargo insurance covers the vehicle itself. It does not cover:
      </p>
      <ul>
        <li>Items inside the vehicle during transit</li>
        <li>Theft of packed items</li>
        <li>Damage to packed items from shifting</li>
        <li>Loss of valuables that were in the car</li>
      </ul>
      <p>
        Your personal auto comprehensive policy covers theft from your car — but requires a police report with a specific location, which is complicated when the car is at an unknown point mid-transit. For insurance basics, see our{' '}
        <Link href="/resources/snowbird-car-shipping-insurance-claims">snowbird car shipping insurance guide</Link>
        .
      </p>

      <h2>What the carrier does at pickup</h2>
      <p>
        At pickup, the carrier:
      </p>
      <ol>
        <li>Verifies the vehicle matches the booking</li>
        <li>Does a walk-around inspection with you</li>
        <li>Checks personal items weight (approximate; most do not weigh)</li>
        <li>Confirms items are below window line and not fragile</li>
        <li>Notes anything on the bill of lading</li>
        <li>Loads the car and departs</li>
      </ol>
      <p>
        If packed items exceed the carrier&rsquo;s policy, the driver may refuse to load. You then unload the excess yourself or reschedule. For the full snowbird prep workflow, see our{' '}
        <Link href="/resources/snowbird-vehicle-preparation-checklist">snowbird vehicle preparation checklist</Link>
        .
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to pack your snowbird car for shipping?</h2>
      <p>
        The 100-pound personal items rule gives snowbirds enough room for golf clubs, small suitcases, and basic bedding. Everything beyond that ships separately or travels with you. Stay inside the limit, keep items below the window line, and skip anything irreplaceable. Request a free quote and we will share your specific carrier&rsquo;s packing policy as part of the booking.
      </p>
    </ArticleShell>
  );
}
