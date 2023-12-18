/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://studiofrugreenproject.com',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/tentang', '/wisata', '/videos', '/fauna', '/pengetahuan', '/disclaimer', '/termsofuse', '/kontribusi', '/kontak', '/forum', 
  '/locations/jawatengah', '/locations/jawatimur' , '/en/endemic', '/en/videos' , '/en/knowledge', '/en/locations/setupatok', '/posts/Deskripsi-Asal-dan-Khasiat-Putri-Malu-Mimosa-pudica',
  '/posts/apa-itu-ayam-dan-bagaimana-sejarahnya'
],
  // Default transformation function
  transform: async (config, path) => {
  return {
    loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
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
        '/posts/Pentingnya-Tanah', '/posts/Deskripsi-Asal-dan-Khasiat-Super-Napier-Grass-Pakchong', '/posts/Deskripsi-Asal-dan-Khasiat-Sambiloto-Andrographis-paniculata',
        '/posts/Deskripsi-Asal-dan-Khasiat-Kelor-Moringa-oleifera', '/posts/Deskripsi-Asal-dan-Khasiat-Kembang-Kantil-Cempaka-Magnolia-champaca', '/posts/Deskripsi-Asal-dan-Manfaat-Bunga-Teratai-Nymphaeaceae', 
        '/posts/Deskripsi-Asal-dan-Khasiat-Daun-Ungu-Graptophyllum-pictum', '/posts/10-Jenis-Tanah-di-Wilayah-Indonesia', '/posts/Deskripsi-Asal-dan-Kegunaan-Jati-Tectona-grandis',
        '/englishversion', '/posts/Deskripsi-Asal-dan-Khasiat-Orok-Orok-Crotalaria-juncea','/posts/Deskripsi-Asal-dan-Khasiat-Putri-Malu-Mimosa-pudica', '/posts/apa-itu-ayam-dan-bagaimana-sejarahnya' , '/en/knowledge', 
        '/en/videos'     
      ],
    },
  ],
},
}  