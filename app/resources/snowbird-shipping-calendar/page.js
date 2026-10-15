import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'snowbird-shipping-calendar';

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
    q: 'Why does the first week of November always cost more than late October on Florida lanes?',
    a: 'Post-Halloween week starts the "home for Thanksgiving" rush — a wave of snowbirds who want their car down south before the holiday. Carrier supply tightens, prices rise 10 to 15 percent. Shipping Oct 20 to Oct 31 beats this spike.'
  },
  {
    q: 'Is the week between Christmas and New Year a bad time to ship?',
    a: 'Yes. Carriers run fewer trucks the last two weeks of December because drivers take holiday hours of service breaks. Dispatch slows, delivery windows widen. If you must ship then, book 4+ weeks ahead and set a 5 to 7 day pickup window.'
  },
  {
    q: 'Does Super Bowl weekend affect snowbird car shipping to Florida?',
    a: 'If the Super Bowl is in Florida (or a Southeast city), yes — hotels and highways around the host city tighten for a week. Delivery to the host metro may delay by 1 to 2 days. Non-Florida Super Bowls do not affect snowbird lanes.'
  },
  {
    q: 'Why do carriers often pause the week of July 4?',
    a: 'Independence Day drops shipping volume for 7 to 10 days as carriers take their own holiday break and highway traffic peaks. Snowbird volume is low in July anyway, so this does not affect most seasonal clients. Early July is actually a cheap-pricing window for off-season movers.'
  },
  {
    q: 'What is the "fuel surcharge window" and when does it hit?',
    a: 'Fuel surcharges adjust monthly based on national diesel averages. Rate changes publish on the first business day of each month. If you lock a quote on the last day of a month and diesel rises, you keep the lower rate. Timing a booking around a fuel reset can save 3 to 5 percent in volatile months.'
  },
  {
    q: 'Do rate card changes happen mid-season on snowbird lanes?',
    a: 'Yes. Broker rate cards usually refresh twice during peak season — early October (southbound ramp) and early April (northbound ramp). A quote locked before the refresh keeps that lower rate. Book 2 to 3 days before an expected rate card change if you can see one coming.'
  },
  {
    q: 'How do college football weekends affect Midwest-to-South routes?',
    a: 'Big-game weekends tighten lodging and highway capacity on college-town routes (SEC, Big Ten corridors). Carriers plan around them. Dispatch may push your pickup window by a day during a home-game weekend in a college-heavy city on your route. [INSERT EXPERIENCE]'
  },
  {
    q: 'If I book in August for a late-October southbound shipment, is the price final?',
    a: 'The quote is locked for a reasonable window (usually 60 to 90 days). After that, brokers can adjust if market rates have swung more than 10 percent. For a shipment 2+ months out, confirm the rate-lock terms in writing.'
  },
  {
    q: 'What is the single worst week to ship south each year?',
    a: 'The week before Thanksgiving. Snowbird peak and holiday travel collide. Carrier supply is thinnest, prices are highest, delivery windows are widest. Book the week before (Nov 10 to Nov 15) or wait until early December if you can.'
  },
  {
    q: 'When does the spring northbound booking rush start getting intense?',
    a: 'Mid-March. Snowbirds who booked spring last fall start calling to confirm. New clients start booking for April pickup. Rates firm up for the next 6 weeks. If you can get your spring booking locked by early March, you avoid the mid-March price firming.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        The <strong>snowbird car shipping calendar</strong> has two clear peaks — fall southbound (October to December) and spring northbound (late March to mid-May) — plus a few hidden pricing windows most snowbirds miss. If you understand the month-by-month shape of the season, you can book cheaper, pick better pickup dates, and avoid the three or four weeks every year that cost 20 percent more. This page walks through every month of the snowbird shipping year with the price trend, carrier supply, and best booking strategy for each.
      </p>

      <h2>How the snowbird car shipping calendar works</h2>
      <p>
        Snowbird car shipping follows a predictable annual cycle. Fall southbound (south-moving) traffic peaks October through December. Spring northbound (north-moving) traffic peaks April and early May. Summer and mid-winter are off-peak with the lowest prices.
      </p>
      <p>
        Within each peak, there are 2 to 3 weeks that cost 15 to 25 percent more than the shoulder weeks around them. Timing your booking around those spikes is where the real savings live.
      </p>

      <h2>Month-by-month snowbird car shipping calendar</h2>
      <p>
        Here is how each month plays out for snowbird auto transport:
      </p>

      <h3>January — off-peak and cheap</h3>
      <p>
        Lowest shipping prices of the year. Carriers are hungry for loads. Good for mid-season snowbirds returning early or shipping a second car down. The one trap: the first week of January can be slow for carrier dispatch while drivers finish holiday breaks.
      </p>

      <h3>February — still off-peak</h3>
      <p>
        Rates stay low. Shipping volume is light. Pickup windows are the widest and most flexible of the year. If you want a specific pickup date, this is the month you will actually get it.
      </p>

      <h3>March — spring booking opens</h3>
      <p>
        Early March rates are still off-peak. By mid-March, prices firm up as snowbirds book spring northbound trips. Last chance for off-peak pricing on April pickups. Our strong-recommend window for most spring bookings.
      </p>

      <h3>April — spring northbound peak</h3>
      <p>
        Prices rise $150 to $250 on northbound lanes. The week before Easter and the week after Tax Day are the two busiest weeks. Carrier supply tightens. Book 3 to 4 weeks ahead.
      </p>

      <h3>May — spring peak winds down</h3>
      <p>
        First half of May stays peak. By mid-May, prices soften. Late-return snowbirds and flexible travelers find reasonable rates again. Good month for round-trip spring legs that were booked flexible.
      </p>

      <h3>June — summer off-peak begins</h3>
      <p>
        Snowbird volume drops to near-zero. Prices fall to year-low levels. Atlantic hurricane season starts June 1 but major storms are rare in June. Good month for pre-season moves.
      </p>

      <h3>July — mid-summer low</h3>
      <p>
        The Independence Day week pauses many carriers. Volume is light. Late July is a sweet spot for anyone shipping ahead of the fall rush.
      </p>

      <h3>August — fall booking opens</h3>
      <p>
        Early August is still off-peak. By mid-August, hurricane activity peaks and smart snowbirds start quoting for September or October pickup. Book now to beat the fall price firming.
      </p>

      <h3>September — fall southbound begins</h3>
      <p>
        Early September rates stay reasonable. Late September pricing starts firming as snowbird volume ramps. Peak hurricane week (Sep 10 to Oct 10) adds weather uncertainty — see our{' '}
        <Link href="/resources/hurricane-season-florida-shipping">hurricane season Florida shipping notes</Link>
        . Best booking window for pre-peak southbound.
      </p>

      <h3>October — fall southbound peak starts</h3>
      <p>
        Prices rise $150 to $300 starting mid-October. The last two weeks of October are the first wave of peak. Still some carrier flexibility if you book 2 to 3 weeks ahead.
      </p>

      <h3>November — the busiest month</h3>
      <p>
        The single highest-volume month of the snowbird year. The week before Thanksgiving is the worst week to ship — holiday rush meets snowbird peak. Book Nov 1 to Nov 15 if you must ship in November; wait until Dec 1 if you can.
      </p>

      <h3>December — late peak and holiday slow-down</h3>
      <p>
        Early December is still peak. Mid-December softens. The last two weeks of December are a dispatch slow-zone (carriers take holiday breaks). Shipping between Christmas and New Year is possible but delivery windows widen.
      </p>

      <h2>The best weeks to book snowbird car shipping each year</h2>
      <p>
        Our pick of best-value shipping weeks:
      </p>
      <ul>
        <li><strong>Late September:</strong> Pre-peak southbound; carrier supply is strong</li>
        <li><strong>Oct 20 to Oct 31:</strong> Last week before Nov Thanksgiving rush</li>
        <li><strong>First two weeks of December:</strong> Post-Thanksgiving dip before holiday close</li>
        <li><strong>Early March:</strong> Pre-peak northbound</li>
        <li><strong>Mid-May:</strong> Post-peak spring softening</li>
      </ul>

      <h2>The worst weeks to book snowbird car shipping each year</h2>
      <p>
        Weeks to avoid when you can:
      </p>
      <ul>
        <li><strong>Week before Thanksgiving:</strong> Peak + holiday collision</li>
        <li><strong>Week before Easter:</strong> Spring peak + spring break overlap</li>
        <li><strong>Dec 20 to Jan 3:</strong> Carrier holiday slow-down</li>
        <li><strong>Mid-April (tax week):</strong> Spring peak intensifies</li>
        <li><strong>Mid-August to Sep 10:</strong> Peak hurricane formation window</li>
      </ul>

      <h2>How to use the calendar to plan your bookings</h2>
      <p>
        Three strategies that work for most snowbirds:
      </p>
      <ol>
        <li><strong>Book 60 to 90 days before pickup.</strong> Locks a reasonable rate and gives you first pick of windows.</li>
        <li><strong>Build a 3-day pickup window.</strong> Carriers can swap days inside a window without rebooking.</li>
        <li><strong>Avoid holiday adjacency.</strong> Any week touching a major US holiday adds cost and uncertainty.</li>
      </ol>
      <p>
        For a general timing framework, see our{' '}
        <Link href="/resources/when-to-ship-your-car-south-for-winter">when to ship south guide</Link>
        . For spring timing, see the{' '}
        <Link href="/resources/when-to-ship-car-back-north">when to ship back north guide</Link>
        .
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to pick your snowbird shipping date?</h2>
      <p>
        A well-timed snowbird car shipping booking saves $100 to $400 per leg and sidesteps the four or five weeks each year when carriers are overwhelmed. Our calendar runs the same way every year — once you learn the shape, picking a smart week is quick. Request a free quote and a snowbird specialist will walk you through the best weeks for your route.
      </p>
    </ArticleShell>
  );
}
