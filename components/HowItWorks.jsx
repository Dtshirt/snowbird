import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Request a Quote',
    description:
      'Tell us your pickup and delivery locations, vehicle details, and your requested pickup date. Takes about two minutes.'
  },
  {
    number: '02',
    title: 'Review Your Options',
    description:
      'A member of our team reviews carrier availability along your route and helps you compare transportation options.'
  },
  {
    number: '03',
    title: 'Schedule Pickup',
    description:
      'Once you approve, your assigned carrier is dispatched and pickup is coordinated with you directly.'
  },
  {
    number: '04',
    title: 'Track and Deliver',
    description:
      'Stay in touch with your carrier during transit, then receive your vehicle at your winter or summer destination.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-cream py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="How Snowbird Car Shipping Works"
          title="A simple, seasonal process"
          description="Snowbirds have a lot to think about at the start and end of the season. We keep vehicle transportation straightforward from quote to delivery."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-xl bg-white p-6 shadow-card"
            >
              <div className="font-display text-4xl font-bold text-brand-goldLight">{step.number}</div>
              <div className="mt-3 text-lg font-semibold text-brand-navy">{step.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
