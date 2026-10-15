// Snowbird destination clusters — first-class destination states for the Snowbird section.
// Each destination is a self-contained content block used by the destination hub,
// homepage cards, comparison page, and origin-state pages.

export const destinationStates = [
  {
    slug: 'florida',
    name: 'Florida',
    abbr: 'FL',
    tagline: 'Warm Atlantic and Gulf Coast destinations popular with seasonal residents.',
    heroEyebrow: 'Southeast · Gulf & Atlantic Coast',
    positioning:
      "Florida is the most established snowbird destination in the United States. Its Atlantic and Gulf coasts attract seasonal residents from across the Northeast, Mid-Atlantic and Midwest each fall.",
    description:
      "From South Florida beach communities to the Gulf Coast retirement corridor and Central Florida golf towns, Florida is the archetypal snowbird destination. Seasonal residents typically ship southbound in October through December and return north in April and May.",
    regions: ['South Florida (Atlantic)', 'Southwest Florida (Gulf)', 'Central Florida', 'Northeast Florida'],
    climate: 'Warm subtropical winters, average highs 70–80°F south of Orlando.',
    popularOriginStates: ['New York', 'New Jersey', 'Pennsylvania', 'Massachusetts', 'Connecticut', 'Ohio', 'Michigan'],
    seasonStart: 'Early October',
    seasonPeak: 'November – early December',
    seasonEnd: 'Mid-December',
    returnStart: 'Late March',
    returnPeak: 'April',
    returnEnd: 'Mid-May',
    weatherConsiderations:
      "Fall southbound shipments occasionally overlap with late-season hurricane activity, which can shift pickup and delivery timing on the peninsula. Winter storms in the Northeast are the more common cause of fall delays.",
    routeConsiderations:
      "Most Florida-bound snowbird traffic runs on I-95 down the East Coast and I-75 through the Midwest corridor. Both routes have dense carrier coverage, so pickup windows are usually predictable outside of peak-week bottlenecks.",
    typicalPriceRange: { low: 750, high: 1700 },
    heroImage: 'https://source.unsplash.com/featured/1600x600/?florida,beach,palm-tree',
    heroImageAlt: 'Florida beach with palm trees at sunset',
    cityLead: 'Miami · Naples · Tampa · Sarasota',
    citySlugs: ['miami', 'naples', 'tampa', 'orlando', 'fort-myers', 'sarasota', 'west-palm-beach'],
    faqs: [
      {
        q: 'When is the busiest time to ship a car to Florida?',
        a: 'The southbound rush runs from early October through mid-December, with November as the highest-volume month. Booking two to three weeks ahead of your requested pickup date improves pricing and pickup flexibility.'
      },
      {
        q: 'Do Northeast and Midwest routes to Florida cost the same?',
        a: 'No. East Coast routes on I-95 tend to price a bit lower than Midwest-to-Gulf lanes on I-75 because of shorter distances and denser carrier supply, but the difference is often smaller than expected.'
      },
      {
        q: 'Should I choose enclosed transport for Florida?',
        a: 'Open transport is fine for most vehicles heading to Florida. Enclosed transport is worth the premium mainly for luxury, exotic, or collector vehicles where paint protection is a priority.'
      },
      {
        q: 'What if my winter home is in a gated community?',
        a: 'Most gated communities and 55+ resort communities in Florida can accommodate carrier delivery with advance notice to the gatehouse. Very tight streets may require meeting the carrier at a nearby staging area.'
      }
    ]
  },

  {
    slug: 'arizona',
    name: 'Arizona',
    abbr: 'AZ',
    tagline: 'Desert winter destinations across Phoenix, Scottsdale, Tucson and Yuma.',
    heroEyebrow: 'Southwest · Desert Winter Destinations',
    positioning:
      'Arizona is the leading Southwest snowbird destination. Its warm, dry desert winters draw seasonal residents from the Pacific Northwest, Mountain West, and Midwest each year.',
    description:
      "Arizona's snowbird corridor stretches from the Phoenix metro east to Mesa and Scottsdale, south to Tucson, and west toward Yuma near the California border. Dry desert winters and a strong 55+ and RV resort community make Arizona particularly popular with western snowbirds.",
    regions: ['Phoenix Metro', 'Tucson Area', 'Yuma / Southwest Arizona', 'Prescott / Northern Arizona'],
    climate: 'Dry, sunny winters with daytime highs in the 60s and 70s.',
    popularOriginStates: ['California', 'Nevada', 'Colorado', 'Utah', 'Washington', 'Oregon', 'Illinois', 'Michigan', 'New York'],
    seasonStart: 'Mid-October',
    seasonPeak: 'November – December',
    seasonEnd: 'Early January',
    returnStart: 'Late March',
    returnPeak: 'April – early May',
    returnEnd: 'Mid-May',
    weatherConsiderations:
      "Long-distance routes into Arizona cross mountain passes in Colorado, Utah, and northern New Mexico. Early snow can affect I-70, I-80, and I-40 and add a day or two to transit during the fall shoulder.",
    routeConsiderations:
      'Popular corridors include I-10 from California and Texas, I-40 from the Midwest, and I-17 for last-leg delivery into Flagstaff and northern Arizona. Yuma and Lake Havasu deliveries typically stage from Phoenix or Southern California.',
    typicalPriceRange: { low: 850, high: 1900 },
    heroImage: 'https://source.unsplash.com/featured/1600x600/?arizona,desert,saguaro',
    heroImageAlt: 'Arizona desert landscape with saguaro cactus',
    cityLead: 'Phoenix · Scottsdale · Tucson · Yuma',
    citySlugs: ['phoenix', 'scottsdale', 'mesa', 'tucson', 'yuma'],
    faqs: [
      {
        q: 'Why do so many snowbirds ship cars to Arizona instead of driving?',
        a: 'Distances from the Midwest and West Coast are long, mountain passes can be dangerous in winter, and many snowbirds prefer to fly directly to Phoenix or Tucson and have their vehicle ready at the winter address.'
      },
      {
        q: 'Which Arizona city sees the most snowbird volume?',
        a: 'Phoenix and its metro (Mesa, Scottsdale, Chandler, Surprise) receive the most snowbird auto transport volume, followed by Tucson and Yuma.'
      },
      {
        q: 'Are RV resort communities easy to deliver to?',
        a: 'Yes. Larger Arizona RV and 55+ resorts are generally accessible to carriers. For very tight interior roads, the driver may ask you to meet at the resort entrance.'
      },
      {
        q: 'What months have the best pricing to Arizona?',
        a: 'Late September and early October usually price lower than the mid-October to December peak. Booking early also helps you avoid carrier availability crunches.'
      }
    ]
  },

  {
    slug: 'texas',
    name: 'Texas',
    abbr: 'TX',
    tagline: 'South Texas and the Rio Grande Valley attract seasonal residents each winter.',
    heroEyebrow: 'South Texas · Rio Grande Valley',
    positioning:
      "Texas is a growing snowbird destination, driven primarily by the Rio Grande Valley, the Gulf Coast, and South Texas. It appeals to snowbirds — often called \"Winter Texans\" — who prefer a milder climate and lower cost of living than Florida.",
    description:
      "Winter Texans are a distinct group of snowbirds who spend the cold months in South Texas cities like McAllen, Harlingen, Mission, Weslaco, and Brownsville. The Rio Grande Valley in particular is dense with RV resorts, 55+ communities, and seasonal residents from the Upper Midwest and Great Plains.",
    regions: ['Rio Grande Valley', 'Gulf Coast (Corpus Christi / South Padre)', 'San Antonio & Hill Country', 'Houston Metro'],
    climate: 'Mild Gulf Coast winters and warm inland conditions in the Valley.',
    popularOriginStates: ['Minnesota', 'Wisconsin', 'Iowa', 'Illinois', 'Michigan', 'North Dakota', 'South Dakota', 'Ohio'],
    seasonStart: 'Mid-October',
    seasonPeak: 'November – December',
    seasonEnd: 'Late December',
    returnStart: 'Mid-March',
    returnPeak: 'March – April',
    returnEnd: 'Late April',
    weatherConsiderations:
      "Cold fronts move quickly through Texas but usually don't disrupt auto transport significantly. Upper Midwest origin routes are more likely to see weather delays than Texas destinations themselves.",
    routeConsiderations:
      "The main snowbird corridor into South Texas runs on I-35 from the Upper Midwest through Dallas and San Antonio to McAllen, and on I-37 to Corpus Christi. Longhaul routes from the Northeast are less common than Florida-bound equivalents.",
    typicalPriceRange: { low: 900, high: 1800 },
    heroImage: 'https://source.unsplash.com/featured/1600x600/?texas,hill-country,ranch',
    heroImageAlt: 'Texas hill country ranch landscape',
    cityLead: 'McAllen · Harlingen · Brownsville · Corpus Christi',
    citySlugs: ['mcallen', 'harlingen', 'brownsville', 'corpus-christi', 'san-antonio'],
    faqs: [
      {
        q: 'What is a "Winter Texan"?',
        a: 'Winter Texan is the local term for snowbirds who spend the winter in South Texas, especially in the Rio Grande Valley. Many return to the same RV or 55+ community year after year.'
      },
      {
        q: 'Why choose Texas over Florida for snowbirding?',
        a: 'Texas often costs less to live in during winter, is closer for Upper Midwest snowbirds, and has established RV and 55+ communities in the Valley. Snowbirds who want beach access or mild climate but at a lower cost of living often prefer South Texas.'
      },
      {
        q: 'Are Rio Grande Valley RV resorts accessible for carriers?',
        a: 'Most established Valley RV resorts can accommodate carrier delivery to the resort entrance or a nearby staging area, then you drive the vehicle into your site.'
      },
      {
        q: 'Which origin states ship the most vehicles to Texas?',
        a: 'The Upper Midwest — Minnesota, Wisconsin, Iowa, and the Dakotas — sends the largest share of snowbird vehicles to South Texas, followed by Illinois and Michigan.'
      }
    ]
  },

  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    tagline: 'Southern California and desert communities offer another popular winter destination.',
    heroEyebrow: 'Southern California · Desert & Coast',
    positioning:
      'Southern California is a distinct snowbird destination anchored by the Coachella Valley desert communities and the San Diego coast. It attracts western snowbirds who want warm winters without leaving the region.',
    description:
      "The Coachella Valley — Palm Springs, Palm Desert, Rancho Mirage, Indian Wells, La Quinta — is Southern California's most concentrated snowbird corridor. Coastal Orange County and San Diego draw a second, smaller group of seasonal residents who prefer beach access to desert.",
    regions: ['Coachella Valley (Palm Springs area)', 'San Diego County', 'Orange County', 'Los Angeles Metro'],
    climate: 'Mild Mediterranean winters on the coast; warm, dry desert winters inland.',
    popularOriginStates: ['Washington', 'Oregon', 'Idaho', 'Montana', 'Nevada', 'Utah', 'Colorado', 'Illinois', 'Minnesota'],
    seasonStart: 'Mid-October',
    seasonPeak: 'November – January',
    seasonEnd: 'Early February',
    returnStart: 'Late March',
    returnPeak: 'April – May',
    returnEnd: 'Mid-May',
    weatherConsiderations:
      'Pacific Northwest routes to Southern California cross the Cascades and Sierra Nevada. Snow at higher elevations can add a day or two to transit in December through February.',
    routeConsiderations:
      'The main corridors are I-5 down the West Coast and I-15 from the Mountain West. Coachella Valley delivery is typically staged from Los Angeles or Ontario, with final delivery along I-10.',
    typicalPriceRange: { low: 900, high: 2000 },
    heroImage: 'https://source.unsplash.com/featured/1600x600/?palm-springs,california,desert-mountains',
    heroImageAlt: 'Palm Springs California with palm trees and desert mountains',
    cityLead: 'Palm Springs · Palm Desert · San Diego · Rancho Mirage',
    citySlugs: ['palm-springs', 'palm-desert', 'rancho-mirage', 'indio', 'san-diego'],
    faqs: [
      {
        q: 'Is the Coachella Valley really a snowbird destination?',
        a: 'Yes — Palm Springs, Palm Desert, Rancho Mirage, and neighboring cities have decades of snowbird history. Winter population in the Valley can nearly double during peak season.'
      },
      {
        q: 'Do Pacific Northwest snowbirds usually ship or drive?',
        a: "Many drive down I-5, but shipping is common for snowbirds who prefer to fly, who ship a second vehicle, or who don't want to make the drive through winter weather in the Cascades."
      },
      {
        q: 'How does Southern California pricing compare to Arizona?',
        a: 'Rates are usually similar for equivalent distances. Coachella Valley pricing tends to be slightly higher than Phoenix due to lower carrier density on final-mile delivery east of Los Angeles.'
      },
      {
        q: 'Can carriers deliver to Palm Springs area 55+ communities?',
        a: 'Yes. Most communities in the Coachella Valley allow carrier delivery with advance notice, or delivery to a nearby staging point followed by a short drive to your site.'
      }
    ]
  }
];

export function getDestinationBySlug(slug) {
  return destinationStates.find((d) => d.slug === slug) || null;
}

export function getAllDestinationSlugs() {
  return destinationStates.map((d) => d.slug);
}

export function getDestinationByName(name) {
  if (!name) return null;
  return destinationStates.find((d) => d.name.toLowerCase() === String(name).toLowerCase()) || null;
}
