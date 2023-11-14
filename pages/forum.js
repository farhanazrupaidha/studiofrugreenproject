import Head from "next/head";

import Layout from "../components/layout";
import * as React from 'react';

import Typewriter from 'typewriter-effect';
import ReactPlayer from 'react-player/youtube';

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
                     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                     <meta name="language" content="Bahasa Indonesia" />
                     <meta name="revisit-after" content="3 days" />
                     <meta name="author" content="Studiofru | Green Project" /> 
                     <meta property="image" content="/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/" />
                     <meta property="og:title" content="Studiofru | Green Project" />
                     <meta property="og:description" content="Wadah forum untuk berkolaborasi dalam lingkup flora dan fauna." />
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
              <Divider sx={{m:10}} />
              <Box sx={{mt:10, mb:5}}>                 
                <section className="d-share">
                              <ReactPlayer url='https://youtu.be/bHkj6MgXdiw?si=epvJyo3Q-B_vz_la' />
                </section>
              </Box> 
    </Layout>
  );
}