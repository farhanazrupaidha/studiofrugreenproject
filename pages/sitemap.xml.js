import { getAllPostsWithSlug, getAllPostsWithSlugEn } from 'lib/graphcms'

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const postsId = await getAllPostsWithSlug()  
  const postsEn = await getAllPostsWithSlugEn()  
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
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-sirih-gading-epipremnum-aureum-bagi-lingkungan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bunga-bakung-hymenocallis-littoralis-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://studiofrugreenproject.com/posts/apa-itu-ekoenzim-dan-bagaimana-cara-membuatnya</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/asal-penyebaran-dan-ancaman-ulat-ngengat-hippotion-celerio-sebagai-hama</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-miana-plectranthus-scutellarioides-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-manfaat-bunga-bakung-merah-amaryllis-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>     
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-kegunaan-sunset-bells-chrysothemis-pulchella</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-manfaat-mondokaki-tabernaemontana-divaricata-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bungur-kecil-lagerstroemia-indica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kangkung-air-ipomoea-aquatica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-lili-perdamaian-spathiphyllum-kochii-bagi-lingkungan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://studiofrugreenproject.com/posts/karakter-tanah-yang-baik-bagi-pertanian</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-pacing-cheilocostus-speciosus</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://studiofrugreenproject.com/posts/dampak-terhadap-lingkungan-dan-potensi-lain-dari-galian-c-kopi-luhur-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>      
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-ginje-cascabela-thevetia-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>         
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-teki-cyperus-rotundus-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bunga-pukul-empat-mirabilis-jalapa-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-soka-ixora-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-flamboyan-delonix-regia-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/apa-itu-el-nino-dan-apa-saja-dampaknya-bagi-produksi-pangan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>       
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-taka-tacca-leontopetaloides-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>     
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-markisa-passiflora-edulis-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-oyong-luffa-acutangula-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>     
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kaktus-san-pedro-trichocereus-macrogonus-var-pachanoi-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-girang-mali-mali-leea-indica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-talas-colocasia-esculenta-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kencana-ungu-ruellia-simplex-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bayam-raja-amaranthus-viridis-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>     
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-nusa-indah-pink-mussaenda-philippica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-keladi-red-star-caladium-bicolor-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>     
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-efek-racun-dan-manfaat-kamboja-jepang-adenium-obesum-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-karok-piper-sarmentosum-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-si-kejut-besar-mimosa-diplotricha-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-jarong-achyranthes-aspera-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>        
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-patikan-kebo-euphorbia-hirta-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kucing-galak-anting-anting-acalypha-indica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-singkong-manihot-esculenta-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bandotan-ageratum-conyzoides-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-ketumbar-bolivia-porophyllum-ruderale-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-rumput-israel-asystasia-gangetica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kemangi-kancing-spermacoce-ocymoides-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-lenglengan-leucas-lavandulifolia-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>               
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-sembung-rambat-mikania-micrantha-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kacang-sensitif-chamaecrista-nictitans-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/posts/sedekah-laut-cara-masyarakat-pesisir-laut-desa-citemu-mundu-cirebon-berterima-kasih-kepada-laut-sebagai-salah-satu-sumber-kehidupan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>     
    <url>
        <loc>https://studiofrugreenproject.com/posts/permata-tersembunyi-di-keraton-kasepuhan-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/manfaat-penggunaan-daun-pisang-sebagai-pembungkus-makanan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/khasiat-mangsian-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/posts/khasiat-sambiloto-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>                                                                                                   
    ${postsEn.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://studiofrugreenproject.com/en/posts/${slug}</loc>
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