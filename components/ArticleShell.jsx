import Breadcrumbs from './Breadcrumbs';
import QuoteForm from './QuoteForm';
import BrokerNote from './BrokerNote';
import QuoteCTA from './QuoteCTA';

export default function ArticleShell({
  category,
  title,
  description,
  readingTime,
  slug,
  children
}) {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: title }
      ]} />
      <article className="border-b border-slate-200 bg-white">
        <div className="container-narrow py-12 sm:py-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            {category} · {readingTime}
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-navy sm:text-5xl">{title}</h1>
          {description && <p className="mt-4 text-lg text-slate-600 leading-relaxed">{description}</p>}
          <div className="mt-10 prose prose-brand max-w-none text-slate-700 leading-relaxed [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_h3]:mt-8 [&_h3]:font-semibold [&_h3]:text-brand-navy [&_h3]:text-lg [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1.5 [&_a]:text-brand-navy [&_a]:underline">
            {children}
          </div>
        </div>
      </article>

      <section className="bg-brand-cream py-16">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="eyebrow">Get a Quote</div>
              <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy">
                Ready to book your snowbird shipment?
              </h2>
              <p className="mt-3 text-slate-600 text-sm">
                A snowbird specialist will follow up with carrier options for your route.
              </p>
              <BrokerNote className="mt-6" />
            </div>
            <div className="lg:col-span-3">
              <QuoteForm pageType="resource" pageUrl={`/resources/${slug}`} />
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
