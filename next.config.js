require("dotenv").config();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
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
    locales: ['id'],
    defaultLocale: 'id'
  },
})

