import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact Us',
  description: `Call ${site.phoneDisplay} or request a free snowbird car shipping quote online. Hours: ${site.hours}.`,
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <section className="bg-white py-12 sm:py-16">
        <div className="container-narrow">
          <h1 className="font-display text-4xl font-bold text-brand-navy sm:text-5xl">Contact Snowbird Car Shipping</h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Questions about your route, timing or price? Call us, email us, or send a quote request and a snowbird
            specialist will follow up.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-brand-cream/60 p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Phone</div>
                <a href={site.phoneHref} className="mt-1 block font-display text-2xl font-bold text-brand-navy">
                  {site.phoneDisplay}
                </a>
                <p className="mt-1 text-sm text-slate-600">{site.hours}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-brand-cream/60 p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Email</div>
                <a href={`mailto:${site.email}`} className="mt-1 block font-semibold text-brand-navy underline">
                  {site.email}
                </a>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">What happens next</div>
                <ol className="mt-2 list-decimal space-y-1.5 pl-5">
                  <li>You get a confirmation email with your quote ID.</li>
                  <li>A specialist reviews your route, vehicle and dates.</li>
                  <li>We contact you with pricing and carrier options.</li>
                </ol>
                <p className="mt-3">
                  New to this? Read <Link href="/about#how-we-work" className="font-semibold text-brand-navy underline">how our broker service works</Link>.
                </p>
              </div>
              <BrokerNote />
            </div>
            <div className="lg:col-span-3" id="quote">
              <QuoteForm pageType="other" pageUrl="/contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
