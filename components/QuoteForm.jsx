'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import GooglePlacesInput from './GooglePlacesInput';
import { vehicleMakes, getModelsForMake } from '@/data/vehicles';

const CONDITIONS = ['Running', 'Not Running'];
const TRANSPORT = ['Open Transport', 'Enclosed Transport', 'Not Sure'];

const OTHER = 'Other';
const OTHER_LABEL = 'Other / not listed';

const STEPS = [
  { key: 'route', label: 'Route' },
  { key: 'vehicle', label: 'Vehicle' },
  { key: 'contact', label: 'Contact' }
];

const emptyAddress = () => ({
  formatted: '',
  address1: '',
  city: '',
  state: '',
  stateShort: '',
  zip: '',
  lat: null,
  lng: null,
  valid: false
});

function partialAddress(initial, kind) {
  if (!initial) return emptyAddress();
  const city = initial[`${kind}City`];
  const state = initial[`${kind}State`];
  const zip = initial[`${kind}Zip`];
  if (!city && !state && !zip) return emptyAddress();
  const parts = [city, state && zip ? `${state} ${zip}` : state || zip].filter(Boolean);
  return {
    formatted: parts.join(', '),
    address1: '',
    city: city || '',
    state: state || '',
    stateShort: '',
    zip: zip || '',
    lat: null,
    lng: null,
    valid: Boolean(city && state && zip)
  };
}

function defaultMakeMatches(name) {
  // The calculator sends free-typed makes when the user picked "Other" — allow those.
  // We can't import the makes list without a cycle, so treat any non-empty value as valid
  // and just avoid forcing "custom" mode for anything that came in.
  return typeof name === 'string' && name.length > 0;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function classNames(...args) {
  return args.filter(Boolean).join(' ');
}

export default function QuoteForm({
  pageType = 'other',
  pageUrl,
  routeSlug = null,
  originState = null,
  destinationState = null,
  variant = 'default',
  initialValues = null
}) {
  const onDark = variant === 'onDark';

  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');
  const [quoteId, setQuoteId] = useState(null);
  const [customMakeMode, setCustomMakeMode] = useState(() => Boolean(initialValues?.vehicleMake && !defaultMakeMatches(initialValues.vehicleMake)));
  const [customModelMode, setCustomModelMode] = useState(() => Boolean(initialValues?.vehicleModel));

  const [values, setValues] = useState(() => ({
    fullName: initialValues?.fullName || '',
    email: initialValues?.email || '',
    phone: initialValues?.phone || '',
    pickup: initialValues?.pickup || partialAddress(initialValues, 'pickup'),
    delivery: initialValues?.delivery || partialAddress(initialValues, 'delivery'),
    vehicleYear: initialValues?.vehicleYear ? String(initialValues.vehicleYear) : '',
    vehicleMake: initialValues?.vehicleMake || '',
    vehicleModel: initialValues?.vehicleModel || '',
    vehicleCondition: initialValues?.vehicleCondition || 'Running',
    transportType: initialValues?.transportType || 'Open Transport',
    pickupDate: initialValues?.pickupDate || '',
    website: ''
  }));

  const calculatorContext = initialValues?.calculator || null;

  const startedAtRef = useRef(Date.now());
  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const yearOptions = useMemo(() => {
    const current = new Date().getFullYear() + 1;
    const arr = [];
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

  function updateAddress(kind, next) {
    setValues((v) => ({ ...v, [kind]: { ...v[kind], ...next } }));
    if (errors[kind]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[kind];
        return n;
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
    setErrors((prev) => {
      const n = { ...prev };
      delete n.vehicleMake;
      delete n.vehicleModel;
      return n;
    });
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

  function validateStep(current) {
    const e = {};
    if (current === 1) {
      if (!values.pickup.formatted) e.pickup = 'Enter a pickup address.';
      else if (!values.pickup.city || !values.pickup.state || !values.pickup.zip)
        e.pickup = 'Select a pickup address from the suggestions.';

      if (!values.delivery.formatted) e.delivery = 'Enter a delivery address.';
      else if (!values.delivery.city || !values.delivery.state || !values.delivery.zip)
        e.delivery = 'Select a delivery address from the suggestions.';

      if (!values.pickupDate) e.pickupDate = 'Select a pickup date.';
    }
    if (current === 2) {
      if (!values.vehicleYear) e.vehicleYear = 'Select a year.';
      if (!values.vehicleMake.trim()) e.vehicleMake = 'Enter the make.';
      if (!values.vehicleModel.trim()) e.vehicleModel = 'Enter the model.';
      if (!CONDITIONS.includes(values.vehicleCondition)) e.vehicleCondition = 'Select a condition.';
      if (!TRANSPORT.includes(values.transportType)) e.transportType = 'Select a transport type.';
    }
    if (current === 3) {
      const nameTrim = values.fullName.trim();
      if (nameTrim.length < 2) e.fullName = 'Enter your full name.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = 'Enter a valid email.';
      const digits = values.phone.replace(/\D/g, '');
      if (digits.length !== 10 && !(digits.length === 11 && digits.startsWith('1')))
        e.phone = 'Enter a valid US phone number.';
    }
    return e;
  }

  function focusFirstError(fieldErrors) {
    const firstKey = Object.keys(fieldErrors)[0];
    if (!firstKey) return;
    const el = document.getElementById(`qf-${firstKey}`);
    if (el && typeof el.focus === 'function') el.focus();
  }

  function goNext() {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      focusFirstError(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, STEPS.length));
    if (typeof window !== 'undefined') {
      const el = document.getElementById('quote');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;

    const allErrors = {
      ...validateStep(1),
      ...validateStep(2),
      ...validateStep(3)
    };
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      const errorSteps = [];
      if (allErrors.pickup || allErrors.delivery || allErrors.pickupDate) errorSteps.push(1);
      if (
        allErrors.vehicleYear ||
        allErrors.vehicleMake ||
        allErrors.vehicleModel ||
        allErrors.vehicleCondition ||
        allErrors.transportType
      )
        errorSteps.push(2);
      if (allErrors.fullName || allErrors.email || allErrors.phone) errorSteps.push(3);
      if (errorSteps.length && !errorSteps.includes(step)) {
        setStep(errorSteps[0]);
      }
      focusFirstError(allErrors);
      return;
    }

    setStatus('submitting');
    setServerMessage('');

    const payload = {
      formStartedAt: startedAtRef.current,
      website: values.website,
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      pickup: values.pickup,
      delivery: values.delivery,
      vehicleYear: values.vehicleYear,
      vehicleMake: values.vehicleMake.trim(),
      vehicleModel: values.vehicleModel.trim(),
      vehicleCondition: values.vehicleCondition,
      transportType: values.transportType,
      pickupDate: values.pickupDate,
      pageType,
      pageUrl: pageUrl || (typeof window !== 'undefined' ? window.location.pathname : ''),
      routeSlug,
      originState,
      destinationState,
      source: calculatorContext ? 'calculator' : 'website',
      calculator: calculatorContext || null
    };

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus('error');
        setServerMessage(data.message || 'We could not submit your request right now.');
        if (data.errors) setErrors(data.errors);
        return;
      }

      setQuoteId(data.quoteId);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setServerMessage("We couldn't submit your request right now. Please check your information and try again.");
    }
  }

  if (status === 'success') {
    return <SuccessCard quoteId={quoteId} email={values.email} onDark={onDark} />;
  }

  const inputBase = onDark
    ? 'w-full rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder:text-white/50 focus:border-brand-goldLight focus:outline-none focus:ring-2 focus:ring-brand-goldLight/50'
    : 'w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20';

  const legendClass = classNames(
    'text-xs font-semibold uppercase tracking-widest',
    onDark ? 'text-brand-goldLight' : 'text-brand-gold'
  );

  return (
    <div
      className={classNames(
        'rounded-2xl p-6 sm:p-8',
        onDark ? 'bg-white/5 backdrop-blur-md ring-1 ring-white/10' : 'bg-white shadow-card'
      )}
    >
      <div className="mb-6">
        <div className={classNames('eyebrow', onDark && 'text-brand-goldLight')}>Free Snowbird Quote</div>
        <div className={classNames('mt-1 font-display text-2xl font-bold', onDark ? 'text-white' : 'text-brand-navy')}>
          Get shipping options in three quick steps
        </div>
        <p className={classNames('mt-1 text-sm', onDark ? 'text-white/70' : 'text-slate-600')}>
          Step {step} of {STEPS.length} — {STEPS[step - 1].label}.
        </p>
      </div>

      <form onSubmit={onSubmit} noValidate>
        <StepIndicator step={step} onDark={onDark} />

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="qf-website">Website</label>
        <input
          id="qf-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(ev) => updateField('website', ev.target.value)}
        />
      </div>

      <div className="mt-6">
        {step === 1 && (
          <fieldset className="space-y-4">
            <legend className={legendClass}>Route Details</legend>

            <Field id="qf-pickup" label="Pickup Address" error={errors.pickup} onDark={onDark}>
              <GooglePlacesInput
                id="qf-pickup"
                value={values.pickup}
                onChange={(next) => updateAddress('pickup', next)}
                placeholder="e.g. Rochester, NY 14607"
                className={inputBase}
                onDark={onDark}
              />
            </Field>

            <Field id="qf-delivery" label="Delivery Address" error={errors.delivery} onDark={onDark}>
              <GooglePlacesInput
                id="qf-delivery"
                value={values.delivery}
                onChange={(next) => updateAddress('delivery', next)}
                placeholder="e.g. Naples, FL 34102"
                className={inputBase}
                onDark={onDark}
              />
            </Field>

            <Field
              id="qf-pickupDate"
              label="Requested Pickup Date"
              error={errors.pickupDate}
              onDark={onDark}
            >
              <input
                id="qf-pickupDate"
                name="pickupDate"
                type="date"
                min={todayIso()}
                className={inputBase}
                value={values.pickupDate}
                onChange={(e) => updateField('pickupDate', e.target.value)}
              />
            </Field>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="space-y-4">
            <legend className={legendClass}>Vehicle Details</legend>

            <div className="grid gap-4 sm:grid-cols-3">
              <Field id="qf-vehicleYear" label="Year" error={errors.vehicleYear} onDark={onDark}>
                <select
                  id="qf-vehicleYear"
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

              <Field id="qf-vehicleMake" label="Make" error={errors.vehicleMake} onDark={onDark}>
                {customMakeMode ? (
                  <div className="flex gap-2">
                    <input
                      id="qf-vehicleMake"
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
                      className={classNames(
                        'flex-shrink-0 rounded-md border px-3 text-xs font-semibold',
                        onDark ? 'border-white/30 text-white/80 hover:bg-white/10' : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                      )}
                      aria-label="Choose from list instead"
                    >
                      List
                    </button>
                  </div>
                ) : (
                  <select
                    id="qf-vehicleMake"
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
                    <option value={OTHER}>{OTHER_LABEL}</option>
                  </select>
                )}
              </Field>

              <Field id="qf-vehicleModel" label="Model" error={errors.vehicleModel} onDark={onDark}>
                {customModelMode || customMakeMode || availableModels.length === 0 ? (
                  <input
                    id="qf-vehicleModel"
                    className={inputBase}
                    placeholder={customMakeMode ? 'Enter model' : 'Type model'}
                    value={values.vehicleModel}
                    onChange={(e) => updateField('vehicleModel', e.target.value)}
                    disabled={!customMakeMode && !values.vehicleMake}
                  />
                ) : (
                  <select
                    id="qf-vehicleModel"
                    className={inputBase}
                    value={values.vehicleModel}
                    onChange={(e) => onModelChange(e.target.value)}
                  >
                    <option value="">Select model</option>
                    {availableModels.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                    <option value={OTHER}>{OTHER_LABEL}</option>
                  </select>
                )}
              </Field>
            </div>

            <Field id="qf-vehicleCondition" label="Vehicle Condition" error={errors.vehicleCondition} onDark={onDark}>
              <div className="grid grid-cols-2 gap-3">
                {CONDITIONS.map((c) => (
                  <ChoiceCard
                    key={c}
                    checked={values.vehicleCondition === c}
                    onDark={onDark}
                    onClick={() => updateField('vehicleCondition', c)}
                    label={c}
                    description={c === 'Running' ? 'Vehicle starts and drives.' : 'Requires special loading equipment.'}
                  />
                ))}
              </div>
            </Field>

            <Field id="qf-transportType" label="Transport Type" error={errors.transportType} onDark={onDark}>
              <div className="grid gap-3 sm:grid-cols-3">
                {TRANSPORT.map((t) => (
                  <ChoiceCard
                    key={t}
                    checked={values.transportType === t}
                    onDark={onDark}
                    onClick={() => updateField('transportType', t)}
                    label={t}
                    description={
                      t === 'Open Transport'
                        ? 'Most common, best price.'
                        : t === 'Enclosed Transport'
                        ? 'Weather-protected trailer.'
                        : 'Have a specialist recommend.'
                    }
                  />
                ))}
              </div>
            </Field>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="space-y-4">
            <legend className={legendClass}>Contact Information</legend>

            <Field id="qf-fullName" label="Full Name" error={errors.fullName} onDark={onDark}>
              <input
                id="qf-fullName"
                autoComplete="name"
                className={inputBase}
                placeholder="First and last name"
                value={values.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="qf-email" label="Email" error={errors.email} onDark={onDark}>
                <input
                  id="qf-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  className={inputBase}
                  value={values.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </Field>
              <Field id="qf-phone" label="Phone" error={errors.phone} onDark={onDark}>
                <input
                  id="qf-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(555) 123-4567"
                  className={inputBase}
                  value={values.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </Field>
            </div>

            <div className={classNames(
              'mt-2 rounded-md border p-3 text-xs',
              onDark ? 'border-white/10 bg-white/5 text-white/70' : 'border-slate-200 bg-slate-50 text-slate-600'
            )}>
              <strong className={onDark ? 'text-white' : 'text-brand-navy'}>Review:</strong>{' '}
              {values.pickup.formatted || '—'} → {values.delivery.formatted || '—'} · {values.vehicleYear || '?'}{' '}
              {values.vehicleMake || '?'} {values.vehicleModel || ''} · {values.transportType}
            </div>
          </fieldset>
        )}
      </div>

      {status === 'error' && serverMessage && (
        <div className={classNames(
          'mt-6 rounded-md border p-3 text-sm',
          onDark ? 'border-red-300/30 bg-red-500/10 text-red-100' : 'border-red-200 bg-red-50 text-red-700'
        )}>
          {serverMessage}
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={goBack}
            className={classNames(
              'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold',
              onDark
                ? 'border border-white/20 text-white/90 hover:bg-white/10'
                : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
            )}
          >
            ← Back
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}

        {step < STEPS.length ? (
          <button type="button" onClick={goNext} className="btn-primary sm:min-w-[220px]">
            Continue to {STEPS[step].label} →
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary sm:min-w-[240px] disabled:cursor-not-allowed disabled:opacity-75"
          >
            {status === 'submitting' ? 'Submitting…' : 'Get My Free Quote'}
          </button>
        )}
      </div>

        <p className={classNames('mt-4 text-[11px] leading-relaxed', onDark ? 'text-white/60' : 'text-slate-500')}>
          By submitting, you agree to be contacted about your shipping request. We are a licensed auto transport broker and
          work with licensed and insured motor carriers to arrange transportation.
        </p>
      </form>
    </div>
  );
}

function StepIndicator({ step, onDark }) {
  return (
    <ol className="flex items-center gap-2">
      {STEPS.map((s, i) => {
        const num = i + 1;
        const active = num === step;
        const done = num < step;
        return (
          <li key={s.key} className="flex flex-1 items-center gap-2">
            <span
              className={classNames(
                'flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition',
                done
                  ? 'bg-brand-gold text-white'
                  : active
                  ? onDark
                    ? 'bg-brand-goldLight text-brand-navy'
                    : 'bg-brand-navy text-white'
                  : onDark
                  ? 'bg-white/10 text-white/70'
                  : 'bg-slate-100 text-slate-500'
              )}
            >
              {done ? '✓' : num}
            </span>
            <span
              className={classNames(
                'hidden text-xs font-semibold uppercase tracking-widest sm:block',
                active
                  ? onDark
                    ? 'text-white'
                    : 'text-brand-navy'
                  : onDark
                  ? 'text-white/50'
                  : 'text-slate-400'
              )}
            >
              {s.label}
            </span>
            {i < STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className={classNames(
                  'ml-1 h-px flex-1',
                  done ? 'bg-brand-gold' : onDark ? 'bg-white/10' : 'bg-slate-200'
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function ChoiceCard({ checked, onClick, label, description, onDark }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'flex flex-col rounded-lg border p-3 text-left transition',
        checked
          ? onDark
            ? 'border-brand-goldLight bg-brand-goldLight/10'
            : 'border-brand-navy bg-brand-navy/5'
          : onDark
          ? 'border-white/15 bg-white/5 hover:bg-white/10'
          : 'border-slate-200 bg-white hover:border-slate-300'
      )}
      aria-pressed={checked}
    >
      <span className={classNames('text-sm font-semibold', onDark ? 'text-white' : 'text-brand-navy')}>
        {label}
      </span>
      <span className={classNames('mt-0.5 text-xs', onDark ? 'text-white/70' : 'text-slate-500')}>
        {description}
      </span>
    </button>
  );
}

function Field({ id, label, error, onDark, children }) {
  return (
    <label htmlFor={id} className="block">
      <span className={classNames('block text-sm font-medium', onDark ? 'text-white/90' : 'text-slate-700')}>
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && (
        <span className={classNames('mt-1 block text-xs font-medium', onDark ? 'text-red-200' : 'text-red-600')}>
          {error}
        </span>
      )}
    </label>
  );
}

function SuccessCard({ quoteId, email, onDark }) {
  return (
    <div
      className={classNames(
        'rounded-2xl border p-8 shadow-card',
        onDark ? 'border-white/10 bg-white/5' : 'border-emerald-200 bg-white'
      )}
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className={classNames('mt-4 text-center font-display text-2xl font-bold', onDark ? 'text-white' : 'text-brand-navy')}>
        Request Submitted Successfully
      </h3>
      <p className={classNames('mt-2 text-center', onDark ? 'text-white/80' : 'text-slate-600')}>
        Your Snowbird car shipping request has been received. Our team will review your information and contact you
        shortly to discuss your transportation options.
      </p>
      <div className={classNames('mt-6 rounded-xl p-5 text-center', onDark ? 'bg-white/10' : 'bg-slate-50')}>
        <div className={classNames('text-xs uppercase tracking-widest', onDark ? 'text-white/60' : 'text-slate-500')}>
          Quote ID
        </div>
        <div className={classNames('mt-1 font-mono text-xl font-bold', onDark ? 'text-white' : 'text-brand-navy')}>
          {quoteId}
        </div>
      </div>
      <p className={classNames('mt-4 text-center text-sm', onDark ? 'text-white/70' : 'text-slate-500')}>
        A confirmation email has been sent to <strong className={onDark ? 'text-white' : 'text-slate-700'}>{email}</strong>.
      </p>
      <div className="mt-6 flex justify-center">
        <a href="/" className={onDark ? 'btn-primary' : 'btn-secondary'}>
          Back to Snowbird Car Shipping
        </a>
      </div>
    </div>
  );
}
