import dynamic from 'next/dynamic'
import Head from 'next/head'
import { SignIn } from "@clerk/nextjs";

import Typewriter from 'typewriter-effect';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Page() {
  return (
    <>
               <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>Studiofru | Green Project - Masuk</title>
                     <meta name="title" content="Studiofru | Green Project - Masuk" />
                     <meta name="description" content="Masuk untuk mulai mengelola kebun virtual Studiofru | Green Project." />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian, masuk, login" />
                     <meta name="robots" content="index, follow" />                    
                     <meta name="author" content="Studiofru | Green Project" /> 
                     <meta property="image" content="https://studiofrugreenproject.com/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/" />
                     <meta property="og:title" content="Studiofru | Green Project - Masuk" />
                     <meta property="og:description" content="Masuk untuk mulai mengelola kebun virtual Studiofru | Green Project."/>
                     <meta property="og:site_name" content="Studiofru | Green Project - Masuk" />
                     <meta property="og:image" content="https://studiofrugreenproject.com/images/tanah.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project - Masuk" />
                     <meta property="twitter:description" content="Masuk untuk mulai mengelola kebun virtual Studiofru | Green Project."/>
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image" content="https://studiofrugreenproject.com/images/tanah.jpg" />
               </Head>      
      <Box sx={{m:'auto', mt:5, mb:5}}>
          <center>
              <Typography variant='h1' color="#22cc88" sx={{fontWeight:"bold", mb:5}}>
                  <Typewriter
                    options={{
                      strings: ['Masuk', 'Sign In'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              </Typography>

        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        <Button href="/" sx={{mt:5}} variant="contained">Kembali/Back</Button>
      </center>
    </Box>        
    </>     
  ) 
}