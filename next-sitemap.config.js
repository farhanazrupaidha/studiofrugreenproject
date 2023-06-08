/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.wiwit.net',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000
}