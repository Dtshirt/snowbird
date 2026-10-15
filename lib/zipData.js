// ZIP → coordinates lookup used by the cost calculator's distance estimate.
// We combine two layers:
//   1) A curated set of ZIP3 → {lat, lng, city, state} entries for common metros
//      relevant to snowbird routes (best precision).
//   2) A ZIP3-range → state map for the entire US (fallback), plus a state → centroid
//      lookup so any US ZIP resolves to at least a state-level coordinate.
//
// This is intentionally offline — the pricing engine can be swapped later for a
// real distance API without touching the UI.

// ── 1) Curated metro ZIP3 coordinates ─────────────────────────────────────
export const zip3Metros = {
  // New York
  '100': { lat: 40.7128, lng: -74.006, city: 'New York', state: 'NY' },
  '101': { lat: 40.7549, lng: -73.9840, city: 'New York', state: 'NY' },
  '104': { lat: 40.8448, lng: -73.8648, city: 'Bronx', state: 'NY' },
  '110': { lat: 40.7282, lng: -73.7949, city: 'Queens', state: 'NY' },
  '112': { lat: 40.6501, lng: -73.9496, city: 'Brooklyn', state: 'NY' },
  '117': { lat: 40.9257, lng: -73.1409, city: 'Long Island', state: 'NY' },
  '122': { lat: 42.6526, lng: -73.7562, city: 'Albany', state: 'NY' },
  '132': { lat: 43.0481, lng: -76.1474, city: 'Syracuse', state: 'NY' },
  '142': { lat: 42.8864, lng: -78.8784, city: 'Buffalo', state: 'NY' },
  '146': { lat: 43.1566, lng: -77.6088, city: 'Rochester', state: 'NY' },

  // New Jersey
  '070': { lat: 40.7357, lng: -74.1724, city: 'Newark', state: 'NJ' },
  '073': { lat: 40.7178, lng: -74.0431, city: 'Jersey City', state: 'NJ' },
  '085': { lat: 40.2206, lng: -74.7597, city: 'Trenton', state: 'NJ' },
  '087': { lat: 39.9526, lng: -75.1652, city: 'Cherry Hill', state: 'NJ' },
  '088': { lat: 39.9612, lng: -74.1979, city: 'Toms River', state: 'NJ' },

  // Massachusetts
  '021': { lat: 42.3601, lng: -71.0589, city: 'Boston', state: 'MA' },
  '024': { lat: 42.2626, lng: -71.8023, city: 'Worcester', state: 'MA' },
  '026': { lat: 41.6688, lng: -70.2962, city: 'Cape Cod', state: 'MA' },

  // Connecticut
  '060': { lat: 41.7658, lng: -72.6734, city: 'Hartford', state: 'CT' },
  '065': { lat: 41.3083, lng: -72.9279, city: 'New Haven', state: 'CT' },
  '069': { lat: 41.0534, lng: -73.5387, city: 'Stamford', state: 'CT' },

  // Pennsylvania
  '190': { lat: 39.9526, lng: -75.1652, city: 'Philadelphia', state: 'PA' },
  '152': { lat: 40.4406, lng: -79.9959, city: 'Pittsburgh', state: 'PA' },
  '171': { lat: 40.2732, lng: -76.8867, city: 'Harrisburg', state: 'PA' },

  // Maryland
  '212': { lat: 39.2904, lng: -76.6122, city: 'Baltimore', state: 'MD' },
  '208': { lat: 38.9847, lng: -77.0947, city: 'Bethesda', state: 'MD' },

  // Virginia
  '232': { lat: 37.5407, lng: -77.4360, city: 'Richmond', state: 'VA' },
  '234': { lat: 36.8529, lng: -75.9780, city: 'Virginia Beach', state: 'VA' },
  '223': { lat: 38.8048, lng: -77.0469, city: 'Alexandria', state: 'VA' },

  // Ohio
  '432': { lat: 39.9612, lng: -82.9988, city: 'Columbus', state: 'OH' },
  '441': { lat: 41.4993, lng: -81.6944, city: 'Cleveland', state: 'OH' },
  '452': { lat: 39.1031, lng: -84.5120, city: 'Cincinnati', state: 'OH' },

  // Michigan
  '482': { lat: 42.3314, lng: -83.0458, city: 'Detroit', state: 'MI' },
  '495': { lat: 42.9634, lng: -85.6681, city: 'Grand Rapids', state: 'MI' },
  '481': { lat: 42.2808, lng: -83.7430, city: 'Ann Arbor', state: 'MI' },

  // Illinois
  '606': { lat: 41.8781, lng: -87.6298, city: 'Chicago', state: 'IL' },
  '605': { lat: 41.7508, lng: -88.1535, city: 'Naperville', state: 'IL' },
  '627': { lat: 39.7817, lng: -89.6501, city: 'Springfield', state: 'IL' },

  // Minnesota
  '554': { lat: 44.9778, lng: -93.2650, city: 'Minneapolis', state: 'MN' },
  '551': { lat: 44.9537, lng: -93.0900, city: 'St. Paul', state: 'MN' },

  // Wisconsin
  '532': { lat: 43.0389, lng: -87.9065, city: 'Milwaukee', state: 'WI' },
  '537': { lat: 43.0731, lng: -89.4012, city: 'Madison', state: 'WI' },

  // Colorado
  '802': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },

  // Nevada
  '891': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '895': { lat: 39.5296, lng: -119.8138, city: 'Reno', state: 'NV' },

  // Washington
  '981': { lat: 47.6062, lng: -122.3321, city: 'Seattle', state: 'WA' },
  '992': { lat: 47.6588, lng: -117.4260, city: 'Spokane', state: 'WA' },

  // Oregon
  '972': { lat: 45.5152, lng: -122.6784, city: 'Portland', state: 'OR' },

  // Florida — destination
  '331': { lat: 25.7617, lng: -80.1918, city: 'Miami', state: 'FL' },
  '333': { lat: 26.1224, lng: -80.1373, city: 'Fort Lauderdale', state: 'FL' },
  '334': { lat: 26.7153, lng: -80.0534, city: 'West Palm Beach', state: 'FL' },
  '335': { lat: 27.9506, lng: -82.4572, city: 'Tampa', state: 'FL' },
  '337': { lat: 27.7676, lng: -82.6403, city: 'St. Petersburg', state: 'FL' },
  '328': { lat: 28.5383, lng: -81.3792, city: 'Orlando', state: 'FL' },
  '329': { lat: 28.3922, lng: -81.5812, city: 'Kissimmee', state: 'FL' },
  '341': { lat: 26.1420, lng: -81.7948, city: 'Naples', state: 'FL' },
  '339': { lat: 26.6406, lng: -81.8723, city: 'Fort Myers', state: 'FL' },
  '342': { lat: 27.3364, lng: -82.5307, city: 'Sarasota', state: 'FL' },
  '322': { lat: 30.3322, lng: -81.6557, city: 'Jacksonville', state: 'FL' },

  // Arizona — destination
  '850': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '852': { lat: 33.4152, lng: -111.8315, city: 'Mesa', state: 'AZ' },
  '853': { lat: 33.4942, lng: -111.9261, city: 'Scottsdale', state: 'AZ' },
  '857': { lat: 32.2226, lng: -110.9747, city: 'Tucson', state: 'AZ' },
  '853u': { lat: 33.3062, lng: -111.8413, city: 'Chandler', state: 'AZ' },
  '858': { lat: 32.6927, lng: -114.6277, city: 'Yuma', state: 'AZ' },

  // Texas — destination
  '750': { lat: 32.7767, lng: -96.7970, city: 'Dallas', state: 'TX' },
  '770': { lat: 29.7604, lng: -95.3698, city: 'Houston', state: 'TX' },
  '782': { lat: 29.4241, lng: -98.4936, city: 'San Antonio', state: 'TX' },
  '787': { lat: 30.2672, lng: -97.7431, city: 'Austin', state: 'TX' },
  '785': { lat: 26.2034, lng: -98.2300, city: 'McAllen', state: 'TX' },
  '780': { lat: 26.1906, lng: -97.6961, city: 'Harlingen', state: 'TX' },
  '785b': { lat: 25.9017, lng: -97.4975, city: 'Brownsville', state: 'TX' },
  '784': { lat: 27.8006, lng: -97.3964, city: 'Corpus Christi', state: 'TX' },

  // California — destination
  '900': { lat: 34.0522, lng: -118.2437, city: 'Los Angeles', state: 'CA' },
  '921': { lat: 32.7157, lng: -117.1611, city: 'San Diego', state: 'CA' },
  '922': { lat: 33.8303, lng: -116.5453, city: 'Palm Springs', state: 'CA' },
  '926': { lat: 33.7175, lng: -116.3771, city: 'Palm Desert', state: 'CA' },
  '941': { lat: 37.7749, lng: -122.4194, city: 'San Francisco', state: 'CA' },
  '926b': { lat: 33.7391, lng: -116.4157, city: 'Rancho Mirage', state: 'CA' }
};

// ── 2) State centroids (approximate) ──────────────────────────────────────
const stateCentroids = {
  AL: [32.8067, -86.7911], AK: [61.3707, -152.4044], AZ: [33.7298, -111.4312],
  AR: [34.9697, -92.3731], CA: [36.1162, -119.6816], CO: [39.0598, -105.3111],
  CT: [41.5978, -72.7554], DE: [39.3185, -75.5071], FL: [27.7663, -81.6868],
  GA: [33.0406, -83.6431], HI: [21.0943, -157.4983], ID: [44.2405, -114.4788],
  IL: [40.3495, -88.9861], IN: [39.8494, -86.2583], IA: [42.0115, -93.2105],
  KS: [38.5266, -96.7265], KY: [37.6681, -84.6701], LA: [31.1695, -91.8678],
  ME: [44.6939, -69.3819], MD: [39.0639, -76.8021], MA: [42.2302, -71.5301],
  MI: [43.3266, -84.5361], MN: [45.6945, -93.9002], MS: [32.7416, -89.6787],
  MO: [38.4561, -92.2884], MT: [46.9219, -110.4544], NE: [41.1254, -98.2681],
  NV: [38.3135, -117.0554], NH: [43.4525, -71.5639], NJ: [40.2989, -74.5210],
  NM: [34.8405, -106.2485], NY: [42.1657, -74.9481], NC: [35.6301, -79.8064],
  ND: [47.5289, -99.7840], OH: [40.3888, -82.7649], OK: [35.5653, -96.9289],
  OR: [44.5720, -122.0709], PA: [40.5908, -77.2098], RI: [41.6809, -71.5118],
  SC: [33.8569, -80.9450], SD: [44.2998, -99.4388], TN: [35.7478, -86.6923],
  TX: [31.0545, -97.5635], UT: [40.1500, -111.8624], VT: [44.0459, -72.7107],
  VA: [37.7693, -78.1700], WA: [47.4009, -121.4905], WV: [38.4912, -80.9545],
  WI: [44.2685, -89.6165], WY: [42.7559, -107.3025], DC: [38.8974, -77.0268]
};

// ── 3) ZIP3-range → state fallback ────────────────────────────────────────
// Ranges are inclusive. Order matters only for readability; each ZIP3 falls in one.
const zip3Ranges = [
  { min: 10, max: 27, state: 'MA' }, { min: 28, max: 29, state: 'RI' },
  { min: 30, max: 38, state: 'NH' }, { min: 39, max: 49, state: 'ME' },
  { min: 50, max: 54, state: 'VT' }, { min: 55, max: 59, state: 'VT' },
  { min: 60, max: 69, state: 'CT' }, { min: 70, max: 89, state: 'NJ' },
  { min: 100, max: 149, state: 'NY' }, { min: 150, max: 196, state: 'PA' },
  { min: 197, max: 199, state: 'DE' }, { min: 200, max: 205, state: 'DC' },
  { min: 206, max: 219, state: 'MD' }, { min: 220, max: 246, state: 'VA' },
  { min: 247, max: 268, state: 'WV' }, { min: 270, max: 289, state: 'NC' },
  { min: 290, max: 299, state: 'SC' }, { min: 300, max: 319, state: 'GA' },
  { min: 320, max: 349, state: 'FL' }, { min: 350, max: 369, state: 'AL' },
  { min: 370, max: 385, state: 'TN' }, { min: 386, max: 399, state: 'MS' },
  { min: 400, max: 427, state: 'KY' }, { min: 430, max: 458, state: 'OH' },
  { min: 460, max: 479, state: 'IN' }, { min: 480, max: 499, state: 'MI' },
  { min: 500, max: 528, state: 'IA' }, { min: 530, max: 549, state: 'WI' },
  { min: 550, max: 567, state: 'MN' }, { min: 570, max: 577, state: 'SD' },
  { min: 580, max: 588, state: 'ND' }, { min: 590, max: 599, state: 'MT' },
  { min: 600, max: 629, state: 'IL' }, { min: 630, max: 658, state: 'MO' },
  { min: 660, max: 679, state: 'KS' }, { min: 680, max: 693, state: 'NE' },
  { min: 700, max: 714, state: 'LA' }, { min: 716, max: 729, state: 'AR' },
  { min: 730, max: 749, state: 'OK' }, { min: 750, max: 799, state: 'TX' },
  { min: 800, max: 816, state: 'CO' }, { min: 820, max: 831, state: 'WY' },
  { min: 832, max: 838, state: 'ID' }, { min: 840, max: 847, state: 'UT' },
  { min: 850, max: 865, state: 'AZ' }, { min: 870, max: 884, state: 'NM' },
  { min: 885, max: 885, state: 'TX' }, { min: 889, max: 891, state: 'NV' },
  { min: 893, max: 898, state: 'NV' }, { min: 900, max: 961, state: 'CA' },
  { min: 967, max: 968, state: 'HI' }, { min: 970, max: 979, state: 'OR' },
  { min: 980, max: 994, state: 'WA' }, { min: 995, max: 999, state: 'AK' }
];

export function normalizeZip(zip) {
  if (!zip) return null;
  const cleaned = String(zip).trim().replace(/\s+/g, '');
  const match = cleaned.match(/^(\d{5})(-\d{4})?$/);
  if (!match) return null;
  return match[1];
}

export function getZip3(zip) {
  const z = normalizeZip(zip);
  if (!z) return null;
  return z.slice(0, 3);
}

export function stateForZip(zip) {
  const zip3 = getZip3(zip);
  if (!zip3) return null;
  const n = parseInt(zip3, 10);
  const range = zip3Ranges.find((r) => n >= r.min && n <= r.max);
  return range ? range.state : null;
}

export function coordsForZip(zip) {
  const zip3 = getZip3(zip);
  if (!zip3) return null;

  if (zip3Metros[zip3]) {
    const m = zip3Metros[zip3];
    return { lat: m.lat, lng: m.lng, city: m.city, state: m.state, precision: 'metro' };
  }

  const state = stateForZip(zip);
  if (state && stateCentroids[state]) {
    const [lat, lng] = stateCentroids[state];
    return { lat, lng, city: null, state, precision: 'state' };
  }

  return null;
}

export function haversineMiles(lat1, lng1, lat2, lng2) {
  const R = 3958.8;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Great-circle → estimated driving distance factor.
const ROAD_FACTOR = 1.2;

export function estimateRoadDistance(pickupZip, deliveryZip) {
  const a = coordsForZip(pickupZip);
  const b = coordsForZip(deliveryZip);
  if (!a || !b) return null;
  const gc = haversineMiles(a.lat, a.lng, b.lat, b.lng);
  const miles = Math.round(gc * ROAD_FACTOR);
  return { miles, pickup: a, delivery: b };
}
