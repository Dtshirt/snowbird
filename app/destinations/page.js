import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import DestinationGrid from '@/components/DestinationGrid';
import QuoteCTA from '@/components/QuoteCTA';
import TrustBar from '@/components/TrustBar';

export const metadata = {
  title: 'Snowbird Destinations — Florida, Arizona, Texas & California',
  description:
    'Explore the four leading snowbird auto transport destinations: Florida, Arizona, Texas and California. Compare climates, popular cities and seasonal timing.',
  alternates: { canonical: '/destinations' }
};

export default function DestinationsIndexPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Destinations' }
      ]} />
      <Hero
        eyebrow="Snowbird Destinations"
        title="Where are you spending the winter?"
        description="Florida, Arizona, Texas and California are the four leading US snowbird destinations. Choose one to see popular cities, routes, and seasonal timing."
        pageType="destination"
        pageUrl="/destinations"
        showForm={false}
      />
      <TrustBar />
      <DestinationGrid />
      <QuoteCTA title="Not sure which destination is right for you?" description="A snowbird specialist can walk you through pricing and timing for any of the four." />
    </>
  );
}
