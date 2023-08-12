/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  images: {
    domains: ['www.ipfs.io', 'ipfs.io'], // Add 'ipfs.io' to the domains array
  },
};

module.exports = nextConfig;
