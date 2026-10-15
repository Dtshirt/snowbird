// Snowbird origin states. Each state carries the destinations it commonly ships to,
// so page templates can render conditional per-destination sections.

export const originStates = [
  {
    slug: 'new-york',
    name: 'New York',
    abbr: 'NY',
    role: 'origin',
    majorCities: ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse', 'Long Island'],
    popularDestinationStates: ['florida', 'arizona', 'california'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: 'Snow, freezing temperatures and salt-treated roads that are hard on vehicles.',
    demographics:
      "New York snowbirds primarily travel to Florida's East and Gulf coasts, with a growing share heading to Arizona and Southern California.",
    averageMiles: 1300,
    typicalTransit: '4 – 7 days',
    priceLow: 950,
    priceHigh: 1900
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbr: 'NJ',
    role: 'origin',
    majorCities: ['Newark', 'Jersey City', 'Princeton', 'Toms River', 'Cherry Hill'],
    popularDestinationStates: ['florida', 'arizona'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: "Nor'easters, road salt and heavy winter conditions.",
    demographics:
      'A large share of New Jersey snowbirds travel to Florida each fall, with a secondary corridor to Arizona.',
    averageMiles: 1200,
    typicalTransit: '3 – 6 days',
    priceLow: 900,
    priceHigh: 1800
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    abbr: 'PA',
    role: 'origin',
    majorCities: ['Philadelphia', 'Pittsburgh', 'Harrisburg', 'Allentown', 'Erie'],
    popularDestinationStates: ['florida', 'arizona'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: 'Long winters with heavy snowfall in western and central regions.',
    demographics:
      "Pennsylvania snowbirds mostly winter in Florida, with growing Arizona demand from western PA.",
    averageMiles: 1150,
    typicalTransit: '3 – 6 days',
    priceLow: 850,
    priceHigh: 1750
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    abbr: 'MA',
    role: 'origin',
    majorCities: ['Boston', 'Worcester', 'Springfield', 'Cape Cod', 'Cambridge'],
    popularDestinationStates: ['florida', 'arizona'],
    peakSeason: 'October – November',
    returnSeason: 'April – May',
    winterClimate: 'Severe New England winters with prolonged snow and ice.',
    demographics:
      'Massachusetts snowbirds strongly favor Southwest Florida (Naples, Fort Myers), with growing Arizona interest.',
    averageMiles: 1450,
    typicalTransit: '5 – 8 days',
    priceLow: 1050,
    priceHigh: 1900
  },
  {
    slug: 'connecticut',
    name: 'Connecticut',
    abbr: 'CT',
    role: 'origin',
    majorCities: ['Hartford', 'New Haven', 'Stamford', 'Bridgeport', 'Greenwich'],
    popularDestinationStates: ['florida'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: 'Cold winters with regular snow and freezing rain.',
    demographics:
      "Connecticut snowbirds commonly winter in Florida's southeast coast, from Palm Beach through Boca Raton and Fort Lauderdale.",
    averageMiles: 1350,
    typicalTransit: '4 – 7 days',
    priceLow: 1000,
    priceHigh: 1700
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    abbr: 'MD',
    role: 'origin',
    majorCities: ['Baltimore', 'Annapolis', 'Rockville', 'Bethesda', 'Frederick'],
    popularDestinationStates: ['florida'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: 'Mid-Atlantic winters with occasional heavy snow storms.',
    demographics:
      'Maryland snowbirds frequently travel to Central Florida, Tampa Bay, and the Space Coast.',
    averageMiles: 1050,
    typicalTransit: '3 – 5 days',
    priceLow: 800,
    priceHigh: 1500
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbr: 'VA',
    role: 'origin',
    majorCities: ['Richmond', 'Virginia Beach', 'Alexandria', 'Arlington', 'Norfolk'],
    popularDestinationStates: ['florida'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: 'Cooler winters with occasional ice storms.',
    demographics:
      'Virginia residents ship vehicles to Florida for winter and to coastal Carolina destinations.',
    averageMiles: 900,
    typicalTransit: '2 – 4 days',
    priceLow: 750,
    priceHigh: 1350
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    abbr: 'OH',
    role: 'origin',
    majorCities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    popularDestinationStates: ['florida', 'arizona', 'texas'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: 'Cold Midwest winters and lake-effect snow near the Great Lakes.',
    demographics:
      'Ohio snowbirds regularly travel to Florida, Arizona, and Southern Texas each winter.',
    averageMiles: 1250,
    typicalTransit: '4 – 6 days',
    priceLow: 900,
    priceHigh: 1750
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbr: 'MI',
    role: 'origin',
    majorCities: ['Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing', 'Traverse City'],
    popularDestinationStates: ['florida', 'arizona', 'texas'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: 'Long, snowy winters and heavy road salt use.',
    demographics:
      "Michigan snowbirds famously travel to Florida's Gulf Coast, particularly Naples and Fort Myers. Arizona and South Texas each attract meaningful volume.",
    averageMiles: 1450,
    typicalTransit: '5 – 8 days',
    priceLow: 1000,
    priceHigh: 1850
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbr: 'IL',
    role: 'origin',
    majorCities: ['Chicago', 'Naperville', 'Springfield', 'Rockford', 'Aurora'],
    popularDestinationStates: ['florida', 'arizona', 'texas', 'california'],
    peakSeason: 'October – December',
    returnSeason: 'April – May',
    winterClimate: 'Bitterly cold Midwest winters with heavy snowfall and wind chill.',
    demographics:
      'Illinois is one of the most diversified snowbird origins — significant volume travels to all four major destination states.',
    averageMiles: 1350,
    typicalTransit: '4 – 7 days',
    priceLow: 950,
    priceHigh: 1900
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    abbr: 'MN',
    role: 'origin',
    majorCities: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth'],
    popularDestinationStates: ['texas', 'arizona', 'florida'],
    peakSeason: 'October – December',
    returnSeason: 'March – April',
    winterClimate: 'Some of the coldest winters in the country.',
    demographics:
      "Minnesota is the archetypal Winter Texan origin, with the Rio Grande Valley as the primary destination. Arizona and Florida also receive substantial volume.",
    averageMiles: 1400,
    typicalTransit: '5 – 8 days',
    priceLow: 1000,
    priceHigh: 1900
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    abbr: 'WI',
    role: 'origin',
    majorCities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha'],
    popularDestinationStates: ['texas', 'arizona', 'florida'],
    peakSeason: 'October – December',
    returnSeason: 'March – April',
    winterClimate: 'Long, cold winters with heavy lake-effect snow.',
    demographics:
      'Wisconsin snowbirds follow patterns similar to Minnesota — South Texas is the leading destination, followed by Arizona and Florida.',
    averageMiles: 1400,
    typicalTransit: '5 – 8 days',
    priceLow: 1000,
    priceHigh: 1900
  }
];

export function getStateBySlug(slug) {
  return originStates.find((s) => s.slug === slug) || null;
}

export function getAllStateSlugs() {
  return originStates.map((s) => s.slug);
}

export function getStateByName(name) {
  if (!name) return null;
  return originStates.find((s) => s.name.toLowerCase() === String(name).toLowerCase()) || null;
}
