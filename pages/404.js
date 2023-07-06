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
    <Head>
        <title>Wiwit. | Human and Nature</title>
        <link rel="icon" href="https://www.datocms-assets.com/82122/1664605536-wiwit-logo-750px.png" />
        <meta name="google-site-verification" content="XMX1zwCBJRAaehfHGLaU6xHPlhjOGEmWKdDVIvvt9pk" />
        <meta name="keywords" content="wiwit, tanaman herbal, tanaman organik, organik, organic plants, indonesia, plants encyclopedia, nature encyclopedia"/>
        <meta name="description" content="A place for farmers, ranchers and fishermen, communities, and other societies to connect and exchange information the knowledge about humans, nature, and the environment."/>
        <meta name="author" content="Wiwit. | Studiofru / https://www.wiwit.net/"/>
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