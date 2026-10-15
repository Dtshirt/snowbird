import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { resources } from '@/data/resources';

export const metadata = {
  title: 'Snowbird Car Shipping Resources & Guides',
  description:
    'Practical guides for snowbirds shipping vehicles between northern states and warmer destinations. Cost, timing, preparation and best practices.',
  alternates: { canonical: '/resources' }
};

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
      <Hero
        eyebrow="Snowbird Resources"
        title="Practical guides for snowbird auto transport."
        description="Timing, cost, preparation, and best practices for shipping your vehicle between northern states and warmer winter destinations."
        pageType="resource"
        pageUrl="/resources"
        showForm={false}
      />

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {resources.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="card card-hover border border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-brand-goldLight/15 px-2.5 py-0.5 text-xs font-semibold text-brand-gold">
                    {r.category}
                  </span>
                  <span className="text-xs text-slate-500">{r.readingTime}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-brand-navy">{r.title}</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{r.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy">
                  Read the guide
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
