import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'snowbird-car-shipping-insurance-claims';

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
    q: 'How much cargo insurance does a typical open carrier hold?',
    a: 'Most open auto carriers hold $100,000 to $250,000 per vehicle in cargo insurance. Enclosed carriers typically hold $250,000 to $1 million+. Always request the certificate of insurance (COI) and confirm the limit covers your car\'s value. Verify with FMCSA.'
  },
  {
    q: 'Does my personal auto insurance cover my car during transit?',
    a: 'Your comprehensive policy may provide secondary coverage if the carrier\'s cargo insurance is insufficient. Call your insurer before shipping to confirm. Some policies pause coverage once the car leaves your custody; others continue coverage through transit.'
  },
  {
    q: 'What does carrier cargo insurance actually cover?',
    a: 'Damage caused by the carrier during loading, transit, or unloading. Covers accidents, theft from the trailer, cargo securement failures, and (usually) weather damage mid-transit. Does not cover: pre-existing damage, items packed inside the car, or acts of God like earthquakes.'
  },
  {
    q: 'What is the first thing to do if I spot damage at delivery?',
    a: 'Note the damage on the bill of lading (BOL) before you sign it. Any damage not noted on the signed BOL becomes very hard to claim later. Photograph the damage from multiple angles with timestamps. Have the driver initial your notes on the BOL.'
  },
  {
    q: 'How long do I have to file a cargo insurance claim?',
    a: 'Typically 15 to 30 days from delivery date. File within 48 to 72 hours for best results. Hidden damage noticed later must be documented quickly with photos and your original pickup/delivery BOL. [INSERT STAT + SOURCE: carrier claim window]'
  },
  {
    q: 'Does the broker file the claim for me or do I file direct with the carrier?',
    a: 'Reputable brokers file on your behalf and advocate throughout the process. Direct carrier bookings require you to file directly. If you have a broker, call them first. If you booked direct, call the carrier\'s claims department.'
  },
  {
    q: 'What documentation do I need for a car shipping damage claim?',
    a: 'Original signed BOL from pickup, signed BOL from delivery with damage noted, time-stamped photos of damage, estimate from a licensed body shop, your personal insurance information. Keep every email and text from the broker and carrier. [INSERT EXPERIENCE]'
  },
  {
    q: 'How long does a cargo insurance claim take to resolve?',
    a: 'Typically 30 to 90 days from filing. Simple cosmetic claims (door ding, scratch) resolve faster. Larger claims involving mechanical or structural damage can take 90 to 180 days. Keep weekly contact with your broker during the claim.'
  },
  {
    q: 'What is the deductible on carrier cargo insurance?',
    a: 'Most carrier cargo policies have no deductible paid by you (the vehicle owner). The deductible, if any, is paid by the carrier themselves. You should receive the full approved claim amount. Verify this with your carrier before shipping.'
  },
  {
    q: 'Should I buy supplemental cargo insurance?',
    a: 'Worth considering if your car is worth more than $75,000, or if the carrier\'s cargo policy limit is below your car\'s market value. Supplemental cargo insurance costs $50 to $250 for a typical snowbird shipment. Not needed for most mainstream vehicles.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Snowbird car shipping insurance</strong> covers your car during pickup, transit, and delivery through three layers: the carrier&rsquo;s cargo insurance, your personal auto comprehensive policy, and (sometimes) supplemental cargo insurance. Most snowbird shipments complete without any insurance claim — but when a claim does arise, knowing how each layer works and what documentation you need is the difference between a smooth payout and a 6-month fight. This page covers how snowbird car shipping insurance works and how to file a claim if something goes wrong.
      </p>

      <h2>The three layers of snowbird car shipping insurance</h2>
      <ol>
        <li><strong>Carrier cargo insurance.</strong> Primary coverage during loading, transit, and unloading. $100K to $1M+ per vehicle depending on carrier.</li>
        <li><strong>Your personal auto comprehensive policy.</strong> Secondary coverage for anything the carrier&rsquo;s cargo policy does not cover.</li>
        <li><strong>Supplemental cargo insurance.</strong> Optional third-party coverage for high-value vehicles where the carrier&rsquo;s limit is insufficient.</li>
      </ol>
      <p>
        For 95 percent of snowbird shipments on mainstream vehicles, carrier cargo insurance alone is enough. For high-value cars (classic, exotic, luxury $75K+), add supplemental. For context on high-value car shipping, see our{' '}
        <Link href="/resources/shipping-classic-luxury-car-for-winter">classic and luxury car shipping guide</Link>
        .
      </p>

      <h2>What carrier cargo insurance covers</h2>
      <p>
        Standard carrier cargo insurance covers:
      </p>
      <ul>
        <li>Damage from loading or unloading</li>
        <li>Damage from carrier accident mid-transit</li>
        <li>Theft from the trailer (vehicle or vehicle parts)</li>
        <li>Weather damage during transit (storms, hail, falling debris)</li>
        <li>Cargo securement failures (loose chain damage, strap failure)</li>
      </ul>
      <p>
        Does not cover:
      </p>
      <ul>
        <li>Pre-existing damage noted on the pickup BOL</li>
        <li>Items packed inside the vehicle (your contents, not covered)</li>
        <li>Mechanical breakdown unrelated to transit damage</li>
        <li>Normal wear (tire wear, bug splatter, road grime)</li>
        <li>Acts of God in some policies (confirm your specific policy)</li>
      </ul>

      <h2>How to protect yourself before shipping</h2>
      <p>
        Four pre-shipping steps:
      </p>
      <ol>
        <li><strong>Request the carrier&rsquo;s certificate of insurance (COI)</strong> in writing. Verify the policy is active and the cargo limit is at least your car&rsquo;s value.</li>
        <li><strong>Confirm your personal auto comprehensive policy stays active</strong> during transit. Call your insurer before pickup.</li>
        <li><strong>Document the car with time-stamped photos</strong> from all angles — four corners, roof, interior, odometer reading. Keep originals.</li>
        <li><strong>Walk around the car with the driver</strong> at pickup. Note every ding, scratch, or wear mark on the BOL. The driver signs confirming the pre-existing condition.</li>
      </ol>

      <h2>What to do at delivery</h2>
      <p>
        Five steps when the carrier arrives:
      </p>
      <ol>
        <li><strong>Do a walk-around with the driver before signing anything.</strong></li>
        <li><strong>Compare current condition to your pickup photos.</strong> Look for new damage.</li>
        <li><strong>Note any new damage on the BOL</strong> before you sign. Have the driver initial.</li>
        <li><strong>Photograph any new damage immediately</strong> with timestamps.</li>
        <li><strong>Call your broker that day</strong> to report damage, not days later.</li>
      </ol>
      <p>
        If you sign a clean BOL and discover damage later, claim becomes much harder. Note everything at delivery, even small items you plan not to pursue — you can always skip filing, but you cannot add damage to a signed-clean BOL.
      </p>

      <h2>How to file a cargo insurance claim</h2>
      <p>
        Follow this process:
      </p>
      <ol>
        <li>Call your broker (or carrier if booked direct) within 48 to 72 hours of delivery</li>
        <li>Submit the signed BOL with damage notes</li>
        <li>Submit time-stamped photos of damage and the original pickup photos</li>
        <li>Submit a written repair estimate from a licensed body shop</li>
        <li>Keep every email and text; follow up weekly</li>
      </ol>
      <p>
        The carrier&rsquo;s insurance adjuster reviews the claim and may inspect the vehicle. Most claims settle in 30 to 90 days. More complex claims take longer.
      </p>

      <h2>How your personal auto insurance interacts with carrier insurance</h2>
      <p>
        Your comprehensive policy may:
      </p>
      <ul>
        <li>Pay for damage above the carrier&rsquo;s cargo policy limit</li>
        <li>Pay for items the carrier&rsquo;s policy excludes (acts of God, hidden damage)</li>
        <li>Front the repair cost while the carrier&rsquo;s claim processes, then pursue subrogation</li>
      </ul>
      <p>
        Confirm all three of those with your personal insurer before shipping. Policies vary. We are not insurance advisors — verify every detail.
      </p>

      <h2>Red flags that suggest you need supplemental insurance</h2>
      <ul>
        <li>Your car is worth more than the carrier&rsquo;s cargo policy limit</li>
        <li>Your car is a classic, exotic, or luxury model</li>
        <li>Your car has specialty equipment that is expensive to replace</li>
        <li>The carrier&rsquo;s COI shows an unusually low limit for enclosed service</li>
      </ul>
      <p>
        Supplemental cargo insurance from a third-party insurer runs $50 to $250 per snowbird shipment. For broker vs direct insurance handling, see our{' '}
        <Link href="/resources/broker-vs-direct-carrier-snowbird-shipping">broker vs direct carrier guide</Link>
        .
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to ship your snowbird car with full insurance confidence?</h2>
      <p>
        Snowbird car shipping insurance works when you prep it right — request the COI, document the car, note damage on the BOL, and know your personal policy terms. Most snowbirds never file a claim. For those who do, following the right steps makes payout smoother. Request a free quote and we will share the carrier&rsquo;s COI as part of the booking.
      </p>
    </ArticleShell>
  );
}
