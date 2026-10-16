import './globals.css';
import { site } from '@/data/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Snowbird Car Shipping — Auto Transport for Northern-to-Southern Routes',
    template: '%s | Snowbird Car Shipping'
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'snowbird car shipping',
    'auto transport for snowbirds',
    'ship car to Florida',
    'seasonal car shipping',
    'winter car shipping',
    'ship car to Arizona',
    'New York to Florida car shipping',
    'Michigan to Florida car shipping'
  ],
  authors: [{ name: 'CarShippingHub' }],
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: 'Snowbird Car Shipping — Auto Transport for Snowbird Routes',
    description: site.description
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snowbird Car Shipping',
    description: site.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B2545'
};

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: site.name,
    url: site.url,
    parentOrganization: { '@type': 'Organization', name: site.parent },
    description: site.description,
    telephone: site.phoneDisplay,
    areaServed: 'US',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressCountry: 'US' }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <meta name="google-site-verification" content="BIUgWs9Xp0z3RKe-IJYQluHV-6PD92NlZi_oL3I8q1c" />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
