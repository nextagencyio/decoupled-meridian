/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.decoupled.website',
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
