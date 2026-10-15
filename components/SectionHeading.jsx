export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark' }) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : '';
  const isLight = tone === 'light';
  return (
    <div className={`max-w-3xl ${alignClasses}`}>
      {eyebrow && (
        <div className={`eyebrow ${isLight ? 'text-brand-goldLight' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-bold sm:text-4xl ${
          isLight ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base leading-relaxed sm:text-lg ${isLight ? 'text-white/80' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
