export default function TransitTime({ route }) {
  const stages = [
    { title: 'Pickup Window', description: '1–3 day window from your requested pickup date depending on carrier availability along the route.' },
    { title: 'In Transit', description: `${route.transitDays} for typical door-to-door transit between ${route.origin} and ${route.destination}.` },
    { title: 'Delivery Window', description: 'Your driver calls 12–24 hours ahead to arrange final delivery timing.' }
  ];
  return (
    <section className="border-b border-slate-200 py-16">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">Transit Time</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
            How long does {route.origin} to {route.destination} take?
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Transit time on this route generally runs {route.transitDays}. Actual timing depends on carrier scheduling, weather, and hours-of-service regulations.
          </p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {stages.map((stage, i) => (
            <li key={i} className="relative rounded-xl border border-slate-200 bg-brand-cream/50 p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Step {i + 1}</div>
              <div className="mt-2 font-display text-lg font-semibold text-brand-navy">{stage.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{stage.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
