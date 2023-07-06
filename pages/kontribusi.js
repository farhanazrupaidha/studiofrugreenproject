import { useState, useEffect } from 'react'
import Head from "next/head";

import Layout from "../components/layout";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ResponsiveStack() {
  return (
    <Layout>
    <Head>
        <title>Wiwit. | Human and Nature</title>
        <link rel="icon" href="https://www.datocms-assets.com/82122/1664605536-wiwit-logo-750px.png" />
        <meta name="google-site-verification" content="XMX1zwCBJRAaehfHGLaU6xHPlhjOGEmWKdDVIvvt9pk" />
        <meta name="keywords" content="wiwit, tanaman herbal, tanaman organik, organik, organic plants, indonesia, plants encyclopedia, nature encyclopedia"/>
        <meta name="description" content="A place for farmers, ranchers and fishermen, communities, and other societies to connect and exchange information the knowledge about humans, nature, and the environment."/>
        <meta name="author" content="Wiwit. | Studiofru / https://www.wiwit.net/"/>
    </Head>
   <Box sx={{ maxWidth: 800, m:'auto', mb:2, mt:10, align: 'center', overflow: 'hidden' }}>
    <Typography variant="h3" gutterBottom sx={{m:5, fontWeight: 'bold', textAlign: 'center', lineHeight: 1}}>
            Kontribusi
    </Typography>
    <Typography variant="body1" gutterBottom sx={{m:5, fontWeight: 'normal', textAlign: 'center', lineHeight: 1}}>
           Setiap individu dapat memberikan kontribusi dalam bentuk tulisan baik untuk artikel arsip dan berita. Silahkan isi formulir di bawah ini untuk memberikan kontribusi.
    </Typography>
    </Box>
    <Box sx={{ maxWidth: 800, m:'auto', overflow: 'hidden' }}>
    <center>
    <iframe
             src="https://tally.so/embed/wobaJM?alignLeft=1&hideTitle=1&transparentBackground=1"
             width="100%"
             height="1400"
             frameBorder="0"
             marginHeight="0"
             marginWidth="0"
             margin="auto"
             title="Contribution">
    </iframe>
    </center>
    </Box>
    </Layout>
  );
}