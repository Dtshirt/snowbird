import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'shipping-classic-luxury-car-for-winter';

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
    q: 'Should I add agreed-value insurance before shipping a $150K+ classic car?',
    a: 'Yes. Agreed-value coverage pays the stated value if the car is totaled. Most carrier cargo policies pay actual cash value, which can be well below your classic\'s market worth. Confirm your personal collector policy stays active during transport, and ask the carrier for a certificate of insurance to compare limits.'
  },
  {
    q: 'Do enclosed carriers offer climate control for temperature-sensitive paint or interiors?',
    a: 'Some do. Climate-controlled enclosed trailers (humidity and temperature controlled) are a specialty service costing 20 to 40 percent above standard enclosed. Worth it for recently restored cars with fresh paint curing, or for cars moving between extreme climates (New England winter to Florida summer heat).'
  },
  {
    q: 'My classic car has a non-standard tie-down location. Can the carrier accommodate?',
    a: 'Yes, with notice. Classic carriers use soft-strap wheel ties (not frame hooks) that avoid damage to chassis or body panels. Tell your dispatcher at booking if your car has unusual tie-down points or frame fragility (fiberglass bodies, hand-formed aluminum).'
  },
  {
    q: 'Can I ship a classic car with a dead battery or non-running engine?',
    a: 'Non-running classics ship on specialty enclosed carriers with winches. Expect a $150 to $400 non-running surcharge above the enclosed rate. Confirm the carrier has a working winch rated for your car\'s weight. Hand-crank starting cars should be documented as non-running to avoid loading disputes.'
  },
  {
    q: 'What is the risk of shipping a convertible with the top down?',
    a: 'High — most carriers refuse to load a top-down convertible. Shipping a soft-top in the down position exposes the interior to dust, moisture, and loading debris. Latch the top up before pickup. If the top mechanism is broken, cover the opening with a professional car cover and tell the dispatcher.'
  },
  {
    q: 'Do carriers inspect classic cars differently than modern cars at pickup?',
    a: 'Specialty enclosed carriers often do a more detailed walk-around for classic and luxury cars — paint condition panel by panel, chrome, trim pieces, interior leather. Allow 30 to 45 minutes for pickup rather than the standard 15 to 30. Bring your own detailed photos.'
  },
  {
    q: 'Can the dealer or restoration shop deliver the car directly to the carrier?',
    a: 'Yes. Many classic and luxury owners stage their car at a restoration shop or private garage near a major highway for carrier pickup. This avoids tight neighborhood streets and gives the carrier easy access. Confirm the shop is open during the pickup window.'
  },
  {
    q: 'Does the carrier\'s cargo insurance cover concours-level paint defects introduced in transit?',
    a: 'Cargo insurance covers damage from carrier negligence or accident — not minor paint oxidation from humidity exposure or microscopic debris that only a judge sees. For concours-prep cars, discuss supplemental insurance with your personal collector insurer. [INSERT EXPERIENCE]'
  },
  {
    q: 'How much lead time should I plan for a specialty enclosed classic car shipment?',
    a: 'Book 4 to 6 weeks before your target pickup window for enclosed with climate control, 3 to 4 weeks for standard enclosed. Specialty carriers run fewer trucks per lane. Peak snowbird season (October to December, April to May) tightens supply further.'
  },
  {
    q: 'Can I store personal valuables inside my classic car during transport?',
    a: 'No. FMCSA personal-items guidance still applies (up to 100 pounds, below window line, nothing valuable). On high-value cars, carriers often ask you to remove all personal items so the insurance claim path stays clean if something happens. Verify with your carrier before loading.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Shipping a classic or luxury car south for the winter</strong> is a different conversation than standard snowbird shipping. Enclosed transport, higher cargo insurance limits, specialty tie-down equipment, and dispatch lead time all shift. For cars worth $75,000 or more, hand-restored classics, or vehicles with low ground clearance, picking the right carrier and getting the paperwork right matters more than the base shipping price. This page covers how to ship a high-value snowbird car safely, what insurance and carrier questions to ask, and when climate-controlled transport is worth it.
      </p>

      <h2>Why classic and luxury snowbird car shipping is different</h2>
      <p>
        Three things separate high-value car shipping from standard snowbird shipping:
      </p>
      <ul>
        <li><strong>Transport type.</strong> Enclosed is standard, not optional, for most $75K+ cars.</li>
        <li><strong>Insurance limits.</strong> Specialty enclosed carriers carry higher cargo policy limits ($500K to $1M+ per vehicle).</li>
        <li><strong>Carrier equipment.</strong> Soft-strap wheel ties, hydraulic liftgates, and climate control are specialty features — not every enclosed carrier offers them.</li>
      </ul>
      <p>
        For a general open-vs-enclosed overview, see our{' '}
        <Link href="/resources/open-vs-enclosed-car-shipping-snowbird">open vs enclosed snowbird transport guide</Link>
        .
      </p>

      <h2>Which cars really need specialty enclosed shipping?</h2>
      <p>
        Specialty enclosed makes sense when the car checks any of these boxes:
      </p>
      <ul>
        <li>Market value over $75,000</li>
        <li>Pre-1990 classic (numbers-matching, restored, or original)</li>
        <li>Exotic (Ferrari, Lamborghini, Rolls-Royce, Bentley, McLaren, Aston Martin)</li>
        <li>Luxury flagship (S-Class, 7-Series, A8, LS, Panamera)</li>
        <li>Ground clearance under 4 inches</li>
        <li>Custom paint, body wrap, or hand-formed body panels</li>
        <li>Recently restored (fresh paint still curing)</li>
      </ul>

      <h2>What enclosed classic carriers do differently</h2>
      <p>
        Specialty enclosed snowbird transport differs from standard enclosed in four ways:
      </p>
      <ol>
        <li><strong>Soft-strap wheel ties.</strong> Secure the car at the wheels, never at frame or body. Protects paint and chassis.</li>
        <li><strong>Hydraulic liftgate.</strong> Lifts low-clearance cars onto the trailer. No ramp scraping.</li>
        <li><strong>Fewer cars per load.</strong> 2 to 4 vehicles per trailer vs 7 to 10 on open. More care at each stop.</li>
        <li><strong>Climate control (specialty only).</strong> Humidity and temperature regulated for fresh-paint or hand-finished interiors.</li>
      </ol>

      <h2>How much does classic or luxury snowbird shipping cost?</h2>
      <p>
        Pricing ranges for a typical Northeast → Florida run:
      </p>
      <ul>
        <li><strong>Standard enclosed:</strong> $1,200 to $1,800</li>
        <li><strong>Specialty enclosed (soft-strap, liftgate, lower vehicle count):</strong> $1,600 to $2,400</li>
        <li><strong>Climate-controlled enclosed:</strong> $2,000 to $3,000+</li>
      </ul>
      <p>
        For a planning number tailored to your route, run both enclosed options in the{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        . Compare against the full cost picture in our{' '}
        <Link href="/resources/snowbird-car-shipping-cost">snowbird car shipping cost guide</Link>
        .
      </p>

      <h2>Insurance for high-value snowbird car shipments</h2>
      <p>
        Three insurance layers to confirm before shipping a classic or luxury car:
      </p>
      <ol>
        <li><strong>Carrier cargo insurance.</strong> Specialty enclosed carriers carry $500K to $1M+ per vehicle. Ask for the certificate of insurance (COI) in writing. If the limit is below your car's value, buy supplemental.</li>
        <li><strong>Your personal collector / agreed-value policy.</strong> Keep it active during transport. Agreed-value pays the stated value if the car is totaled — most cargo policies pay actual cash value.</li>
        <li><strong>Supplemental cargo insurance.</strong> Available from third-party insurers for cars worth $200K+. Covers the gap between the carrier's limit and your car's true value.</li>
      </ol>
      <p>
        We are not insurance advisors. Verify every coverage detail with your carrier's dispatcher and your personal insurer before shipping.
      </p>

      <h2>How to prep a classic or luxury car for winter shipping</h2>
      <p>
        Standard snowbird prep applies, plus these high-value additions:
      </p>
      <ul>
        <li>Document condition with high-res photos of every panel, trim piece, interior surface, and tire</li>
        <li>Note existing paint chips, swirl marks, or any pre-existing wear in writing before pickup</li>
        <li>Remove all personal items (carriers often require this for high-value shipments)</li>
        <li>Latch the convertible top up and secure</li>
        <li>Confirm all tie-down points with the driver before loading</li>
        <li>Request a copy of the signed bill of lading photographed at pickup, not just at delivery</li>
      </ul>
      <p>
        For the full prep workflow, see our{' '}
        <Link href="/resources/snowbird-vehicle-preparation-checklist">snowbird vehicle preparation checklist</Link>
        .
      </p>

      <h2>Picking the right specialty carrier</h2>
      <p>
        Questions to ask before you book:
      </p>
      <ul>
        <li>Do you carry $500K+ cargo insurance per vehicle? (Request the COI in writing.)</li>
        <li>Do you use soft-strap wheel ties, not chain or frame hooks?</li>
        <li>Does the trailer have a hydraulic liftgate for low-clearance cars?</li>
        <li>How many vehicles do you load per trailer?</li>
        <li>Do you offer climate-controlled transport?</li>
        <li>How many years have you shipped classic or exotic cars specifically?</li>
      </ul>
      <p>
        A broker that specializes in snowbird shipping (like us) can match you with carriers that answer "yes" to the specialty questions. Mainstream brokers may not vet enclosed carriers at this detail.
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to ship your classic or luxury car south?</h2>
      <p>
        Classic and luxury snowbird car shipping takes more planning than a standard enclosed job — specialty equipment, higher insurance limits, and longer lead time all matter. The pay-off is a vehicle that arrives in the same condition it left. Request a free quote and ask specifically for a specialty-enclosed carrier that matches the value and sensitivity of your car.
      </p>
    </ArticleShell>
  );
}
