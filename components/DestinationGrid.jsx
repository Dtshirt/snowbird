import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { destinationStates } from '@/data/destinations';
import { DestinationScene, DestinationHeroImage } from './DestinationScenes';

const accents = {
  florida: {
    bar: 'from-emerald-400/80 to-sky-400/80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M17 3c-1 2-3 3-6 3s-5-1-6 3c-1 3 0 5 2 6 2 1 4 1 4 5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21v-3" strokeLinecap="round" />
      </svg>
    )
  },
  arizona: {
    bar: 'from-orange-400/80 to-amber-400/80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M5.5 18.5l1.5-1.5M17 7l1.5-1.5" strokeLinecap="round" />
      </svg>
    )
  },
  texas: {
    bar: 'from-red-400/80 to-orange-400/80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M12 2l2.5 5 5.5.7-4 3.9 1 5.4L12 14.7 7 17l1-5.4-4-3.9L9.5 7z" strokeLinejoin="round" />
      </svg>
    )
  },
  california: {
    bar: 'from-yellow-400/80 to-rose-400/80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M4 20h16" strokeLinecap="round" />
        <path d="M6 20c1-3 3-6 6-6s5 3 6 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="8" r="3" />
      </svg>
    )
  }
};

export default function DestinationGrid() {
  return (
    <section id="destinations" className="py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Snowbird Destinations"
          title="Where are you spending the winter?"
          description="Whether you're heading to Florida's Gulf Coast, Arizona's desert communities, South Texas, or Southern California, we can help arrange transportation for your vehicle."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinationStates.map((d) => {
            const accent = accents[d.slug] || accents.florida;
            return (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200/60 transition hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <DestinationHeroImage destination={d} height="h-32" className="w-full" />
                <div className={`h-1.5 w-full bg-gradient-to-r ${accent.bar}`} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy">
                      {accent.icon}
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-gold">{d.abbr}</div>
                      <div className="font-display text-2xl font-bold text-brand-navy group-hover:text-brand-blue">
                        {d.name}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{d.tagline}</p>
                  <dl className="mt-4 space-y-1 text-xs text-slate-500">
                    <div className="flex justify-between gap-2">
                      <dt>Popular with</dt>
                      <dd className="text-right font-medium text-brand-navy">
                        {d.popularOriginStates.slice(0, 2).join(' + ')}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt>Cities</dt>
                      <dd className="text-right font-medium text-brand-navy">{d.cityLead}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt>Peak season</dt>
                      <dd className="text-right font-medium text-brand-navy">{d.seasonPeak}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-5 text-sm font-semibold text-brand-navy inline-flex items-center gap-1 group-hover:text-brand-blue">
                    Explore {d.name} Snowbird Shipping
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition group-hover:translate-x-0.5">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
