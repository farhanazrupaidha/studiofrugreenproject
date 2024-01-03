import { useState, useEffect } from 'react'
import Head from "next/head";

import Layout from "../components/layout";
import * as React from 'react';

import Box from '@mui/material/Box';


export default function ResponsiveStack() {
  return (
    <Layout>
               <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>Studiofru | Green Project - Kontak</title>
                     <meta name="description" content="Kontak Studiofru untuk mulai berkolaborasi." />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian" />
                     <meta name="language" content="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/kontak" hreflang="id-ID" />
                     <meta name="author" content="Studiofru | Green Project" /> 
                     <meta property="image" content="/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/kontak" />
                     <meta property="og:title" content="Studiofru | Green Project - Kontak" />
                     <meta property="og:description" content="Kontak Studiofru untuk mulai berkolaborasi." />
                     <meta property="og:site_name" content="Studiofru | Green Project - Kontak" />
                     <meta property="og:image" content="/images/tanah.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project - Kontak" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/images/tanah.jpg" />
                     <meta name="robots" content="noindex, nofollow" />
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