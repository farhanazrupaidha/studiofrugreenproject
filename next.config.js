require("dotenv").config();

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
};