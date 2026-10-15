export default function TrustBar() {
  const items = [
    {
      title: 'Licensed Broker',
      description: 'Federally regulated auto transport broker'
    },
    {
      title: 'Insured Carriers',
      description: 'Every carrier maintains active cargo insurance'
    },
    {
      title: 'Nationwide Network',
      description: 'Coverage across all 48 contiguous states'
    },
    {
      title: 'Snowbird Specialists',
      description: 'Focused on seasonal routes since 2011'
    }
  ];
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="container-page py-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-brand-navy">{item.title}</div>
                <div className="text-xs text-slate-500">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
