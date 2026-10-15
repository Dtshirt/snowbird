import SectionHeading from './SectionHeading';

const defaultFaqs = [
  {
    q: 'How far in advance should I book my snowbird car shipment?',
    a: 'We generally recommend booking 2–3 weeks before your requested pickup date, especially during the October–December southbound peak or the April–May northbound peak. Booking earlier improves pricing and pickup flexibility.'
  },
  {
    q: 'Can items be left in the vehicle during transport?',
    a: 'Federal regulations restrict what can be transported inside a vehicle on a carrier. Some carriers allow a small amount of personal items (up to about 100 lbs) placed low in the vehicle. Check with your assigned carrier before pickup, and never place valuables or documents inside.'
  },
  {
    q: 'Are pickup and delivery dates guaranteed?',
    a: 'Auto transport dates are estimates. Weather, road conditions, hours-of-service rules and route logistics can shift schedules by a day or two. Your requested pickup date is a target date, not a guaranteed appointment.'
  },
  {
    q: 'Is my vehicle insured during transport?',
    a: 'Every motor carrier we work with maintains active cargo insurance as required by federal regulations. You can request a copy of the carrier\'s certificate of insurance before pickup.'
  },
  {
    q: 'What is the difference between open and enclosed transport?',
    a: 'Open transport is the most common option and moves your vehicle on a standard multi-car carrier. Enclosed transport uses a covered trailer to protect the vehicle from weather and road debris and is often chosen for luxury or collector vehicles.'
  },
  {
    q: 'Do I need to be present for pickup and delivery?',
    a: 'Yes, or an authorized adult (18+) representative must be present. They\'ll walk around the vehicle with the driver, complete the bill of lading, and confirm condition at pickup and delivery.'
  }
];

export default function FAQ({ items }) {
  const faqs = items && items.length > 0 ? items : defaultFaqs;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <section className="bg-brand-cream py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Snowbird auto transport, explained"
          description="Common questions we hear from snowbirds preparing to move a vehicle north or south."
        />
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-brand-navy">
                <span className="font-semibold">{f.q}</span>
                <span aria-hidden="true" className="ml-4 mt-0.5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</div>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </section>
  );
}
