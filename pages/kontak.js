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
    <Box sx={{ maxWidth: 800, m:'auto', mt:10, overflow: 'hidden' }}>
    <iframe
             src="https://tally.so/embed/nGxgAp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
             width="100%"
             height="700"
             frameBorder="0"
             marginHeight="0"
             marginWidth="0"
             margin="auto"
             title="Contact">
    </iframe>
    </Box>
    </Layout>
  );
}