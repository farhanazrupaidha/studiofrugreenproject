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
    <url>
        <loc>https://studiofrugreenproject.com/flora</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/fauna</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>   
    <url>
        <loc>https://studiofrugreenproject.com/en/flora</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>    
    <url>
        <loc>https://studiofrugreenproject.com/en/fauna</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>     
    ${postsId.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://studiofrugreenproject.com/posts/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    `)
    .join('\n')}    
    ${postsEn.map(({ slug, updatedAt }) => `
    <url>
        <loc>https://studiofrugreenproject.com/en/posts/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>weekly</changefreq>
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