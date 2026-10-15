// Legacy compact destination-cluster grid. The homepage uses the richer
// DestinationGrid component; this remains available for inline use in future pages.
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { destinationStates } from '@/data/destinations';

export default function PopularDestinations() {
  return (
    <section id="destinations" className="bg-white py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Snowbird Destinations"
          title="Four leading US snowbird states"
          description="Florida, Arizona, Texas and California each anchor a distinct snowbird cluster. Learn about the most requested destinations we transport to each season."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {destinationStates.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group card card-hover border border-slate-200/60"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{d.abbr}</div>
              <div className="mt-1 font-display text-xl font-bold text-brand-navy group-hover:text-brand-blue">
                {d.name}
              </div>
              <p className="mt-3 text-sm text-slate-600 line-clamp-3">{d.tagline}</p>
              <div className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
                {d.cityLead}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
