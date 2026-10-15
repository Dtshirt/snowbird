import ArticleShell from '@/components/ArticleShell';
import { getResourceBySlug } from '@/data/resources';

const slug = 'snowbird-vehicle-preparation-checklist';

export function generateMetadata() {
  const r = getResourceBySlug(slug);
  return { title: r.title, description: r.description, alternates: { canonical: `/resources/${slug}` } };
}

export default function Page() {
  const r = getResourceBySlug(slug);
  return (
    <ArticleShell category={r.category} title={r.title} description={r.description} readingTime={r.readingTime} slug={slug}>
      <p>
        A short prep routine makes pickup smoother and helps you and your carrier document vehicle condition accurately. Use this checklist a few days before your requested pickup date.
      </p>

      <h2>Fluids and mechanical</h2>
      <ul>
        <li>Fill the fuel tank to no more than a quarter — full tanks add weight to the carrier.</li>
        <li>Confirm that all fluids are topped up and there are no active leaks.</li>
        <li>Check that tires are properly inflated to spec.</li>
        <li>Address any dashboard warning lights before pickup.</li>
      </ul>

      <h2>Battery and electronics</h2>
      <ul>
        <li>Ensure the battery is charged and connections are clean.</li>
        <li>Disable aftermarket alarms or share disarming instructions with the driver.</li>
        <li>Turn off automatic toll transponders during transit.</li>
      </ul>

      <h2>Exterior</h2>
      <ul>
        <li>Wash the vehicle before pickup so existing chips and scratches are visible for the bill of lading.</li>
        <li>Photograph all four sides, the roof, and any pre-existing damage.</li>
        <li>Remove or retract any external antennas.</li>
        <li>Fold in side mirrors when possible.</li>
      </ul>

      <h2>Interior</h2>
      <ul>
        <li>Remove valuables, electronics, and personal documents.</li>
        <li>Remove garage-door openers and spare keys.</li>
        <li>Keep any personal items to a minimum and place them low, out of view.</li>
      </ul>

      <h2>Documents</h2>
      <ul>
        <li>Provide a set of keys to the driver at pickup.</li>
        <li>Have your insurance and registration information ready.</li>
        <li>Retain a copy of your bill of lading after pickup and after delivery.</li>
      </ul>

      <h2>At delivery</h2>
      <ul>
        <li>Perform a full walk-around with the driver in good light.</li>
        <li>Compare the vehicle to your pickup photographs.</li>
        <li>Note any new issues on the bill of lading before signing.</li>
      </ul>

      <p>
        Following the checklist takes about 30 minutes and helps ensure a smooth pickup and delivery experience for you and your carrier.
      </p>
    </ArticleShell>
  );
}
