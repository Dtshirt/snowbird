import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import QuoteCTA from '@/components/QuoteCTA';
import { site } from '@/data/site';

export const metadata = {
  title: 'About Us & How Our Broker Service Works',
  description:
    'Who arranges your snowbird car shipment, who physically moves it, and what you can verify before pickup. Snowbird Car Shipping is a CarShippingHub service.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <>
      <InfoPage
        title="About Snowbird Car Shipping"
        description="We help snowbirds get their cars to their winter home in the fall and back north in the spring, without the long drive."
      >
        <h2>Who we are</h2>
        <p>
          Snowbird Car Shipping is a service of {site.parent}. We focus on one kind of customer: people who
          split the year between a northern home and a winter home in Florida, Arizona, Texas or California.
          Most of our customers ship south between October and December and back north between March and June.
        </p>
        <p>
          Our job is to make that trip simple. We quote your route, match your shipment with a carrier, help you
          prepare, and stay your point of contact until the car is delivered.
        </p>

        <h2 id="how-we-work">How our service works: broker vs. carrier</h2>
        <p>
          There are two kinds of companies in auto transport, and you should know which one you are dealing with.
        </p>
        <ul>
          <li>
            <strong>A broker</strong> arranges the shipment. It quotes the price, finds a carrier with space on your
            route, books the pickup, and handles questions along the way.
          </li>
          <li>
            <strong>A motor carrier</strong> physically moves the car. It owns or operates the truck, employs the
            driver, and carries the insurance that covers your car in transit.
          </li>
        </ul>
        <p>
          We are not a motor carrier, and we do not own trucks. Your shipment is arranged through our partner, a
          licensed auto transport broker registered with the Federal Motor Carrier Safety Administration (FMCSA).
          The car is moved by an independent motor carrier that holds its own federal operating authority and
          insurance.
        </p>

        <h2>What we do for you</h2>
        <ul>
          <li>Quote your route, vehicle and dates, with open and enclosed options</li>
          <li>Offer your shipment to carriers that serve your lane and confirm one for your dates</li>
          <li>Share the carrier&rsquo;s details once your shipment is dispatched</li>
          <li>Help you prepare the car and plan around the pickup window</li>
          <li>Stay your contact from booking through delivery</li>
        </ul>

        <h2>What the carrier does</h2>
        <ul>
          <li>Inspects the car with you at pickup and records its condition on the bill of lading</li>
          <li>Transports the car and keeps you or us updated on timing</li>
          <li>Inspects the car with you again at delivery before you sign</li>
        </ul>

        <h2>What you can verify before pickup</h2>
        <p>
          Once your shipment is assigned, ask for the carrier&rsquo;s company name, its USDOT or MC number and its
          certificate of insurance. You can look up any carrier&rsquo;s operating status and safety record on the
          FMCSA&rsquo;s public SAFER website. We encourage every customer to do this.
        </p>

        <h2>Payment</h2>
        <p>
          A deposit of 10% of the total shipping cost reserves your carrier, and the deposit is 100% refundable. You
          pay the balance at delivery. Your quote spells out the total, the deposit and how the balance is paid before you agree to book.
        </p>

        <h2>Where we ship</h2>
        <p>
          Our main destinations are <Link href="/destinations/florida">Florida</Link>,{' '}
          <Link href="/destinations/arizona">Arizona</Link>, <Link href="/destinations/texas">Texas</Link> and{' '}
          <Link href="/destinations/california">California</Link>. Most of our customers start in the Northeast or
          the Midwest, such as <Link href="/routes/new-york-to-florida">New York to Florida</Link> or{' '}
          <Link href="/routes/ohio-to-florida">Ohio to Florida</Link>. We also arrange the spring trip home.
        </p>

        <h2>Contact us</h2>
        <p>
          Call <a href={site.phoneHref}>{site.phoneDisplay}</a> ({site.hours}) or email{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>. You can also <Link href="/contact">visit our contact
          page</Link> or request a free quote online.
        </p>
      </InfoPage>
      <QuoteCTA />
    </>
  );
}
