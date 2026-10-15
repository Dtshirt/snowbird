import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'hidden-fees-snowbird-car-shipping';

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
    q: 'What is a "residential pickup surcharge" and when does it apply?',
    a: 'Some carriers charge $50 to $150 extra for pickup at a residential address versus a commercial lot. Reason: residential streets are harder for 70-foot trailers to navigate. Most reputable brokers include this in the quote. Ask upfront whether your quote covers residential pickup.'
  },
  {
    q: 'Do I pay a deposit? If so, is it refundable?',
    a: 'Many brokers charge no deposit until a carrier is dispatched. Some charge a small deposit ($100 to $200) at booking. Refund policies vary — confirm the deposit terms and cancellation window in writing before you pay.'
  },
  {
    q: 'What is a "dispatch surcharge" and is it legitimate?',
    a: 'A dispatch surcharge is a fee added when market rates rise between quote and carrier assignment. Legitimate when disclosed in your contract. A broker that quotes low to win the booking and then adds a 20 to 30 percent dispatch surcharge is using a bait-and-switch pattern — walk away.'
  },
  {
    q: 'Why would I be charged for "oversized vehicle"?',
    a: 'Pickup trucks, large SUVs, lifted trucks, and vehicles with roof racks or ladder racks take more trailer space. Carriers charge $100 to $300 extra for oversized vehicles. Measure your vehicle (length, height, width) and give exact specs when quoting.'
  },
  {
    q: 'What is a "non-running vehicle" fee?',
    a: 'Shipping a car that cannot start, roll, or steer requires a carrier with a winch. Non-running fees are $150 to $400 above the normal rate. Always disclose non-running status upfront — a surprise non-running vehicle at pickup can cost you the full fee + rebooking.'
  },
  {
    q: 'Are there storage fees if I miss delivery?',
    a: 'Yes. If the carrier arrives and you cannot take delivery, storage runs $25 to $75 per day at a carrier terminal. First 24 hours are often free. Communicate with your dispatcher if you need to delay.'
  },
  {
    q: 'What is the "congestion surcharge" for cities like NYC or San Francisco?',
    a: 'Some carriers add a $50 to $150 fee for pickup or delivery in dense urban areas (NYC, SF, downtown Chicago, Boston). Reason: slow traffic, limited parking, longer load times. Confirm whether your quote includes any congestion fee for your zip code.'
  },
  {
    q: 'If my car is dirty on pickup, will the carrier charge me?',
    a: 'Carriers rarely charge for a dirty car, but a very dirty car makes the pickup inspection harder — damage visible later cannot be documented as pre-existing. Wash your car before pickup for clean inspection photos. [INSERT EXPERIENCE]'
  },
  {
    q: 'What is a "cancellation fee" and when does it apply?',
    a: 'Most brokers do not charge a cancellation fee if you cancel before carrier dispatch. After dispatch, cancellation fees range from $150 to $500 or the full deposit. Read the cancellation clause before you book.'
  },
  {
    q: 'Is there a fee for changing pickup or delivery date after booking?',
    a: 'Date changes made 7+ days before pickup are usually free. Last-minute changes (under 48 hours) may trigger a $75 to $150 rebooking fee if the carrier has already planned the dispatch. Give your broker as much notice as possible.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Hidden fees in snowbird car shipping</strong> turn a cheap-looking quote into a bill $200 to $600 higher than you expected. The most common ones — residential pickup surcharges, dispatch surcharges, oversized-vehicle fees, non-running fees — are legitimate when disclosed upfront but easy to miss on a bare quote. This page lists every common hidden fee, how to spot a bait-and-switch quote, and the exact questions to ask before booking any snowbird car shipping.
      </p>

      <h2>Why "hidden" fees exist in car shipping</h2>
      <p>
        Not every snowbird car ships the same way. A sedan from a wide suburban driveway is a different job than a pickup truck from a Boston row house. Carriers price for the base case; fees cover the harder cases. The problem is quotes that intentionally understate the base price to win your booking, then layer fees on at dispatch.
      </p>
      <p>
        A good broker lists all applicable fees in the initial quote. A bad broker hides them until it is too late to walk away.
      </p>

      <h2>The 10 most common hidden fees in snowbird car shipping</h2>
      <p>
        These are the fees most likely to show up on a snowbird shipment:
      </p>
      <ol>
        <li><strong>Residential pickup/delivery surcharge:</strong> $50 to $150</li>
        <li><strong>Dispatch surcharge (market adjustment):</strong> 10 to 30 percent of base</li>
        <li><strong>Oversized vehicle fee:</strong> $100 to $300</li>
        <li><strong>Non-running vehicle fee:</strong> $150 to $400</li>
        <li><strong>Enclosed-trailer upgrade (if open was quoted):</strong> $400 to $800</li>
        <li><strong>Expedited pickup fee:</strong> $100 to $250</li>
        <li><strong>Congestion-area surcharge (dense cities):</strong> $50 to $150</li>
        <li><strong>Storage fee (missed delivery):</strong> $25 to $75 per day</li>
        <li><strong>Deposit fee (sometimes non-refundable):</strong> $100 to $200</li>
        <li><strong>Rebooking / date-change fee:</strong> $75 to $150</li>
      </ol>
      <p>
        Not every shipment hits every fee. Most straightforward snowbird jobs hit zero or one.
      </p>

      <h2>How bait-and-switch quotes work</h2>
      <p>
        A bait-and-switch quote looks like this: You get a quote $200 below three other brokers. You book. The carrier does not pick up on time. After 5 to 7 days of delay, your broker calls and asks for a "small dispatch surcharge" to get a carrier to accept the load. The surcharge brings your total within $50 of the quotes you turned down.
      </p>
      <p>
        This happens because the low quote was never a market-clearing price. No carrier accepted it. The broker waits until you are stuck, then raises the price.
      </p>
      <p>
        How to protect yourself:
      </p>
      <ul>
        <li>Get quotes from 3 brokers. Toss the lowest and the highest.</li>
        <li>Ask upfront: "Is there any scenario where the final price would exceed this quote?"</li>
        <li>Read reviews specifically about surprise charges or price hikes after booking.</li>
        <li>Pick a mid-market quote from a broker with 4+ star reviews.</li>
      </ul>

      <h2>Fees that are legitimate and worth paying</h2>
      <p>
        Not every fee is a scam. These are real costs that reflect extra carrier work:
      </p>
      <ul>
        <li><strong>Non-running vehicle fee:</strong> Winch loading is real extra equipment and time.</li>
        <li><strong>Oversized vehicle fee:</strong> Larger vehicles use more trailer space, reducing carrier load capacity.</li>
        <li><strong>Residential pickup/delivery surcharge:</strong> Narrow streets, parked cars, low wires all slow pickup.</li>
        <li><strong>Expedited pickup fee:</strong> Short-notice loads cost carriers more to dispatch.</li>
      </ul>
      <p>
        When disclosed in the quote, these fees are fair. When added after booking, they are a red flag.
      </p>

      <h2>Questions to ask before you book</h2>
      <p>
        Ask every broker these 7 questions before you sign anything:
      </p>
      <ol>
        <li>Is the quote all-in? What fees could still be added?</li>
        <li>Is there a deposit? Is it refundable? Under what conditions?</li>
        <li>What is the cancellation policy before and after dispatch?</li>
        <li>Will there be a residential pickup/delivery surcharge for my addresses?</li>
        <li>Is my vehicle size standard or oversized by your definition?</li>
        <li>What happens if a storm or carrier breakdown delays dispatch?</li>
        <li>Can I see the final contract terms before I pay anything?</li>
      </ol>
      <p>
        Any broker that cannot answer these clearly is not a broker you want.
      </p>

      <h2>How these fees fit into your total snowbird shipping budget</h2>
      <p>
        For a typical Northeast → Florida snowbird shipment on open transport:
      </p>
      <ul>
        <li><strong>Base rate:</strong> $900 to $1,100 off-peak; $1,100 to $1,400 peak</li>
        <li><strong>Possible fees:</strong> $0 to $300 (residential pickup, oversized vehicle, or similar)</li>
        <li><strong>Realistic total:</strong> $900 to $1,700 depending on peak timing and fees</li>
      </ul>
      <p>
        For the full pricing picture, see our{' '}
        <Link href="/resources/snowbird-car-shipping-cost">snowbird car shipping cost guide</Link>
        . For a quote tailored to your route, use the{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        .
      </p>

      <h2>How we handle fees in our quotes</h2>
      <p>
        Our snowbird car shipping quotes are all-in. We disclose every applicable fee upfront, including residential pickup, oversized vehicle, and any peak-season adjustment. No dispatch surcharges. No bait-and-switch. If a legitimate change occurs (hurricane rerouting, missed delivery, carrier breakdown), we tell you first and ask before adding any fee.
      </p>
      <p>
        For broker vs direct carrier context, see our{' '}
        <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping">broker vs direct carrier guide</Link>
        .
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to get a transparent snowbird car shipping quote?</h2>
      <p>
        Hidden fees are avoidable when you book with a broker that lists every charge upfront. The lowest quote is rarely the best deal — mid-market quotes from reputable brokers almost always land cheaper after accounting for the fees that get added later. Request a free quote and we will walk through every line item before you book.
      </p>
    </ArticleShell>
  );
}
