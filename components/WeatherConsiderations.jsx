export default function WeatherConsiderations({ weather, route }) {
  if (!weather && !route) return null;
  return (
    <section className="border-y border-slate-200 bg-white py-16">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">Weather &amp; Route Considerations</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            What can affect your transit
          </h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {weather && (
            <div className="rounded-xl border border-slate-200 bg-brand-cream/50 p-6">
              <div className="flex items-center gap-2 text-brand-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                  <path d="M8 18h9a4 4 0 1 0-1.5-7.7 6 6 0 0 0-11.4 2.5A4 4 0 0 0 8 18z" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-widest">Weather</span>
              </div>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">{weather}</p>
            </div>
          )}
          {route && (
            <div className="rounded-xl border border-slate-200 bg-brand-cream/50 p-6">
              <div className="flex items-center gap-2 text-brand-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                  <path d="M4 7l4-3 8 3 4-3v13l-4 3-8-3-4 3z" strokeLinejoin="round" />
                  <path d="M8 4v13M16 7v13" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-widest">Route</span>
              </div>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">{route}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
