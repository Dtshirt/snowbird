'use client';

import { useEffect, useRef, useState } from 'react';

let scriptLoadingPromise = null;

function loadGoogleMaps(apiKey) {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('window unavailable'));
  }
  if (window.google && window.google.maps && window.google.maps.places) {
    return Promise.resolve();
  }
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
    script.onerror = () => {
      scriptLoadingPromise = null;
      reject(new Error('Failed to load Google Maps'));
    };
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

function parsePlace(place) {
  const parsed = { formatted: '', address1: '', city: '', state: '', stateShort: '', zip: '', lat: null, lng: null };
  if (!place) return parsed;

  parsed.formatted = place.formatted_address || '';

  const components = place.address_components || [];
  let streetNumber = '';
  let route = '';

  for (const c of components) {
    const types = c.types || [];
    if (types.includes('street_number')) streetNumber = c.long_name;
    else if (types.includes('route')) route = c.long_name;
    else if (types.includes('locality')) parsed.city = c.long_name;
    else if (!parsed.city && types.includes('sublocality_level_1')) parsed.city = c.long_name;
    else if (!parsed.city && types.includes('postal_town')) parsed.city = c.long_name;
    else if (!parsed.city && types.includes('administrative_area_level_3')) parsed.city = c.long_name;
    else if (types.includes('administrative_area_level_1')) {
      parsed.state = c.long_name;
      parsed.stateShort = c.short_name;
    } else if (types.includes('postal_code')) parsed.zip = c.long_name;
  }

  parsed.address1 = [streetNumber, route].filter(Boolean).join(' ');

  if (place.geometry && place.geometry.location) {
    parsed.lat = typeof place.geometry.location.lat === 'function' ? place.geometry.location.lat() : place.geometry.location.lat;
    parsed.lng = typeof place.geometry.location.lng === 'function' ? place.geometry.location.lng() : place.geometry.location.lng;
  }

  return parsed;
}

export default function GooglePlacesInput({
  id,
  value,
  onChange,
  placeholder = 'Enter city, ZIP, or full address',
  className = '',
  onDark = false,
  autoFocus = false
}) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      setLoadError(true);
      return;
    }

    let disposed = false;

    loadGoogleMaps(apiKey)
      .then(() => {
        if (disposed || !inputRef.current || !window.google) return;

        const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
          types: ['geocode'],
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address', 'address_components', 'geometry']
        });

        autocompleteRef.current = ac;

        ac.addListener('place_changed', () => {
          const place = ac.getPlace();
          const parsed = parsePlace(place);
          if (parsed.formatted) {
            onChange({ ...parsed, valid: Boolean(parsed.city && parsed.state && parsed.zip) });
          }
        });

        setReady(true);
      })
      .catch(() => {
        if (!disposed) setLoadError(true);
      });

    return () => {
      disposed = true;
      if (autocompleteRef.current && window.google && window.google.maps && window.google.maps.event) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleTextChange(e) {
    onChange({
      formatted: e.target.value,
      address1: value?.address1 || '',
      city: '',
      state: '',
      stateShort: '',
      zip: '',
      lat: null,
      lng: null,
      valid: false
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      const dropdown = document.querySelector('.pac-container:not([style*="display: none"]) .pac-item');
      if (dropdown) e.preventDefault();
    }
  }

  const loading = !ready && !loadError;

  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        type="text"
        autoComplete="off"
        placeholder={loading ? '' : placeholder}
        aria-busy={loading || undefined}
        aria-describedby={loading ? `${id}-loading` : undefined}
        className={`${className} ${loading ? 'text-transparent placeholder:text-transparent caret-transparent' : ''}`.trim()}
        value={value?.formatted || ''}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        autoFocus={autoFocus}
        disabled={loading}
      />

      {loading && (
        <div
          id={`${id}-loading`}
          role="status"
          aria-live="polite"
          className={`pointer-events-none absolute inset-0 flex items-center overflow-hidden rounded-md ${
            onDark ? 'bg-white/10' : 'bg-slate-100'
          }`}
        >
          <div
            className={`shimmer-bar ml-3 h-3 w-1/2 rounded ${
              onDark ? 'bg-white/20' : 'bg-slate-200'
            }`}
          />
          <div
            className={`shimmer-bar ml-2 h-3 w-1/4 rounded ${
              onDark ? 'bg-white/15' : 'bg-slate-200/70'
            }`}
          />
          <div
            aria-hidden="true"
            className={`ml-auto mr-3 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest ${
              onDark ? 'text-white/50' : 'text-slate-400'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 animate-spin" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Loading
          </div>
          <span className="sr-only">Loading address suggestions…</span>
        </div>
      )}

    </div>
  );
}
