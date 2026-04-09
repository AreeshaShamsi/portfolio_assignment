/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // skip lint
  },
  typescript: {
    ignoreBuildErrors: true, // skip TS errors
  },
  images: {
    domains: ['images.unsplash.com'], // if using external images
  },
};

module.exports = nextConfig;