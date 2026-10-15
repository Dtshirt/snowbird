'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '@/data/site';

export default function MobileNav({ destinations = [], origins = [], primaryNav = [] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  function close() {
    setOpen(false);
    setExpanded(null);
  }

  function toggleSection(name) {
    setExpanded((v) => (v === name ? null : name));
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy hover:bg-slate-100"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[80vh] overflow-y-auto border-b border-slate-200 bg-white shadow-lg">
          <nav className="container-page space-y-1 py-4" aria-label="Mobile">
            <MobileSection
              label="Destinations"
              open={expanded === 'destinations'}
              onToggle={() => toggleSection('destinations')}
            >
              <MobileLink onClick={close} href="/destinations">All destinations →</MobileLink>
              {destinations.map((d) => (
                <MobileLink key={d.slug} onClick={close} href={`/destinations/${d.slug}`}>
                  {d.name}
                </MobileLink>
              ))}
            </MobileSection>

            <MobileSection
              label="Origin States"
              open={expanded === 'origins'}
              onToggle={() => toggleSection('origins')}
            >
              {origins.map((s) => (
                <MobileLink key={s.slug} onClick={close} href={`/states/${s.slug}`}>
                  {s.name}
                </MobileLink>
              ))}
            </MobileSection>

            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="block rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-navy"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <a
                href={site.phoneHref}
                className="rounded-md bg-slate-50 px-3 py-3 text-center text-sm font-semibold text-brand-navy"
              >
                Call {site.phoneDisplay}
              </a>
              <Link
                href="/#quote"
                onClick={close}
                className="rounded-md bg-brand-gold px-3 py-3 text-center text-sm font-semibold text-white"
              >
                Get My Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

function MobileSection({ label, open, onToggle, children }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-medium text-slate-700 hover:text-brand-navy"
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div className="pb-2 pl-3">{children}</div>}
    </div>
  );
}

function MobileLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-brand-cream/50 hover:text-brand-navy"
    >
      {children}
    </Link>
  );
}
