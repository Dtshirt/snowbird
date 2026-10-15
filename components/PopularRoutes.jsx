import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { routes } from '@/data/routes';

export default function PopularRoutes({ limit = 8 }) {
  const featured = routes.slice(0, limit);
  return (
    <section id="routes" className="py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Snowbird Routes"
          title="Popular seasonal auto transport corridors"
          description="Snowbird transportation is a peak-and-lull business. These are among the most heavily traveled snowbird routes we support each season."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <Link
              key={r.slug}
              href={`/routes/${r.slug}`}
              className="group card card-hover flex flex-col justify-between border border-slate-200/60"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  {r.origin.split(' ')[0]}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-brand-goldLight">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {r.destination}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-brand-navy group-hover:text-brand-blue">
                  {r.origin} to {r.destination}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">{r.summary}</p>
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-xs">
                <div>
                  <dt className="text-slate-500">Distance</dt>
                  <dd className="font-semibold text-brand-navy">{r.distanceMiles.toLocaleString()} mi</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Transit</dt>
                  <dd className="font-semibold text-brand-navy">{r.transitDays}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">From</dt>
                  <dd className="font-semibold text-brand-navy">${r.priceLow}</dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/#quote" className="btn-secondary">
            Not seeing your route? Request a custom quote
          </Link>
        </div>
      </div>
    </section>
  );
}
