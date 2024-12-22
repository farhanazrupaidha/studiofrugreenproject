const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-sirih-gading-epipremnum-aureum-bagi-lingkungan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bunga-bakung-hymenocallis-littoralis-bagi-kesehatan</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/apa-itu-ekoenzim-dan-bagaimana-cara-membuatnya</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/asal-penyebaran-dan-ancaman-ulat-ngengat-hippotion-celerio-sebagai-hama</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-miana-plectranthus-scutellarioides-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-manfaat-bunga-bakung-merah-amaryllis-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-kegunaan-sunset-bells-chrysothemis-pulchella</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-efek-dan-manfaat-mondokaki-tabernaemontana-divaricata-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bungur-kecil-lagerstroemia-indica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kangkung-air-ipomoea-aquatica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-lili-perdamaian-spathiphyllum-kochii-bagi-lingkungan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/karakter-tanah-yang-baik-bagi-pertanian</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-pacing-cheilocostus-speciosus</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/dampak-terhadap-lingkungan-dan-potensi-lain-dari-galian-c-kopi-luhur-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-ginje-cascabela-thevetia-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-teki-cyperus-rotundus-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bunga-pukul-empat-mirabilis-jalapa-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-soka-ixora-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-flamboyan-delonix-regia-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/apa-itu-el-nino-dan-apa-saja-dampaknya-bagi-produksi-pangan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-taka-tacca-leontopetaloides-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-markisa-passiflora-edulis-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-oyong-luffa-acutangula-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kaktus-san-pedro-trichocereus-macrogonus-var-pachanoi-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-girang-mali-mali-leea-indica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-talas-colocasia-esculenta-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kencana-ungu-ruellia-simplex-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bayam-raja-amaranthus-viridis-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-nusa-indah-pink-mussaenda-philippica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-keladi-red-star-caladium-bicolor-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-efek-racun-dan-manfaat-kamboja-jepang-adenium-obesum-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-karok-piper-sarmentosum-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-si-kejut-besar-mimosa-diplotricha-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-jarong-achyranthes-aspera-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-patikan-kebo-euphorbia-hirta-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kucing-galak-anting-anting-acalypha-indica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-singkong-manihot-esculenta-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-bandotan-ageratum-conyzoides-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-ketumbar-bolivia-porophyllum-ruderale-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-rumput-israel-asystasia-gangetica-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kemangi-kancing-spermacoce-ocymoides-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-lenglengan-leucas-lavandulifolia-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-sembung-rambat-mikania-micrantha-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/deskripsi-asal-dan-manfaat-kacang-sensitif-chamaecrista-nictitans-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/nadran-sedekah-laut-2024-desa-citemu-mundu-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/permata-tersembunyi-di-keraton-kasepuhan-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/manfaat-penggunaan-daun-pisang-sebagai-pembungkus-makanan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/khasiat-mangsian-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/khasiat-sambiloto-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/rumput-knop-knopweed-hyptis-capitata</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/kenikir-kings-salad-cosmos-caudatus</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/potensi-industri-tanaman-kenikir</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/menjajal-kereta-api-kelas-ekonomi-premium</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/manfaat-pupuk-organik</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/manfaat-pupuk-organik</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/5-cara-mudah-menyuburkan-tanah-secara-biologis</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/bagaimana-cara-menyuburkan-tanah</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/manfaat-mangga-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/10-jenis-tanah-di-wilayah-indonesia</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/pantai-tirtamaya-indramayu</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/fungsi-dan-manfaat-antioksidan-bagi-tubuh</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/pengertian-fungsi-dan-jenis-jenis-air</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/5-langkah-penanggulangan-dan-pencegahan-bencana-kekeringan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>     
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/sejarah-penyebaran-budidaya-padi</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/wisata-alam-danau-setu-patok-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/penyebab-terjadinya-kekeringan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/tempat-wisata-wajib-dikunjungi-di-cirebon</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/tanaman-budidaya-tertua-di-dunia-ada-di-indonesia</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>      
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/penggunaan-hanjuang-sebagai-tanaman-hias</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>    
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/6-manfaat-kacang-hias-atau-kacang-pinto-bagi-kesehatan-tanah</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/tanaman-tanaman-yang-dapat-digunakan-untuk-mengatasi-inflamasi-pada-kulit</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>  
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/kegunaan-taka-sebagai-alternatif-bahan-pangan-dan-manfaatnya-bagi-kesehatan</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/potensi-industri-dan-budidaya-rosella</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url> 
    <url>
        <loc>https://www.studiofrugreenproject.com/posts/3-manfaat-dan-kegunaan-lain-dari-rosella</loc>
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