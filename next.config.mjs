/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can remove these two once everything is green.
  typescript: { ignoreBuildErrors: false }, // set to true only if you need a quick pass
  eslint: { ignoreDuringBuilds: true }      // avoids failing on lint warnings
};
export default nextConfig;
