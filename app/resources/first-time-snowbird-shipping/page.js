import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'first-time-snowbird-shipping';

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
    q: 'How do carriers actually find my pickup address — does the big truck fit on my street?',
    a: 'The dispatcher uses your pickup ZIP and address to assign a truck. If your street has low branches, narrow turns, or a weight limit, the driver will call before they arrive and ask you to meet at a nearby lot. This is normal in 55+ communities and gated neighborhoods — not a problem.'
  },
  {
    q: 'What if my pickup date gets moved after I book?',
    a: 'A date shift of 1 to 2 days is common and allowed in most carrier contracts. If the shift is more than 2 days, your broker should offer to re-dispatch to a different carrier. Ask your broker during booking what their re-dispatch rule is so you know before anything moves.'
  },
  {
    q: 'My car has aftermarket parts (lowered suspension, roof rack). Does this change anything?',
    a: 'Yes. Any mod that lowers ground clearance below 4 inches, or that adds roof height, has to be told to the carrier before pickup. A lowered car may need enclosed transport. A roof rack with crossbars has to come off. Hidden mods that damage loading equipment can trigger a surcharge.'
  },
  {
    q: 'Should I buy a separate insurance policy for the shipment?',
    a: 'The carrier\'s cargo policy covers in-transit damage — you do not need to buy extra insurance for a standard shipment. For a vehicle worth over $75,000, ask the broker for the carrier\'s policy limit before pickup and buy supplemental cargo insurance if the limit is below your car\'s value.'
  },
  {
    q: 'What if I need to cancel after booking?',
    a: 'Cancellation rules vary by broker. Most waive fees if you cancel before a carrier is dispatched. Once a carrier is on the way or already loaded, cancellation can cost a flat fee or a percentage of the quote. Ask about the cancellation policy before you confirm — it should be in writing.'
  },
  {
    q: 'How do I handle the fuel level if I ship right before a holiday weekend?',
    a: 'Keep the tank at a quarter full. On holiday weekends, carriers may delay delivery by a day because of road closures and reduced hours of service. A quarter tank gives you enough to drive the car to a gas station after delivery without running dry — but not so much that weight bothers the carrier.'
  },
  {
    q: 'My winter home is in an HOA. Do I need to warn them before shipping?',
    a: 'Yes, if your HOA restricts large vehicles. Tell the gatehouse the carrier\'s truck number, driver name, and expected arrival window as soon as you have them from the dispatcher. Some HOAs require a 24-hour notice. '
  },
  {
    q: 'What is dispatch, and why does it take 1 to 3 days after booking?',
    a: 'Dispatch is the stage where your broker posts your route on the national load board and waits for a licensed carrier to accept the trip. On busy snowbird lanes, dispatch takes a few hours. On rural or long-haul routes, it can take 1 to 3 days. Nothing is wrong — the carrier is lining up a route that fits your pickup.'
  },
  {
    q: 'Do I need to be present at both pickup AND delivery?',
    a: 'Yes, or an adult 18 or older must stand in for you. They sign the bill of lading, which is your proof of condition. If no one is there, the carrier may charge a wait fee or refuse the delivery. Give your stand-in a copy of your contract and the dispatcher\'s number.'
  },
  {
    q: 'What is the single most common first-time snowbird mistake?',
    a: 'Treating the pickup date like a flight time. The pickup is a 2 to 4 hour window on the chosen day, not a fixed clock time. First-time snowbirds often cancel plans for the whole day to wait at home. Keep the day flexible, keep your phone on, and the driver will call 1 to 2 hours before arrival.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        A <strong>first-time snowbird car shipping</strong> trip is simpler than most people think, as long as you know what to expect at each step. The hard part is not the shipping itself — it is the first-time jitters that come from not knowing how dispatch, pickup windows, bills of lading, or insurance really work. This page walks you through the full snowbird auto transport flow, in order, the way we would walk a new client through it on the phone.
      </p>

      <h2>What first-time snowbirds get wrong about car shipping</h2>
      <p>
        The biggest first-time snowbird mistake is treating auto transport like a scheduled flight. Pickup and delivery run on windows, not clock times. Carriers can shift by 1 or 2 days because of weather, road closures, or hours-of-service rules.
      </p>
      <p>
        Three other common first-timer mistakes:
      </p>
      <ul>
        <li>Waiting until October to book, then paying peak-week rates (book in late August or early September)</li>
        <li>Leaving the car dirty — a clean car makes damage inspection honest, which protects you</li>
        <li>Signing the bill of lading without walking around the car at delivery</li>
      </ul>

      <h2>How snowbird car shipping works, step by step</h2>
      <p>
        Here is the full order of a snowbird shipment from first quote to final delivery:
      </p>
      <ol>
        <li><strong>Get a quote.</strong> Share pickup ZIP, delivery ZIP, vehicle year/make/model, condition, and target pickup window.</li>
        <li><strong>Book the shipment.</strong> You lock in a pickup window. No upfront payment with most reputable brokers.</li>
        <li><strong>Dispatch.</strong> The broker posts your route and matches you with a licensed carrier (usually 1 to 3 days).</li>
        <li><strong>Driver confirms pickup.</strong> The carrier calls 12 to 24 hours before pickup with a 2 to 4 hour window.</li>
        <li><strong>Pickup day.</strong> Walk around the car with the driver. Sign the bill of lading. Hand over one key.</li>
        <li><strong>Transit.</strong> The car heads to your winter home. Transit time is 3 to 8 days depending on the lane.</li>
        <li><strong>Driver confirms delivery.</strong> The carrier calls 24 hours before delivery with a window.</li>
        <li><strong>Delivery day.</strong> Walk around the car again. Note any new marks on the bill of lading. Pay the carrier. Drive away.</li>
      </ol>
      <p>
        For a deeper read on each step, see our{' '}
        <Link href="/resources/snowbird-car-shipping-guide">complete snowbird car shipping guide</Link>
        .
      </p>

      <h2>The first-time snowbird booking checklist</h2>
      <p>
        Use this checklist before you request your first quote. Having these ready makes the quote accurate and the booking fast.
      </p>
      <ul>
        <li>Pickup ZIP and street address</li>
        <li>Delivery ZIP and street address (plus HOA / gate info if any)</li>
        <li>Vehicle year, make, model, and body type (sedan, SUV, truck, van)</li>
        <li>Does the car run and drive? (yes / no — this matters a lot for price)</li>
        <li>Target pickup window (a 2 to 3 day range beats a single date)</li>
        <li>Open or enclosed transport (open for most cars, enclosed for luxury / classic)</li>
        <li>Any aftermarket mods (lowered, roof rack, oversized tires)</li>
        <li>Phone number the driver can reach you on</li>
        <li>A backup contact in case you cannot be there at pickup or delivery</li>
      </ul>

      <h2>When should a first-time snowbird book their first shipment?</h2>
      <p>
        For a southbound fall trip, start the quote process in late August and book by mid-September. For a northbound spring trip, start in February and book by early March. Booking that early gets you first pick of pickup dates and the lowest seasonal rate.
      </p>
      <p>
        The worst time to book your first shipment is 7 to 10 days before you want to leave, in the middle of peak season (mid-October to late November, or mid-April to early May). Carriers are already booked out. Prices spike 15 to 25 percent.
      </p>
      <p>
        For a deeper read on timing, see our{' '}
        <Link href="/resources/when-to-ship-your-car-south-for-winter">when to ship south guide</Link>
        .
      </p>

      <h2>What first-time snowbirds should expect at pickup</h2>
      <p>
        Pickup day is calmer than most new snowbirds expect. Here is what actually happens:
      </p>
      <ol>
        <li>The driver calls 1 to 2 hours before arrival to confirm.</li>
        <li>The truck pulls up (or asks you to meet at a nearby lot if the street is too tight).</li>
        <li>You walk around the car with the driver. The driver notes every mark on the <strong>bill of lading (BOL)</strong> — a 1-page form that lists the car's condition.</li>
        <li>Both of you sign. You keep a copy. This paper is your proof.</li>
        <li>You hand over one working key.</li>
        <li>The driver loads the car onto the truck using a ramp or hydraulic lift (15 to 30 minutes).</li>
        <li>The driver gives you their phone number and the truck ID. You can call during transit.</li>
      </ol>
      <p>
        <em>Caveat:</em> if you cannot be present, an adult (18+) can stand in. They must sign the BOL and keep the copy. Share the car's keys and any gate codes with them in advance.
      </p>

      <h2>What first-time snowbirds should expect at delivery</h2>
      <p>
        Delivery mirrors pickup. The driver calls 24 hours ahead, then again 1 to 2 hours before arrival. At the delivery address (or the agreed meet-up spot), you repeat the walk-around.
      </p>
      <p>
        At delivery, pay attention to:
      </p>
      <ul>
        <li>New scratches, dents, chipped paint, or cracked lights</li>
        <li>Windshield cracks (even small ones)</li>
        <li>Tire condition (should match pickup)</li>
        <li>Odometer reading (should match pickup, give or take a few miles for loading)</li>
      </ul>
      <p>
        If anything new is on the car, note it on the BOL <em>before</em> you sign. Signing a clean BOL and then calling about damage the next day is the #1 reason claims are denied.
      </p>
      <p>
        Payment is due at delivery. Most carriers accept cash, cashier's check, or Zelle. Credit cards are rare — check with your dispatcher before pickup.
      </p>

      <h2>How to prep your car for its first snowbird shipment</h2>
      <p>
        A clean, well-prepped car makes pickup fast and protects you if there is a dispute. The short list:
      </p>
      <ul>
        <li>Wash the car the day before pickup</li>
        <li>Take dated photos of every panel, the roof, the wheels, and the interior</li>
        <li>Check fluids and tire pressure</li>
        <li>Leave a quarter tank of fuel</li>
        <li>Remove toll tags, dash cams, valet keys, and loose items</li>
        <li>Keep personal items under 100 pounds, placed low and out of sight</li>
        <li>Disable the alarm or share the shut-off code</li>
      </ul>
      <p>
        See the full checklist in our{' '}
        <Link href="/resources/snowbird-vehicle-preparation-checklist">snowbird vehicle preparation checklist</Link>
        .
      </p>

      <h2>How much should a first-time snowbird budget?</h2>
      <p>
        Budget $800 to $1,500 for one-way open transport on a typical snowbird lane. Add 30 to 50 percent for enclosed transport. Add $150 to $300 if you book inside the Oct 15 to Nov 20 peak or Apr 1 to May 10 peak.
      </p>
      <p>
        For a planning number tailored to your route, use the{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        . For a full cost breakdown, read our{' '}
        <Link href="/resources/snowbird-car-shipping-cost">snowbird car shipping cost article</Link>
        .
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready for your first snowbird shipment?</h2>
      <p>
        A first-time snowbird car shipping run is manageable when you know the flow — book early, prep the car, document condition, and keep the pickup day flexible. The rest the carrier handles. When you are ready, request a free quote and a snowbird specialist will walk you through your first booking end to end.
      </p>
    </ArticleShell>
  );
}
