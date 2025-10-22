/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  async redirects() {
    return [
      { source: '/PeakScreens_Media_Kit.pdf', destination: '/media-kit.html', permanent: false },
      { source: '/PeakScreens_Rate_Card.pdf', destination: '/rate-card.html', permanent: false },
    ];
  },
};
export default nextConfig;
