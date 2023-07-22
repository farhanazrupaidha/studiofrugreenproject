require("dotenv").config();
const { locales } = require('./lib/locales')

module.exports = {
  env: {
    GRAPHCMS_PROJECT_API:
      process.env.GRAPHCMS_PROJECT_API,
  },
   reactStrictMode: true,
    images: {
      domains: ['media.graphassets.com'],
    },
   experimental: {
    workerThreads: false,
    cpus: 1
   },
  i18n: {
    defaultLocale: locales.find((locale) => locale.default).value,
    locales: locales.map((locale) => locale.value)
  },
  async redirects() {
          return [
            {
              source: '/en',
              destination: '/englishversion',
              permanent: true,
            },
          ];
        },
};