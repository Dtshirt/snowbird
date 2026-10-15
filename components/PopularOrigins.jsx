import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { originStates } from '@/data/states';

export default function PopularOrigins() {
  return (
    <section id="origins" className="bg-brand-cream py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Origin States"
          title="Where snowbird shipments start"
          description="See snowbird auto transport information for the northern states most snowbirds travel from each fall."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {originStates.map((s) => (
            <Link
              key={s.slug}
              href={`/states/${s.slug}`}
              className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-brand-goldLight hover:shadow-md"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{s.abbr}</div>
                <div className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue">{s.name}</div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-slate-400 group-hover:text-brand-navy">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
