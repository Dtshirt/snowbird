import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import AnswerSummary from '@/components/AnswerSummary';
import { getResourceBySlug } from '@/data/resources';

const slug = 'snowbird-car-shipping-cost';

// Keep in sync with the cost FAQ on each route page.
const floridaLanes = [
  { origin: 'Virginia', href: '/routes/virginia-to-florida', open: '$650–$1,375', enclosed: '$1,100–$1,675' },
  { origin: 'Maryland', href: '/routes/maryland-to-florida', open: '$800–$1,400', enclosed: '$1,250–$1,700' },
  { origin: 'Ohio', href: '/routes/ohio-to-florida', open: '$825–$1,575', enclosed: '$1,325–$1,850' },
  { origin: 'Pennsylvania', href: '/routes/pennsylvania-to-florida', open: '$850–$1,450', enclosed: '$1,300–$1,900' },
  { origin: 'New Jersey', href: '/routes/new-jersey-to-florida', open: '$900–$1,500', enclosed: '$1,350–$1,900' },
  { origin: 'New York', href: '/routes/new-york-to-florida', open: '$950–$1,600', enclosed: '$1,400–$1,900' },
  { origin: 'Connecticut', href: '/routes/connecticut-to-florida', open: '$1,000–$1,600', enclosed: '$1,450–$1,900' },
  { origin: 'Michigan', open: '$1,000–$1,650' },
  { origin: 'Massachusetts', href: '/routes/massachusetts-to-florida', open: '$1,050–$1,700', enclosed: '$1,500–$2,000' }
];

export function generateMetadata() {
  const r = getResourceBySlug(slug);
  return { title: r.title, description: r.description, alternates: { canonical: `/resources/${slug}` } };
}

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <AnswerSummary reviewed={r.updated}>
        Shipping a standard sedan or SUV to Florida for the winter typically costs $650 to $1,700 on an open carrier
        and $1,100 to $2,000 in an enclosed carrier. Virginia is the least expensive starting state and Massachusetts
        the most expensive, because the price rises with distance. Booking three to four weeks ahead and keeping your
        dates flexible keeps you toward the low end of the range.
      </AnswerSummary>

      <p>
        Snowbird auto transport pricing depends on route distance, vehicle size, transport type, and season. Rates are market-driven, so the same lane can price differently week to week depending on carrier availability. Below are typical prices on the main snowbird lanes to Florida.
      </p>

      <h2>How much does it cost to ship a car to Florida from each state?</h2>
      <ul>
        {floridaLanes.map((l) => (
          <li key={l.origin}>
            <strong>
              {l.href ? <Link href={l.href}>{l.origin} to Florida</Link> : `${l.origin} to Florida`}:
            </strong>{' '}
            {l.open} open{l.enclosed ? `, ${l.enclosed} enclosed` : ''}
          </li>
        ))}
        <li><strong>Illinois to Arizona:</strong> $1,050–$1,750 open</li>
      </ul>
      <p>
        Ranges are for a standard sedan or SUV during snowbird season. They are typical ranges, not quotes: your price depends on your exact pickup and delivery addresses, your vehicle, open or enclosed transport, and how close to your pickup date you book.
      </p>

      <h2>What makes snowbird car shipping cost more?</h2>
      <ul>
        <li>Enclosed transport, especially for luxury or collector vehicles</li>
        <li>Larger vehicles (SUVs, pickups, oversized sedans)</li>
        <li>Non-running vehicles that require specialized loading</li>
        <li>Rural or remote pickup/delivery addresses</li>
        <li>Peak-season timing with short lead times</li>
      </ul>

      <h2>How can you lower the price?</h2>
      <ul>
        <li>Booking 3–4 weeks ahead of your requested pickup date</li>
        <li>Flexible pickup and delivery windows</li>
        <li>Metro-to-metro shipments with dense carrier availability</li>
        <li>Standard open transport for a running vehicle</li>
      </ul>

      <h2>How do deposits and payment work?</h2>
      <p>
        With us, a deposit of 10% of the total shipping cost reserves your carrier, the deposit is 100% refundable, and you pay the balance at delivery. Payment terms differ between companies, so ask any provider you consider how much is due at booking, whether the deposit is refundable, and how the balance is paid.
      </p>

      <h2>How do you get an accurate quote?</h2>
      <p>
        Online calculators can produce misleading numbers because they can&apos;t reflect real-time carrier supply. A quote reviewed by a specialist for your specific lane and dates is more accurate. Request a free quote and a snowbird specialist will follow up with pricing options for your route.
      </p>
    </ArticleShell>
  );
}
