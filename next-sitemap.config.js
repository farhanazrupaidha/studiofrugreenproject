/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.studiofrugreenproject.com',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: false,
  exclude: ['/tentang', '/wisata', '/endemik', '/videos', '/fauna', '/pengetahuan', '/sains', '/disclaimer', '/termsofuse', '/kontribusi', '/kontak', '/forum', '/locations/bali', '/locations/jawatengah', '/locations/jawatimur'],
  alternateRefs: [
    {
      href: 'https://studiofrugreenproject.com',
      hreflang: 'id-id',
    }
  ],
}