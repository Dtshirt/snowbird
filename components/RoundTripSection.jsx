import Link from 'next/link';

export default function RoundTripSection({ destinationName }) {
  const dest = destinationName || 'your winter destination';
  return (
    <section className="bg-brand-cream py-16">
      <div className="container-page grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="eyebrow">Round-Trip Snowbird Shipping</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            Plan both legs of the season
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Most snowbirds ship in the fall to reach {dest}, then ship again in the spring to return home. Planning both legs
            in advance helps you lock in pickup windows on either end and avoid the peak-season rush.
          </p>
          <Link href="/#quote" className="btn-secondary mt-6">Request Both Legs</Link>
        </div>
        <div className="lg:col-span-3">
          <ol className="grid gap-4 sm:grid-cols-2">
            <Leg
              label="Fall — Southbound"
              period="Oct – Dec"
              lines={[
                'Book 3–4 weeks ahead of your travel date',
                'Winter home reached before you drive',
                'Fly to your destination and pick up the car'
              ]}
            />
            <Leg
              label="Spring — Northbound"
              period="Mar – May"
              lines={[
                'Book while you are still at your winter home',
                'Northbound carriers are lightest early April',
                'Arrive home to a car waiting for summer'
              ]}
            />
          </ol>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600 leading-relaxed">
            Round-trip planning is not a guaranteed discount. It is a scheduling advantage — you get earlier access to carrier
            availability on both legs, which typically means better pickup windows.
          </div>
        </div>
      </div>
    </section>
  );
}

function Leg({ label, period, lines }) {
  return (
    <li className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{label}</div>
        <div className="text-xs font-medium text-slate-500">{period}</div>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
        {lines.map((line, i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-goldLight" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
