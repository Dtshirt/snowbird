import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'ship-vs-drive-snowbird';

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
    q: 'Does my auto insurance cover the drive if I decide to drive south myself?',
    a: 'Most personal auto policies cover you in all 50 states, but limits can differ by state line. If you garage the car in Florida or Arizona for the winter, call your insurer before you leave. Some policies need a usage update if the car sits in a second state for more than 30 days, or coverage can thin out on a claim.'
  },
  {
    q: 'If I ship and the car is damaged in transit, who pays?',
    a: 'The motor carrier\'s cargo insurance pays for in-transit damage, not your personal auto policy. You must note the damage on the bill of lading at delivery — if you sign off clean and spot it later, most claims are denied. Keep a copy of the signed BOL and photos as proof.'
  },
  {
    q: 'Can I split the trip — drive half, ship the other half?',
    a: 'Yes, and some snowbirds do this to visit family on the way. You pay a short-haul rate from the handoff city to the final destination, which usually costs more per mile than a long-haul booking. Confirm the handoff address can take a full-size carrier before you commit.'
  },
  {
    q: 'What if I need to tow a trailer or boat behind the car?',
    a: 'Shipping a car with a trailer is a separate booking — carriers do not move trailers on an auto hauler. If you drive, your towing cuts your gas mileage by 20 to 30 percent and adds hotel-booking limits (not every room has trailer parking). Price out both legs before you decide.'
  },
  {
    q: 'My spouse and I both want to arrive on the same day. Which option fits that best?',
    a: 'Shipping fits a same-day arrival better. You both fly down, land together, and pick up the car once it arrives. Driving a long trip usually means stops, a long day behind the wheel, or splitting into two cars with two drivers.'
  },
  {
    q: 'What hidden costs does driving a long trip add that people forget?',
    a: 'The usual missed items are tolls, extra fuel at highway stops, hotel pet fees, parking at the winter home, oil changes triggered by the extra miles, and tire wear on long highway stretches. These can add $200 to $500 round trip that does not show up in a basic "gas vs ship" math.'
  },
  {
    q: 'If I drive, does the car need any special prep for a long trip?',
    a: 'Yes. Have your mechanic check tires, brakes, battery, and fluids 2 weeks before you leave. Pack an emergency kit (jumper cables, flares, water, blanket). Your winter home state may have different roadside rules — Florida and Arizona require working headlights at reduced visibility, and tolls on I-95 and I-10 use cashless lanes you may need a transponder for.'
  },
  {
    q: 'Can I ship the car one way and drive it back in the spring?',
    a: 'Yes — this is a common split. Ship south in the fall to beat storm season, then drive back in the spring when weather is kinder and you can take a scenic route home. You still pay one-way shipping rates, so compare that to the round-trip shipping discount before you decide.'
  },
  {
    q: 'What happens if a storm blocks the route while my car is in transit?',
    a: 'Carriers reroute or hold the truck off the road during severe weather. Your delivery window shifts a day or two. Most contracts list weather as a non-penalty delay, so there is no refund — but there is also no risk of your car driving into the storm. If you were driving yourself, you would make that choice in real time.'
  },
  {
    q: 'How do I handle my mail, prescriptions, and bills if I drive vs ship?',
    a: 'Either way you need a mail-forwarding plan with USPS and a prescription-transfer plan with your pharmacy. Driving does not help with these — you still need the same setup. Shipping just means you plan them around a known arrival date instead of your own driving timeline. '
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        For most snowbirds, shipping your car south is faster, easier, and often cheaper than driving once you count time, fuel, hotels, and vehicle wear. Driving a long trip twice a year burns 4 to 6 days you could spend at your winter home. It also adds 2,000 to 4,000 miles to your car. This page compares <strong>shipping your car south vs driving</strong> on the five things that matter: cost, time, safety, wear, and stress — so you can pick the option that fits your trip.
      </p>

      <h2>Is it cheaper to ship a car or drive it?</h2>
      <p>
        For most snowbird routes over 1,000 miles, shipping and flying costs about the same as driving — once you add every real cost of the drive. Short routes under 800 miles usually favor driving on price alone.
      </p>
      <p>
        Here is a plain cost compare for a typical Northeast-to-Florida trip, one way:
      </p>
      <ul>
        <li><strong>Shipping (open transport):</strong> $900 to $1,300. One-way plane ticket: $150 to $300.</li>
        <li><strong>Driving:</strong> $400 to $600 fuel. 2 nights hotel at $120 to $180 each. $40 to $80 tolls. $60 to $100 meals. Total: $720 to $1,220, before vehicle wear.</li>
      </ul>
      <p>
        The gap narrows fast once you add the odometer cost. For a car worth $25,000, every 1,000 miles adds about $75 to $125 in depreciation. Over a 1,200-mile trip each way (2,400 miles round trip), that is $180 to $300 you lose on resale value.
      </p>
      <p>
        <em>Caveat:</em> if you are driving with two or more people and splitting a hotel room, driving usually wins on raw cash out of pocket. Shipping still wins on time.
      </p>

      <h2>How much time do you save by shipping instead of driving?</h2>
      <p>
        Shipping saves 4 to 6 days per round trip. A snowbird couple who drives the Northeast–Florida run both ways loses more than a week of winter.
      </p>
      <p>
        A typical breakdown:
      </p>
      <ul>
        <li>Northeast → Florida drive: 2 to 3 days each way (4 to 6 days round trip)</li>
        <li>Midwest → Arizona drive: 3 to 4 days each way (6 to 8 days round trip)</li>
        <li>Pacific Northwest → Palm Springs drive: 2 to 3 days each way</li>
      </ul>
      <p>
        Flying one way adds 4 to 8 hours door to door. You arrive the same day you leave. Your car arrives 3 to 8 days later, depending on the lane.
      </p>

      <h2>Is shipping a car safer than driving a long trip?</h2>
      <p>
        For most snowbirds, yes. Long highway trips carry a real crash and fatigue risk that shipping sidesteps. Older drivers in particular face higher risk on long solo drives.
      </p>
      <p>
        Shipping also removes the weather exposure. Fall southbound trips pass through the Northeast and Midwest in storm season. Spring return trips can hit late-season ice. Shipping lets you fly over the weather.
      </p>
      <p>
        <em>Honest downside:</em> shipping does not remove every risk. Your car rides on an open or enclosed truck and can pick up small dings or weather marks in transit. The carrier's cargo insurance covers damage you note on the bill of lading at delivery. Driving yourself keeps the car in your control the whole way.
      </p>

      <h2>What about wear on your car?</h2>
      <p>
        Driving a long snowbird trip twice a year adds 2,000 to 4,000 miles to your car. That is the equivalent of 3 to 6 months of normal use. Over a 10-year ownership, that is 20,000 to 40,000 extra miles.
      </p>
      <p>
        Shipping keeps the odometer low. For a leased car with a mileage cap, that matters a lot. For a car you plan to sell or trade in, lower miles mean a higher resale number — often $500 to $1,500 more at the sale.
      </p>

      <h2>When driving still makes more sense</h2>
      <p>
        Shipping is not always the right choice. Driving is usually better when:
      </p>
      <ul>
        <li>Your route is under 800 miles one way (think Virginia to Florida)</li>
        <li>You enjoy the road trip and plan sightseeing stops</li>
        <li>You have two or more people splitting hotel and food costs</li>
        <li>You tow a trailer or boat you cannot ship on an auto hauler</li>
        <li>Your pet does not fly well and you do not want to leave them</li>
        <li>You own a basic older car where resale value is already low</li>
      </ul>
      <p>
        If three or more of these apply to you, drive. If none do, ship.
      </p>

      <h2>When shipping is the better choice for snowbirds</h2>
      <p>
        Shipping wins for most long-distance snowbird trips. It is the stronger pick when:
      </p>
      <ul>
        <li>Your route is over 1,000 miles one way</li>
        <li>You travel solo or with one other adult (no cost-splitting on gas/hotels)</li>
        <li>The car is newer, leased, or has resale value you want to protect</li>
        <li>You or your partner should not do long drives for health reasons</li>
        <li>You want to fly down and have the car waiting</li>
        <li>You are shipping a second car (one spouse drives, the other flies)</li>
      </ul>
      <p>
        You can get a planning number for your route with our{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        .
      </p>

      <h2>How to decide for your snowbird trip</h2>
      <p>
        Use this quick framework:
      </p>
      <ol>
        <li>
          <strong>Add up the real driving cost.</strong> Fuel at today's pump price, hotels, meals, tolls, pet fees, parking, wear. Not just gas.
        </li>
        <li>
          <strong>Count the days you lose.</strong> Multiply by what a day of your winter is worth to you.
        </li>
        <li>
          <strong>Price the shipping side.</strong> Get an open-transport quote and a plane ticket price for the one-way flight.
        </li>
        <li>
          <strong>Add the resale hit from miles.</strong> Rough number: $75 to $125 per 1,000 miles for a mid-value car.
        </li>
        <li>
          <strong>Pick the option that fits your trip.</strong> If shipping is within 20 percent of driving on total cost, ship — you get the time back.
        </li>
      </ol>
      <p>
        For a destination-specific view, see our{' '}
        <Link href="/destinations/florida">Florida</Link>,{' '}
        <Link href="/destinations/arizona">Arizona</Link>,{' '}
        <Link href="/destinations/texas">Texas</Link>, and{' '}
        <Link href="/destinations/california">California</Link> guides. For a complete picture of how shipping works, read our{' '}
        <Link href="/resources/snowbird-car-shipping-guide">snowbird car shipping guide</Link>.
      </p>

      <ArticleFAQ items={faqs} />

      <h2>The bottom line on ship vs drive</h2>
      <p>
        For long snowbird routes, shipping your car south usually wins on time, safety, and total cost once you add every line item. Driving still fits short routes, big families splitting costs, or any snowbird who loves the road trip. Price both before you book. When you are ready, use our{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird shipping cost calculator</Link>
        {' '}for a planning number or request a free quote for your exact route.
      </p>
    </ArticleShell>
  );
}
