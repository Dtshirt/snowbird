// Snowbird routes. Each route ties an origin state to a destination state and
// carries route-specific corridor, timing, and pricing context.

export const routes = [
  // ── To Florida ────────────────────────────────────
  {
    slug: 'new-york-to-florida',
    origin: 'New York',
    originSlug: 'new-york',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1280,
    transitDays: '4–7 days',
    priceLow: 950,
    priceHigh: 1600,
    popularPairs: [
      ['New York City, NY', 'Miami, FL'],
      ['Long Island, NY', 'Naples, FL'],
      ['Buffalo, NY', 'Sarasota, FL']
    ],
    highwayCorridors: ['I-95', 'I-81', 'I-77'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary:
      "One of the most heavily traveled snowbird corridors in the country. New York to Florida is a staple of seasonal auto transport."
  },
  {
    slug: 'new-jersey-to-florida',
    origin: 'New Jersey',
    originSlug: 'new-jersey',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1180,
    transitDays: '3–6 days',
    priceLow: 900,
    priceHigh: 1500,
    popularPairs: [
      ['Newark, NJ', 'West Palm Beach, FL'],
      ['Toms River, NJ', 'Fort Myers, FL'],
      ['Cherry Hill, NJ', 'Naples, FL']
    ],
    highwayCorridors: ['I-95', 'I-295'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: "Very common Northeast snowbird corridor with heavy volume to Florida's East and Gulf coasts."
  },
  {
    slug: 'pennsylvania-to-florida',
    origin: 'Pennsylvania',
    originSlug: 'pennsylvania',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1100,
    transitDays: '3–6 days',
    priceLow: 850,
    priceHigh: 1450,
    popularPairs: [
      ['Philadelphia, PA', 'Tampa, FL'],
      ['Pittsburgh, PA', 'Naples, FL'],
      ['Harrisburg, PA', 'Orlando, FL']
    ],
    highwayCorridors: ['I-76', 'I-95', 'I-81'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: "Popular Pennsylvania corridor for snowbirds heading to Florida's East and Gulf coasts."
  },
  {
    slug: 'massachusetts-to-florida',
    origin: 'Massachusetts',
    originSlug: 'massachusetts',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1450,
    transitDays: '5–8 days',
    priceLow: 1050,
    priceHigh: 1700,
    popularPairs: [
      ['Boston, MA', 'Naples, FL'],
      ['Cape Cod, MA', 'Fort Myers, FL'],
      ['Worcester, MA', 'Sarasota, FL']
    ],
    highwayCorridors: ['I-95', 'I-91'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'High-volume Northeast snowbird route with strong seasonal demand from Greater Boston.'
  },
  {
    slug: 'connecticut-to-florida',
    origin: 'Connecticut',
    originSlug: 'connecticut',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1330,
    transitDays: '4–7 days',
    priceLow: 1000,
    priceHigh: 1600,
    popularPairs: [
      ['Hartford, CT', 'Boca Raton, FL'],
      ['Greenwich, CT', 'Naples, FL']
    ],
    highwayCorridors: ['I-95'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'Steady East Coast route with reliable pricing from southern Connecticut to South Florida.'
  },
  {
    slug: 'maryland-to-florida',
    origin: 'Maryland',
    originSlug: 'maryland',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1000,
    transitDays: '3–5 days',
    priceLow: 800,
    priceHigh: 1350,
    popularPairs: [
      ['Baltimore, MD', 'Orlando, FL'],
      ['Bethesda, MD', 'Naples, FL']
    ],
    highwayCorridors: ['I-95'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'Shorter East Coast corridor for Maryland snowbirds traveling to Central and South Florida.'
  },
  {
    slug: 'virginia-to-florida',
    origin: 'Virginia',
    originSlug: 'virginia',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 850,
    transitDays: '2–4 days',
    priceLow: 750,
    priceHigh: 1250,
    popularPairs: [
      ['Richmond, VA', 'Jacksonville, FL'],
      ['Virginia Beach, VA', 'Fort Lauderdale, FL']
    ],
    highwayCorridors: ['I-95'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'One of the shorter East Coast snowbird routes, with reliable transit and stable seasonal pricing.'
  },
  {
    slug: 'ohio-to-florida',
    origin: 'Ohio',
    originSlug: 'ohio',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1150,
    transitDays: '3–6 days',
    priceLow: 900,
    priceHigh: 1500,
    popularPairs: [
      ['Columbus, OH', 'Tampa, FL'],
      ['Cleveland, OH', 'Naples, FL']
    ],
    highwayCorridors: ['I-75', 'I-77'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'The I-75 route from Ohio makes it a direct and popular snowbird corridor to Florida.'
  },
  {
    slug: 'michigan-to-florida',
    origin: 'Michigan',
    originSlug: 'michigan',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1425,
    transitDays: '5–8 days',
    priceLow: 1000,
    priceHigh: 1650,
    popularPairs: [
      ['Detroit, MI', 'Naples, FL'],
      ['Grand Rapids, MI', 'Fort Myers, FL']
    ],
    highwayCorridors: ['I-75'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: "The I-75 corridor from Michigan to Florida's Gulf Coast is one of the most iconic snowbird routes in the country."
  },
  {
    slug: 'illinois-to-florida',
    origin: 'Illinois',
    originSlug: 'illinois',
    destination: 'Florida',
    destinationSlug: 'florida',
    distanceMiles: 1350,
    transitDays: '4–7 days',
    priceLow: 950,
    priceHigh: 1650,
    popularPairs: [
      ['Chicago, IL', 'Naples, FL'],
      ['Naperville, IL', 'Tampa, FL']
    ],
    highwayCorridors: ['I-65', 'I-75'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'Strong Chicago-area corridor to Florida via I-65 and I-75, with dense carrier coverage.'
  },

  // ── To Arizona ────────────────────────────────────
  {
    slug: 'new-york-to-arizona',
    origin: 'New York',
    originSlug: 'new-york',
    destination: 'Arizona',
    destinationSlug: 'arizona',
    distanceMiles: 2400,
    transitDays: '7–10 days',
    priceLow: 1300,
    priceHigh: 2100,
    popularPairs: [
      ['New York City, NY', 'Phoenix, AZ'],
      ['Long Island, NY', 'Scottsdale, AZ']
    ],
    highwayCorridors: ['I-80', 'I-70', 'I-40'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southwestbound',
    summary: 'Long-haul cross-country corridor from the Northeast to the Phoenix and Scottsdale metros.'
  },
  {
    slug: 'illinois-to-arizona',
    origin: 'Illinois',
    originSlug: 'illinois',
    destination: 'Arizona',
    destinationSlug: 'arizona',
    distanceMiles: 1750,
    transitDays: '5–8 days',
    priceLow: 1050,
    priceHigh: 1750,
    popularPairs: [
      ['Chicago, IL', 'Phoenix, AZ'],
      ['Naperville, IL', 'Scottsdale, AZ']
    ],
    highwayCorridors: ['I-55', 'I-44', 'I-40'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southwestbound',
    summary: 'Leading Midwest-to-Southwest snowbird route from Chicago to the Phoenix corridor.'
  },
  {
    slug: 'michigan-to-arizona',
    origin: 'Michigan',
    originSlug: 'michigan',
    destination: 'Arizona',
    destinationSlug: 'arizona',
    distanceMiles: 1900,
    transitDays: '6–9 days',
    priceLow: 1100,
    priceHigh: 1850,
    popularPairs: [
      ['Detroit, MI', 'Phoenix, AZ'],
      ['Grand Rapids, MI', 'Mesa, AZ']
    ],
    highwayCorridors: ['I-80', 'I-44', 'I-40'],
    peakMonths: ['October', 'November', 'December'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southwestbound',
    summary: 'Growing snowbird corridor from Michigan to the Phoenix and Mesa 55+ community belt.'
  },
  {
    slug: 'california-to-arizona',
    origin: 'California',
    originSlug: 'california-origin',
    destination: 'Arizona',
    destinationSlug: 'arizona',
    distanceMiles: 400,
    transitDays: '1–3 days',
    priceLow: 550,
    priceHigh: 1000,
    popularPairs: [
      ['Los Angeles, CA', 'Phoenix, AZ'],
      ['San Diego, CA', 'Yuma, AZ']
    ],
    highwayCorridors: ['I-10', 'I-8'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April'],
    seasonalDirection: 'eastbound',
    summary: 'Short West Coast lane that supports seasonal residents moving between California and Arizona.'
  },
  {
    slug: 'nevada-to-arizona',
    origin: 'Nevada',
    originSlug: 'nevada-origin',
    destination: 'Arizona',
    destinationSlug: 'arizona',
    distanceMiles: 300,
    transitDays: '1–2 days',
    priceLow: 500,
    priceHigh: 900,
    popularPairs: [
      ['Las Vegas, NV', 'Phoenix, AZ']
    ],
    highwayCorridors: ['US-93'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April'],
    seasonalDirection: 'southbound',
    summary: 'Short regional route with steady seasonal traffic between Las Vegas and Phoenix.'
  },
  {
    slug: 'colorado-to-arizona',
    origin: 'Colorado',
    originSlug: 'colorado-origin',
    destination: 'Arizona',
    destinationSlug: 'arizona',
    distanceMiles: 850,
    transitDays: '2–4 days',
    priceLow: 750,
    priceHigh: 1300,
    popularPairs: [
      ['Denver, CO', 'Phoenix, AZ'],
      ['Boulder, CO', 'Tucson, AZ']
    ],
    highwayCorridors: ['I-25', 'I-40'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'Regional Mountain West to desert corridor with meaningful snowbird volume.'
  },
  {
    slug: 'washington-to-arizona',
    origin: 'Washington',
    originSlug: 'washington-origin',
    destination: 'Arizona',
    destinationSlug: 'arizona',
    distanceMiles: 1450,
    transitDays: '4–7 days',
    priceLow: 1050,
    priceHigh: 1750,
    popularPairs: [
      ['Seattle, WA', 'Phoenix, AZ'],
      ['Spokane, WA', 'Yuma, AZ']
    ],
    highwayCorridors: ['I-5', 'I-15'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'Pacific Northwest corridor to Phoenix and Yuma, with weather considerations at high passes.'
  },

  // ── To Texas ──────────────────────────────────────
  {
    slug: 'new-york-to-texas',
    origin: 'New York',
    originSlug: 'new-york',
    destination: 'Texas',
    destinationSlug: 'texas',
    distanceMiles: 1900,
    transitDays: '6–9 days',
    priceLow: 1150,
    priceHigh: 1850,
    popularPairs: [
      ['New York City, NY', 'San Antonio, TX'],
      ['Buffalo, NY', 'McAllen, TX']
    ],
    highwayCorridors: ['I-81', 'I-40', 'I-35'],
    peakMonths: ['October', 'November'],
    returnMonths: ['March', 'April'],
    seasonalDirection: 'southbound',
    summary: 'Northeast to South Texas corridor for snowbirds targeting San Antonio and the Rio Grande Valley.'
  },
  {
    slug: 'illinois-to-texas',
    origin: 'Illinois',
    originSlug: 'illinois',
    destination: 'Texas',
    destinationSlug: 'texas',
    distanceMiles: 1300,
    transitDays: '4–6 days',
    priceLow: 950,
    priceHigh: 1650,
    popularPairs: [
      ['Chicago, IL', 'McAllen, TX'],
      ['Springfield, IL', 'San Antonio, TX']
    ],
    highwayCorridors: ['I-55', 'I-35'],
    peakMonths: ['October', 'November'],
    returnMonths: ['March', 'April'],
    seasonalDirection: 'southbound',
    summary: 'Midwest to Rio Grande Valley corridor along I-55 and I-35.'
  },
  {
    slug: 'minnesota-to-texas',
    origin: 'Minnesota',
    originSlug: 'minnesota',
    destination: 'Texas',
    destinationSlug: 'texas',
    distanceMiles: 1550,
    transitDays: '5–8 days',
    priceLow: 1050,
    priceHigh: 1800,
    popularPairs: [
      ['Minneapolis, MN', 'McAllen, TX'],
      ['St. Paul, MN', 'Harlingen, TX']
    ],
    highwayCorridors: ['I-35'],
    peakMonths: ['October', 'November'],
    returnMonths: ['March', 'April'],
    seasonalDirection: 'southbound',
    summary: 'The archetypal Winter Texan corridor — Twin Cities straight down I-35 to the Valley.'
  },
  {
    slug: 'wisconsin-to-texas',
    origin: 'Wisconsin',
    originSlug: 'wisconsin',
    destination: 'Texas',
    destinationSlug: 'texas',
    distanceMiles: 1500,
    transitDays: '5–8 days',
    priceLow: 1050,
    priceHigh: 1800,
    popularPairs: [
      ['Milwaukee, WI', 'McAllen, TX'],
      ['Madison, WI', 'Harlingen, TX']
    ],
    highwayCorridors: ['I-94', 'I-35'],
    peakMonths: ['October', 'November'],
    returnMonths: ['March', 'April'],
    seasonalDirection: 'southbound',
    summary: 'High-volume Winter Texan corridor from Wisconsin to the Rio Grande Valley.'
  },
  {
    slug: 'michigan-to-texas',
    origin: 'Michigan',
    originSlug: 'michigan',
    destination: 'Texas',
    destinationSlug: 'texas',
    distanceMiles: 1600,
    transitDays: '5–8 days',
    priceLow: 1050,
    priceHigh: 1800,
    popularPairs: [
      ['Detroit, MI', 'McAllen, TX'],
      ['Grand Rapids, MI', 'Corpus Christi, TX']
    ],
    highwayCorridors: ['I-69', 'I-35'],
    peakMonths: ['October', 'November'],
    returnMonths: ['March', 'April'],
    seasonalDirection: 'southbound',
    summary: 'Michigan snowbirds shipping to South Texas RV and 55+ communities.'
  },

  // ── To California ─────────────────────────────────
  {
    slug: 'new-york-to-california',
    origin: 'New York',
    originSlug: 'new-york',
    destination: 'California',
    destinationSlug: 'california',
    distanceMiles: 2800,
    transitDays: '8–11 days',
    priceLow: 1400,
    priceHigh: 2200,
    popularPairs: [
      ['New York City, NY', 'Palm Springs, CA'],
      ['Long Island, NY', 'San Diego, CA']
    ],
    highwayCorridors: ['I-80', 'I-70', 'I-40', 'I-15'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'westbound',
    summary: 'Cross-country lane from the Northeast to Southern California snowbird markets.'
  },
  {
    slug: 'washington-to-california',
    origin: 'Washington',
    originSlug: 'washington-origin',
    destination: 'California',
    destinationSlug: 'california',
    distanceMiles: 1200,
    transitDays: '3–6 days',
    priceLow: 900,
    priceHigh: 1600,
    popularPairs: [
      ['Seattle, WA', 'Palm Springs, CA'],
      ['Spokane, WA', 'San Diego, CA']
    ],
    highwayCorridors: ['I-5'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'Pacific Northwest corridor to the Coachella Valley and San Diego along I-5.'
  },
  {
    slug: 'oregon-to-california',
    origin: 'Oregon',
    originSlug: 'oregon-origin',
    destination: 'California',
    destinationSlug: 'california',
    distanceMiles: 1050,
    transitDays: '3–5 days',
    priceLow: 850,
    priceHigh: 1500,
    popularPairs: [
      ['Portland, OR', 'Palm Springs, CA']
    ],
    highwayCorridors: ['I-5'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'southbound',
    summary: 'Oregon to Southern California route dominated by Coachella Valley demand.'
  },
  {
    slug: 'illinois-to-california',
    origin: 'Illinois',
    originSlug: 'illinois',
    destination: 'California',
    destinationSlug: 'california',
    distanceMiles: 2050,
    transitDays: '6–9 days',
    priceLow: 1200,
    priceHigh: 2000,
    popularPairs: [
      ['Chicago, IL', 'Palm Springs, CA'],
      ['Naperville, IL', 'San Diego, CA']
    ],
    highwayCorridors: ['I-55', 'I-40', 'I-15'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April', 'May'],
    seasonalDirection: 'westbound',
    summary: 'Midwest to Southern California corridor via I-40 and I-15 into the Coachella Valley.'
  },
  {
    slug: 'nevada-to-california',
    origin: 'Nevada',
    originSlug: 'nevada-origin',
    destination: 'California',
    destinationSlug: 'california',
    distanceMiles: 280,
    transitDays: '1–2 days',
    priceLow: 500,
    priceHigh: 950,
    popularPairs: [
      ['Las Vegas, NV', 'Palm Springs, CA']
    ],
    highwayCorridors: ['I-15'],
    peakMonths: ['October', 'November'],
    returnMonths: ['April'],
    seasonalDirection: 'southbound',
    summary: 'Short regional corridor from Las Vegas to the Coachella Valley.'
  }
];

export function getRouteBySlug(slug) {
  return routes.find((r) => r.slug === slug) || null;
}

export function getAllRouteSlugs() {
  return routes.map((r) => r.slug);
}

export function getRoutesByOrigin(originSlug) {
  return routes.filter((r) => r.originSlug === originSlug);
}

export function getRoutesByDestination(destinationSlug) {
  return routes.filter((r) => r.destinationSlug === destinationSlug);
}
