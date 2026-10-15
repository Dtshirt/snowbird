export default function PopularLocations({ title, description, items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">Popular Locations</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">{title}</h2>
          {description && <p className="mt-3 text-slate-600">{description}</p>}
        </div>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={i} className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3 text-sm text-brand-navy">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
