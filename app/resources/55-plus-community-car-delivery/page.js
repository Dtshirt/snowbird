import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = '55-plus-community-car-delivery';

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
    q: 'Does The Villages in Florida allow full-size auto carriers inside the community?',
    a: 'Policies vary by neighborhood within The Villages. Many areas allow carriers with 24 to 48 hour advance notice to the gatehouse. Low-clearance streets and tight circles may force a meet-up at a village square or outside gate. Call your village office before pickup to confirm. [INSERT EXPERIENCE]'
  },
  {
    q: 'What is the usual notice period for a 55+ community gatehouse?',
    a: 'Most 55+ communities require 24 to 72 hours notice for commercial vehicles. Tell the gatehouse the carrier\'s truck number, driver name, and delivery window as soon as your dispatcher confirms. Some communities bill the resident a visitor fee if notice is late.'
  },
  {
    q: 'What if my community bans all commercial vehicles entirely?',
    a: 'The driver meets you at the main gate, a nearby grocery lot, or a church parking area. You hand over keys and complete the bill of lading there, then drive the car into the community yourself. Confirm the alternate meet-up spot with your dispatcher 48 hours ahead.'
  },
  {
    q: 'Does my HOA need a certificate of insurance from the carrier?',
    a: 'Some 55+ communities require a certificate of insurance (COI) for any commercial vehicle entering. Ask your HOA office if a COI is needed, then request one from your broker 72 hours before pickup. Not all carriers can produce one on short notice.'
  },
  {
    q: 'If the carrier damages a community gate or landscaping, who pays?',
    a: 'The carrier\'s commercial auto liability insurance covers damage to property during access and delivery. The HOA submits a claim to the carrier\'s insurer, not to you. Keep the dispatcher\'s number so your HOA has a point of contact.'
  },
  {
    q: 'My community has narrow golf-cart lanes. Does the driver try to use those?',
    a: 'No. Drivers avoid any lane marked for golf-cart or pedestrian use. If every street in your community is golf-cart width, meet the driver at the entrance. The driver uses main roads only.'
  },
  {
    q: 'What time of day are carriers allowed in 55+ communities?',
    a: 'Most 55+ communities limit commercial access to weekday business hours (7 AM to 7 PM). Weekend and holiday deliveries can be banned or require a special permit. Confirm the hours with your HOA when you give notice. Verify with your community authority — rules vary.'
  },
  {
    q: 'If my community is in Sun City Arizona or Sun City West, is there a central delivery point?',
    a: 'Sun City and Sun City West (Arizona) allow carriers on main through-streets but limit access on interior residential loops. Many residents meet the driver at a Fry\'s, Safeway, or community center lot. Ask your dispatcher to coordinate the meet-up when you book.'
  },
  {
    q: 'Can I get the car delivered to my community clubhouse or recreation center lot?',
    a: 'Often yes, with HOA approval. Clubhouse lots have the space a full-size carrier needs and are a short drive from your home. Reserve a spot through your HOA before pickup day.'
  },
  {
    q: 'Does carrier insurance cover my car if it is dropped off at a community meet-up and left briefly?',
    a: 'Cargo insurance covers the car until the bill of lading is signed at delivery. Once you sign and the driver leaves, the car is on your personal auto policy. Do not sign the BOL until you are ready to take possession and drive the car away.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Car delivery to 55+ communities and gated resorts</strong> is one of the quieter headaches of snowbird car shipping. Most 55+ communities limit commercial vehicle access, require advance HOA notice, or ban full-size auto carriers from interior streets entirely. This page covers how to plan a carrier pickup or delivery inside a 55+ community, the notice periods and meet-up patterns that work, and what to tell your HOA before pickup day.
      </p>

      <h2>How car delivery to 55+ communities actually works</h2>
      <p>
        Most 55+ community deliveries follow one of three patterns:
      </p>
      <ol>
        <li><strong>Direct to your door.</strong> Works in communities that allow commercial carriers on interior streets with HOA notice.</li>
        <li><strong>Meet at the main gate.</strong> The driver stops at the community entrance; you take delivery and drive the car in yourself.</li>
        <li><strong>Meet at a nearby lot.</strong> The driver meets you at a grocery store, church, or community center lot outside the gates.</li>
      </ol>
      <p>
        Which pattern applies depends on your community's rules. Call the HOA office before you book so you know which to plan for.
      </p>

      <h2>What notice does my 55+ HOA need before pickup day?</h2>
      <p>
        Most 55+ communities require 24 to 72 hours notice for a commercial vehicle. Give the gatehouse this info as soon as your dispatcher confirms the carrier:
      </p>
      <ul>
        <li>Carrier company name</li>
        <li>Truck number or driver name</li>
        <li>Expected arrival window (2 to 4 hours wide)</li>
        <li>Your lot or home number</li>
        <li>Your contact phone</li>
      </ul>
      <p>
        Communities that charge visitor fees or require certificates of insurance usually need the longer end of that window. Ask your HOA office about any paperwork before you book.
      </p>

      <h2>The 55+ communities most snowbirds ship to</h2>
      <p>
        The highest-volume 55+ snowbird communities for car delivery include:
      </p>
      <ul>
        <li><strong>Florida:</strong> The Villages, Sun City Center, On Top of the World, Del Webb Lakewood Ranch</li>
        <li><strong>Arizona:</strong> Sun City, Sun City West, Sun City Grand, Robson Ranch, Pebble Creek</li>
        <li><strong>Texas:</strong> Sun City Georgetown, Robson Ranch Texas, Del Webb at Trinity Falls</li>
        <li><strong>California:</strong> Sun City Palm Desert, Trilogy at The Polo Club, Four Seasons at Terra Lago</li>
      </ul>
      <p>
        For destination-specific guides, see our{' '}
        <Link href="/destinations/florida">Florida</Link>,{' '}
        <Link href="/destinations/arizona">Arizona</Link>,{' '}
        <Link href="/destinations/texas">Texas</Link>, and{' '}
        <Link href="/destinations/california">California</Link> hubs.
      </p>

      <h2>What makes a 55+ community hard for a full-size carrier</h2>
      <p>
        Four things trip up carriers at 55+ community deliveries:
      </p>
      <ul>
        <li><strong>Low tree branches.</strong> Mature oaks and palms on interior streets can scrape the top deck of a two-level carrier.</li>
        <li><strong>Narrow turns.</strong> Interior loops under 30 feet wide block long trailers.</li>
        <li><strong>Weight limits.</strong> Some HOAs post 10-ton or 15-ton limits on interior streets. Full-size carriers run 20 to 40 tons loaded.</li>
        <li><strong>Golf-cart lanes.</strong> Communities designed around golf carts have narrow lanes and tight curbs no truck can safely use.</li>
      </ul>
      <p>
        If your community has three or more of these, plan on a meet-up outside the gates. Your driver will not blame you — it is a common situation they handle every week.
      </p>

      <h2>How to pick a good meet-up spot outside your community</h2>
      <p>
        A good meet-up spot has:
      </p>
      <ul>
        <li>Open parking with no overhead wires or low trees</li>
        <li>Easy entry and exit for a 70-foot trailer</li>
        <li>Space to swing wide (grocery store lots work well)</li>
        <li>Less than 10 minutes from your community gate</li>
        <li>No restrictions on commercial parking (avoid private medical, bank, or restaurant lots)</li>
      </ul>
      <p>
        Big-box retail lots (Walmart, Target, Home Depot) and large church lots are the usual winners. Confirm with the property manager if you plan to park a 70-foot carrier for 20 minutes on their lot.
      </p>

      <h2>Insurance and liability for 55+ community delivery</h2>
      <p>
        Three insurance questions worth settling before pickup day:
      </p>
      <ul>
        <li><strong>Carrier commercial liability.</strong> Covers damage to community gates, landscaping, or other vehicles during access. Request a COI if your HOA asks.</li>
        <li><strong>Cargo insurance.</strong> Covers your car during loading, transit, and unloading. Active until you sign the bill of lading.</li>
        <li><strong>Your personal auto policy.</strong> Covers the car at the delivery address once you take possession.</li>
      </ul>
      <p>
        For insurance detail across the whole shipment, see our{' '}
        <Link href="/resources/snowbird-car-shipping-guide">complete snowbird car shipping guide</Link>
        .
      </p>

      <h2>Our pre-delivery checklist for 55+ community snowbirds</h2>
      <p>
        What we tell every client shipping to a 55+ community:
      </p>
      <ol>
        <li>Call your HOA office when you book. Ask about carrier rules.</li>
        <li>Ask if a certificate of insurance is required. Request one from your broker.</li>
        <li>Request your community's preferred meet-up location in writing from the HOA.</li>
        <li>Give the gatehouse 48 hours notice with the carrier name and arrival window.</li>
        <li>Have your phone on all day during the delivery window.</li>
        <li>Keep the dispatcher's number handy for last-minute changes.</li>
      </ol>

      <ArticleFAQ items={faqs} />

      <h2>Ready to plan your 55+ community delivery?</h2>
      <p>
        Delivery to 55+ snowbird communities takes a little extra coordination — but with HOA notice and a flexible meet-up plan, it works smoothly on nearly every shipment. Call your HOA office first, confirm the rules, then request a free quote. A snowbird specialist will build the delivery around your community's access policies.
      </p>
    </ArticleShell>
  );
}
