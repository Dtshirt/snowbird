'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function DestinationsMegaMenu({ destinations }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    function onEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  function scheduleClose() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }
  function cancelClose() {
    clearTimeout(closeTimer.current);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        onFocus={cancelClose}
        aria-expanded={open}
        aria-haspopup="true"
        className="link-nav inline-flex items-center gap-1"
      >
        Destinations
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-3.5 w-3.5 transition ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="menu"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="absolute left-1/2 top-full z-50 mt-3 w-[720px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-cardHover"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Snowbird Destinations
              </div>
              <div className="mt-1 font-display text-lg font-bold text-brand-navy">
                Choose your winter destination
              </div>
            </div>
            <Link
              href="/destinations"
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-brand-navy underline"
            >
              View all destinations →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 p-4 transition hover:border-brand-goldLight hover:bg-brand-cream/40"
                role="menuitem"
              >
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-gold">
                      {d.abbr}
                    </div>
                    <div className="font-display text-lg font-bold text-brand-navy">{d.name}</div>
                  </div>
                  <div className="text-xs text-slate-500">{d.seasonPeak}</div>
                </div>
                <div className="mt-2 text-xs text-slate-600 line-clamp-2">{d.tagline}</div>
                <div className="mt-2 text-xs font-medium text-brand-navy/70">{d.cityLead}</div>
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
            Not sure which destination?{' '}
            <Link
              href="/resources/snowbird-destination-comparison"
              onClick={() => setOpen(false)}
              className="font-semibold text-brand-navy underline"
            >
              Compare all four →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
