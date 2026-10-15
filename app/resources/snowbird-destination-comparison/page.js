import Link from 'next/link';
import ArticleShell from '@/components/ArticleShell';
import { destinationStates } from '@/data/destinations';

const slug = 'snowbird-destination-comparison';

export const metadata = {
  title: 'Florida vs Arizona vs Texas vs California for Snowbirds',
  description:
    'A side-by-side comparison of the four leading US snowbird destinations — main regions, common origins, seasonal patterns, and route considerations.',
  alternates: { canonical: `/resources/${slug}` }
};

export default function ComparisonPage() {
  return (
    <ArticleShell
      category="Comparison"
      title="Florida vs Arizona vs Texas vs California for Snowbirds"
      description="A side-by-side look at the four leading US snowbird destinations. There is no single best choice — the right destination depends on where you live now, how far you want to travel, and what kind of winter you're looking for."
      readingTime="9 min read"
      slug={slug}
    >
      <p>
        Florida, Arizona, Texas, and California each anchor a distinct snowbird cluster. The Northeast leans heavily toward Florida.
        The Upper Midwest fills Texas RV parks. The Pacific Northwest and Mountain West split between Arizona and Southern California.
        Below is a plain comparison of what each destination offers.
      </p>

      <h2>Quick comparison table</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-cream text-xs font-semibold uppercase tracking-widest text-brand-gold">
            <tr>
              <th className="p-3">Factor</th>
              {destinationStates.map((d) => (
                <th key={d.slug} className="p-3">{d.name}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <Row label="Main regions" cells={destinationStates.map((d) => d.regions.slice(0, 2).join(' · '))} />
            <Row label="Common origins" cells={destinationStates.map((d) => d.popularOriginStates.slice(0, 3).join(', '))} />
            <Row label="Season peak" cells={destinationStates.map((d) => d.seasonPeak)} />
            <Row label="Return peak" cells={destinationStates.map((d) => d.returnPeak)} />
            <Row label="Climate" cells={destinationStates.map((d) => d.climate)} />
            <Row label="Price range" cells={destinationStates.map((d) => `$${d.typicalPriceRange.low}–$${d.typicalPriceRange.high}`)} />
          </tbody>
        </table>
      </div>

      <h2>Florida</h2>
      <p>
        Florida remains the most established snowbird destination and covers the largest range of price points and community types.
        Northeast and Great Lakes snowbirds dominate the market. Southbound demand peaks in November; the return north peaks in April.
        East Coast routes on I-95 tend to price a bit lower than Midwest-to-Gulf lanes on I-75, but both corridors have deep carrier
        coverage.
      </p>
      <p><Link href="/destinations/florida">See Florida snowbird shipping →</Link></p>

      <h2>Arizona</h2>
      <p>
        Arizona is the Southwest anchor. Phoenix and Mesa concentrate the most 55+ community and RV resort delivery, with Tucson and
        Yuma close behind. Pacific Northwest, Mountain West, and Midwest origins are common. Long-haul routes cross mountain passes,
        and early-season snow in Colorado or northern New Mexico can add a day or two to fall southbound transit.
      </p>
      <p><Link href="/destinations/arizona">See Arizona snowbird shipping →</Link></p>

      <h2>Texas</h2>
      <p>
        Texas is the "Winter Texan" market — driven overwhelmingly by the Rio Grande Valley from McAllen to Brownsville, with a
        secondary coastal cluster around Corpus Christi. Minnesota, Wisconsin, and Iowa are the largest origin states. Season timing
        runs slightly earlier than Florida on the return leg (March–April rather than April–May).
      </p>
      <p><Link href="/destinations/texas">See Texas snowbird shipping →</Link></p>

      <h2>California</h2>
      <p>
        Southern California is the West Coast destination cluster, anchored by the Coachella Valley — Palm Springs, Palm Desert,
        Rancho Mirage, Indian Wells, La Quinta — and by San Diego on the coast. Pacific Northwest, Nevada, and Mountain West origins
        are common. Pricing runs slightly higher than Arizona for equivalent distances due to lower carrier density on final-mile
        Coachella Valley delivery.
      </p>
      <p><Link href="/destinations/california">See California snowbird shipping →</Link></p>

      <h2>Which is right for you?</h2>
      <p>The best snowbird destination for your household usually comes down to:</p>
      <ul>
        <li><strong>Home location:</strong> Northeast → Florida is closest; Upper Midwest → Texas is often the shortest run; Pacific Northwest → Arizona or California; Mountain West → Arizona.</li>
        <li><strong>Community type:</strong> Golf communities are strong in Florida and Arizona. RV resorts dominate South Texas. Coastal beach living leans Florida East Coast or San Diego.</li>
        <li><strong>Climate preference:</strong> Humid vs dry, coastal vs desert, mild vs warm — each destination sits in a different profile.</li>
        <li><strong>Budget:</strong> Cost of living in the Rio Grande Valley is generally the lowest of the four; the Coachella Valley and Southeast Florida trend higher.</li>
      </ul>

      <p>
        There is no universally best snowbird destination. The right destination depends on where you're starting from, how you like to spend the winter, and what kind of community you want to be part of when you arrive.
      </p>
    </ArticleShell>
  );
}

function Row({ label, cells }) {
  return (
    <tr className="bg-white">
      <th className="p-3 text-left align-top text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</th>
      {cells.map((cell, i) => (
        <td key={i} className="p-3 align-top text-slate-700">{cell}</td>
      ))}
    </tr>
  );
}
