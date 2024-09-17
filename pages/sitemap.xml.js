import { getAllPostsWithSlug, getAllPostsWithSlugEn, getAllCategoriesWithSlug, getAllLocationsWithSlug } from 'lib/graphcms'

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const postsId = await getAllPostsWithSlug()  
  const postsEn = await getAllPostsWithSlugEn()  
  const category = await getAllCategoriesWithSlug()
  const location = await getAllLocationsWithSlug()
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://studiofrugreenproject.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://studiofrugreenproject.com/en</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>  
    ${category.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://studiofrugreenproject.com/kategori/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    `)
    .join('\n')} 
    ${location.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://studiofrugreenproject.com/lokasi/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    `)
    .join('\n')} 
    ${postsEn.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://studiofrugreenproject.com/en/posts/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    `)
    .join('\n')}
    ${postsId.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://studiofrugreenproject.com/posts/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>                                 
    `)  
    .join('\n')}  
    <url>
        <loc>https://studiofrugreenproject.com/posts/fungsi-dan-manfaat-antioksidan-bagi-tubuh</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/pengertian-fungsi-dan-jenis-jenis-air</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/5-langkah-penanggulangan-dan-pencegahan-bencana-kekeringan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/posts/sejarah-penyebaran-budidaya-padi</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/wisata-alam-danau-setu-patok-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>        
    <url>
        <loc>https://studiofrugreenproject.com/posts/penyebab-terjadinya-kekeringan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/tempat-wisata-wajib-dikunjungi-di-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/tanaman-budidaya-tertua-di-dunia-ada-di-indonesia</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>        
    <url>
        <loc>https://studiofrugreenproject.com/posts/penggunaan-hanjuang-sebagai-tanaman-hias</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/6-manfaat-kacang-hias-atau-kacang-pinto-bagi-kesehatan-tanah</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/tanaman-tanaman-yang-dapat-digunakan-untuk-mengatasi-inflamasi-pada-kulit</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://studiofrugreenproject.com/posts/tanaman-tanaman-yang-dapat-digunakan-untuk-mengatasi-inflamasi-pada-kulit</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>                                                                                                                                                                        
</urlset>
`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}
  
export default Sitemap;