import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'rv-resort-car-delivery';

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
    q: 'Can a full-size auto carrier pull into my RV site?',
    a: 'Rarely. RV sites are built for a single RV plus a car — not a 70-foot auto hauler. Most carriers meet you at the resort entrance, a central office lot, or an overflow lot inside the resort. Confirm the meet-up spot with the resort office when you give notice.'
  },
  {
    q: 'Do RV resorts charge a visitor fee for the carrier?',
    a: 'Some do. Typical fees are $5 to $20 for a short-stay commercial visit. The driver pays at the gate, then invoices your dispatcher. If a fee applies, it may show up on your final shipping invoice.'
  },
  {
    q: 'My Rio Grande Valley park gate is unmanned on weekends. Does the driver need a code?',
    a: 'Yes. Call the resort office during business hours to get a weekend access code or a gate-remote number. Share the code with your dispatcher as part of the booking notes. [INSERT EXPERIENCE]'
  },
  {
    q: 'What if my resort has no cell service inside the gates?',
    a: 'Give the driver a secondary meet-up point outside the resort before they arrive. Most Rio Grande Valley and north-Florida RV resorts have reliable cell service, but a few remote sites in Big Bend, Arizona\'s Sonoran desert, or South Florida\'s Everglades edge have dead zones.'
  },
  {
    q: 'Do RV resorts have truck weight or length limits at the entrance?',
    a: 'Most resorts allow commercial auto carriers (20 to 40 tons loaded) at the entrance and in overflow lots. Weight limits inside the park loops are often 10 to 15 tons, which blocks interior access. Ask the resort office about overflow parking before booking.'
  },
  {
    q: 'Can my car be delivered when I am still at my northern home for a few more days?',
    a: 'Some resorts hold your car at the office lot or an overflow pad for 1 to 3 days — ask when you book your site. Others require you to be on-site for delivery. Confirm the hold policy before you lock in a pickup date up north.'
  },
  {
    q: 'What is the Winter Texan RV resort pattern for pickup day?',
    a: 'In the Rio Grande Valley (McAllen, Harlingen, Mission, Weslaco, Brownsville), most carriers deliver to the resort office or a wide front lot. You meet the driver, walk around the car, sign the bill of lading, and then drive the car to your resort site. Office hours matter — plan around 8 AM to 5 PM weekday delivery.'
  },
  {
    q: 'If my RV resort is seasonal and closes April 30, when must my car be gone?',
    a: 'Confirm your resort\'s close date in writing. Many Rio Grande Valley resorts give residents 7 to 14 days after close to clear vehicles. Carriers can pick up during that window. If you miss it, your car may be towed to a nearby storage lot at your expense.'
  },
  {
    q: 'What is the earliest in the fall that an RV resort will accept my car delivery?',
    a: 'Most Winter Texan RV resorts open their gates in early to mid-September for incoming residents. Deliveries land shortly after. Confirm with your specific resort office. Delivering 2 to 3 weeks after resort opening often gives better carrier availability.'
  },
  {
    q: 'Can my RV resort office sign the bill of lading if I am not there yet?',
    a: 'Only if they are listed as your authorized representative on the booking. Carriers require the signer to be 18+ and named on the dispatch sheet. Call your broker to add the resort manager as your pickup contact before the carrier dispatches.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Car delivery to RV resorts</strong> is a staple of Winter Texan and Arizona snowbird shipping — but it comes with resort-specific rules most first-timers do not know about. RV resorts rarely let a full-size auto carrier onto interior loops, resort offices often need advance notice, and some parks charge a small visitor fee for commercial access. This page covers how RV resort car delivery actually works, the meet-up patterns resorts use, and how to coordinate pickup around your resort's rules.
      </p>

      <h2>How RV resort car delivery works</h2>
      <p>
        Most RV resort car deliveries follow one of three patterns:
      </p>
      <ol>
        <li><strong>Meet at the resort office.</strong> Driver pulls to the office lot; you sign the BOL and drive the car to your site.</li>
        <li><strong>Meet at an overflow or clubhouse lot.</strong> Resorts with dedicated overflow pads keep commercial trucks away from RV sites.</li>
        <li><strong>Meet at a nearby retail lot.</strong> Resorts with no on-site commercial access push the handoff to a grocery store or church lot.</li>
      </ol>
      <p>
        Full in-site delivery is rare. RV sites are sized for a single RV plus a car — not a 70-foot carrier. Expect to drive the car the last quarter mile yourself.
      </p>

      <h2>Winter Texan RV resorts and car shipping</h2>
      <p>
        The highest-volume Winter Texan corridor for car delivery is the Rio Grande Valley — McAllen, Harlingen, Mission, Weslaco, and Brownsville. Most Valley RV resorts open in September for incoming residents and close in April or early May.
      </p>
      <p>
        Typical Valley resort delivery pattern:
      </p>
      <ul>
        <li>Give the resort office 48 to 72 hours notice before pickup day</li>
        <li>Carrier meets you at the office or a wide front lot (not an interior loop)</li>
        <li>You walk around the car, sign the BOL, hand over keys, and drive to your site</li>
        <li>Resort office hours (8 AM to 5 PM weekdays) govern when the carrier can arrive</li>
      </ul>
      <p>
        For destination details, see our{' '}
        <Link href="/destinations/texas">Texas snowbird shipping hub</Link>
        .
      </p>

      <h2>Arizona RV resorts and snowbird car shipping</h2>
      <p>
        Arizona snowbird RV resorts cluster around Phoenix (Mesa, Apache Junction), Yuma, and Lake Havasu. Most are large, well-signed, and allow commercial access to the front office lot. A few resorts in Yuma Foothills and remote Sonoran-edge parks have unmanned gates — ask for an access code before booking.
      </p>
      <p>
        For destination details, see our{' '}
        <Link href="/destinations/arizona">Arizona snowbird shipping hub</Link>
        .
      </p>

      <h2>Florida RV resorts and snowbird car shipping</h2>
      <p>
        Florida RV resorts cluster along the Gulf Coast (Fort Myers, Naples, Bradenton) and the central Florida belt. Larger resorts have professional offices and clear commercial delivery policies. Smaller family-run parks sometimes have no formal policy — call ahead and talk to the owner.
      </p>
      <p>
        For destination details, see our{' '}
        <Link href="/destinations/florida">Florida snowbird shipping hub</Link>
        .
      </p>

      <h2>What RV resort offices need to know before pickup</h2>
      <p>
        Give the resort office this info 48 to 72 hours before pickup day:
      </p>
      <ul>
        <li>Carrier company name</li>
        <li>Driver name or truck number</li>
        <li>Expected arrival window (2 to 4 hours wide)</li>
        <li>Your resort site number</li>
        <li>Your contact phone</li>
        <li>Any gate codes or access notes the driver needs</li>
      </ul>
      <p>
        Resorts that charge a visitor fee or require a certificate of insurance need the longer end of that notice window.
      </p>

      <h2>What RV resorts cannot usually accommodate</h2>
      <p>
        Four common blockers:
      </p>
      <ul>
        <li><strong>Interior loop width.</strong> Most RV loops are built for RVs, not 70-foot auto carriers.</li>
        <li><strong>Low tree canopy.</strong> Mature palms and oaks over interior loops scrape the top deck.</li>
        <li><strong>Soft shoulders.</strong> Gravel or sand shoulders can trap a loaded trailer.</li>
        <li><strong>Weekend / after-hours arrivals.</strong> Many resort offices close weekends; no office = no delivery coordination.</li>
      </ul>
      <p>
        If your resort has three or more of these, plan on a meet-up outside the gates.
      </p>

      <h2>How to pick a meet-up spot outside the resort</h2>
      <p>
        A good off-site meet-up spot has:
      </p>
      <ul>
        <li>Open parking with no low trees or overhead wires</li>
        <li>Space for a 70-foot carrier to pull in and swing wide</li>
        <li>Less than 10 minutes from your resort</li>
        <li>No private restriction on commercial parking</li>
      </ul>
      <p>
        Big-box retail lots (Walmart, Target, HEB in Texas, Fry's in Arizona), large church lots, and chain gas stations with truck pumps all work.
      </p>

      <h2>Our checklist for RV resort car shipping</h2>
      <p>
        What we tell every Winter Texan and snowbird client shipping to an RV resort:
      </p>
      <ol>
        <li>Call the resort office when you book. Ask about commercial carrier access.</li>
        <li>Confirm the meet-up spot in writing (office, overflow, or off-site).</li>
        <li>Give the resort office 48 to 72 hours notice with the carrier info.</li>
        <li>Ask about resort visitor fees, COI requirements, and gate codes.</li>
        <li>Keep your phone on all day during the delivery window.</li>
        <li>Have the dispatcher's number handy for last-minute changes.</li>
      </ol>

      <ArticleFAQ items={faqs} />

      <h2>Ready to ship your car to your RV resort?</h2>
      <p>
        RV resort car delivery is one of the easier parts of snowbird shipping once you know the resort's access rules. Call the office first, agree on a meet-up spot, give 48 to 72 hours notice, and the handoff goes smoothly. Request a free quote and a snowbird specialist will build the delivery around your resort's layout.
      </p>
    </ArticleShell>
  );
}
