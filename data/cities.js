// Destination cities grouped by destination-state slug.
// Each city has enough unique context to justify its own page.

export const destinationCities = [
  // ─── Florida ──────────────────────────────────────────
  {
    slug: 'miami',
    destinationSlug: 'florida',
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Atlantic beaches, cultural diversity, and a strong Northeast snowbird pipeline.',
    climate: 'Tropical winters averaging 75–80°F.',
    snowbirdAppeal:
      'Miami draws snowbirds who want ocean access, cultural diversity, and a city environment during the winter months. Northeast and Eastern Canada snowbirds are especially well represented.',
    community:
      'Delivery destinations range from Brickell high-rises to single-family homes in Coral Gables and Aventura. High-rise deliveries usually require a nearby drop-off point.',
    nearbyMarkets: ['Miami Beach', 'Coral Gables', 'Aventura', 'Fort Lauderdale'],
    popularOrigins: ['New York', 'New Jersey', 'Massachusetts', 'Connecticut'],
    typicalPrices: { low: 900, high: 1700 },
    seasonWindow: 'November through April'
  },
  {
    slug: 'orlando',
    destinationSlug: 'florida',
    city: 'Orlando',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Central-Florida crossroads with strong access to Gulf and Atlantic coasts.',
    climate: 'Warm inland winters, average highs around 70°F.',
    snowbirdAppeal:
      'Orlando appeals to snowbirds who prioritize central location, golf, family visits, and easy day trips to either coast. Kissimmee, Winter Park, and Lakeland absorb overflow demand.',
    community:
      "Standard suburban and gated community delivery is easy. Delivery to the outer edges of Central Florida may add a day for the final leg.",
    nearbyMarkets: ['Kissimmee', 'Winter Park', 'Sanford', 'Lakeland'],
    popularOrigins: ['Ohio', 'Pennsylvania', 'Michigan', 'Illinois'],
    typicalPrices: { low: 850, high: 1500 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'tampa',
    destinationSlug: 'florida',
    city: 'Tampa',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Gulf Coast mid-size city with dense retirement and waterfront communities.',
    climate: 'Mild Gulf Coast winters, average highs around 70°F.',
    snowbirdAppeal:
      "Tampa Bay balances mid-size-city amenities with immediate access to Clearwater and St. Petersburg beaches. Snowbirds who don't want the Naples price ceiling often land in the Tampa area.",
    community:
      'Both single-family and 55+ community delivery is well supported. Larger age-restricted communities (Sun City Center, Kings Point) have carrier-friendly access.',
    nearbyMarkets: ['St. Petersburg', 'Clearwater', 'Brandon', 'Wesley Chapel'],
    popularOrigins: ['Ohio', 'Pennsylvania', 'New York', 'Michigan'],
    typicalPrices: { low: 850, high: 1500 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'naples',
    destinationSlug: 'florida',
    city: 'Naples',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Southwest Florida\'s most concentrated snowbird corridor.',
    climate: 'Warm, sunny Gulf winters averaging 76°F.',
    snowbirdAppeal:
      'Naples is one of the most popular snowbird destinations in the country, especially with Michigan, Massachusetts, and Ohio residents. Golf communities, beachfront living, and long-established seasonal patterns anchor the market.',
    community:
      'Gated communities are common; most allow carrier access with prior gatehouse notice. Marco Island and Bonita Springs share carrier coverage.',
    nearbyMarkets: ['Marco Island', 'Bonita Springs', 'Estero'],
    popularOrigins: ['Michigan', 'Massachusetts', 'New York', 'Illinois'],
    typicalPrices: { low: 950, high: 1700 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'fort-myers',
    destinationSlug: 'florida',
    city: 'Fort Myers',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Gulf Coast alternative to Naples with strong active-adult communities.',
    climate: 'Sunny Gulf Coast winters, average highs around 75°F.',
    snowbirdAppeal:
      "Fort Myers offers similar Gulf Coast weather to Naples at a lower price point. Cape Coral's canal-front neighborhoods and Estero's planned communities extend the market.",
    community: 'Standard suburban delivery is straightforward. Sanibel and Fort Myers Beach may require ferry or drawbridge scheduling.',
    nearbyMarkets: ['Cape Coral', 'Sanibel', 'Estero', 'Lehigh Acres'],
    popularOrigins: ['Ohio', 'Michigan', 'Massachusetts', 'New York'],
    typicalPrices: { low: 900, high: 1650 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'sarasota',
    destinationSlug: 'florida',
    city: 'Sarasota',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Cultural Gulf Coast city with steady Northeast snowbird demand.',
    climate: 'Warm Gulf coast climate, average winter highs around 73°F.',
    snowbirdAppeal:
      'Sarasota attracts snowbirds who want arts, culture, Siesta Key beach, and a slightly quieter feel than Tampa. New Jersey, New York, and Pennsylvania are dominant origin states.',
    community: 'Longboat Key delivery may require staging on the mainland; the rest of the market is standard suburban access.',
    nearbyMarkets: ['Bradenton', 'Venice', 'Longboat Key'],
    popularOrigins: ['New Jersey', 'New York', 'Pennsylvania', 'Ohio'],
    typicalPrices: { low: 900, high: 1600 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'west-palm-beach',
    destinationSlug: 'florida',
    city: 'West Palm Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'East Coast gateway to Palm Beach, Boca Raton, and Delray Beach.',
    climate: 'Warm East Coast winters, average highs around 75°F.',
    snowbirdAppeal:
      'The West Palm Beach corridor covers Palm Beach, Boca Raton, Delray Beach, Jupiter, and neighboring communities. It is one of the most heavily traveled Northeast-to-Florida destinations.',
    community: 'Both single-family and community delivery is well supported. Palm Beach island itself may need advance access coordination.',
    nearbyMarkets: ['Palm Beach', 'Boca Raton', 'Delray Beach', 'Jupiter'],
    popularOrigins: ['New York', 'New Jersey', 'Connecticut', 'Massachusetts'],
    typicalPrices: { low: 900, high: 1600 },
    seasonWindow: 'October through May'
  },

  // ─── Arizona ──────────────────────────────────────────
  {
    slug: 'phoenix',
    destinationSlug: 'arizona',
    city: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    tagline: 'Arizona\'s largest snowbird gateway and delivery hub.',
    climate: 'Warm, dry winters averaging 68°F.',
    snowbirdAppeal:
      'Phoenix is the largest snowbird market in Arizona and typically serves as the staging point for delivery across the Valley. Golf, 55+ communities, and dry warm weather draw seasonal residents from the Midwest and Pacific Northwest.',
    community: 'Standard suburban delivery is easy across most of the Valley. Sun City and Sun City West are widely accessible to carriers.',
    nearbyMarkets: ['Glendale', 'Peoria', 'Surprise', 'Sun City'],
    popularOrigins: ['California', 'Nevada', 'Colorado', 'Illinois', 'Minnesota'],
    typicalPrices: { low: 900, high: 1900 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'scottsdale',
    destinationSlug: 'arizona',
    city: 'Scottsdale',
    state: 'Arizona',
    stateAbbr: 'AZ',
    tagline: 'Upscale Phoenix-area destination with strong luxury-vehicle demand.',
    climate: 'Warm, sunny winters averaging 70°F.',
    snowbirdAppeal:
      'Scottsdale is a preferred destination for higher-end snowbirds and is one of the more common Arizona cities for enclosed transport, particularly for luxury or collector vehicles wintering in the region.',
    community: 'Gated community access is straightforward with gatehouse coordination. North Scottsdale may require a nearby delivery point.',
    nearbyMarkets: ['Paradise Valley', 'Fountain Hills', 'Cave Creek'],
    popularOrigins: ['California', 'Illinois', 'Michigan', 'New York'],
    typicalPrices: { low: 950, high: 2000 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'mesa',
    destinationSlug: 'arizona',
    city: 'Mesa',
    state: 'Arizona',
    stateAbbr: 'AZ',
    tagline: 'East Valley snowbird hub anchored by large 55+ resort communities.',
    climate: 'Warm winters averaging 68°F.',
    snowbirdAppeal:
      'Mesa has one of the highest concentrations of 55+ resort communities and RV resorts in the state. It is particularly popular with Canadian and Upper Midwest snowbirds.',
    community: 'Most RV resorts and 55+ communities in Mesa are carrier-accessible. Very tight interior roads may need a staging drop.',
    nearbyMarkets: ['Apache Junction', 'Gilbert', 'Queen Creek'],
    popularOrigins: ['Minnesota', 'Wisconsin', 'Iowa', 'Michigan'],
    typicalPrices: { low: 900, high: 1800 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'tucson',
    destinationSlug: 'arizona',
    city: 'Tucson',
    state: 'Arizona',
    stateAbbr: 'AZ',
    tagline: 'Southern Arizona destination for snowbirds who prefer a smaller metro.',
    climate: 'Warm winters, slightly cooler nights than Phoenix.',
    snowbirdAppeal:
      "Tucson attracts snowbirds who want a smaller, quieter market than Phoenix. Green Valley and Oro Valley are established seasonal communities.",
    community: 'Suburban delivery is straightforward. Rural properties southeast of Tucson may require staging in town.',
    nearbyMarkets: ['Oro Valley', 'Green Valley', 'Marana'],
    popularOrigins: ['Colorado', 'Illinois', 'Washington', 'Michigan'],
    typicalPrices: { low: 900, high: 1900 },
    seasonWindow: 'October through May'
  },
  {
    slug: 'yuma',
    destinationSlug: 'arizona',
    city: 'Yuma',
    state: 'Arizona',
    stateAbbr: 'AZ',
    tagline: 'Southwest Arizona RV-resort city on the California border.',
    climate: 'Very warm, very dry winters averaging 70°F.',
    snowbirdAppeal:
      'Yuma has one of the highest per-capita snowbird populations in the country. Winter Visitor season roughly triples the local population. RV resorts dominate the delivery mix.',
    community: 'RV resorts generally allow carrier delivery to the resort entrance. Foothills area has good access for standard carriers.',
    nearbyMarkets: ['Foothills', 'Somerton'],
    popularOrigins: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'],
    typicalPrices: { low: 900, high: 1800 },
    seasonWindow: 'November through March'
  },

  // ─── Texas ────────────────────────────────────────────
  {
    slug: 'mcallen',
    destinationSlug: 'texas',
    city: 'McAllen',
    state: 'Texas',
    stateAbbr: 'TX',
    tagline: 'Rio Grande Valley hub and the largest Winter Texan market.',
    climate: 'Mild subtropical winters averaging 70°F.',
    snowbirdAppeal:
      "McAllen sits at the center of the Rio Grande Valley, the country's most established Winter Texan market. RV parks, 55+ communities, and low winter cost of living are the main draws.",
    community: 'RV resorts and 55+ communities across the Valley are well set up for seasonal residents; delivery access is generally straightforward.',
    nearbyMarkets: ['Mission', 'Edinburg', 'Pharr', 'Weslaco'],
    popularOrigins: ['Minnesota', 'Wisconsin', 'Iowa', 'Illinois', 'Michigan'],
    typicalPrices: { low: 950, high: 1750 },
    seasonWindow: 'November through March'
  },
  {
    slug: 'harlingen',
    destinationSlug: 'texas',
    city: 'Harlingen',
    state: 'Texas',
    stateAbbr: 'TX',
    tagline: 'Eastern Valley Winter Texan destination near South Padre.',
    climate: 'Mild subtropical winters, warm daytime highs.',
    snowbirdAppeal:
      'Harlingen offers dense RV park and 55+ community coverage with easy access to South Padre Island and the Gulf. Popular with Upper Midwest snowbirds who split time between the Valley and the coast.',
    community: 'RV parks are the dominant destination type. Carrier delivery works well at park entrances.',
    nearbyMarkets: ['Los Fresnos', 'San Benito', 'Palm Valley'],
    popularOrigins: ['Minnesota', 'Wisconsin', 'North Dakota', 'Iowa'],
    typicalPrices: { low: 950, high: 1750 },
    seasonWindow: 'November through March'
  },
  {
    slug: 'brownsville',
    destinationSlug: 'texas',
    city: 'Brownsville',
    state: 'Texas',
    stateAbbr: 'TX',
    tagline: 'Southernmost Valley city with beach access and warm winters.',
    climate: 'Warmest Texas winter market, average highs in the low 70s.',
    snowbirdAppeal:
      "Brownsville is often the warmest option in the Valley and appeals to snowbirds who want to be closest to South Padre Island beaches.",
    community: 'Suburban and RV resort delivery is standard. Ferry-only islands are staged from the mainland.',
    nearbyMarkets: ['South Padre Island', 'Los Fresnos', 'Port Isabel'],
    popularOrigins: ['Minnesota', 'Iowa', 'Michigan', 'Wisconsin'],
    typicalPrices: { low: 950, high: 1800 },
    seasonWindow: 'November through March'
  },
  {
    slug: 'corpus-christi',
    destinationSlug: 'texas',
    city: 'Corpus Christi',
    state: 'Texas',
    stateAbbr: 'TX',
    tagline: 'Gulf Coast alternative to the Rio Grande Valley.',
    climate: 'Mild coastal winters, cooler than the Valley.',
    snowbirdAppeal:
      'Corpus Christi and Port Aransas draw snowbirds who prefer coastal weather to the inland Valley. Padre Island communities extend the market southeast.',
    community: 'Waterfront properties and RV resorts around Padre Island Drive have solid carrier coverage.',
    nearbyMarkets: ['Port Aransas', 'Rockport', 'Aransas Pass'],
    popularOrigins: ['Minnesota', 'Iowa', 'Wisconsin', 'Illinois'],
    typicalPrices: { low: 900, high: 1750 },
    seasonWindow: 'November through March'
  },
  {
    slug: 'san-antonio',
    destinationSlug: 'texas',
    city: 'San Antonio',
    state: 'Texas',
    stateAbbr: 'TX',
    tagline: 'Central Texas metro with a growing snowbird share.',
    climate: 'Mild Central Texas winters, average highs in the 60s.',
    snowbirdAppeal:
      'San Antonio attracts snowbirds who want city amenities and Hill Country access rather than the Valley or the coast. Winter is cooler than the Valley but still comfortable.',
    community: 'Standard metro delivery. Hill Country properties may add a day for final delivery.',
    nearbyMarkets: ['New Braunfels', 'Boerne', 'Kerrville'],
    popularOrigins: ['Illinois', 'Michigan', 'Wisconsin', 'Ohio'],
    typicalPrices: { low: 900, high: 1700 },
    seasonWindow: 'November through March'
  },

  // ─── California ───────────────────────────────────────
  {
    slug: 'palm-springs',
    destinationSlug: 'california',
    city: 'Palm Springs',
    state: 'California',
    stateAbbr: 'CA',
    tagline: 'The most iconic Southern California snowbird destination.',
    climate: 'Warm, dry winters averaging 70°F.',
    snowbirdAppeal:
      'Palm Springs anchors the Coachella Valley snowbird corridor. Its winter population roughly doubles from November through April. Golf, wellness, and mid-century architecture drive year-after-year returning snowbirds.',
    community: 'Most Palm Springs neighborhoods have easy carrier access. Very narrow desert roads may require staging on a major artery.',
    nearbyMarkets: ['Cathedral City', 'Desert Hot Springs'],
    popularOrigins: ['Washington', 'Oregon', 'Nevada', 'Colorado', 'Illinois'],
    typicalPrices: { low: 950, high: 2000 },
    seasonWindow: 'November through April'
  },
  {
    slug: 'palm-desert',
    destinationSlug: 'california',
    city: 'Palm Desert',
    state: 'California',
    stateAbbr: 'CA',
    tagline: 'Coachella Valley mid-Valley hub with dense golf communities.',
    climate: 'Warm, dry winters averaging 70°F.',
    snowbirdAppeal:
      'Palm Desert sits at the center of the Coachella Valley and offers heavy concentration of golf and 55+ communities. Sun City Palm Desert is one of the largest age-restricted communities in the Valley.',
    community: 'Standard suburban delivery. Gated golf communities require gatehouse coordination.',
    nearbyMarkets: ['Indian Wells', 'La Quinta', 'Rancho Mirage'],
    popularOrigins: ['Washington', 'Oregon', 'Idaho', 'Montana', 'Colorado'],
    typicalPrices: { low: 950, high: 2000 },
    seasonWindow: 'November through April'
  },
  {
    slug: 'rancho-mirage',
    destinationSlug: 'california',
    city: 'Rancho Mirage',
    state: 'California',
    stateAbbr: 'CA',
    tagline: 'Upscale Coachella Valley destination between Palm Springs and Palm Desert.',
    climate: 'Warm, dry desert winters.',
    snowbirdAppeal:
      'Rancho Mirage appeals to snowbirds looking for a quieter, upscale Valley environment. Enclosed transport is more common here than in some other Coachella Valley cities.',
    community: 'Gated communities require gatehouse advance notice.',
    nearbyMarkets: ['Indian Wells', 'Cathedral City'],
    popularOrigins: ['Washington', 'Nevada', 'Colorado', 'Illinois'],
    typicalPrices: { low: 1000, high: 2100 },
    seasonWindow: 'November through April'
  },
  {
    slug: 'indio',
    destinationSlug: 'california',
    city: 'Indio',
    state: 'California',
    stateAbbr: 'CA',
    tagline: 'Eastern Coachella Valley RV-and-community hub.',
    climate: 'Warm, very dry winters.',
    snowbirdAppeal:
      'Indio has one of the highest concentrations of RV resorts in the Coachella Valley, making it especially popular with snowbirds traveling with a fifth-wheel or Class A rig and shipping a car separately.',
    community: 'RV resort delivery is standard and generally straightforward for carriers.',
    nearbyMarkets: ['La Quinta', 'Coachella', 'Bermuda Dunes'],
    popularOrigins: ['Washington', 'Oregon', 'Idaho', 'Montana', 'Nevada'],
    typicalPrices: { low: 950, high: 1950 },
    seasonWindow: 'November through April'
  },
  {
    slug: 'san-diego',
    destinationSlug: 'california',
    city: 'San Diego',
    state: 'California',
    stateAbbr: 'CA',
    tagline: 'Coastal Southern California snowbird alternative to the desert.',
    climate: 'Mild coastal winters averaging 65°F.',
    snowbirdAppeal:
      'San Diego attracts snowbirds who prefer coastal weather and beach access over desert conditions. Common with Pacific Northwest and Mountain West seasonal residents.',
    community: 'Suburban delivery is straightforward across most of the county. Coastal beach communities are standard.',
    nearbyMarkets: ['Carlsbad', 'Oceanside', 'La Jolla', 'Encinitas'],
    popularOrigins: ['Washington', 'Oregon', 'Idaho', 'Nevada'],
    typicalPrices: { low: 900, high: 1900 },
    seasonWindow: 'November through April'
  }
];

export function getCityBySlug(slug) {
  return destinationCities.find((c) => c.slug === slug) || null;
}

export function getCitiesByDestination(destSlug) {
  return destinationCities.filter((c) => c.destinationSlug === destSlug);
}

export function getCity(destSlug, citySlug) {
  return (
    destinationCities.find((c) => c.destinationSlug === destSlug && c.slug === citySlug) || null
  );
}

export function getAllCityRoutes() {
  return destinationCities.map((c) => ({ state: c.destinationSlug, city: c.slug }));
}
