import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'open-vs-enclosed-car-shipping-snowbird';

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
    q: "Does my car's warranty cover damage from open-air road debris?",
    a: 'Factory warranties almost never cover cosmetic damage from road debris — rock chips, paint scuffs, stone cracks in the windshield. That falls to your personal comprehensive policy or the carrier\'s cargo insurance. If you drive a new car and worry about paint, enclosed transport is the cheaper way to protect it than a repaint later.'
  },
  {
    q: 'How much extra does a hard-top convertible or targa top cost to ship enclosed?',
    a: 'Hard-tops ship at standard enclosed rates. Soft-tops and targa tops with removable panels sometimes carry a $75 to $150 "specialty handling" fee because the driver has to confirm the top is latched and intact at both ends. Ask upfront so it is on the quote.'
  },
  {
    q: 'If my car is modified (lifted truck, oversized tires), does that force enclosed?',
    a: 'A lift kit does not force enclosed, but it may bump you to a lower-deck slot on an open carrier because of height limits. Oversized tires can trigger a surcharge of $100 to $200 if the truck has to re-chain or shift the loading plan. Enclosed trailers have a lower internal height, so very tall lifted trucks sometimes do not fit.'
  },
  {
    q: 'Will my enclosed carrier use a liftgate or ramps for a low-clearance car?',
    a: 'Premium enclosed carriers use a hydraulic liftgate for cars under 4 inches ground clearance. Standard enclosed trailers use low-angle ramps. Confirm liftgate availability at booking if your car is low — a ramp loading on a very low car can scrape the front splitter or exhaust.'
  },
  {
    q: 'Can I pack more personal items in an enclosed shipment since the trailer is covered?',
    a: 'No. FMCSA rules on personal items in a shipped vehicle apply the same way to open and enclosed. The 100-pound guideline, below-window-line placement, and no-valuables rule all stand. The enclosed trailer does not change what you are allowed to leave inside.'
  },
  {
    q: 'Is enclosed transport insurance limit higher than open?',
    a: 'Usually yes. Open carriers often carry cargo policy limits of $100,000 to $250,000 per vehicle. Enclosed specialists often carry $500,000 to $1,000,000 or more per vehicle. For a $200,000+ collector car, confirm the carrier\'s limit in writing before booking — some lower-tier enclosed carriers under-insure.'
  },
  {
    q: 'What if a hurricane watch is issued while my car is en route in an open trailer?',
    a: 'Carriers reroute or hold off storm zones. Severe weather is almost always listed as a non-penalty delay in the contract. Enclosed does protect from direct water contact, but neither open nor enclosed is a reason to ship through an active hurricane. For storm-season logistics, see our hurricane-season Florida shipping notes in the main cost guide.'
  },
  {
    q: 'If I pick enclosed, do I still have to walk around the car at delivery?',
    a: 'Yes — the walk-around is non-negotiable regardless of transport type. The whole bill-of-lading process assumes a visual inspection on both ends. Signing without walking the car gives up your right to a damage claim.'
  },
  {
    q: 'Are enclosed carriers slower than open on the same route?',
    a: 'Usually 1 to 3 days slower. Fewer enclosed carriers run each lane, so the dispatcher may wait longer to find a truck headed your way, and enclosed trucks often carry fewer cars (so they make more stops per load). Build an extra 2 to 4 days into your delivery window if you pick enclosed.'
  },
  {
    q: 'My car is dirty from winter salt. Does enclosed transport care?',
    a: 'Some enclosed carriers refuse to load a salt-caked car to protect their trailer floor and other cars inside. A quick wash before pickup is the right move, especially for a late-spring northbound trip after a hard winter. '
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        For most snowbirds, <strong>open car shipping</strong> is the right pick — it is cheaper, more widely available, and plenty safe for daily-driver cars. Enclosed shipping is worth the premium only for luxury, classic, exotic, or very low-clearance vehicles that need extra protection from weather and road debris. This page walks through the real differences between open vs enclosed snowbird car shipping, what each actually costs, and which snowbird vehicles belong on which trailer.
      </p>

      <h2>Open vs enclosed car shipping — the direct answer</h2>
      <p>
        Open transport moves your car on a two-level open-air carrier, the same type that delivers new cars from factories to dealerships. Enclosed transport uses a fully covered trailer. Enclosed costs 30 to 50 percent more and takes 1 to 3 days longer because fewer enclosed carriers run each lane.
      </p>

      <h2>How much more does enclosed transport cost?</h2>
      <p>
        Enclosed snowbird car shipping costs about 30 to 50 percent more than open on the same route. Here are typical price bands:
      </p>
      <ul>
        <li><strong>Northeast → Florida:</strong> $900–$1,300 open · $1,200–$1,800 enclosed</li>
        <li><strong>Midwest → Florida:</strong> $800–$1,200 open · $1,100–$1,600 enclosed</li>
        <li><strong>Northeast → Arizona:</strong> $1,100–$1,500 open · $1,500–$2,100 enclosed</li>
        <li><strong>Pacific Northwest → Palm Springs:</strong> $700–$1,100 open · $1,000–$1,500 enclosed</li>
      </ul>
      <p>
        For a planning number tailored to your route, run both options in our{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        . For a full cost breakdown, see our{' '}
        <Link href="/resources/snowbird-car-shipping-cost">snowbird car shipping cost guide</Link>
        .
      </p>

      <h2>Which cars really need enclosed transport?</h2>
      <p>
        Not every car needs the extra cover. Enclosed makes sense when the vehicle is one or more of these:
      </p>
      <ul>
        <li>Classic or collector car (pre-1990, numbers-matching, or restored)</li>
        <li>Luxury or exotic (Porsche, Ferrari, Bentley, Rolls-Royce, high-end AMG / M-spec)</li>
        <li>Hand-painted or custom-wrapped</li>
        <li>Ground clearance under 4 inches</li>
        <li>Hard-to-replace rare parts (vintage trim, show-car fenders)</li>
        <li>Resale value over $75,000</li>
      </ul>
      <p>
        For a standard sedan, SUV, minivan, or pickup used as a daily driver, open transport is fine. Open carriers move most of the new cars on US roads today — the same equipment that brought your car to the dealership the first time.
      </p>

      <h2>When open transport is the smarter buy</h2>
      <p>
        Open transport wins on cost, availability, and speed. Pick open when:
      </p>
      <ul>
        <li>You drive a mainstream brand (Toyota, Honda, Ford, Chevy, Nissan, Hyundai, Kia)</li>
        <li>The car is 2 to 10 years old</li>
        <li>Your pickup window is tight (fewer carriers = longer dispatch for enclosed)</li>
        <li>You want the lowest quote</li>
        <li>Your route avoids active hurricane or heavy snow weeks</li>
      </ul>
      <p>
        <em>Honest downside of open transport:</em> your car can arrive dusty, with light road grime or small weather marks. These wash off. Serious damage is rare and covered by the carrier's cargo insurance — but you must note it on the bill of lading at delivery.
      </p>

      <h2>When enclosed is the smarter buy</h2>
      <p>
        Enclosed wins on protection. Pick enclosed when:
      </p>
      <ul>
        <li>Your car is luxury, exotic, classic, or has custom paint</li>
        <li>You want zero exposure to road debris or weather</li>
        <li>The car has very low ground clearance and needs liftgate loading</li>
        <li>You are shipping during a known storm week (fewer options, but safer)</li>
        <li>Resale is sensitive to any paint or trim damage</li>
      </ul>
      <p>
        Enclosed carriers typically carry higher per-vehicle cargo insurance limits ($500K to $1M+) vs open carriers ($100K to $250K). For a six-figure car, this gap alone can be the reason to pay the premium.
      </p>

      <h2>How to choose between open and enclosed for your snowbird trip</h2>
      <p>
        Use this four-question check:
      </p>
      <ol>
        <li><strong>Is the car worth more than $75,000?</strong> If yes, lean enclosed.</li>
        <li><strong>Is the car custom-painted, wrapped, or restored?</strong> If yes, enclosed.</li>
        <li><strong>Is ground clearance under 4 inches?</strong> If yes, enclosed with a liftgate.</li>
        <li><strong>Would you be upset by minor road grime at delivery?</strong> If yes, enclosed.</li>
      </ol>
      <p>
        Three or four "yes" answers point to enclosed. Zero or one "yes" means open is the right pick.
      </p>

      <h2>Open vs enclosed snowbird transport: side-by-side compare</h2>
      <p>
        A fast reference:
      </p>
      <ul>
        <li><strong>Cost:</strong> Open is cheapest. Enclosed is 30–50% more.</li>
        <li><strong>Availability:</strong> Open is on every lane. Enclosed may require 1–3 extra days of dispatch.</li>
        <li><strong>Speed:</strong> Open delivers in 3–8 days. Enclosed delivers in 5–11 days on the same lane.</li>
        <li><strong>Protection:</strong> Open exposes to weather and dust. Enclosed is sealed.</li>
        <li><strong>Insurance:</strong> Open: $100K–$250K per vehicle. Enclosed: $500K–$1M+.</li>
        <li><strong>Loading:</strong> Open uses ramps. Enclosed often has hydraulic liftgate for low cars.</li>
        <li><strong>Best fit:</strong> Open for daily drivers. Enclosed for luxury, classic, exotic, or custom.</li>
      </ul>

      <h2>Does weather matter when picking open vs enclosed?</h2>
      <p>
        For most of the snowbird season, no. Open carriers run through rain, light snow, and normal road conditions without harming vehicles. Modern paint and clear-coat are built for daily highway exposure.
      </p>
      <p>
        Where weather does matter: hurricane season (June through November on Gulf and Atlantic lanes) and heavy-snow weeks on Midwest-to-Southwest routes. Both can delay any shipment, open or enclosed. For a storm-season trip, enclosed does not get through faster — it just protects the car from the elements if you have to ship anyway.
      </p>
      <p>
        For destination-specific storm notes, see our{' '}
        <Link href="/destinations/florida">Florida</Link> and{' '}
        <Link href="/destinations/texas">Texas</Link> guides.
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Open vs enclosed snowbird transport: our bottom line</h2>
      <p>
        For most snowbirds, open car shipping is the right call — it is cheaper, faster to dispatch, and plenty safe for a daily driver. Pay the enclosed premium when the car is luxury, classic, or custom, or when ground clearance makes enclosed loading a safety need. Price both sides before you book — the gap is often smaller than you expect. When you are ready, get a free quote and we will send you open and enclosed numbers side by side.
      </p>
    </ArticleShell>
  );
}
