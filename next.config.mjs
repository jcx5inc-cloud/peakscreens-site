/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },     // keeps lint from failing your build
  typescript: { ignoreBuildErrors: false }, // set to true only if you need a quick pass
};
export default nextConfig;
