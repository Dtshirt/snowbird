'use client';

import Link from 'next/link';
import { snowbirdMessages } from '@/data/snowbird/calculator';

function money(n) {
  return `$${Math.round(Number(n)).toLocaleString('en-US')}`;
}

export default function CalculatorResults({ result, vehicleLabel, transportSelected, onUseForQuote }) {
  if (!result || !result.ok) return null;

  const pickupLabel = result.pickup.city
    ? `${result.pickup.city}, ${result.pickup.state}`
    : `${result.pickup.state} (${result.inputs.pickupZip})`;
  const deliveryLabel = result.delivery.city
    ? `${result.delivery.city}, ${result.delivery.state}`
    : `${result.delivery.state} (${result.inputs.deliveryZip})`;

  const contextMessage = result.destinationSlug ? snowbirdMessages[result.destinationSlug] : null;

  return (
    <div className="rounded-2xl bg-brand-navy p-6 sm:p-8 text-white shadow-cardHover">
      <div className="text-xs font-semibold uppercase tracking-widest text-brand-goldLight">Your Estimate</div>
      <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
        {pickupLabel} → {deliveryLabel}
      </h3>
      {vehicleLabel && <p className="mt-1 text-sm text-white/70">{vehicleLabel}</p>}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <RangeCard
          title="Open Transport"
          range={result.ranges.open}
          emphasized={transportSelected !== 'enclosed'}
        />
        <RangeCard
          title="Enclosed Transport"
          range={result.ranges.enclosed}
          emphasized={transportSelected === 'enclosed'}
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <StatBox label="Approximate Distance" value={`${result.distanceMiles.toLocaleString()} mi`} />
        <StatBox label="Estimated Transit" value={`${result.transitDaysMin}–${result.transitDaysMax} days`} />
        <StatBox
          label="Season"
          value={result.seasonLabel.charAt(0).toUpperCase() + result.seasonLabel.slice(1)}
        />
      </div>

      <p className="mt-4 text-xs leading-relaxed text-white/70">
        Estimates are for planning purposes. Your final transportation price may vary based on exact pickup and delivery locations,
        vehicle characteristics, dates, carrier availability, seasonal demand, and current market conditions.
      </p>

      {contextMessage && (
        <div className="mt-6 rounded-lg border border-brand-goldLight/30 bg-brand-goldLight/10 p-4 text-sm text-white/90">
          {contextMessage}
        </div>
      )}

      <div className="mt-6 rounded-lg bg-white/5 p-5">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-goldLight">What affects your final price?</div>
        <ul className="mt-3 grid gap-1.5 text-sm text-white/85 sm:grid-cols-2">
          {[
            'Exact ZIP codes',
            'Vehicle size',
            'Vehicle condition',
            'Transport type',
            'Pickup date',
            'Seasonal demand',
            'Carrier availability',
            'Route characteristics',
            'Current market conditions'
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-goldLight" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-5 text-slate-800 sm:p-6">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Ready for an exact quote?</div>
        <h4 className="mt-1 font-display text-xl font-bold text-brand-navy">Want an exact shipping quote?</h4>
        <p className="mt-2 text-sm text-slate-600">
          Our estimate is a planning tool. For a more accurate price based on your exact vehicle, locations, and requested dates,
          submit your information and our team can review your transportation options.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={onUseForQuote} className="btn-primary">
            Get My Exact Quote
          </button>
          {result.destinationSlug && (
            <Link
              href={`/destinations/${result.destinationSlug}`}
              className="btn-secondary"
            >
              Explore {result.destinationState} shipping →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function RangeCard({ title, range, emphasized }) {
  return (
    <div
      className={`rounded-xl p-5 ${
        emphasized
          ? 'bg-brand-goldLight/15 ring-1 ring-brand-goldLight/40'
          : 'bg-white/5 ring-1 ring-white/10'
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-widest text-brand-goldLight">{title}</div>
      <div className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
        {money(range.low)} – {money(range.high)}
      </div>
      <div className="mt-1 text-xs text-white/60">Estimated range</div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-white/60">{label}</div>
      <div className="mt-1 font-display text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
