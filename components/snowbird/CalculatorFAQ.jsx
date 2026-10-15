import FAQ from '@/components/FAQ';

const items = [
  {
    q: 'How accurate is the Snowbird car shipping calculator?',
    a: 'It provides a planning estimate, not a guaranteed carrier quote. Real transportation pricing depends on exact ZIP codes, vehicle details, current carrier availability, and market conditions on the day the shipment is dispatched.'
  },
  {
    q: 'What factors affect Snowbird car shipping prices?',
    a: 'The main factors are route distance, vehicle size and condition, open vs. enclosed transport, timing relative to snowbird season, and how much carrier supply is on your lane. Rural pickup or delivery locations can also affect price.'
  },
  {
    q: 'Does snowbird season affect car shipping prices?',
    a: 'Yes — fall southbound and spring northbound windows generally see more demand than mid-summer or mid-winter. The exact impact varies by lane and by year. The calculator applies a modest seasonal factor when your pickup date falls in a peak window.'
  },
  {
    q: 'Is enclosed transport more expensive?',
    a: 'Yes. Enclosed transport uses a covered trailer and generally costs more than open transport. It is most often chosen for luxury, exotic, classic, or high-value vehicles.'
  },
  {
    q: 'Can I calculate a round-trip snowbird shipment?',
    a: 'Yes. Select Round Trip in the timing section. Round-trip planning is a scheduling advantage — it does not automatically apply a discount. Any round-trip pricing benefit is confirmed during your exact quote review.'
  },
  {
    q: 'Does the calculator include fuel costs?',
    a: 'Fuel is not itemized. The pricing model bundles fuel and market-driven line costs into the distance component, so the estimate already reflects prevailing conditions in the pricing configuration.'
  },
  {
    q: 'Why can my final quote differ from the calculator?',
    a: 'The calculator is based on planning assumptions. Your final quote reflects the current carrier market on your specific route, dates, and vehicle. It may come in higher or lower than the estimated range.'
  }
];

export default function CalculatorFAQ() {
  return <FAQ items={items} />;
}
