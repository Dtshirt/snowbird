export default function RouteOverview({ route }) {
  const stats = [
    { label: 'Distance', value: `${route.distanceMiles.toLocaleString()} mi` },
    { label: 'Typical Transit', value: route.transitDays },
    { label: 'Starting Price', value: `$${route.priceLow}` },
    { label: 'Peak Season', value: route.peakMonths.slice(0, 2).join(' – ') }
  ];
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-page py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-200 bg-brand-cream/50 p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{s.label}</div>
              <div className="mt-1 font-display text-2xl font-bold text-brand-navy">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-navy">
              Shipping a car from {route.origin} to {route.destination}
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">{route.summary}</p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Most snowbirds along this corridor ship southbound between {route.peakMonths[0]} and {route.peakMonths[route.peakMonths.length - 1]}, and return north between {route.returnMonths[0]} and {route.returnMonths[route.returnMonths.length - 1]}.
              Booking 2–3 weeks in advance during peak windows helps secure preferred pickup dates.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Highway Corridors</div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {route.highwayCorridors.map((h) => (
                  <li key={h} className="rounded-full bg-brand-navy/5 px-3 py-1 text-xs font-semibold text-brand-navy">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Popular City Pairs</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                {route.popularPairs.map(([from, to], i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="font-medium">{from}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-brand-goldLight">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium">{to}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
