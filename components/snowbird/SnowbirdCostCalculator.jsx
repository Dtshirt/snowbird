'use client';

import { useMemo, useRef, useState } from 'react';
import CalculatorResults from './CalculatorResults';
import { vehicleTypes } from '@/data/snowbird/calculator';
import { vehicleMakes, getModelsForMake } from '@/data/vehicles';
import ZipAutocomplete from '../ZipAutocomplete';

const OTHER = 'Other';

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function cn(...args) {
  return args.filter(Boolean).join(' ');
}

function isValidZip(z) {
  return /^\d{5}(-\d{4})?$/.test(String(z || '').trim());
}

const defaultValues = {
  pickupZip: '',
  deliveryZip: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleType: 'sedan',
  vehicleCondition: 'running',
  transportType: 'open',
  tripType: 'one-way',
  returnRouteChoice: '',
  pickupDate: ''
};

export default function SnowbirdCostCalculator({ onUseForQuote }) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | calculating | ready | error
  const [result, setResult] = useState(null);
  const [serverMessage, setServerMessage] = useState('');
  const [customMakeMode, setCustomMakeMode] = useState(false);
  const [customModelMode, setCustomModelMode] = useState(false);
  const resultRef = useRef(null);

  const yearOptions = useMemo(() => {
    const arr = [];
    const current = new Date().getFullYear() + 1;
    for (let y = current; y >= 1980; y--) arr.push(y);
    return arr;
  }, []);

  const availableModels = useMemo(() => {
    if (!values.vehicleMake || customMakeMode) return [];
    return getModelsForMake(values.vehicleMake);
  }, [values.vehicleMake, customMakeMode]);

  function updateField(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function onMakeChange(newMake) {
    if (newMake === OTHER) {
      setCustomMakeMode(true);
      setCustomModelMode(true);
      setValues((v) => ({ ...v, vehicleMake: '', vehicleModel: '' }));
    } else {
      setCustomMakeMode(false);
      setCustomModelMode(false);
      setValues((v) => ({ ...v, vehicleMake: newMake, vehicleModel: '' }));
    }
  }

  function onModelChange(newModel) {
    if (newModel === OTHER) {
      setCustomModelMode(true);
      updateField('vehicleModel', '');
    } else {
      setCustomModelMode(false);
      updateField('vehicleModel', newModel);
    }
  }

  function validate() {
    const e = {};
    if (!isValidZip(values.pickupZip)) e.pickupZip = 'Enter a valid 5-digit ZIP.';
    if (!isValidZip(values.deliveryZip)) e.deliveryZip = 'Enter a valid 5-digit ZIP.';
    if (!values.vehicleYear) e.vehicleYear = 'Select a year.';
    if (!values.vehicleType) e.vehicleType = 'Select a vehicle type.';
    if (!values.pickupDate) e.pickupDate = 'Choose a preferred pickup date.';
    return e;
  }

  async function onCalculate(e) {
    e.preventDefault();
    if (status === 'calculating') return;

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setStatus('calculating');
    setServerMessage('');
    setResult(null);

    try {
      const res = await fetch('/api/snowbird-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pickupZip: values.pickupZip,
          deliveryZip: values.deliveryZip,
          vehicleType: values.vehicleType,
          vehicleCondition: values.vehicleCondition,
          transportType: values.transportType,
          pickupDate: values.pickupDate,
          tripType: values.tripType
        })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus('error');
        setServerMessage(data.error || 'We could not calculate an estimate. Please check your inputs and try again.');
        return;
      }
      setResult(data);
      setStatus('ready');
      requestAnimationFrame(() => {
        if (resultRef.current) resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } catch (err) {
      setStatus('error');
      setServerMessage('Something went wrong. Please try again.');
    }
  }

  function handleUseForQuote() {
    if (!result || typeof onUseForQuote !== 'function') return;
    onUseForQuote({
      pickupZip: values.pickupZip,
      deliveryZip: values.deliveryZip,
      vehicleYear: values.vehicleYear,
      vehicleMake: values.vehicleMake,
      vehicleModel: values.vehicleModel,
      vehicleCondition: values.vehicleCondition === 'running' ? 'Running' : 'Not Running',
      transportType:
        values.transportType === 'open'
          ? 'Open Transport'
          : values.transportType === 'enclosed'
          ? 'Enclosed Transport'
          : 'Not Sure',
      pickupDate: values.pickupDate,
      tripType: values.tripType,
      pickupCity: result.pickup?.city || null,
      pickupState: result.pickup?.state || null,
      deliveryCity: result.delivery?.city || null,
      deliveryState: result.delivery?.state || null,
      calculator: {
        estimatedLow: result.primary.low,
        estimatedHigh: result.primary.high,
        estimatedDistance: result.distanceMiles,
        estimatedTransitDaysMin: result.transitDaysMin,
        estimatedTransitDaysMax: result.transitDaysMax,
        calculatorVersion: result.calculatorVersion,
        seasonLabel: result.seasonLabel
      }
    });
  }

  const inputBase =
    'w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20';

  return (
    <div className="space-y-6">
      <form onSubmit={onCalculate} noValidate className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
        <div className="mb-6">
          <div className="eyebrow">Snowbird Cost Calculator</div>
          <h2 className="mt-1 font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Estimate your snowbird shipping cost
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Get an estimated range for shipping your vehicle based on your route, vehicle type, transport method, season, and other shipping factors.
          </p>
        </div>

        <StepHeader step={1} label="Pickup & Delivery" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field id="calc-pickupZip" label="Pickup ZIP Code" error={errors.pickupZip}>
            <ZipAutocomplete
              id="calc-pickupZip"
              value={values.pickupZip}
              onChange={({ zip }) => updateField('pickupZip', zip)}
              placeholder="10001"
              error={Boolean(errors.pickupZip)}
            />
          </Field>
          <Field id="calc-deliveryZip" label="Delivery ZIP Code" error={errors.deliveryZip}>
            <ZipAutocomplete
              id="calc-deliveryZip"
              value={values.deliveryZip}
              onChange={({ zip }) => updateField('deliveryZip', zip)}
              placeholder="34102"
              error={Boolean(errors.deliveryZip)}
            />
          </Field>
        </div>

        <StepHeader step={2} label="Vehicle" className="mt-8" />
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Field id="calc-vehicleYear" label="Year" error={errors.vehicleYear}>
            <select
              id="calc-vehicleYear"
              className={inputBase}
              value={values.vehicleYear}
              onChange={(e) => updateField('vehicleYear', e.target.value)}
            >
              <option value="">Year</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </Field>

          <Field id="calc-vehicleMake" label="Make">
            {customMakeMode ? (
              <div className="flex gap-2">
                <input
                  id="calc-vehicleMake"
                  className={inputBase}
                  placeholder="Enter make"
                  value={values.vehicleMake}
                  onChange={(e) => updateField('vehicleMake', e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => {
                    setCustomMakeMode(false);
                    setCustomModelMode(false);
                    setValues((v) => ({ ...v, vehicleMake: '', vehicleModel: '' }));
                  }}
                  className="flex-shrink-0 rounded-md border border-slate-300 px-3 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  aria-label="Choose from list instead"
                >
                  List
                </button>
              </div>
            ) : (
              <select
                id="calc-vehicleMake"
                className={inputBase}
                value={values.vehicleMake}
                onChange={(e) => onMakeChange(e.target.value)}
              >
                <option value="">Select make</option>
                {vehicleMakes
                  .filter((m) => m.name !== OTHER)
                  .map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                <option value={OTHER}>Other / not listed</option>
              </select>
            )}
          </Field>

          <Field id="calc-vehicleModel" label="Model">
            {customModelMode || customMakeMode || availableModels.length === 0 ? (
              <input
                id="calc-vehicleModel"
                className={inputBase}
                placeholder="Type model"
                value={values.vehicleModel}
                onChange={(e) => updateField('vehicleModel', e.target.value)}
                disabled={!customMakeMode && !values.vehicleMake}
              />
            ) : (
              <select
                id="calc-vehicleModel"
                className={inputBase}
                value={values.vehicleModel}
                onChange={(e) => onModelChange(e.target.value)}
              >
                <option value="">Select model</option>
                {availableModels.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
                <option value={OTHER}>Other / not listed</option>
              </select>
            )}
          </Field>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field id="calc-vehicleType" label="Vehicle Type" error={errors.vehicleType}>
            <select
              id="calc-vehicleType"
              className={inputBase}
              value={values.vehicleType}
              onChange={(e) => updateField('vehicleType', e.target.value)}
            >
              {vehicleTypes.map((v) => (
                <option key={v.value} value={v.value}>{v.label}</option>
              ))}
            </select>
          </Field>
          <Field id="calc-vehicleCondition" label="Does the vehicle run and drive?">
            <div className="grid grid-cols-2 gap-2">
              <ChoicePill
                selected={values.vehicleCondition === 'running'}
                onClick={() => updateField('vehicleCondition', 'running')}
                label="Yes — Runs & drives"
              />
              <ChoicePill
                selected={values.vehicleCondition === 'non-running'}
                onClick={() => updateField('vehicleCondition', 'non-running')}
                label="No — Does not run"
              />
            </div>
            {values.vehicleCondition === 'non-running' && (
              <p className="mt-2 rounded-md bg-amber-50 p-2 text-xs text-amber-900 border border-amber-200">
                Non-running vehicles may require additional equipment and handling, which can affect the final transportation price.
              </p>
            )}
          </Field>
        </div>

        <StepHeader step={3} label="Transport Options" className="mt-8" />
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <TransportCard
            label="Open Transport"
            note="Common option, generally lower cost."
            selected={values.transportType === 'open'}
            onClick={() => updateField('transportType', 'open')}
          />
          <TransportCard
            label="Enclosed Transport"
            note="Extra weather and road protection."
            selected={values.transportType === 'enclosed'}
            onClick={() => updateField('transportType', 'enclosed')}
          />
          <TransportCard
            label="Not Sure"
            note="We'll show both estimates."
            selected={values.transportType === 'not-sure'}
            onClick={() => updateField('transportType', 'not-sure')}
          />
        </div>

        <StepHeader step={4} label="Timing" className="mt-8" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field id="calc-pickupDate" label="Preferred Pickup Date" error={errors.pickupDate} hint="Preferred date, not a guaranteed appointment.">
            <input
              id="calc-pickupDate"
              type="date"
              min={todayIso()}
              className={inputBase}
              value={values.pickupDate}
              onChange={(e) => updateField('pickupDate', e.target.value)}
            />
          </Field>
          <Field id="calc-tripType" label="One-way or seasonal round trip?">
            <div className="grid grid-cols-2 gap-2">
              <ChoicePill
                selected={values.tripType === 'one-way'}
                onClick={() => updateField('tripType', 'one-way')}
                label="One Way"
              />
              <ChoicePill
                selected={values.tripType === 'round-trip'}
                onClick={() => updateField('tripType', 'round-trip')}
                label="Round Trip"
              />
            </div>
            {values.tripType === 'round-trip' && (
              <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs text-slate-600 mb-2">
                  Snowbirds often ship their vehicle south in the fall and arrange transportation back north in the spring.
                </p>
                <select
                  className={inputBase}
                  value={values.returnRouteChoice}
                  onChange={(e) => updateField('returnRouteChoice', e.target.value)}
                  aria-label="Return trip"
                >
                  <option value="">Return trip preference</option>
                  <option value="same">Same route</option>
                  <option value="different">Different return route</option>
                  <option value="undecided">Not decided yet</option>
                </select>
              </div>
            )}
          </Field>
        </div>

        {status === 'error' && serverMessage && (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
            {serverMessage}
          </div>
        )}

        <div className="mt-8">
          <button
            type="submit"
            disabled={status === 'calculating'}
            className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-75"
          >
            {status === 'calculating' ? 'Calculating…' : 'Calculate Estimate'}
          </button>
          <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
            Estimates are for planning purposes only. Your final transportation price may vary based on the exact pickup and delivery locations, vehicle characteristics, dates, carrier availability, seasonal demand, and current market conditions.
          </p>
        </div>
      </form>

      <div ref={resultRef} aria-live="polite">
        {result && (
          <CalculatorResults
            result={result}
            vehicleLabel={`${values.vehicleYear || ''} ${values.vehicleMake || ''} ${values.vehicleModel || ''}`.trim()}
            transportSelected={values.transportType}
            onUseForQuote={handleUseForQuote}
          />
        )}
      </div>
    </div>
  );
}

function StepHeader({ step, label, className }) {
  return (
    <div className={cn('flex items-center gap-3 border-b border-slate-100 pb-2', className)}>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
        {step}
      </span>
      <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{label}</div>
    </div>
  );
}

function Field({ id, label, hint, error, children }) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <div className="mt-1.5">{children}</div>
      {hint && !error && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
      {error && (
        <span className="mt-1 block text-xs font-medium text-red-600" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function ChoicePill({ selected, onClick, label }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'rounded-md border px-3 py-2 text-sm font-semibold transition',
        selected
          ? 'border-brand-navy bg-brand-navy/5 text-brand-navy'
          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
      )}
    >
      {label}
    </button>
  );
}

function TransportCard({ label, note, selected, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'flex flex-col rounded-lg border p-3 text-left transition',
        selected ? 'border-brand-navy bg-brand-navy/5' : 'border-slate-200 bg-white hover:border-slate-300'
      )}
    >
      <span className="text-sm font-semibold text-brand-navy">{label}</span>
      <span className="mt-0.5 text-xs text-slate-500">{note}</span>
    </button>
  );
}
