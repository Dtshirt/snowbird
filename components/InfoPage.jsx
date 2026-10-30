import Breadcrumbs from './Breadcrumbs';

export default function InfoPage({ title, description, updated, children }) {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: title }]} />
      <article className="border-b border-slate-200 bg-white">
        <div className="container-narrow py-12 sm:py-16">
          <h1 className="font-display text-4xl font-bold text-brand-navy sm:text-5xl">{title}</h1>
          {description && <p className="mt-4 text-lg text-slate-600 leading-relaxed">{description}</p>}
          {updated && <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>}
          <div className="mt-10 max-w-none text-slate-700 leading-relaxed [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-brand-navy [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1.5 [&_a]:text-brand-navy [&_a]:underline">
            {children}
          </div>
        </div>
      </article>
    </>
  );
}
