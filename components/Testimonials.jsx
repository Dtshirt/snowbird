import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'Barbara & Jim R.',
    location: 'Rochester, NY → Naples, FL',
    quote:
      'We had our Buick picked up in Rochester and delivered to Naples right when we arrived. Communication with the broker team was excellent from start to finish.'
  },
  {
    name: 'Frank M.',
    location: 'Grand Rapids, MI → Fort Myers, FL',
    quote:
      'This is our third season using Snowbird Car Shipping. Reliable pickup windows and honest carrier updates. Highly recommend for retirees like us.'
  },
  {
    name: 'Diane K.',
    location: 'Boston, MA → Sarasota, FL',
    quote:
      'The team walked me through everything I needed to prepare on the vehicle. Delivery was on time and the driver was courteous.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Snowbird Reviews"
          title="What snowbirds say about seasonal auto transport"
          description="Feedback from real customers who’ve moved vehicles north and south with our team."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-1 text-brand-goldLight">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 2l3 6.9L22 10l-5.5 4.6L18 22l-6-3.6L6 22l1.5-7.4L2 10l7-1.1L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-slate-500">
                <div className="font-semibold text-brand-navy">{t.name}</div>
                <div>{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
