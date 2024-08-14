import React from 'react';
import Head from 'next/head'
import { useQuery, gql } from '@apollo/client';
import withApollo from "../config";
import postStyles from '/components/post-styles.module.css'
import Layout from '/components/layout'

import Typewriter from 'typewriter-effect';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ABOUT = gql`
  query {
  page(where: {slug: "disclaimer"}) {
    content {
      html
    }
    title
    subtitle
    slug
    seo {
      description
      keywords
      title
      image {
              url
            }
    }
  }
 }
`;


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const About = ({page}) => {
const { data, loading, error } = useQuery(ABOUT);

  if (loading) return null;
  if (error) return `Error! ${error}`;


  return (
<Layout>
                <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>{data.page.seo.title}</title>
                     <meta name="description" content={data.page.seo.description} />
                     <meta name="keywords" content={data.page.seo.keywords} />
                     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                     <meta name="language" content="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/disclaimer" hreflang="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en/disclaimer" hreflang="en-US" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en/disclaimer" hreflang="x-default" /> 
                     <meta name="revisit-after" content="3 days" />
                     <meta name="author" content="Studiofru | Green Project" />                      
                     <meta property="image" content={data.page.seo.image.url} />
                     <meta property="og:title" content={data.page.seo.title} />
                     <meta property="og:description" content={data.page.seo.description} />
                     <meta property="og:site_name" content="Studiofru | Green Project - Disclaimer" />
                     <meta property="og:image" content={data.page.seo.image.url} />
                      <meta name="og:url" content={`https://studiofrugreenproject.com/disclaimer`}/>
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content={data.page.seo.title} />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content={data.page.seo.image.url} />
                </Head>
<section id="about" data-stellar-background-ratio="0.5">
<Box sx={{m:'auto', mt:5}}>
    <Box sx={{mb:10}}>
        <center>
            <Typography variant='h1' color="#BFCC03" sx={{fontWeight:"bold"}}>
                <Typewriter
                  options={{
                    strings: ['Disclaimer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </Typography>
        </center>
    </Box>
  </Box>
</section>
<Box sx={{m:5, mb:10}}>
    <div
      className={`max-w-3xl mx-auto post ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: data.page.content?.html }}
    />
</Box>
</Layout>
  );
}

export default withApollo(About);