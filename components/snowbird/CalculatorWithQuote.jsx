'use client';

import { useRef, useState } from 'react';
import SnowbirdCostCalculator from './SnowbirdCostCalculator';
import QuoteForm from '@/components/QuoteForm';
import BrokerNote from '@/components/BrokerNote';

export default function CalculatorWithQuote() {
  const [prefill, setPrefill] = useState(null);
  const [formKey, setFormKey] = useState(0);
  const quoteRef = useRef(null);

  function onUseForQuote(payload) {
    setPrefill(payload);
    setFormKey((k) => k + 1);
    requestAnimationFrame(() => {
      if (quoteRef.current) quoteRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  return (
    <div className="space-y-16">
      <SnowbirdCostCalculator onUseForQuote={onUseForQuote} />

      <section ref={quoteRef} id="quote" className="rounded-2xl bg-brand-cream p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="eyebrow">Exact Quote</div>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy sm:text-3xl">
              Request your exact snowbird quote
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Our estimate is a planning tool. Submit your details below and a snowbird specialist will review your route and follow up with carrier options.
            </p>
            {prefill && (
              <div className="mt-4 rounded-lg border border-brand-goldLight/50 bg-white p-3 text-xs text-slate-700">
                <strong className="text-brand-navy">Calculator context loaded.</strong>{' '}
                Estimated range ${prefill.calculator.estimatedLow} – ${prefill.calculator.estimatedHigh} is attached to your request.
              </div>
            )}
            <BrokerNote className="mt-6" />
          </div>
          <div className="lg:col-span-3">
            <QuoteForm
              key={formKey}
              pageType="calculator"
              pageUrl="/snowbird-car-shipping-cost-calculator"
              initialValues={prefill}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
