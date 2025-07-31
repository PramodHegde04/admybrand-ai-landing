/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the following images block
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Also add the placeholder host
        port: '',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig;