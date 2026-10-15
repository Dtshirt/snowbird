import Link from 'next/link';
import QuoteForm from './QuoteForm';
import { site } from '@/data/site';

export default function Hero({
  eyebrow = 'Seasonal Auto Transport for Snowbirds',
  title,
  description,
  bullets,
  pageType = 'home',
  pageUrl = '/',
  routeSlug = null,
  originState = null,
  destinationState = null,
  showForm = true
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      {/* Real photo background painted via CSS so a 404 simply shows the overlay beneath */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://source.unsplash.com/featured/1920x900/?highway,sunset,road-trip')" }}
      />
      {/* Dark gradient overlay for h1 contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(11,37,69,0.92) 0%, rgba(19,49,92,0.85) 60%, rgba(30,67,115,0.75) 100%)' }}
      />
      <div className="absolute inset-0 bg-sun-glow" aria-hidden="true" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-goldLight/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container-page relative py-16 sm:py-24 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className={showForm ? 'lg:col-span-7' : 'lg:col-span-12 mx-auto max-w-3xl text-center'}>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-goldLight/30 bg-brand-goldLight/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-goldLight">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-goldLight" />
              {eyebrow}
            </div>
            <h1
              className={`mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl ${showForm ? '' : 'text-balance'}`}
              style={{ color: '#ffffff', textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
            >
              {title}
            </h1>
            <p className={`mt-5 max-w-2xl text-lg leading-relaxed text-white/80 ${showForm ? '' : 'mx-auto'}`}>
              {description}
            </p>

            {bullets && bullets.length > 0 && (
              <ul className={`mt-8 space-y-3 text-white/90 ${showForm ? '' : 'inline-block text-left mx-auto'}`}>
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-goldLight/20 text-brand-goldLight">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className={`mt-10 flex flex-wrap items-center gap-4 ${showForm ? '' : 'justify-center'}`}>
              {showForm ? (
                <a href="#quote" className="btn-primary">
                  Get My Free Quote
                </a>
              ) : (
                <Link href="/#quote" className="btn-primary">
                  Get My Free Quote
                </Link>
              )}
              <a href={site.phoneHref} className="btn-outline">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          {showForm && (
            <div className="lg:col-span-5" id="quote">
              <QuoteForm
                pageType={pageType}
                pageUrl={pageUrl}
                routeSlug={routeSlug}
                originState={originState}
                destinationState={destinationState}
                variant="onDark"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
