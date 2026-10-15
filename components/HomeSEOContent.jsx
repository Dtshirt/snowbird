import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { site } from '@/data/site';

// Humanized, 6th-grade reading-level content block for the homepage.
// Primary keyword: "snowbird car shipping"
// Secondary: "snowbird auto transport", "snowbird vehicle shipping service"
// Intent: commercial / transactional

export default function HomeSEOContent() {
  return (
    <section className="bg-white py-20">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Snowbird Car Shipping"
          title="Snowbird car shipping that feels easy"
          description="Shipping your car for the winter should be simple. That is what we do. We help snowbirds move their vehicles between home and their winter place."
        />

        <div className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div>
            <p>
              Snowbird car shipping is a service built for people who spend part
              of the year in a warm state. You skip the long drive. A licensed
              carrier picks your car up at home. Then they bring it to your winter
              address. In the spring, we do the trip the other way. You save
              miles, time, and stress — and your car is waiting for you when
              you land.
            </p>
            <p className="mt-4">
              We work the main snowbird lanes every day. Florida, Arizona, Texas,
              and California are our four home destinations. From the Northeast,
              the Midwest, the Mountain West, and Canada, we move cars south
              in the fall and north in the spring. Snowbird Car Shipping is
              a service of CarShippingHub, a licensed{' '}
              <span className="font-semibold">snowbird auto transport</span> broker.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              What is snowbird car shipping?
            </h3>
            <p className="mt-3">
              Snowbird car shipping is a seasonal auto transport service. It
              moves a vehicle between a snowbird's main home and their winter
              home. Most trips happen in the fall (southbound) and the spring
              (northbound). The service is open to anyone, but it is built
              around the snowbird season.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              Why snowbirds pick our auto transport team
            </h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              <Benefit title="Licensed broker">
                We are a licensed snowbird auto transport broker, not a random
                third party.
              </Benefit>
              <Benefit title="Snowbird lanes every day">
                We book Florida, Arizona, Texas, and California routes year
                round, with a strong peak-season team.
              </Benefit>
              <Benefit title="Simple Booking Payment">
                We collect 10% of total shipping cost as deposit to book a truck and rest 
                amount will be paid at the time of delivery.
              </Benefit>
              <Benefit title="Door-to-door service">
                The carrier gets as close to your door as the truck can safely
                reach — at both ends.
              </Benefit>
              <Benefit title="Real people on the phone">
                A snowbird specialist answers your call during our open hours.
                No long robot menus.
              </Benefit>
              <Benefit title="Open and enclosed options">
                Open transport for most cars. Enclosed for luxury, classic, or
                collector cars that need extra cover.
              </Benefit>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              How our snowbird vehicle shipping service works
            </h3>
            <ol className="mt-3 space-y-3">
              <Step n="1" title="Get a quote">
                Use the form at the top of this page or call us. It takes about
                two minutes.
              </Step>
              <Step n="2" title="Pick a pickup window">
                We lock in a pickup window that fits your plan. Most windows
                are one to three days wide.
              </Step>
              <Step n="3" title="Driver pickup">
                A licensed carrier arrives at your home, checks the car with you,
                and loads it on the truck.
              </Step>
              <Step n="4" title="Transit">
                Your car heads straight to your winter home. We give you a
                transit window when you book.
              </Step>
              <Step n="5" title="Delivery">
                You walk around the car with the driver at delivery. If
                everything looks right, you pay the carrier and drive away.
              </Step>
            </ol>
            <p className="mt-4">
              Most snowbird routes take 3 to 8 days once your car is picked up.
              Short East Coast runs can be as fast as 2 to 4 days. Long Northeast
              to Southwest routes can take 6 to 9 days. We share a transit range
              at booking so you can plan around it.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              The best time to book snowbird car shipping
            </h3>
            <p className="mt-3">
              Peak season runs <strong>October through December</strong> for
              southbound trips. The spring peak runs <strong>April through
              May</strong> for the trip home. These are the busiest weeks for
              carriers. Book 2 to 3 weeks before your pickup date for the best
              price and date choices. If you can be flexible on your pickup day,
              you often get a better rate.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              What snowbird car shipping costs
            </h3>
            <p className="mt-3">
              Most snowbird shipments cost between <strong>$800 and $1,500</strong> one
              way. Price depends on your route, your car type, your pickup date,
              and open vs enclosed transport. Enclosed costs about 30 to 50
              percent more. For a planning number, use our{' '}
              <Link href="/snowbird-car-shipping-cost-calculator" className="font-semibold text-brand-navy underline">
                snowbird car shipping cost calculator
              </Link>
              . For an exact number, ask us for a free quote.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              Snowbird destinations we ship to
            </h3>
            <p className="mt-3">
              Our four home destinations are the leading U.S. snowbird states:
            </p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <DestLink href="/destinations/florida" name="Florida" blurb="Miami, Naples, Tampa, Sarasota" />
              <DestLink href="/destinations/arizona" name="Arizona" blurb="Phoenix, Scottsdale, Tucson, Yuma" />
              <DestLink href="/destinations/texas" name="Texas" blurb="McAllen, Harlingen, Corpus Christi" />
              <DestLink href="/destinations/california" name="California" blurb="Palm Springs, Palm Desert, San Diego" />
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-navy/15 bg-brand-cream/60 p-6 sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Ready to Ship</div>
            <h3 className="mt-1 font-display text-2xl font-bold text-brand-navy">
              Get your free snowbird car shipping quote
            </h3>
            <p className="mt-3 text-slate-700">
              Snowbird car shipping is what we do best. Fill out a free quote
              or call{' '}
              <a href={site.phoneHref} className="font-semibold text-brand-navy underline">
                {site.phoneDisplay}
              </a>
              . A snowbird specialist will follow up with pricing and carrier
              options for your route.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/#quote" className="btn-primary">Get My Free Quote</Link>
              <a href={site.phoneHref} className="btn-secondary">Call {site.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ title, children }) {
  return (
    <li className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
      <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div>
        <div className="font-semibold text-brand-navy">{title}</div>
        <div className="text-sm text-slate-600 mt-1">{children}</div>
      </div>
    </li>
  );
}

function Step({ n, title, children }) {
  return (
    <li className="flex gap-4">
      <span aria-hidden="true" className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-white font-bold">
        {n}
      </span>
      <div>
        <div className="font-semibold text-brand-navy">{title}</div>
        <div className="text-sm text-slate-700 mt-0.5">{children}</div>
      </div>
    </li>
  );
}

function DestLink({ href, name, blurb }) {
  return (
    <li>
      <Link href={href} className="block rounded-lg border border-slate-200 bg-white p-4 transition hover:border-brand-navy">
        <div className="font-semibold text-brand-navy">{name}</div>
        <div className="text-xs text-slate-500 mt-1">{blurb}</div>
      </Link>
    </li>
  );
}
