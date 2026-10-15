'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

let placesLibraryPromise = null;

/**
 * Google's official dynamic-library-import bootstrap loader.
 * Installs window.google.maps.importLibrary synchronously as a shim; the real
 * Maps JS script is fetched lazily on the first importLibrary() call.
 * https://developers.google.com/maps/documentation/javascript/load-maps-js-api
 */
function bootstrapGoogleMaps(apiKey) {
  if (typeof window === 'undefined') return;
  if (window.google?.maps?.importLibrary) return;
  // eslint-disable-next-line
  ((g) => { var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({ key: apiKey, v: "weekly" });
}

async function loadPlacesLibrary(apiKey) {
  bootstrapGoogleMaps(apiKey);
  if (!window.google?.maps?.importLibrary) {
    throw new Error('google.maps.importLibrary is not available after bootstrap');
  }
  if (!placesLibraryPromise) {
    placesLibraryPromise = window.google.maps.importLibrary('places');
  }
  return placesLibraryPromise;
}

function parsePlaceNew(place) {
  const parsed = { formatted: '', address1: '', city: '', state: '', stateShort: '', zip: '', lat: null, lng: null };
  if (!place) return parsed;

  parsed.formatted = place.formattedAddress || '';

  const components = place.addressComponents || [];
  let streetNumber = '';
  let route = '';

  for (const c of components) {
    const types = c.types || [];
    const longText = c.longText || c.long_name || '';
    const shortText = c.shortText || c.short_name || '';
    if (types.includes('street_number')) streetNumber = longText;
    else if (types.includes('route')) route = longText;
    else if (types.includes('locality')) parsed.city = longText;
    else if (!parsed.city && types.includes('sublocality_level_1')) parsed.city = longText;
    else if (!parsed.city && types.includes('postal_town')) parsed.city = longText;
    else if (!parsed.city && types.includes('administrative_area_level_3')) parsed.city = longText;
    else if (types.includes('administrative_area_level_1')) {
      parsed.state = longText;
      parsed.stateShort = shortText;
    } else if (types.includes('postal_code')) parsed.zip = longText;
  }

  parsed.address1 = [streetNumber, route].filter(Boolean).join(' ');

  if (place.location) {
    parsed.lat = typeof place.location.lat === 'function' ? place.location.lat() : place.location.lat;
    parsed.lng = typeof place.location.lng === 'function' ? place.location.lng() : place.location.lng;
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
  const containerRef = useRef(null);
  const placesLibRef = useRef(null);
  const sessionTokenRef = useRef(null);
  const debounceRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.warn('[GooglePlacesInput] NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is missing. Address autocomplete disabled.');
      setLoadError(true);
      return;
    }

    let disposed = false;

    if (typeof window !== 'undefined' && !window.gm_authFailure) {
      window.gm_authFailure = () => {
        console.error(
          '[GooglePlacesInput] Google Maps authentication failed. Check: (1) Places API (New) is enabled in Google Cloud Console, (2) billing is active, (3) HTTP referrer restrictions on the API key include this origin.'
        );
        setLoadError(true);
      };
    }

    loadPlacesLibrary(apiKey)
      .then((places) => {
        if (disposed) return;
        if (!places || !places.AutocompleteSuggestion || !places.AutocompleteSessionToken) {
          console.error(
            '[GooglePlacesInput] places.AutocompleteSuggestion is unavailable. Enable the "Places API (New)" in Google Cloud Console for this API key.'
          );
          setLoadError(true);
          return;
        }
        placesLibRef.current = places;
        sessionTokenRef.current = new places.AutocompleteSessionToken();
        setReady(true);
      })
      .catch((err) => {
        console.error('[GooglePlacesInput] Failed to load Places library.', err);
        if (!disposed) setLoadError(true);
      });

    return () => {
      disposed = true;
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  useEffect(() => {
    function onDocMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, []);

  const fetchSuggestions = useCallback(
    async (text) => {
      if (!ready || !placesLibRef.current) return;
      if (!text || text.trim().length < 2) {
        setSuggestions([]);
        setOpen(false);
        return;
      }
      try {
        const { AutocompleteSuggestion } = placesLibRef.current;
        const { suggestions: s } = await AutocompleteSuggestion.fetchAutocompleteSuggestions({
          input: text,
          sessionToken: sessionTokenRef.current,
          includedRegionCodes: ['us']
        });
        const list = s || [];
        setSuggestions(list);
        setOpen(list.length > 0);
        setActiveIndex(-1);
      } catch (err) {
        console.error('[GooglePlacesInput] fetchAutocompleteSuggestions failed.', err);
      }
    },
    [ready]
  );

  function handleTextChange(e) {
    const text = e.target.value;
    onChange({
      formatted: text,
      address1: value?.address1 || '',
      city: '',
      state: '',
      stateShort: '',
      zip: '',
      lat: null,
      lng: null,
      valid: false
    });
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(text), 220);
  }

  async function selectSuggestion(suggestion) {
    const pred = suggestion?.placePrediction;
    if (!pred) return;
    try {
      const place = pred.toPlace();
      await place.fetchFields({
        fields: ['formattedAddress', 'addressComponents', 'location']
      });
      const parsed = parsePlaceNew(place);
      if (parsed.formatted) {
        onChange({ ...parsed, valid: Boolean(parsed.city && parsed.state && parsed.zip) });
      }
      setOpen(false);
      setSuggestions([]);
      setActiveIndex(-1);
      if (placesLibRef.current?.AutocompleteSessionToken) {
        sessionTokenRef.current = new placesLibRef.current.AutocompleteSessionToken();
      }
    } catch (err) {
      console.error('[GooglePlacesInput] fetchFields failed.', err);
    }
  }

  function handleKeyDown(e) {
    if (!open || suggestions.length === 0) {
      if (e.key === 'ArrowDown' && suggestions.length === 0 && value?.formatted) {
        fetchSuggestions(value.formatted);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1 >= suggestions.length ? 0 : i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const idx = activeIndex >= 0 ? activeIndex : 0;
      selectSuggestion(suggestions[idx]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  const loading = !ready && !loadError;

  return (
    <div ref={containerRef} className="relative">
      <input
        ref={inputRef}
        id={id}
        type="text"
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        aria-autocomplete="list"
        placeholder={loadError ? 'Type full address, city & ZIP' : loading ? '' : placeholder}
        aria-busy={loading || undefined}
        aria-describedby={loading ? `${id}-loading` : loadError ? `${id}-fallback` : undefined}
        className={`${className} ${loading ? 'text-transparent placeholder:text-transparent caret-transparent' : ''}`.trim()}
        value={value?.formatted || ''}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (suggestions.length > 0) setOpen(true);
        }}
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
          <div className={`shimmer-bar ml-3 h-3 w-1/2 rounded ${onDark ? 'bg-white/20' : 'bg-slate-200'}`} />
          <div className={`shimmer-bar ml-2 h-3 w-1/4 rounded ${onDark ? 'bg-white/15' : 'bg-slate-200/70'}`} />
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
          <span className="sr-only">Loading address suggestions&hellip;</span>
        </div>
      )}

      {open && suggestions.length > 0 && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          className="absolute left-0 right-0 top-full z-[9999] mt-1 max-h-72 overflow-auto rounded-md border border-slate-200 bg-white shadow-lg"
        >
          {suggestions.map((s, i) => {
            const pred = s.placePrediction;
            if (!pred) return null;
            const primary = pred.mainText?.text || pred.text?.text || '';
            const secondary = pred.secondaryText?.text || '';
            const isActive = i === activeIndex;
            return (
              <li
                key={pred.placeId || `${primary}-${i}`}
                role="option"
                aria-selected={isActive}
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectSuggestion(s);
                }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`cursor-pointer border-b border-slate-100 px-3 py-2.5 text-sm last:border-b-0 ${
                  isActive ? 'bg-brand-cream' : 'bg-white hover:bg-brand-cream/60'
                }`}
              >
                <div className="font-medium text-brand-navy">{primary}</div>
                {secondary && <div className="text-xs text-slate-500">{secondary}</div>}
              </li>
            );
          })}
        </ul>
      )}

      {loadError && (
        <p
          id={`${id}-fallback`}
          className={`mt-1 text-[11px] ${onDark ? 'text-white/60' : 'text-slate-500'}`}
        >
          Address suggestions unavailable &mdash; please type your city, state, and ZIP manually.
        </p>
      )}
    </div>
  );
}
