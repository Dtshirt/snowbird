export default function RouteMap({ origin, destination, corridors = [] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-brand-cream/40 p-6">
      <div className="eyebrow">Route Snapshot</div>
      <div className="mt-4 flex items-center justify-between text-brand-navy">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
              <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>
          <div className="mt-2 text-sm font-semibold">{origin}</div>
          <div className="text-xs text-slate-500">Pickup</div>
        </div>
        <div className="mx-4 flex-1">
          <div className="relative h-1 rounded-full bg-brand-goldLight/60">
            <div className="absolute -top-1 left-0 h-3 w-3 rounded-full bg-brand-gold" />
            <div className="absolute -top-1 right-0 h-3 w-3 rounded-full bg-brand-gold" />
          </div>
          {corridors.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {corridors.map((c) => (
                <span key={c} className="rounded-full border border-brand-navy/10 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-brand-navy">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-goldLight">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="mt-2 text-sm font-semibold">{destination}</div>
          <div className="text-xs text-slate-500">Delivery</div>
        </div>
      </div>
    </div>
  );
}
