import SectionHeading from './SectionHeading';

const months = [
  { m: 'Sep', label: 'Book Early', mode: 'plan', note: 'Best pricing and pickup flexibility' },
  { m: 'Oct', label: 'Peak South', mode: 'south', note: 'Fall rush begins — book 2–3 weeks ahead' },
  { m: 'Nov', label: 'Peak South', mode: 'south', note: 'Highest volume for southbound shipments' },
  { m: 'Dec', label: 'Late Season', mode: 'south', note: 'Last-minute southbound shipments' },
  { m: 'Jan', label: 'Steady', mode: 'quiet', note: 'Slower pace, off-peak windows' },
  { m: 'Feb', label: 'Steady', mode: 'quiet', note: 'Mid-season lull for auto transport' },
  { m: 'Mar', label: 'Early North', mode: 'north', note: 'Snowbirds begin heading home' },
  { m: 'Apr', label: 'Peak North', mode: 'north', note: 'Northbound rush begins' },
  { m: 'May', label: 'Peak North', mode: 'north', note: 'Highest volume for northbound' },
  { m: 'Jun', label: 'Wind Down', mode: 'quiet', note: 'Last returning snowbird shipments' }
];

const colorFor = {
  south: 'bg-brand-goldLight text-brand-navy',
  north: 'bg-brand-sky text-brand-navy',
  quiet: 'bg-slate-100 text-slate-600',
  plan: 'bg-brand-navy text-white'
};

export default function SnowbirdSeasonSection() {
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Snowbird Season"
          title="Timing your seasonal auto transport"
          description="Snowbird routes are peak-driven. Understanding the seasonal calendar helps you avoid booking bottlenecks and price spikes."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {months.map((month) => (
            <div key={month.m} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{month.m}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${colorFor[month.mode]}`}>
                  {month.label}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-snug">{month.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Southbound Season</div>
            <p className="mt-1 text-sm text-slate-600">
              Snowbirds typically ship south from <strong>early October through mid-December</strong>. Reserving 2–3 weeks in advance secures better pricing and predictable pickup windows.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Northbound Season</div>
            <p className="mt-1 text-sm text-slate-600">
              The return north peaks from <strong>late March through mid-May</strong>. April is the busiest single month; book early to avoid the end-of-season crunch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
