/** @type {import('next').NextConfig} */

// Map the old flat /destinations/<city>/ URLs to their new nested location under the destination state.
const OLD_TO_NEW_DESTINATIONS = {
  miami: 'florida/miami',
  orlando: 'florida/orlando',
  tampa: 'florida/tampa',
  naples: 'florida/naples',
  'fort-myers': 'florida/fort-myers',
  sarasota: 'florida/sarasota',
  'west-palm-beach': 'florida/west-palm-beach'
};

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'snowbird.carshippinghub.com' }
    ]
  },
  async redirects() {
    const cityRedirects = Object.entries(OLD_TO_NEW_DESTINATIONS).map(([oldSlug, newPath]) => ({
      source: `/destinations/${oldSlug}`,
      destination: `/destinations/${newPath}`,
      permanent: true
    }));
    return [
      // Destination-state paths that used to live under /states/*.
      { source: '/states/florida', destination: '/destinations/florida', permanent: true },
      { source: '/states/arizona', destination: '/destinations/arizona', permanent: true },
      { source: '/states/texas', destination: '/destinations/texas', permanent: true },
      { source: '/states/california', destination: '/destinations/california', permanent: true },
      ...cityRedirects
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
