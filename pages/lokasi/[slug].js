import speciesLocation from 'components/species-location';
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Map from 'react-map-gl';

import { getLocation, getAllLocationsWithSlug } from 'lib/graphcms'

const PostCategories = dynamic(() => import('components/posts-basedon-location'));
const Container = dynamic(() => import('../../components/container'));
const Layout = dynamic(() => import('components/layout'));
const DataCountFlora = dynamic(() => import('components/dataflora-location'), {
  ssr: false,
});
const DataCountFauna = dynamic(() => import('components/datafauna-location'), {
  ssr: false,
});

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export default function LocationPost ({speciesLocation, preview}) {

  return (
  <Layout>
    <Head
      defaultTitle="Studiofru | Green Project"
    >
      <title>{speciesLocation?.title} - Studiofru | Green Project</title>
      <meta name="description" content={speciesLocation?.description} />
      <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian, setu patok, danau setu patok, setu patok cirebon, cirebon" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="id-ID" />
      <meta name="author" content="Studiofru | Green Project" /> 
      <meta property="image" content="/images/tanah.jpg" />
      <meta property="og:url" content={`https://studiofrugreenproject.com/lokasi/${speciesLocation?.slug}`} />
      <meta property="og:title" content={`${speciesLocation?.title} - Studiofru | Green Project`} />
      <meta property="og:description" content={speciesLocation?.description} />
      <meta property="og:site_name" content={`${speciesLocation?.title} - Studiofru | Green Project`} />
      <meta property="og:image" content="/images/tanah.jpg" />
      <meta name="og:type" content="website" />
      <meta name="twitter:site" content="@studiofruworks" />
      <meta name="twitter:title" content={`${speciesLocation?.title} - Studiofru | Green Project`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content="/images/tanah.jpg" />
    </Head>      
    <Box sx={{mt:10, mb:10}}>
    <Container>
      <h2 className="mb-10 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {speciesLocation?.title}
      </h2>     
      <Typography>{speciesLocation?.description}</Typography> 
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        sx={{mb:8, mt:5}}
      >
      <Paper sx={{maxWidth:820, width:'100%'}}>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic3R1ZGlvZnJ1IiwiYSI6ImNrZXBuYXlwcDN2cGwyc2x0Y2libnY2cmwifQ.LsxGcgeSlLKEYbnNldaEfw"
        initialViewState={{
          longitude: `${speciesLocation?.map.longitude}`,
          latitude: `${speciesLocation?.map.latitude}`,
          zoom: 12
        }}
        style={{maxWidth:820, width:'100%', height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
    />
      </Paper>  
        <DataCountFlora slug = {speciesLocation?.slug} />
        <DataCountFauna slug = {speciesLocation?.slug} />
      </Stack>      
      <PostCategories slug = {speciesLocation?.slug} />
    </Container>
    </Box>
  </Layout>    
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getLocation(params.slug, preview)
  return {
    props: {
      preview,
      speciesLocation: data.speciesLocation
    },
  }
}

export async function getStaticPaths() {
  const speciesLocations = await getAllLocationsWithSlug()
  return {
    paths: speciesLocations.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}