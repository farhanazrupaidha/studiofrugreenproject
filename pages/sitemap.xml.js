import { getAllPostsWithSlug, getAllPostsWithSlugEn } from 'lib/graphcms'

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const postsId = await getAllPostsWithSlug()  
  const postsEn = await getAllPostsWithSlugEn()  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.studiofrugreenproject.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/en</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/flora</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>    
    <url>
        <loc>https://www.studiofrugreenproject.com/fauna</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>   
    <url>
        <loc>https://www.studiofrugreenproject.com/en/flora</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>    
    <url>
        <loc>https://www.studiofrugreenproject.com/en/fauna</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>     
    ${postsId.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/asal-penyebaran-dan-ancaman-bunglon-taman-calotes-versicolor-bagi-spesies-bunglon-lokal</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-sirih-gading-epipremnum-aureum-bagi-lingkungan</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bunga-bakung-hymenocallis-littoralis-bagi-kesehatan</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>       
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/apa-itu-ekoenzim-dan-bagaimana-cara-membuatnya</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/asal-penyebaran-dan-ancaman-ulat-ngengat-hippotion-celerio-sebagai-hama</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-miana-plectranthus-scutellarioides-bagi-kesehatan</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>       
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-manfaat-bunga-bakung-merah-amaryllis-bagi-kesehatan</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-kegunaan-sunset-bells-chrysothemis-pulchella</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-manfaat-mondokaki-tabernaemontana-divaricata-bagi-kesehatan</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>          
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bungur-kecil-lagerstroemia-indica-bagi-kesehatan</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kangkung-air-ipomoea-aquatica-bagi-kesehatan</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-lili-perdamaian-spathiphyllum-kochii-bagi-lingkungan</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/karakter-tanah-yang-baik-bagi-pertanian</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-pacing-cheilocostus-speciosus</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    `)  
    .join('\n')}                         
    ${postsEn.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://www.studiofrugreenproject.com/en/posts/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    `)
    .join('\n')}        
</urlset>
`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}
  
export default Sitemap;