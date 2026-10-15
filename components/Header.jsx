import Link from 'next/link';
import { site } from '@/data/site';
import { destinationStates } from '@/data/destinations';
import { originStates } from '@/data/states';
import MobileNav from './MobileNav';
import DestinationsMegaMenu from './DestinationsMegaMenu';

const primaryNav = [
  { label: 'Routes', href: '/#routes' },
  { label: 'Cost Calculator', href: '/snowbird-car-shipping-cost-calculator' },
  { label: 'Resources', href: '/resources' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="border-b border-slate-100 bg-brand-navy">
        <div className="container-page flex items-center justify-between py-1.5 text-xs text-white/80">
          <span className="hidden sm:inline">
            Serving snowbirds across the U.S. · {site.hours}
          </span>
          <span className="sm:hidden">{site.hours.split('·')[0]}</span>
          <a href={site.phoneHref} className="font-semibold text-brand-goldLight hover:text-white">
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-brand-goldLight">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2l1.6 3.9 4.2.3-3.2 2.7 1 4.1L12 10.9 8.4 13l1-4.1L6.2 6.2l4.2-.3L12 2zm0 12c3.9 0 7 1.7 7 3.8V20H5v-2.2c0-2.1 3.1-3.8 7-3.8z"/>
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-brand-navy">Snowbird Car Shipping</span>
            <span className="text-[11px] uppercase tracking-widest text-slate-500">a service of {site.parent}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <DestinationsMegaMenu destinations={destinationStates} />
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="link-nav">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="text-sm font-semibold text-brand-navy">
            {site.phoneDisplay}
          </a>
          <Link
            href="/#quote"
            className="rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-goldLight"
          >
            Get My Free Quote
          </Link>
        </div>

        <MobileNav
          destinations={destinationStates}
          origins={originStates}
          primaryNav={primaryNav}
        />
      </div>
    </header>
  );
}
