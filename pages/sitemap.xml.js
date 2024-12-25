import { getAllPostsWithSlug, getAllPostsWithSlugEn, getAllCategoriesWithSlug, getAllLocationsWithSlug } from 'lib/graphcms'

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const postsId = await getAllPostsWithSlug()  
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
        <loc>https://studiofrugreenproject.com/kategori/${slug}</loc>
        <lastmod>${updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    `)
    .join('\n')} 
    ${postsId.map(({ slug }) => `
    <url>
        <loc>https://studiofrugreenproject.com/posts/${slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
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