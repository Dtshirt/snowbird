import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import { getResourceBySlug } from '@/data/resources';

const slug = 'snowbird-car-shipping-guide';

export function generateMetadata() {
  const r = getResourceBySlug(slug);
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: `/resources/${slug}` }
  };
}

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        This <strong>snowbird car shipping guide</strong> is for anyone who wants to
        understand how snowbird auto transport works before they book. We wrote it
        in plain English, with no sales pitch. If you have never shipped a car
        before, or you have shipped once and want a clearer picture this time, this
        guide will walk you through every step. It also helps if you are helping a
        parent or an older friend plan their winter trip.
      </p>
      <p>
        Snowbird car shipping is a seasonal auto transport service. It has clear
        peaks and clear slow weeks. If you know how pricing, timing, and the
        carrier process work, you can book with more confidence and save money.
        This guide covers what the service is, why people use it, what it costs,
        the open vs enclosed choice, how to prep your car, and what to expect at
        pickup, during transit, and at delivery.
      </p>

      <h2>What is snowbird car shipping?</h2>
      <p>
        Snowbird car shipping is a seasonal auto transport service. It moves a
        vehicle between a snowbird's main home and their winter home. A licensed
        motor carrier picks the car up at your address and drives it on a truck
        to your delivery address.
      </p>
      <p>
        The word "snowbird" means a person who leaves a cold state in the fall and
        heads to a warm state for the winter. Most snowbirds spend 3 to 6 months
        down south. Many are retired or semi-retired. Some are younger people who
        can work from anywhere.
      </p>
      <p>
        Snowbird car shipping is not a special kind of truck. It is the same open
        or enclosed auto transport that moves any car from state to state. What
        makes it "snowbird" shipping is the <em>timing</em> and the <em>pattern</em>:
      </p>
      <ul>
        <li><strong>Timing.</strong> Most trips happen October through December (south) and April through May (north).</li>
        <li><strong>Pattern.</strong> Many snowbirds book both legs — down in the fall, back in the spring.</li>
        <li><strong>Routes.</strong> The main lanes run from the Northeast, Midwest, and Mountain West into Florida, Arizona, Texas, and California.</li>
      </ul>
      <p>
        This <em>how snowbird car shipping works</em> walkthrough applies to all
        four leading U.S. snowbird destinations. If you want destination-specific
        details, see our <Link href="/destinations/florida">Florida</Link>,{' '}
        <Link href="/destinations/arizona">Arizona</Link>,{' '}
        <Link href="/destinations/texas">Texas</Link>, or{' '}
        <Link href="/destinations/california">California</Link> guides.
      </p>

      <h2>Why snowbirds ship their car instead of driving</h2>
      <p>
        There are five main reasons snowbirds pick shipping over driving:
      </p>
      <ol>
        <li>
          <strong>You save time.</strong> A one-way drive from the Northeast to
          Florida takes 2 to 3 days. From the Midwest to Arizona is 3 to 4 days.
          Shipping and flying can save a full week of driving each year.
        </li>
        <li>
          <strong>You save miles on your car.</strong> Snowbirds who drive add
          2,000 to 4,000 miles to their vehicle each year on the trip alone.
          Shipping keeps those miles off the odometer and protects resale value.
        </li>
        <li>
          <strong>You skip winter weather.</strong> The fall trip south often cuts
          through storm season in the Northeast and Midwest. The spring trip home
          can hit late-season ice. Shipping lets you fly over the weather.
        </li>
        <li>
          <strong>You can move more than one car.</strong> Many snowbird couples
          own two vehicles. You can ship one and drive the other, or ship both
          and fly together.
        </li>
        <li>
          <strong>You arrive ready.</strong> Your car is waiting at your winter
          home. No long drive. No motel stops. No stress on your partner or your
          pets. You land, pick up your car, and start the winter.
        </li>
      </ol>
      <p>
        Some snowbirds still prefer to drive. They want the road trip, want to
        make stops, or feel safer at the wheel. There is no wrong answer.
        Shipping is one good option — one that fits many lifestyles.
      </p>

      <h2>How snowbird car shipping pricing works</h2>
      <p>
        Auto transport is a market-priced service. That means the price for your
        route changes based on supply (trucks on that lane) and demand (people
        wanting to ship on it). Here are the six factors that set your price:
      </p>
      <ul>
        <li>
          <strong>Distance.</strong> Longer trips cost more. A run from New York
          to Florida (about 1,200 miles) costs less than one from Boston to
          Phoenix (about 2,500 miles).
        </li>
        <li>
          <strong>Season.</strong> Snowbird peak weeks cost more. In October and
          November, prices on southbound lanes rise $150 to $300 above off-peak
          rates. The spring peak (April to May) sees the same bump on northbound
          lanes.
        </li>
        <li>
          <strong>Transport type.</strong> Open transport is the default. Enclosed
          transport costs about 30 to 50 percent more.
        </li>
        <li>
          <strong>Vehicle size and condition.</strong> SUVs, trucks, and vans cost
          $100 to $200 more than sedans. A non-running car costs more because the
          carrier needs winches and extra time.
        </li>
        <li>
          <strong>Pickup window.</strong> A wider window (2 to 3 days) brings more
          carrier offers and often a lower price. A single-day pickup limits your
          options.
        </li>
        <li>
          <strong>Fuel and market.</strong> When diesel prices rise, carrier
          rates follow. When trucks are scarce on your lane, prices rise.
        </li>
      </ul>
      <p>
        Most snowbird car shipping costs between <strong>$800 and $1,500</strong>{' '}
        one way. Here are rough ranges by lane:
      </p>
      <ul>
        <li>Northeast → Florida: $900 to $1,300 open · $1,200 to $1,800 enclosed</li>
        <li>Midwest → Florida: $800 to $1,200 open · $1,100 to $1,600 enclosed</li>
        <li>Northeast → Arizona: $1,100 to $1,500 open · $1,500 to $2,100 enclosed</li>
        <li>Pacific Northwest → California: $700 to $1,100 open · $1,000 to $1,500 enclosed</li>
      </ul>
      <p>
        For a planning number tailored to your route, use our{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>.
        For a deeper breakdown of pricing, see our{' '}
        <Link href="/resources/snowbird-car-shipping-cost">snowbird car shipping cost guide</Link>.
      </p>
      <p>
        Most snowbird shipments are arranged through a broker. The broker matches
        your route with a licensed carrier, handles the quote and dispatch, and
        stays in touch during the trip. The carrier handles the actual pickup,
        drive, and delivery. You pay the carrier at delivery — not the broker
        upfront.
      </p>

      <h2>Open vs enclosed snowbird transport</h2>
      <p>
        You have two main transport types to pick from.
      </p>
      <p>
        <strong>Open transport</strong> uses a two-level open-air carrier. These
        are the same trucks that deliver new cars from factories to dealerships.
        Your car rides with 7 to 10 others. Open transport is cheaper, more
        common, and widely available on every snowbird lane.
      </p>
      <p>
        <strong>Enclosed transport</strong> uses a fully covered trailer. It
        protects the car from weather, road debris, and road dust. Fewer carriers
        offer it, so prices run 30 to 50 percent higher than open on the same
        route.
      </p>
      <h3>Pick open transport if:</h3>
      <ul>
        <li>You drive a standard sedan, SUV, truck, or minivan</li>
        <li>The car is a daily driver (not a show car)</li>
        <li>You want the lowest price</li>
        <li>Your pickup is not during a major storm</li>
      </ul>
      <h3>Pick enclosed transport if:</h3>
      <ul>
        <li>The car is a luxury, exotic, or classic vehicle</li>
        <li>The paint is custom or hand-done</li>
        <li>Ground clearance is very low (sports cars)</li>
        <li>The car has high resale value you want to protect</li>
      </ul>
      <p>
        For most snowbirds, open transport is the right call. For a classic
        Corvette, a new Porsche, or a vintage pickup, enclosed makes sense. If
        you are not sure, ask for both quotes side by side and pick after you see
        the price difference.
      </p>

      <h2>How to prepare your vehicle for shipping</h2>
      <p>
        A clean, well-documented car makes pickup faster and gives you proof of
        condition if anything happens in transit. Here is a short prep checklist:
      </p>
      <ul>
        <li>
          <strong>Wash the car.</strong> A clean car lets the driver spot and record
          every mark before pickup. Dirt can hide small scratches on the paint.
        </li>
        <li>
          <strong>Take photos.</strong> Walk around the car with your phone. Shoot
          every panel, the roof, the wheels, and the interior. Timestamp them.
        </li>
        <li>
          <strong>Check fluids and tire pressure.</strong> Check oil, coolant, brake
          fluid, and tire pressure before pickup. The carrier only loads and
          unloads — they do not service the car.
        </li>
        <li>
          <strong>Fuel level.</strong> Leave about a quarter tank. Full tanks add
          weight; empty tanks make the car hard to roll at pickup.
        </li>
        <li>
          <strong>Pull toll tags and valet keys.</strong> Toll tags will ring up
          charges along the route. Valet keys often get lost.
        </li>
        <li>
          <strong>Remove loose items.</strong> Take out loose cables, phone mounts,
          dash cams, radar detectors, and anything on the seats or dash.
        </li>
        <li>
          <strong>Personal items policy.</strong> Most carriers allow a small amount
          of personal items — up to about 100 pounds. Keep items low (below the
          window line) and out of sight. Never pack anything valuable, breakable,
          or important (passports, medicine, cash, firearms).
        </li>
        <li>
          <strong>Spare key.</strong> Hand the driver one working key with no key
          fob extras. Keep your main key.
        </li>
        <li>
          <strong>Alarm.</strong> Disable the alarm or share the shut-off code so
          it does not trip at pickup or during transit.
        </li>
      </ul>
      <p>
        For a longer, printable version of this list, see our{' '}
        <Link href="/resources/snowbird-vehicle-preparation-checklist">snowbird vehicle preparation checklist</Link>.
      </p>

      <h2>What happens on pickup day</h2>
      <p>
        Your pickup day runs on a window, not a clock time. The carrier calls 12
        to 24 hours ahead to confirm a 2 to 4 hour arrival window. On the day,
        the driver calls again as they get close.
      </p>
      <p>
        When the driver arrives, you walk around the car together. The driver
        fills out the <strong>bill of lading</strong> (BOL) — a form that lists any
        marks on the car. Both of you sign it. You keep a copy. This paper is
        your proof of condition at pickup.
      </p>
      <p>
        Hand the driver one working key. The driver loads the car onto the truck
        using a ramp or a hydraulic lift. Loading takes 15 to 30 minutes.
      </p>
      <p>
        If you cannot be there, an adult (18 or older) can stand in for you.
        They sign the BOL and hand over the key. Share your car's keys and any
        gate codes with them in advance.
      </p>
      <p>
        A common question: <em>can the truck park in my driveway?</em> Big
        carriers often cannot. In tight neighborhoods, 55+ communities, and gated
        resorts, the driver may ask to meet nearby — a church lot, a store
        parking lot, or a wide street. This is normal. If you expect this, ask
        your dispatcher about it when you book.
      </p>
      <p>
        Once the car is loaded, the driver gives you the carrier's name, truck
        number, and a phone number. You can call during the trip if you have
        questions.
      </p>

      <h2>What happens during transit and at delivery</h2>
      <p>
        Transit time depends on your route and the carrier's schedule. Here are
        rough windows (once your car is picked up):
      </p>
      <ul>
        <li>New York to Florida: 2 to 4 days</li>
        <li>Chicago to Florida: 3 to 5 days</li>
        <li>Boston to Arizona: 6 to 9 days</li>
        <li>Seattle to Southern California: 2 to 4 days</li>
        <li>Minneapolis to South Texas: 4 to 6 days</li>
      </ul>
      <p>
        These are <em>in-transit</em> times, not calendar days from the day you
        book. Carriers follow hours-of-service rules (max driving time per day),
        route stops, and weather. A one or two day shift is normal.
      </p>
      <p>
        Carriers do not usually give live GPS tracking. Instead, they share
        updates by phone. You can call the driver or your dispatch team any time
        for a check-in.
      </p>
      <p>
        The driver calls 24 hours before delivery to set a window. At delivery,
        you (or your stand-in) do the same walk-around you did at pickup.
        Compare the car to the BOL. If anything looks new — a scratch, a dent,
        chipped paint, a cracked light — note it on the BOL <em>before</em> you
        sign the final form.
      </p>
      <p>
        Payment is due at delivery. Carriers usually accept cash, cashier's check,
        or Zelle. Credit cards may or may not work; check with your dispatcher
        before pickup. The amount matches your quote — no surprise fees.
      </p>
      <p>
        Once the BOL is signed and payment is made, the car is yours. You can
        drive it home or straight to your winter place.
      </p>

      <h2>Next steps for your snowbird car shipment</h2>
      <p>
        Now you have the full picture of snowbird auto transport. If you are
        ready to plan your trip, here are your next steps:
      </p>
      <ul>
        <li>Pick your pickup and delivery ZIPs.</li>
        <li>Choose a target pickup week (2 to 3 weeks ahead is best).</li>
        <li>Decide between open and enclosed transport.</li>
        <li>
          Run a planning number with the{' '}
          <Link href="/snowbird-car-shipping-cost-calculator">snowbird shipping cost calculator</Link>
          .
        </li>
      </ul>
      <p>
        To compare the four leading snowbird states side by side, see our{' '}
        <Link href="/resources/snowbird-destination-comparison">destination comparison</Link>.
        To time your trip, read our{' '}
        <Link href="/resources/when-to-ship-your-car-south-for-winter">when to ship south guide</Link>.
      </p>
      <p>
        When you are ready to book, you can{' '}
        <Link href="/#quote">get a snowbird car shipping quote</Link>
        . A snowbird specialist will follow up with pricing and carrier options
        for your exact route.
      </p>
    </ArticleShell>
  );
}
