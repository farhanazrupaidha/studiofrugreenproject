import { useState, useEffect } from 'react'
import Head from "next/head";

import Layout from "../components/layout";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ResponsiveStack() {
  return (
    <Layout>
               <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>Studiofru | Green Project - Kontribusi</title>
                     <meta name="description" content="Ikut berkontribusi dalam pengarsipan informasi ensiklopedia berbagai flora dan fauna di Indonesia." />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian" />
                     <meta name="robots" content="index, follow" />
                     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                     <meta name="language" content="Bahasa Indonesia" />
                     <meta name="revisit-after" content="3 days" />
                     <meta name="author" content="Studiofru | Green Project" /> 
                     <meta property="image" content="/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/" />
                     <meta property="og:title" content="Studiofru | Green Project" />
                     <meta property="og:description" content="Ikut berkontribusi dalam pengarsipan informasi ensiklopedia berbagai flora dan fauna di Indonesia." />
                     <meta property="og:site_name" content="Studiofru | Green Project" />
                     <meta property="og:image" content="/images/tanah.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/images/tanah.jpg" />
                     <meta name="robots" content="noindex,nofollow" />
                    <link rel="icon" href="/images/favicon.ico" />
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