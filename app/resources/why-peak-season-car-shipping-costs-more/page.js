import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import ArticleFAQ from '@/components/ArticleFAQ';
import { getResourceBySlug } from '@/data/resources';

const slug = 'why-peak-season-car-shipping-costs-more';

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
    q: 'How much more do snowbird routes cost in peak season vs off-peak?',
    a: 'Peak-season snowbird quotes usually run 20 to 40 percent above off-peak. A $900 off-peak Northeast to Florida run can land at $1,100 to $1,250 in late November. The gap widens on enclosed service, where supply is tighter.'
  },
  {
    q: 'Is the price difference driver pay or broker margin?',
    a: 'Mostly driver pay. In peak, brokers raise the dispatch price offered to carriers so a truck accepts the load. Broker margin stays similar in dollars but shrinks as a percentage of the total. Peak pricing is a market-clearing mechanism, not a markup. [INSERT STAT + SOURCE: broker survey]'
  },
  {
    q: 'Why does my enclosed quote jump more than my open quote in peak season?',
    a: 'Open carrier supply nationally is 10x the enclosed carrier supply. When demand rises, enclosed hits capacity faster. Enclosed snowbird quotes can rise 30 to 50 percent in peak weeks vs 20 to 30 percent for open. [INSERT STAT + SOURCE: FMCSA fleet data]'
  },
  {
    q: 'If I book 4 months out, do I lock in off-peak pricing?',
    a: 'You lock in the quoted rate for a reasonable window (usually 60 to 90 days). If market rates swing more than 10 percent before dispatch, brokers may adjust. Early booking generally buys price stability, not a guaranteed off-peak price.'
  },
  {
    q: 'Why does the week before Thanksgiving cost more than the week after?',
    a: 'The holiday itself concentrates snowbird demand. Everyone wants their car at the Florida home before Thanksgiving so family can arrive with cars already in place. Supply tightens, prices spike. After the holiday, demand resets and prices soften for 7 to 10 days.'
  },
  {
    q: 'Is the fuel surcharge included in my peak-season quote?',
    a: 'Yes. The quote you receive is all-in: base rate + fuel + any accessorial fees for your route. If diesel prices spike between quote and dispatch, carriers may ask for a fuel adjustment — but that is rare on quotes under 60 days old. [INSERT: link to EIA diesel pricing data]'
  },
  {
    q: 'Does peak season affect carrier reliability or just price?',
    a: 'Both. Peak-week dispatch delays are 1 to 2 days longer on average. On-time delivery drops from 85 percent off-peak to 70 to 75 percent in peak. The 3-day pickup window becomes 5 to 7 days for many routes. [INSERT EXPERIENCE]'
  },
  {
    q: 'Is there a difference between peak-season pricing on short routes vs long routes?',
    a: 'Short routes (under 500 miles) see smaller percentage jumps in peak because they are easier to dispatch. Long routes (1,500+ miles) see the biggest jumps — carriers can only run so many long legs per month, and in peak those slots fill fast.'
  },
  {
    q: 'When does peak-season pricing actually "turn off" each year?',
    a: 'Fall southbound peak softens around December 10. Spring northbound peak softens around May 10. Both have a 2 to 3 week transition period where prices cool but still carry some premium. True off-peak pricing resumes mid-January and mid-June.'
  },
  {
    q: 'If a broker quotes me 40 percent above a competitor during peak, is the broker overcharging?',
    a: 'Not necessarily. In peak, brokers that pay carriers more actually get your car moved on time. A 40 percent higher quote may be the price a reliable carrier accepts. The cheap quote may sit for a week before anyone picks it up. Judge brokers by delivery performance, not just price.'
  }
];

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        <strong>Peak season car shipping costs more</strong> for one simple reason: more cars need to move than there are trucks to move them. On snowbird lanes, this hits twice a year — late October through early December for fall southbound, and late March through early May for spring northbound. During those windows, prices rise 20 to 40 percent above off-peak. This page explains the pricing math brokers use, why some weeks jump more than others, and how snowbirds can plan around the peak-season premium.
      </p>

      <h2>What "peak season" means in snowbird car shipping</h2>
      <p>
        Peak season is a demand window where carrier capacity is maxed out. On snowbird routes, there are two peaks:
      </p>
      <ul>
        <li><strong>Fall southbound peak:</strong> Late October through December 10</li>
        <li><strong>Spring northbound peak:</strong> Late March through May 10</li>
      </ul>
      <p>
        Inside each peak, 2 to 3 weeks carry the biggest premium — holiday-adjacent weeks and the natural travel-planning spikes.
      </p>

      <h2>Why carrier supply tightens in peak season</h2>
      <p>
        Three things tighten carrier supply during snowbird peaks:
      </p>
      <ol>
        <li><strong>Fixed fleet size.</strong> The national auto carrier fleet is roughly fixed year-over-year. It cannot flex up in October and down in July.</li>
        <li><strong>Driver hours of service rules.</strong> FMCSA caps driver hours. A carrier cannot just dispatch more loads per truck in peak.</li>
        <li><strong>One-way lane imbalance.</strong> In fall, southbound demand far exceeds northbound. Trucks returning north run partially empty, so carriers price southbound higher to balance total revenue per trip.</li>
      </ol>

      <h2>How demand spikes drive the peak-season price curve</h2>
      <p>
        Snowbird demand compresses into about 10 weeks per year (5 fall + 5 spring). The rest of the year sees light snowbird volume. Carriers price around this: off-peak rates lose money for carriers that specialize in snowbird lanes if peak rates do not subsidize the slow months.
      </p>
      <p>
        The highest-premium weeks are:
      </p>
      <ul>
        <li>Week before Thanksgiving</li>
        <li>Second week of November</li>
        <li>Week before Easter</li>
        <li>Second week of April (tax week)</li>
      </ul>

      <h2>How fuel costs factor into peak-season pricing</h2>
      <p>
        Fuel surcharges adjust monthly based on national diesel averages. In peak season, fuel surcharges are usually unchanged from shoulder months — the base rate rises, not the fuel line. Where fuel does matter: multi-month quotes may need a fuel adjustment if diesel prices spike between quote and dispatch.
      </p>
      <p>
        You can watch current diesel pricing at the US Energy Information Administration site (eia.gov). Verify with your carrier for exact fuel-surcharge terms.
      </p>

      <h2>How brokers price peak-season loads</h2>
      <p>
        Here is the broker pricing math simplified:
      </p>
      <ol>
        <li><strong>Load board rate.</strong> Brokers watch Central Dispatch and similar load boards for current market rates on your route.</li>
        <li><strong>Carrier pay offer.</strong> Broker calculates what to pay a carrier to accept the load within your pickup window.</li>
        <li><strong>Broker margin.</strong> Added on top (usually $100 to $250 flat, not percentage).</li>
        <li><strong>Your quote.</strong> Carrier pay + broker margin + any accessorial fees.</li>
      </ol>
      <p>
        In peak, step 2 rises. In off-peak, step 2 falls. Broker margin stays roughly constant.
      </p>

      <h2>How to save during peak season without missing it</h2>
      <p>
        Four strategies that work:
      </p>
      <ul>
        <li><strong>Book 60 to 90 days out.</strong> Lock a rate before peak truly firms up.</li>
        <li><strong>Set a 3- to 5-day pickup window.</strong> Lets the carrier optimize routing and pass savings to you.</li>
        <li><strong>Avoid holiday-adjacent weeks.</strong> Shift Thanksgiving or Easter weeks by 2 weeks to save 10 to 15 percent.</li>
        <li><strong>Consider open over enclosed.</strong> Open supply is 10x enclosed, so peak premiums are smaller.</li>
      </ul>
      <p>
        For more on timing, see our{' '}
        <Link href="/resources/snowbird-shipping-calendar">snowbird car shipping calendar</Link>
        . For a cost planning number, use the{' '}
        <Link href="/snowbird-car-shipping-cost-calculator">snowbird car shipping cost calculator</Link>
        .
      </p>

      <h2>Peak season for route-level planning</h2>
      <p>
        Different snowbird routes feel peak differently:
      </p>
      <ul>
        <li><strong>Northeast → Florida:</strong> Highest peak premium (30 to 40 percent)</li>
        <li><strong>Midwest → Arizona:</strong> Moderate peak premium (20 to 30 percent)</li>
        <li><strong>Pacific Northwest → California:</strong> Smallest peak premium (15 to 25 percent)</li>
      </ul>
      <p>
        Routes with higher snowbird concentration (Northeast to Florida) see bigger peak jumps than lower-concentration routes.
      </p>

      <ArticleFAQ items={faqs} />

      <h2>Ready to plan around snowbird peak season?</h2>
      <p>
        Peak season adds real cost to snowbird car shipping — but with 60- to 90-day booking lead time, a flexible pickup window, and smart week selection, most snowbirds trim 10 to 20 percent off the peak premium. Request a free quote and a snowbird specialist will help you time the booking to beat the biggest spikes.
      </p>
    </ArticleShell>
  );
}
