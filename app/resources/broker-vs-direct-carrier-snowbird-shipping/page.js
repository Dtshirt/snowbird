import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'broker-vs-direct-carrier-snowbird-shipping';

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
    q: 'Who actually drives my car — the broker or the carrier?',
    a: 'Always the carrier. Brokers do not own trucks. Brokers find a vetted carrier, negotiate price, handle dispatch and paperwork, and are your single point of contact if something goes wrong. The carrier is a licensed motor carrier with its own insurance.'
  },
  {
    q: 'How do I know if a broker is legit?',
    a: 'Check their MC number and surety bond on the FMCSA website (fmcsa.dot.gov). Reputable snowbird brokers hold a $75,000 surety bond, active MC authority, and 100+ customer reviews across Google, BBB, and Transport Reviews. Verify with FMCSA directly.'
  },
  {
    q: 'Is a direct carrier always cheaper than a broker?',
    a: 'Not always. A direct carrier skips the broker margin ($100 to $250) but may charge more per load because they do not spread cost over many lanes. On snowbird routes, broker quotes often beat direct-carrier quotes by $50 to $150 because brokers can shop multiple carriers for the best rate.'
  },
  {
    q: 'What is the broker surety bond and why does it matter?',
    a: 'Federal law requires freight brokers to hold a $75,000 surety bond. If a broker goes bankrupt or defaults, the bond pays claims from unpaid carriers and customers. A broker without an active bond is not licensed to operate. [INSERT: link to FMCSA bond lookup]'
  },
  {
    q: 'Does the broker or the carrier handle insurance claims?',
    a: 'The broker files on your behalf but the claim is paid by the carrier\'s cargo insurer. Reputable brokers handle the claim paperwork, follow up, and advocate for you. A good broker is worth real money when a claim arises.'
  },
  {
    q: 'What is "double brokering" and why is it bad?',
    a: 'Double brokering is when a broker re-brokers your load to a second broker without telling you. Each layer adds margin, and insurance coverage can get fuzzy. Reputable brokers never double-broker. Ask: "Does your contract prohibit double brokering?"'
  },
  {
    q: 'If I pick a direct carrier, how do I handle backup if their truck breaks down?',
    a: 'Direct carriers have one truck or a small fleet. If their truck breaks down, you wait. Brokers have a network of 1,000+ carriers to pull from — if one falls through, they re-dispatch. On a time-sensitive snowbird shipment, broker resilience matters.'
  },
  {
    q: 'Can I ask the broker which carrier was assigned to my load?',
    a: 'Yes. Reputable brokers tell you the carrier name, MC number, driver name, and truck number once dispatched. You can verify the carrier\'s safety record on FMCSA\'s SAFER lookup (safer.fmcsa.dot.gov). Any broker that refuses to disclose carrier info has something to hide.'
  },
  {
    q: 'Does the broker know in advance which carrier will take my load?',
    a: 'Rarely at booking time. Brokers post your load to a dispatch system (like Central Dispatch) and licensed carriers bid or accept. Carrier is confirmed once a trucker accepts the dispatch rate — usually within 2 to 10 days of your pickup window opening.'
  },
  {
    q: 'If my carrier damages my car, is the broker legally responsible?',
    a: 'Legally, the carrier is responsible — their cargo insurance pays. Practically, your broker is responsible for making the claim right. Pick a broker that explicitly says they advocate for you in claims. [INSERT EXPERIENCE]'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Choosing between a broker and a direct carrier for snowbird car shipping</strong> comes down to three things: price, reliability, and support when something goes wrong. Brokers access a nationwide network of 10,000+ licensed carriers; direct carriers run their own trucks on specific lanes. For most snowbirds, brokers deliver better prices and more reliability. This page breaks down how each one works, when direct carriers are actually cheaper, and the questions to ask before booking either option.
      </p>

      <h2>What is a broker in car shipping?</h2>
      <p>
        A freight broker is a licensed middleman between you and the carrier that actually drives your car. The broker:
      </p>
      <ul>
        <li>Finds a vetted licensed carrier on your route</li>
        <li>Negotiates the price with the carrier</li>
        <li>Handles the dispatch paperwork</li>
        <li>Is your single point of contact if something goes wrong</li>
        <li>Advocates for you in claims and schedule changes</li>
      </ul>
      <p>
        Reputable brokers hold a federal $75,000 surety bond, active MC authority, and detailed carrier vetting standards. They do not own trucks.
      </p>

      <h2>What is a direct carrier?</h2>
      <p>
        A direct carrier is a licensed motor carrier that owns trucks and drivers. When you book direct, you deal with the dispatcher at the carrier company. The dispatcher confirms your pickup window, assigns a driver, and runs the shipment on their own trucks.
      </p>
      <p>
        Direct carriers specialize in specific lanes — a company that runs the I-95 Northeast-to-Florida corridor every week, for example. If your route matches their lanes and dates, direct booking can work well.
      </p>

      <h2>Broker vs direct carrier: pricing comparison</h2>
      <p>
        For a typical Northeast → Florida snowbird shipment:
      </p>
      <ul>
        <li><strong>Broker quote (open):</strong> $900 to $1,250</li>
        <li><strong>Direct carrier quote (open):</strong> $850 to $1,300 (varies more widely)</li>
      </ul>
      <p>
        Brokers often win on price because they shop multiple carriers and the broker margin ($100 to $250) is less than the premium many direct carriers charge for a one-off booking outside their regular lane.
      </p>
      <p>
        For a route-specific quote, use the{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        .
      </p>

      <h2>Broker vs direct carrier: reliability</h2>
      <p>
        Brokers win on reliability for most snowbird shipments:
      </p>
      <ul>
        <li>Brokers have 1,000+ carriers to re-dispatch if the first one falls through</li>
        <li>Brokers absorb scheduling conflicts across their network</li>
        <li>Direct carriers have one fleet — if their truck breaks down, you wait</li>
      </ul>
      <p>
        Where direct carriers win: on short notice and tight dates, a direct carrier whose truck is already going your way can be faster than a broker searching for a match.
      </p>

      <h2>Broker vs direct carrier: insurance and claims</h2>
      <p>
        Both brokers and direct carriers rely on the carrier's cargo insurance to pay claims. The difference is who handles the claim paperwork:
      </p>
      <ul>
        <li><strong>Broker:</strong> Files on your behalf, follows up, advocates with the insurer</li>
        <li><strong>Direct carrier:</strong> You file directly with their insurer, often slower and more adversarial</li>
      </ul>
      <p>
        For a snowbird shipping thousands of miles from home, having a broker handle a claim is a real benefit.
      </p>

      <h2>How to verify a broker or carrier is legit</h2>
      <p>
        Check the Federal Motor Carrier Safety Administration (FMCSA) website at fmcsa.dot.gov. Look up the MC number of any broker or carrier you consider:
      </p>
      <ul>
        <li>Active MC authority (yes/no)</li>
        <li>Surety bond on file ($75,000 for brokers)</li>
        <li>Insurance on file (for carriers, cargo policy limit)</li>
        <li>Safety rating and inspection history</li>
      </ul>
      <p>
        Also check customer reviews on Google, Better Business Bureau, and Transport Reviews (transportreviews.com). Reputable brokers have 100+ reviews averaging 4+ stars. Verify details directly with FMCSA.
      </p>

      <h2>When to use a broker vs direct carrier</h2>
      <p>
        Use a broker when:
      </p>
      <ul>
        <li>Your route is a common snowbird lane</li>
        <li>You have 3+ weeks lead time</li>
        <li>You want one point of contact for the whole process</li>
        <li>You want claim support if something goes wrong</li>
        <li>You are shipping to or from a residential address</li>
      </ul>
      <p>
        Use a direct carrier when:
      </p>
      <ul>
        <li>Your dates are rigid and short-notice</li>
        <li>You know a carrier that runs your exact lane weekly</li>
        <li>You have shipped with them before and had a good experience</li>
        <li>Your corporate relocation includes a direct-carrier relationship</li>
      </ul>

      <h2>Red flags on both sides</h2>
      <p>
        Walk away from any broker or carrier that:
      </p>
      <ul>
        <li>Cannot show an active MC number and surety bond</li>
        <li>Has 20+ one-star reviews about pricing surprises</li>
        <li>Pressures you to pay a non-refundable deposit before confirmation</li>
        <li>Refuses to put the quote in writing</li>
        <li>Has a quote 30 to 50 percent below competitors (bait-and-switch warning)</li>
      </ul>
      <p>
        For related reading on quote traps, see our{' '}
        <Link href="/resources/hidden-fees-snowbird-car-shipping">hidden fees snowbird car shipping guide</Link>
        .
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to pick the right broker or carrier for your snowbird trip?</h2>
      <p>
        For 90 percent of snowbird car shipments, a reputable broker delivers better pricing, better reliability, and better claim support than booking direct. The remaining 10 percent — tight dates, known lane carriers — favor direct. We are a snowbird-focused broker with the vetted carrier network to match. Request a free quote and we will walk you through the carrier options for your specific route.
      </p>
    </ArticleShell>
  );
}
