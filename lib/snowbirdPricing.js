// Snowbird pricing engine.
// Pure functions — no I/O. The API route calls calculateSnowbirdEstimate() and
// returns the result to the browser. Swap this out for a real carrier pricing
// API later without touching the calculator UI.

import {
  pricingConfig,
  seasonalFactors,
  peakWindows,
  snowbirdDestinationStates,
  transitBands,
  CALCULATOR_VERSION
} from '@/data/snowbird/calculator';
import { estimateRoadDistance, coordsForZip, normalizeZip } from './zipData';

function roundTo(value, step) {
  return Math.max(0, Math.round(value / step) * step);
}

function computeBase(miles) {
  const tier = pricingConfig.perMileTiers.find((t) => miles <= t.maxMiles);
  return tier.baseAdd + miles * tier.ratePerMile;
}

function transitForMiles(miles) {
  const band = transitBands.find((b) => miles <= b.maxMiles);
  return { min: band.min, max: band.max };
}

function destinationSlugFromState(stateAbbr) {
  switch (stateAbbr) {
    case 'FL':
      return 'florida';
    case 'AZ':
      return 'arizona';
    case 'TX':
      return 'texas';
    case 'CA':
      return 'california';
    default:
      return null;
  }
}

function seasonFactorFor(destinationSlug, pickupDate) {
  const factors = seasonalFactors[destinationSlug] || seasonalFactors.default;
  if (!pickupDate) return factors.normal;

  const d = pickupDate instanceof Date ? pickupDate : new Date(pickupDate);
  if (isNaN(d.getTime())) return factors.normal;

  const month = d.getUTCMonth() + 1;
  if (month >= peakWindows.southbound.startMonth && month <= peakWindows.southbound.endMonth) {
    return factors.peakSouthbound;
  }
  if (month >= peakWindows.northbound.startMonth && month <= peakWindows.northbound.endMonth) {
    return factors.peakNorthbound;
  }
  return factors.normal;
}

function seasonLabelFor(pickupDate, destinationSlug) {
  if (!pickupDate) return 'off-peak';
  const d = pickupDate instanceof Date ? pickupDate : new Date(pickupDate);
  if (isNaN(d.getTime())) return 'off-peak';
  const month = d.getUTCMonth() + 1;
  if (month >= peakWindows.southbound.startMonth && month <= peakWindows.southbound.endMonth) {
    return `peak southbound (${destinationSlug ? destinationSlug : 'seasonal'})`;
  }
  if (month >= peakWindows.northbound.startMonth && month <= peakWindows.northbound.endMonth) {
    return `peak northbound (${destinationSlug ? destinationSlug : 'seasonal'})`;
  }
  return 'off-peak';
}

function priceForTransport(base, vehicleType, condition, transportKey, seasonMultiplier) {
  const vehMult = pricingConfig.vehicleTypeMultipliers[vehicleType] || 1.0;
  const condMult = pricingConfig.conditionMultipliers[condition] || 1.0;
  const transportMult = pricingConfig.transportMultipliers[transportKey] || 1.0;
  const raw = base * vehMult * condMult * transportMult * seasonMultiplier;
  const floored = Math.max(pricingConfig.minEstimate, raw);
  const step = pricingConfig.roundStep;
  const spread = pricingConfig.rangeSpread;
  const low = roundTo(floored * (1 - spread), step);
  const high = roundTo(floored * (1 + spread), step);
  return { low, high, midpoint: Math.round(floored) };
}

export function calculateSnowbirdEstimate(input) {
  const pickupZip = normalizeZip(input.pickupZip);
  const deliveryZip = normalizeZip(input.deliveryZip);

  if (!pickupZip || !deliveryZip) {
    return { ok: false, error: 'Enter valid 5-digit ZIP codes for both pickup and delivery.' };
  }

  const dist = estimateRoadDistance(pickupZip, deliveryZip);
  if (!dist) {
    return { ok: false, error: 'We could not resolve one of the ZIP codes. Please double-check them.' };
  }

  if (dist.miles < 30) {
    return {
      ok: false,
      error: 'Pickup and delivery are too close to require snowbird auto transport.'
    };
  }

  const transit = transitForMiles(dist.miles);
  const destState = dist.delivery.state;
  const destSlug = destinationSlugFromState(destState);
  const isSnowbirdRoute = snowbirdDestinationStates.includes(destState);
  const seasonMultiplier = seasonFactorFor(destSlug, input.pickupDate);
  const seasonLabel = seasonLabelFor(input.pickupDate, destSlug);

  const base = computeBase(dist.miles);
  const vehicleType = input.vehicleType || 'sedan';
  const condition = input.vehicleCondition === 'non-running' ? 'non-running' : 'running';

  const openEstimate = priceForTransport(base, vehicleType, condition, 'open', seasonMultiplier);
  const enclosedEstimate = priceForTransport(base, vehicleType, condition, 'enclosed', seasonMultiplier);

  // Choose primary estimate based on user's transport pick, but always return both.
  const primaryKey = input.transportType === 'enclosed' ? 'enclosed' : 'open';
  const primary = primaryKey === 'enclosed' ? enclosedEstimate : openEstimate;

  return {
    ok: true,
    calculatorVersion: CALCULATOR_VERSION,
    distanceMiles: dist.miles,
    pickup: dist.pickup,
    delivery: dist.delivery,
    transitDaysMin: transit.min,
    transitDaysMax: transit.max,
    seasonLabel,
    seasonMultiplier,
    isSnowbirdRoute,
    destinationSlug: destSlug,
    destinationState: destState,
    ranges: {
      open: openEstimate,
      enclosed: enclosedEstimate
    },
    primary: {
      key: primaryKey,
      ...primary
    },
    inputs: {
      pickupZip,
      deliveryZip,
      vehicleType,
      vehicleCondition: condition,
      transportType: input.transportType || 'not-sure',
      pickupDate: input.pickupDate || null,
      tripType: input.tripType || 'one-way'
    }
  };
}

// Utility exposed for the client to compute the transit band directly if needed.
export function getTransitForMiles(miles) {
  return transitForMiles(miles);
}
