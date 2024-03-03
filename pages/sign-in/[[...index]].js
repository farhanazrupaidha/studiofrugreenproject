import dynamic from 'next/dynamic'
import Head from 'next/head'
import { SignIn } from "@clerk/nextjs";

const Layout = dynamic(() => import('../../components/layout'));

import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflowY:'auto',
  height:'100%',
  maxHeight: 600,
  display:'block',
  width: '100%',
  maxWidth:580,
  boxShadow: 100,
  borderRadius: 5
};

export default function Page() {
  return (
    <Layout>
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
      <Box sx={style}>
        <center>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </center>
      </Box>
    </Layout>     
  ) 
}