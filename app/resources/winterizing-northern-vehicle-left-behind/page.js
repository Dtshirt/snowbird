import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'winterizing-northern-vehicle-left-behind';

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
    q: 'Should I disconnect the battery or use a trickle charger?',
    a: 'Trickle charger is better if you have garage power. It keeps the battery topped up and ready to start in spring. Disconnecting the battery works but can erase radio presets, nav settings, and may require a dealer reset on some modern cars. Confirm with your car\'s owner manual.'
  },
  {
    q: 'Do I need to use fuel stabilizer if I leave the car for 4 to 5 months?',
    a: 'Yes. Modern gasoline with ethanol can start degrading in 30 to 60 days. For a 4+ month storage period, add fuel stabilizer (Sta-Bil or similar) when you fill the tank, then run the engine for 10 minutes so the treated fuel reaches the injectors.'
  },
  {
    q: 'Should I leave the fuel tank full or empty for winter storage?',
    a: 'Full. A full tank prevents moisture from condensing inside the tank wall and reduces oxidation on the fuel system. Combined with stabilizer, a full tank keeps gasoline stable for 6+ months.'
  },
  {
    q: 'What about tire pressure during a long cold storage?',
    a: 'Over-inflate by 5 to 10 PSI above normal. Tires lose pressure during cold storage and can develop flat spots if a tire goes well below recommended pressure. Alternative: put the car on jack stands to take weight off the tires completely.'
  },
  {
    q: 'Do I need to change the oil before storage?',
    a: 'Not strictly, but recommended if the current oil is more than 3,000 miles or 3 months old. Dirty oil contains acidic combustion byproducts that can etch engine internals during long storage. Fresh oil before storage protects the engine.'
  },
  {
    q: 'What should I do about my car insurance for the stored vehicle?',
    a: 'Many insurers offer a "stored vehicle" or "comprehensive-only" rate that drops liability coverage (since no one is driving it) while keeping coverage for theft, fire, or garage damage. Call your insurer before you leave. Confirm you can switch back to full coverage before spring driving.'
  },
  {
    q: 'Should I close the windows completely or leave a small gap for airflow?',
    a: 'Close the windows completely. Even a tiny gap lets humidity in, which encourages mold on interior surfaces. If airflow is a concern, place moisture absorbers (DampRid or silica packets) in the car instead.'
  },
  {
    q: 'What is the mice risk and how do I prevent it?',
    a: 'Mice can enter through vents or small gaps and nest in air filters, insulation, or wiring harnesses. Prevention: block exterior vent intakes with steel wool or dryer sheets, store the car with no food scraps, and place peppermint-oil sachets inside. Dryer sheets lose scent after 2 to 3 months. [INSERT EXPERIENCE]'
  },
  {
    q: 'Should I start the car once a month during winter if I am gone?',
    a: 'Only if someone is there to run the engine for 20+ minutes. A quick 2 to 5 minute idle actually causes more harm than good (incomplete combustion, moisture buildup in exhaust). If no one can run the car properly, leave it off and prep for storage.'
  },
  {
    q: 'What is the first thing I should do when I return in spring?',
    a: 'Reconnect the battery (if disconnected), check tire pressure, start the engine, let it idle for 10 to 15 minutes to warm up, then drive 10 to 20 miles to recirculate fluids and burn off any moisture. Have an oil change scheduled within the first week back.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Winterizing a northern vehicle left behind for the season</strong> matters as much as prepping the car you ship south. A car sitting in a cold garage for 4 to 5 months can come back to a dead battery, degraded fuel, flat-spotted tires, or (worst case) a mouse nest in the air intake. This page walks through the full winterizing checklist — fuel, battery, tires, insurance, and critter prevention — so your northern car is ready to drive the day you get back.
      </p>

      <h2>Why winterizing matters for a stored vehicle</h2>
      <p>
        A car designed to drive is not designed to sit for 4+ months. Three things go wrong during long storage:
      </p>
      <ol>
        <li><strong>Battery drain.</strong> Modern cars draw 20 to 50 milliamps while "off" (clock, computer, security). A full battery drains in 30 to 60 days.</li>
        <li><strong>Fuel degradation.</strong> Ethanol-blended gasoline starts separating in 30 to 60 days. Stabilizer keeps it stable 6+ months.</li>
        <li><strong>Tire flat spots.</strong> Weight on under-inflated tires in cold temps creates permanent flat spots.</li>
      </ol>
      <p>
        Plus the smaller risks: mice, moisture, oxidation, and rodent damage to wiring.
      </p>

      <h2>The 10-step winterizing checklist</h2>
      <p>
        Complete these steps 1 to 2 days before you leave:
      </p>
      <ol>
        <li><strong>Change the oil.</strong> Fresh oil protects internals during storage.</li>
        <li><strong>Fill the fuel tank.</strong> A full tank prevents moisture condensation.</li>
        <li><strong>Add fuel stabilizer.</strong> Sta-Bil or similar, per label dosage.</li>
        <li><strong>Run the engine 10 minutes.</strong> Circulate stabilized fuel into the injectors.</li>
        <li><strong>Over-inflate tires by 5 to 10 PSI.</strong> Compensates for cold-season pressure loss.</li>
        <li><strong>Install a battery tender or disconnect the battery.</strong> Battery tender preferred.</li>
        <li><strong>Clean the interior and exterior.</strong> Food scraps attract pests; dirt holds moisture.</li>
        <li><strong>Place moisture absorbers inside.</strong> DampRid or silica packets.</li>
        <li><strong>Block vent intakes.</strong> Steel wool or dryer sheets at exterior vent openings.</li>
        <li><strong>Cover the car.</strong> Breathable fabric cover indoors; waterproof cover outdoors.</li>
      </ol>

      <h2>Battery options for long-term storage</h2>
      <p>
        Three battery strategies, in order of preference:
      </p>
      <ul>
        <li><strong>Battery tender (best):</strong> Plug-in trickle charger that keeps the battery at full charge. Install once, forget until spring. Requires garage power.</li>
        <li><strong>Disconnect the negative terminal:</strong> Stops the slow drain from onboard electronics. Note: may reset radio, nav, and some comfort settings. Confirm your car does not require dealer reset.</li>
        <li><strong>Full battery removal:</strong> Store the battery indoors on a charger. Most work for garage-less storage.</li>
      </ul>

      <h2>Insurance adjustments for stored vehicles</h2>
      <p>
        Most insurers offer stored-vehicle rates:
      </p>
      <ul>
        <li>Drop liability coverage (no one is driving it)</li>
        <li>Keep comprehensive (theft, fire, falling tree, garage damage)</li>
        <li>Possibly drop collision depending on insurer</li>
        <li>Save 30 to 60 percent on monthly premium for 4 to 5 months</li>
      </ul>
      <p>
        Call your insurer 1 to 2 weeks before you leave. Confirm the switch-back process so you have full coverage before spring driving.
      </p>

      <h2>Preventing mice and other critters</h2>
      <p>
        Mice love stored cars. Prevention steps:
      </p>
      <ul>
        <li>No food or crumbs inside the car</li>
        <li>Block vent intakes under the hood with steel wool</li>
        <li>Place dryer sheets inside the cabin (replace every 2 to 3 months if you can)</li>
        <li>Peppermint oil sachets in the trunk and under seats</li>
        <li>Mouse traps around (not inside) the car in the garage</li>
      </ul>
      <p>
        A professional pest service may be worth it if you have had rodent damage before.
      </p>

      <h2>What to tell your garage or storage location manager</h2>
      <p>
        If you store the car at a commercial facility (self-storage, friends garage, rented space):
      </p>
      <ul>
        <li>Share emergency contact info (yours and a local person authorized to check in)</li>
        <li>Give the location manager your contact for anything unusual</li>
        <li>Confirm the facility is heated enough to keep the battery from freezing (ideally 32F+)</li>
        <li>Confirm the facility has basic security</li>
      </ul>

      <h2>What NOT to do during long storage</h2>
      <p>
        Common mistakes:
      </p>
      <ul>
        <li>Starting the engine for 5 minutes every month (does more harm than good)</li>
        <li>Leaving windows cracked for airflow (invites humidity and mice)</li>
        <li>Leaving the parking brake engaged for 4+ months (can seize)</li>
        <li>Storing with low fuel (encourages tank condensation)</li>
        <li>Covering with a tarp over paint (holds moisture, scratches finish)</li>
      </ul>

      <h2>Spring reactivation checklist</h2>
      <p>
        When you return, before you drive:
      </p>
      <ol>
        <li>Visual walk-around (look for damage, rodent entry, leaks)</li>
        <li>Reconnect the battery (if disconnected)</li>
        <li>Check tire pressure</li>
        <li>Start the engine, let it idle 10 to 15 minutes</li>
        <li>Check fluid levels (oil, coolant, brake, washer)</li>
        <li>Short local drive (10 to 20 miles) to recirculate fluids</li>
        <li>Oil change scheduled within the first week back</li>
      </ol>
      <p>
        For prepping the car you ship south instead of leave behind, see our{' '}
        <Link href="/resources/snowbird-vehicle-preparation-checklist">snowbird vehicle preparation checklist</Link>
        .
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to winterize your northern vehicle?</h2>
      <p>
        A properly winterized car is ready to drive the day you get home — no dead battery call, no fuel-pump replacement, no mouse-nest repair. Follow the 10-step checklist, adjust insurance, and prep for critters. For the shipping side of the trip, request a free quote and we will handle the car heading south while you prep the one staying home.
      </p>
    </ArticleShell>
  );
}
