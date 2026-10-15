'use client';

import { useEffect, useRef, useState } from 'react';

let scriptLoadingPromise = null;

function loadGoogleMaps(apiKey) {
  if (typeof window === 'undefined') return Promise.reject(new Error('window unavailable'));
  if (window.google && window.google.maps && window.google.maps.places) return Promise.resolve();
  if (scriptLoadingPromise) return scriptLoadingPromise;

  scriptLoadingPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-google-maps-loader="true"]');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', reject);
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async&v=weekly`;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-google-maps-loader', 'true');
    script.onload = () => resolve();
    script.onerror = () => { scriptLoadingPromise = null; reject(new Error('Failed to load Google Maps')); };
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

function extractZipFromPlace(place) {
  const components = place?.address_components || [];
  let zip = '';
  let city = '';
  let state = '';
  for (const c of components) {
    const types = c.types || [];
    if (types.includes('postal_code')) zip = c.long_name;
    else if (!city && types.includes('locality')) city = c.long_name;
    else if (!city && types.includes('postal_town')) city = c.long_name;
    else if (!city && types.includes('administrative_area_level_3')) city = c.long_name;
    else if (types.includes('administrative_area_level_1')) state = c.short_name;
  }
  return { zip, city, state };
}

export default function ZipAutocomplete({
  id,
  value,
  onChange,
  placeholder = 'ZIP code',
  className = '',
  error = false
}) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) { setLoadError(true); return; }

    let disposed = false;

    loadGoogleMaps(apiKey)
      .then(() => {
        if (disposed || !inputRef.current || !window.google) return;

        const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
          types: ['postal_code'],
          componentRestrictions: { country: 'us' },
          fields: ['address_components', 'formatted_address']
        });

        autocompleteRef.current = ac;

        ac.addListener('place_changed', () => {
          const place = ac.getPlace();
          const parsed = extractZipFromPlace(place);
          if (parsed.zip) {
            onChange({ zip: parsed.zip, city: parsed.city, state: parsed.state });
            if (inputRef.current) inputRef.current.value = parsed.zip;
          }
        });

        setReady(true);
      })
      .catch(() => { if (!disposed) setLoadError(true); });

    return () => {
      disposed = true;
      if (autocompleteRef.current && window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleTextChange(e) {
    const raw = e.target.value.replace(/[^\d-]/g, '').slice(0, 10);
    onChange({ zip: raw, city: '', state: '' });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      const dropdown = document.querySelector('.pac-container:not([style*="display: none"]) .pac-item');
      if (dropdown) e.preventDefault();
    }
  }

  const loading = !ready && !loadError;

  const borderClass = error ? 'border-red-400' : 'border-slate-300';
  const base = `w-full rounded-md border ${borderClass} bg-white px-3 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20`;

  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="postal-code"
        placeholder={loading ? '' : placeholder}
        className={`${base} ${className} ${loading ? 'text-transparent placeholder:text-transparent caret-transparent' : ''}`.trim()}
        value={typeof value === 'string' ? value : value?.zip || ''}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        disabled={loading}
        aria-busy={loading || undefined}
      />
      {loading && (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none absolute inset-0 flex items-center overflow-hidden rounded-md bg-slate-100"
        >
          <div className="shimmer-bar ml-3 h-3 w-1/3 rounded bg-slate-200" />
          <div className="ml-auto mr-3 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 animate-spin" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Loading
          </div>
        </div>
      )}
    </div>
  );
}
