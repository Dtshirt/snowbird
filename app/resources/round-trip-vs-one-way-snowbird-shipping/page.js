import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'round-trip-vs-one-way-snowbird-shipping';

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
    q: 'If I book round-trip and sell the car in Florida, can I cancel the spring leg?',
    a: 'Most brokers refund the spring leg deposit if you cancel more than 7 days before the dispatch window opens. Cancellations closer to dispatch may cost a flat fee. Keep your sale paperwork — the broker may ask for proof when canceling the second leg.'
  },
  {
    q: 'What stops me from booking two one-way trips with different brokers?',
    a: 'Nothing legally. But most round-trip discounts are tied to using the same broker for both legs. Split-broker bookings lose the discount and the coordinated dispatch. If service matters more than price, a single broker on both legs usually wins.'
  },
  {
    q: 'Does the round-trip quote lock in both prices now or just the fall leg?',
    a: 'This varies by broker. Most lock the fall rate at booking and quote the spring rate at today\'s pricing with a note that it may adjust slightly if market rates swing more than 10 percent by spring. Ask for the exact lock terms in writing before you confirm.'
  },
  {
    q: 'What if a hurricane destroys my winter home and the car never arrives?',
    a: 'If the car was still at the broker\'s dispatch stage, you cancel without penalty. If the carrier has already dispatched, your personal auto comprehensive policy covers the car at destination. Cargo insurance covers in-transit damage only. For destination-side risk, confirm your home insurance includes garaged vehicles.'
  },
  {
    q: 'Can I change the spring pickup date after I book round-trip?',
    a: 'Yes, usually with 2 to 3 weeks of notice. Date changes inside the April peak often bump the price to the current market rate. Date changes to off-peak weeks (early March, mid-May) usually cost nothing. Lock the broader window at booking and tighten the exact date closer to spring.'
  },
  {
    q: 'If I book round-trip, do I get the same carrier for both legs?',
    a: 'Usually no. The broker dispatches each leg based on carriers available at that time of year. The fall carrier may not have a northbound route in your spring window. You still get the round-trip discount regardless of which carrier takes each leg.'
  },
  {
    q: 'What happens if the car gets damaged on the fall leg — does it affect my spring leg?',
    a: 'No. Each leg is a separate contract with its own carrier and bill of lading. Damage on the fall leg is a claim with that carrier\'s cargo insurer. The spring leg proceeds as planned. Document damage carefully — do not refuse the fall leg over cosmetic issues or the spring leg could get complicated.'
  },
  {
    q: 'Can I ship different cars on the two legs (one car south, another north)?',
    a: 'That is two separate one-way shipments, not a round-trip. Round-trip pricing requires the same vehicle on both legs. If you want to ship your spouse\'s car south and your car north, book two one-ways and ask about a multi-vehicle discount instead.'
  },
  {
    q: 'What if I decide mid-winter to drive back myself instead of shipping?',
    a: 'Cancel the spring leg with your broker as soon as you decide. Most brokers refund the spring deposit if you cancel more than 7 days before dispatch. Driving back after booking round-trip rarely saves money because you forfeit the round-trip discount from the fall leg.'
  },
  {
    q: 'Do round-trip bookings count as one tax deduction or two?',
    a: 'If you can deduct snowbird shipping for a work or medical reason (talk to your tax pro, we are not tax advisors), each leg is usually a separate expense. Keep both bills of lading and both receipts. Round-trip is a pricing bundle, not a single transaction for tax purposes. '
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Round-trip snowbird car shipping</strong> bundles your fall southbound and spring northbound trips into a single booking — usually with a small discount, locked pricing, and coordinated dispatch for both legs. One-way bookings handle each trip on its own, giving you flexibility if your plans might change. This page covers when round-trip saves money, when one-way is smarter, and how to decide for your own snowbird season.
      </p>

      <h2>Round-trip vs one-way snowbird shipping — the direct answer</h2>
      <p>
        Round-trip saves 5 to 10 percent on total shipping cost and locks in both pickup windows ahead of the booking rush. One-way is better if your spring return date is uncertain or if you might sell the car, drive back yourself, or change your plans mid-season.
      </p>

      <h2>How much does round-trip snowbird car shipping save?</h2>
      <p>
        Most brokers offer a 5 to 10 percent discount on round-trip bookings versus two separate one-way quotes. On a typical Northeast-to-Florida pair, that is $100 to $200 total savings for the full season.
      </p>
      <p>
        Example math on a Northeast → Florida round-trip, open transport:
      </p>
      <ul>
        <li>Fall leg (one-way): $1,100</li>
        <li>Spring leg (one-way): $1,100</li>
        <li>Two one-way bookings total: $2,200</li>
        <li>Round-trip bundle: $2,000 to $2,100</li>
        <li>Round-trip savings: $100 to $200</li>
      </ul>
      <p>
        The savings is modest, but round-trip also locks you out of the peak-season price spike. If spring rates jump 15 percent in April, round-trip bookings keep the quoted price.
      </p>
      <p>
        For your exact lane, run both options in the{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        . For a full cost breakdown, see our{' '}
        <Link href="/resources/snowbird-car-shipping-cost">snowbird car shipping cost guide</Link>
        .
      </p>

      <h2>When round-trip booking is the smarter choice</h2>
      <p>
        Round-trip wins when you know your schedule and want pricing certainty. Pick round-trip if:
      </p>
      <ul>
        <li>You stay the full winter season (3+ months at the winter home)</li>
        <li>You have done this snowbird trip at least once before (you know the routine)</li>
        <li>You want to lock in the spring price before the April peak</li>
        <li>You prefer to coordinate both legs with one broker</li>
        <li>You are not planning to sell the car over the winter</li>
      </ul>

      <h2>When one-way shipping fits your snowbird plan better</h2>
      <p>
        One-way gives you flexibility. Pick one-way when:
      </p>
      <ul>
        <li>Your spring return date is uncertain (new snowbird, or variable health / family calendar)</li>
        <li>You might sell the car over the winter</li>
        <li>You are testing a new winter destination for the first time</li>
        <li>You might extend your stay by a month or more</li>
        <li>You are okay with the small round-trip premium in exchange for freedom</li>
      </ul>
      <p>
        <em>Caveat:</em> if you pick one-way and decide late to also ship back, your spring booking will go in at current market rate. In peak-season weeks, that can be 15 to 25 percent higher than if you had locked round-trip in the fall.
      </p>

      <h2>How round-trip booking actually works</h2>
      <p>
        Round-trip is a bundle, not a single trip. Here is the usual flow:
      </p>
      <ol>
        <li><strong>Quote both legs together.</strong> You share pickup, delivery, and target windows for fall and spring.</li>
        <li><strong>Book the bundle.</strong> You confirm pickup windows for both legs. No upfront payment with most brokers.</li>
        <li><strong>Fall dispatch and pickup.</strong> Carrier assigned 3 to 10 days before fall pickup. Normal fall shipment follows.</li>
        <li><strong>Spring dispatch.</strong> Broker dispatches the spring leg 3 to 10 days before the spring window opens.</li>
        <li><strong>Spring pickup and delivery.</strong> Second carrier moves the car back north. You pay each carrier at delivery.</li>
      </ol>
      <p>
        Each leg has its own carrier, its own driver, its own bill of lading, and its own payment at delivery. The bundle is a pricing agreement with your broker, not a single contract with one carrier.
      </p>

      <h2>What round-trip bookings do NOT guarantee</h2>
      <p>
        A few honest limits:
      </p>
      <ul>
        <li><strong>Same carrier both legs.</strong> Rare in practice — spring dispatch picks a new carrier based on who is available.</li>
        <li><strong>Same driver both legs.</strong> Almost never.</li>
        <li><strong>Hard date lock.</strong> Peak-season dates can shift 1 to 2 days — same as any other shipment.</li>
        <li><strong>Spring price lock to the penny.</strong> Most brokers lock within a 10 percent band to allow for market swings.</li>
      </ul>
      <p>
        Read the terms before booking. Ask about cancellation of the spring leg if your plans change.
      </p>

      <h2>Round-trip booking strategy for first-time snowbirds</h2>
      <p>
        If this is your first snowbird season, we usually recommend starting with a one-way fall booking and scheduling the spring leg once you know your return date. Round-trip makes more sense in year two, once you know your schedule and your winter destination.
      </p>
      <p>
        If you are confident about the full season — a signed 6-month rental, a vacation home you own, or a repeat booking from previous winters — round-trip is the better buy. The small discount and spring price lock are worth it.
      </p>
      <p>
        For first-time planning, see our{' '}
        <Link href="/resources/first-time-snowbird-shipping">first-time snowbird car shipping checklist</Link>
        . For spring timing details, read our{' '}
        <Link href="/resources/when-to-ship-car-back-north">when to ship car back north guide</Link>
        .
      </p>

      <h2>How to decide between round-trip and one-way for your snowbird car shipping</h2>
      <p>
        Use this quick check:
      </p>
      <ol>
        <li><strong>Is your return date certain within a 2-week window?</strong> If yes, round-trip. If no, one-way.</li>
        <li><strong>Is the winter home yours or a signed-lease rental?</strong> If yes, round-trip. If month-to-month, one-way.</li>
        <li><strong>Have you done this snowbird trip before?</strong> If yes, round-trip. If no, start with one-way.</li>
        <li><strong>Would a 15–25 percent spring price spike bother you?</strong> If yes, lock round-trip now.</li>
        <li><strong>Might you sell the car during the winter?</strong> If yes, one-way.</li>
      </ol>
      <p>
        Three or more "round-trip" answers = bundle. Three or more "one-way" answers = keep it flexible.
      </p>

      <ArticleFAQ items={faqs} />

      <h2>The bottom line on round-trip vs one-way snowbird shipping</h2>
      <p>
        For most repeat snowbirds, round-trip car shipping is the better buy — small discount, locked spring pricing, and one broker handling both legs. For first-timers or anyone with uncertain return plans, one-way keeps you flexible. Price both before you book. When you are ready, request a free quote and ask for both one-way and round-trip numbers side by side.
      </p>
    </ArticleShell>
  );
}
