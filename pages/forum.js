import Head from "next/head";

import Layout from "../components/layout";
import * as React from 'react';

import Typewriter from 'typewriter-effect';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function ResponsiveStack() {
  return (
    <Layout>
               <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>Studiofru | Green Project - Forum</title>
                     <meta name="description" content="Wadah forum untuk berkolaborasi dalam lingkup flora dan fauna." />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian" />
                     <meta name="robots" content="index, follow" />
                     <meta name="language" content="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/forum" hreflang="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en/forum" hreflang="en-US" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en/forum" hreflang="x-default" /> 
                     <meta name="author" content="Studiofru | Green Project" /> 
                     <meta property="image" content="/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/forum" />
                     <meta property="og:title" content="Studiofru | Green Project" />
                     <meta property="og:description" content="Wadah forum untuk berkolaborasi dalam lingkup flora dan fauna." />
                     <meta property="og:site_name" content="Studiofru | Green Project - Forum" />
                     <meta property="og:image" content="/images/tanah.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project - Forum" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/images/tanah.jpg" />
                     <meta name="robots" content="noindex,nofollow" />
               </Head>
               <section id="about" data-stellar-background-ratio="0.5">
                <Box sx={{m:'auto', mt:5, mb:5}}>
                      <center>
                          <Typography variant='h1' color="#BFCC03" sx={{fontWeight:"bold", height:'130px'}}>
                              <Typewriter
                                options={{
                                  strings: ['Page under construction', 'Halaman sedang dibangun'],
                                  autoStart: true,
                                  loop: true,
                                }}
                              />
                          </Typography>
                      </center>
                </Box>
              </section>
    </Layout>
  );
}