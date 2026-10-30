export default function AnswerSummary({
  children,
  reviewed,
  note = 'Prices are typical ranges for a standard sedan or SUV, not a quote.'
}) {
  const reviewedLabel = new Date(`${reviewed}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });
  return (
    <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-brand-cream px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy">Quick answer</p>
      <p className="mt-2 text-base leading-relaxed text-slate-800">{children}</p>
      <p className="mt-3 text-xs text-slate-500">
        {note} Last reviewed <time dateTime={reviewed}>{reviewedLabel}</time>.
      </p>
    </div>
  );
}
