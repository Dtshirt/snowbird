export default function DestinationSeasonStrip({ destination }) {
  if (!destination) return null;
  const items = [
    { label: 'Season starts', value: destination.seasonStart, mode: 'south' },
    { label: 'Peak', value: destination.seasonPeak, mode: 'south' },
    { label: 'Season ends', value: destination.seasonEnd, mode: 'south' },
    { label: 'Return starts', value: destination.returnStart, mode: 'north' },
    { label: 'Return peak', value: destination.returnPeak, mode: 'north' },
    { label: 'Return ends', value: destination.returnEnd, mode: 'north' }
  ];
  return (
    <section className="border-b border-slate-200 bg-white py-14">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">Seasonal Calendar</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            Snowbird timing for {destination.name}
          </h2>
          <p className="mt-3 text-slate-600">
            Snowbird demand for {destination.name} is peak-driven. Booking ahead of the peak windows improves pricing and pickup flexibility.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((i, idx) => (
            <div key={idx} className={`rounded-xl border p-4 ${i.mode === 'south' ? 'border-brand-goldLight/60 bg-brand-goldLight/10' : 'border-brand-steel/40 bg-brand-sky'}`}>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-gold">{i.label}</div>
              <div className="mt-1 text-sm font-semibold text-brand-navy">{i.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 text-xs">
          <span className="inline-flex items-center gap-2 text-slate-600">
            <span className="h-2 w-4 rounded-sm bg-brand-goldLight" /> Southbound (fall)
          </span>
          <span className="inline-flex items-center gap-2 text-slate-600">
            <span className="h-2 w-4 rounded-sm bg-brand-steel/60" /> Northbound (spring)
          </span>
        </div>
      </div>
    </section>
  );
}
