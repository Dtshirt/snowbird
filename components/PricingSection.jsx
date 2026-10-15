import SectionHeading from './SectionHeading';

const factors = [
  {
    title: 'Route distance',
    description:
      'Longer distances raise total transport cost, but per-mile pricing typically drops for longer runs like Michigan to Florida.'
  },
  {
    title: 'Vehicle size and condition',
    description:
      'Larger vehicles take up more space on a carrier. Non-running vehicles need special equipment and cost more to move.'
  },
  {
    title: 'Transport type',
    description:
      'Enclosed transport costs more than open transport but protects the vehicle from weather and road debris.'
  },
  {
    title: 'Season and timing',
    description:
      'Peak snowbird months (October–December southbound, April–May northbound) drive higher demand and pricing.'
  },
  {
    title: 'Location accessibility',
    description:
      'Rural or hard-to-reach pickup and delivery addresses may require terminal pickup or a longer coordination window.'
  },
  {
    title: 'Fuel and market conditions',
    description:
      'Auto transport pricing tracks diesel prices, carrier availability, and lane demand — none of which are fixed year-round.'
  }
];

export default function PricingSection({ routeRange }) {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Snowbird Car Shipping Cost"
          title={routeRange ? `Typical cost: $${routeRange.low}–$${routeRange.high}` : 'What snowbirds typically pay'}
          description={
            routeRange
              ? 'The pricing range shown is a realistic estimate for this route based on recent seasonal data. Your final rate depends on carrier availability, vehicle details, and pickup timing.'
              : 'Snowbird auto transport pricing depends on distance, vehicle, transport type, and how far in advance you book. Here are the primary factors that shape your quote.'
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {factors.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-brand-navy">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
