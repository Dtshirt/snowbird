import Link from 'next/link';
import { site } from '@/data/site';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <section className="bg-brand-cream py-24">
      <div className="container-narrow text-center">
        <div className="eyebrow">404 · Not Found</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-brand-navy sm:text-5xl">
          We couldn't find that page.
        </h1>
        <p className="mt-4 text-slate-600">
          The page you're looking for may have moved. Try heading back to the homepage or exploring popular snowbird routes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <a href={site.phoneHref} className="btn-secondary">Call {site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
