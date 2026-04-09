/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint on Vercel build
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TS errors on Vercel build
  },
};

module.exports = nextConfig;