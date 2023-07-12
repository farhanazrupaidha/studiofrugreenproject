import Head from "next/head";
import Layout from "../components/layout";
import AdsenseListing from "../components/adsense-listing";
import Container from '../components/container'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Custom404() {
  return (
<>
    <Layout>
               <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>Studiofru | Green Project</title>
                     <meta name="description" content="Jelajah ensiklopedia dan berbagai informasi mengenai flora dan fauna" />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian" />
                     <meta name="author" content="Studiofru | https://studiofrugreenproject.com/" />
                     <meta property="image" content="/images/fotopetani_1.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/" />
                     <meta property="og:title" content="Studiofru | Green Project" />
                     <meta property="og:description" content="Jelajah ensiklopedia dan berbagai informasi mengenai flora dan fauna" />
                     <meta property="og:site_name" content="Studiofru | Green Project" />
                     <meta property="og:image" content="/images/fotopetani_1.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/images/fotopetani_1.jpg" />
                     <meta name="robots" content="noindex,nofollow" />
                    <link rel="icon" href="/images/favicon.ico" />
               </Head>
        <center>
            <Box sx={{mt:20}}>
                <Typography variant='h2' sx={{m:5, mt:8}}>Halaman tidak ditemukan</Typography>
                <Button href='/' color='secondary' variant='contained' sx={{mb:5}}>Kembali ke halaman beranda</Button>
                <AdsenseListing />
            </Box>
        </center>
   </Layout>
</>
  )
}