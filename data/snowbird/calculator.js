// Snowbird cost calculator configuration.
// Values here are planning estimates, not live market rates. Adjust the multipliers
// to reflect the business's current pricing model.

export const CALCULATOR_VERSION = 'sb-calc-v1.0';

export const pricingConfig = {
  // Base per-mile rate blocks. Longer distances use lower per-mile rates.
  perMileTiers: [
    { maxMiles: 500, ratePerMile: 0.90, baseAdd: 100 },
    { maxMiles: 1000, ratePerMile: 0.72, baseAdd: 175 },
    { maxMiles: 1500, ratePerMile: 0.58, baseAdd: 250 },
    { maxMiles: 2000, ratePerMile: 0.50, baseAdd: 325 },
    { maxMiles: Infinity, ratePerMile: 0.44, baseAdd: 400 }
  ],

  // Vehicle-type multipliers applied to the distance-based sub-total.
  vehicleTypeMultipliers: {
    sedan: 1.0,
    coupe: 1.0,
    suv: 1.08,
    pickup: 1.12,
    van: 1.10,
    convertible: 1.03,
    motorcycle: 0.6,
    classic: 1.15,
    other: 1.05
  },

  // Vehicle condition (runs / does not run).
  conditionMultipliers: {
    running: 1.0,
    'non-running': 1.2
  },

  // Transport-type multipliers.
  transportMultipliers: {
    open: 1.0,
    enclosed: 1.45,
    'not-sure': 1.0
  },

  // Range spread applied around the midpoint estimate (±10% for the estimate range).
  rangeSpread: 0.1,

  // Round to nearest step for the presented range.
  roundStep: 25,

  // Minimum floor to avoid presenting unrealistically low numbers.
  minEstimate: 350
};

// Seasonal factors per destination cluster. These are configurable — do not
// treat them as market data.
export const seasonalFactors = {
  florida: {
    peakSouthbound: 1.10,
    peakNorthbound: 1.08,
    normal: 1.00
  },
  arizona: {
    peakSouthbound: 1.08,
    peakNorthbound: 1.06,
    normal: 1.00
  },
  texas: {
    peakSouthbound: 1.07,
    peakNorthbound: 1.05,
    normal: 1.00
  },
  california: {
    peakSouthbound: 1.05,
    peakNorthbound: 1.04,
    normal: 1.00
  },
  default: {
    peakSouthbound: 1.05,
    peakNorthbound: 1.04,
    normal: 1.00
  }
};

// Peak windows (month is 1-based, endInclusive).
export const peakWindows = {
  southbound: { startMonth: 10, endMonth: 12 }, // Oct – Dec
  northbound: { startMonth: 3, endMonth: 5 } // Mar – May
};

// Snowbird destination state codes for context detection.
export const snowbirdDestinationStates = ['FL', 'AZ', 'TX', 'CA'];

export const snowbirdMessages = {
  florida:
    "You're planning a seasonal route to Florida. Fall and spring can be busier periods for snowbird vehicle transportation, so pickup availability and pricing may vary depending on your requested dates.",
  arizona:
    'Arizona is a popular winter destination for seasonal residents, particularly around Phoenix, Scottsdale, Tucson, and Yuma. Seasonal demand can affect carrier availability.',
  texas:
    'South Texas and the Rio Grande Valley attract seasonal residents during the winter months. Flexible pickup dates may provide more transportation options.',
  california:
    'Southern California and desert communities such as the Coachella Valley are popular winter destinations. Your exact pickup and delivery locations can significantly affect the transportation estimate.'
};

// Vehicle types displayed in the calculator UI.
export const vehicleTypes = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV' },
  { value: 'pickup', label: 'Pickup Truck' },
  { value: 'van', label: 'Van' },
  { value: 'coupe', label: 'Coupe' },
  { value: 'convertible', label: 'Convertible' },
  { value: 'motorcycle', label: 'Motorcycle' },
  { value: 'classic', label: 'Classic / Collector' },
  { value: 'other', label: 'Other' }
];

// Transit-time bands based on road distance.
export const transitBands = [
  { maxMiles: 500, min: 1, max: 3 },
  { maxMiles: 1000, min: 2, max: 4 },
  { maxMiles: 1500, min: 3, max: 6 },
  { maxMiles: 2000, min: 4, max: 7 },
  { maxMiles: 2500, min: 5, max: 8 },
  { maxMiles: Infinity, min: 7, max: 11 }
];
