// FAQ renderer sized for use INSIDE an ArticleShell article body.
// Does not wrap in its own section/background; blends with article prose.
// Emits FAQPage JSON-LD so each resource article gets structured data.

export default function ArticleFAQ({ items, heading = 'Frequently asked questions' }) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <>
      <h2>{heading}</h2>
      <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white not-prose">
        {items.map((f, i) => (
          <details key={i} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-4 text-brand-navy">
              <span className="font-semibold text-base">{f.q}</span>
              <span aria-hidden="true" className="ml-4 mt-0.5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm leading-relaxed text-slate-600">{f.a}</div>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
