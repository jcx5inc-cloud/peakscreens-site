/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },     // keeps lint from failing the build
  typescript: { ignoreBuildErrors: false }  // set to true temporarily if needed
};
export default nextConfig;
