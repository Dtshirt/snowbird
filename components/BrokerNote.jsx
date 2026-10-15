import { site } from '@/data/site';

export default function BrokerNote({ className = '' }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-brand-cream/60 p-5 text-sm text-slate-700 ${className}`}>
      <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Broker Transparency</div>
      <p className="mt-2 leading-relaxed">{site.brokerDisclaimer}</p>
    </div>
  );
}
