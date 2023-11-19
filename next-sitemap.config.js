/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://studiofrugreenproject.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ['/tentang', '/wisata', '/endemik', '/videos', '/fauna', '/pengetahuan', '/sains', '/disclaimer', '/termsofuse', '/kontribusi', '/kontak', '/forum', '/locations/bali', '/locations/jawatengah', '/locations/jawatimur'],
  alternateRefs: [
    {
      href: 'https://studiofrugreenproject.com',
      hreflang: 'id-id',
    }
  ],
// Default transformation function
transform: async (config, path) => {
  return {
    loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  }
},
robotsTxtOptions: {
  policies: [
    {
      userAgent: '*',
      allow: '/',
    },
    {
      userAgent: '*',
      disallow: [
        '/tentang', '/wisata', '/endemik', '/videos', '/fauna', '/pengetahuan', '/sains', '/disclaimer', '/termsofuse', '/kontribusi', '/kontak', '/forum', '/locations/bali', '/locations/jawatengah', '/locations/jawatimur',
        '/posts/Pentingnya-Tanah', '/posts/pemandangan-gunung-lawu-dan-telaga-sarangan', '/posts/Deskripsi-Asal-dan-Khasiat-Super-Napier-Grass-Pakchong', '/posts/Deskripsi-Asal-dan-Khasiat-Sambiloto-Andrographis-paniculata',
        '/posts/Deskripsi-Asal-dan-Khasiat-Kelor-Moringa-oleifera', '/posts/Deskripsi-Asal-dan-Khasiat-Kembang-Kantil-Cempaka-Magnolia-champaca', '/posts/Deskripsi-Asal-dan-Manfaat-Bunga-Teratai-Nymphaeaceae', 
        '/posts/Deskripsi-Asal-dan-Khasiat-Daun-Ungu-Graptophyllum-pictum', '/posts/10-Jenis-Tanah-di-Wilayah-Indonesia', '/posts/Deskripsi-Asal-dan-Kegunaan-Jati-Tectona-grandis', '/posts/deskripsi-asal-manfaat-dan-kegunaan-bunga-matahari-helianthus-annuus', 
        '/en/fauna', '/englishversion', '/posts/Deskripsi-Asal-dan-Khasiat-Orok-Orok-Crotalaria-juncea'      
      ],
    },
  ],
},
}  