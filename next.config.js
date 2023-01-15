/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.scdn.co', 'og-image.vercel.app'],
  },
  plugins: [],
  reactStrictMode: true,
  swcMinify: true,
};

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/vuld0/chiragbablani.github.io/gh-pages/' : '',
}

module.exports = nextConfig;
