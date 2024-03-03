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
        defaultTitle="JackPlan"
        >
          <title>JackPlan - Login</title>
          <meta name="title" content="JackPlan - Login" />
          <meta name="description" content="login to write journals." />
          <meta name="keywords" content="studiofru, jackplan, travel, travel planner, trip, journal, login page" />
          <meta name="robots" content="noindex, nofollow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />                     
          <meta name="language" content="en-US" />
          <link rel="alternate" href="https://jackplan.com/sign-in" hreflang="en-US" />
          <link rel="alternate" href="https://jackplan.com/sign-in" hreflang="x-default" />
          <meta name="author" content="Studiofru | JackPlan" />
          <meta property="image" content="https://jackplan.com/images/jackplan - seo image - 2.png" />
          <meta property="og:url" content="https://jackplan.com/sign-in" />
          <meta property="og:title" content="JackPlan - Login" />
          <meta property="og:description" content="login to write journals." />
          <meta property="og:site_name" content="JackPlan" />
          <meta property="og:image" content="https://jackplan.com/images/jackplan - seo image - 2.png" />
          <meta name="og:type" content="website" />
          <meta name="twitter:site" content="@studiofruworks" />
          <meta name="twitter:title" content="JackPlan - Login" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:src" content="https://jackplan.com/images/jackplan - seo image - 2.png" />
      </Head>    
      <Box sx={style}>
        <center>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </center>
      </Box>
    </Layout>     
  ) 
}