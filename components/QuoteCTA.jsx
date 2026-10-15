import Link from 'next/link';
import { site } from '@/data/site';

export default function QuoteCTA({ title, description, className = '', anchor = '/#quote' }) {
  return (
    <section className={`relative overflow-hidden bg-brand-navy py-16 ${className}`}>
      <div className="absolute inset-0 bg-sun-glow" aria-hidden="true" />
      <div className="container-page relative grid gap-6 md:grid-cols-3 md:items-center">
        <div className="md:col-span-2">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {title || 'Ready to move your vehicle for the season?'}
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">
            {description ||
              'Get a free snowbird auto transport quote in about two minutes. Our team follows up with carrier options for your route.'}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link href={anchor} className="btn-primary">
            Get My Free Quote
          </Link>
          <a href={site.phoneHref} className="btn-outline">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
