import Link from 'next/link';
import { site } from '@/data/site';
import { originStates } from '@/data/states';
import { destinationStates } from '@/data/destinations';
import { routes } from '@/data/routes';

export default function Footer() {
  const year = new Date().getFullYear();
  const topOrigins = originStates.slice(0, 8);
  const topRoutes = routes.slice(0, 8);

  return (
    <footer className="bg-brand-navy text-slate-200">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-goldLight">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2l1.6 3.9 4.2.3-3.2 2.7 1 4.1L12 10.9 8.4 13l1-4.1L6.2 6.2l4.2-.3L12 2zm0 12c3.9 0 7 1.7 7 3.8V20H5v-2.2c0-2.1 3.1-3.8 7-3.8z"/>
                </svg>
              </span>
              <div>
                <div className="font-display text-lg font-bold text-white">Snowbird Car Shipping</div>
                <div className="text-[11px] uppercase tracking-widest text-white/60">a service of {site.parent}</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
              {site.description}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              {site.brokerDisclaimer}
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <div>
                <a href={site.phoneHref} className="font-semibold text-brand-goldLight hover:text-white">
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="text-slate-300">{site.email}</div>
              <div className="text-slate-400">{site.hours}</div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-goldLight">Destinations</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {destinationStates.map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`} className="text-slate-300 hover:text-white">
                    {d.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/resources/snowbird-destination-comparison" className="text-slate-400 hover:text-white text-xs">
                  Compare destinations →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-goldLight">Origin States</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {topOrigins.map((s) => (
                <li key={s.slug}>
                  <Link href={`/states/${s.slug}`} className="text-slate-300 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-goldLight">Popular Routes</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {topRoutes.map((r) => (
                <li key={r.slug}>
                  <Link href={`/routes/${r.slug}`} className="text-slate-300 hover:text-white">
                    {r.origin} to {r.destination}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link href="/snowbird-car-shipping-cost-calculator" className="text-slate-300 hover:text-white">Cost Calculator</Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-300 hover:text-white">Snowbird Resources</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex md:items-center md:justify-between">
          <p>© {year} {site.parent}. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap gap-4 md:mt-0">
            <Link href="/#terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/#privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/#shipping-policy" className="hover:text-white">Shipping Policy</Link>
            <Link href="/#company" className="hover:text-white">Broker Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
