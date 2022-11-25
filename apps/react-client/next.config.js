const apiBaseUrl = process.env.apiBaseUrl || "http://localhost:8000";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    apiBaseUrl,
  },
  async rewrites() {
    return [
      {source: '/', destination: '/pages/'},
    ]
  }
};

module.exports = nextConfig;
