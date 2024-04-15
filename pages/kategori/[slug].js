import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getCategory, getAllCategoriesWithSlug } from 'lib/graphcms'

const PostCategories = dynamic(() => import('components/posts-basedon-category'), {
  ssr: false,
});
const Container = dynamic(() => import('../../components/container'));
const Layout = dynamic(() => import('components/layout'));

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CategoryPost ({category, preview}) {

  return (
  <Layout>
    <Head
      defaultTitle="Studiofru | Green Project"
    >
      <title>{category?.title} - Studiofru | Green Project</title>
      <meta name="description" content={category?.description} />
      <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian, setu patok, danau setu patok, setu patok cirebon, cirebon" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="id-ID" />
      <meta name="author" content="Studiofru | Green Project" /> 
      <meta property="image" content="/images/tanah.jpg" />
      <meta property="og:url" content={`https://studiofrugreenproject.com/lokasi/${category?.slug}`} />
      <meta property="og:title" content={`${category?.title} - Studiofru | Green Project`} />
      <meta property="og:description" content={category?.description} />
      <meta property="og:site_name" content={`${category?.title} - Studiofru | Green Project`} />
      <meta property="og:image" content="/images/tanah.jpg" />
      <meta name="og:type" content="website" />
      <meta name="twitter:site" content="@studiofruworks" />
      <meta name="twitter:title" content={`${category?.title} - Studiofru | Green Project`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content="/images/tanah.jpg" />
    </Head>      
    <Box sx={{mt:10, mb:10}}>
    <Container>
      <h2 className="mb-10 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {category?.title}
      </h2>     
      <Typography>{category?.description}</Typography>      
      <PostCategories slug = {category?.slug} />
    </Container>
    </Box>
  </Layout>    
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getCategory(params.slug, preview)
  return {
    props: {
      preview,
      category: data.category
    },
  }
}

export async function getStaticPaths() {
  const categories = await getAllCategoriesWithSlug()
  return {
    paths: categories.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}