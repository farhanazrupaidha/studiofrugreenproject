import React, { Component, useRouter } from 'react';
import { useLazyQuery, useQuery, gql } from '@apollo/client';
import withApollo from "../config";
import Head from 'next/head'

import AdsenseListing from "components/adsense-listing";
import Container from 'components/container'
import SearchBar from 'components/searchbar';
import PostPreview from "components/post-preview";
import Layout from "components/layout";
import CoverImage from 'components/cover-image'

import Typewriter from 'typewriter-effect';

import {
    Box,
    Stack,
    Typography,
    Link
}
from '@mui/material';

const FLORA = gql`
  query {
      posts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        tags
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:crop,
                width:2000,
                height:1000
              }
            }
          })
        }
      }
  postsConnection {
    aggregate {
      count
    }
  }
  }
`;

const ErrorPage = ({posts, postsConnection}) => {
const { data, loading, error } = useQuery(FLORA);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
<Layout>
               <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>Studiofru | Green Project</title>
                     <meta name="description" content="Jelajah ensiklopedia dan berbagai informasi mengenai identitas penamaan, asal, sejarah dan manfaat dari berbagai tumbuhan di Indonesia." />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian" />
                     <meta name="author" content="Studiofru | https://studiofrugreenproject.com/" />
                     <meta property="image" content="/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/" />
                     <meta property="og:title" content="Studiofru | Green Project" />
                     <meta property="og:description" content="Jelajah ensiklopedia dan berbagai informasi mengenai identitas penamaan, asal, sejarah dan manfaat dari berbagai tumbuhan di Indonesia." />
                     <meta property="og:site_name" content="Studiofru | Green Project" />
                     <meta property="og:image" content="/images/tanah.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/images/tanah.jpg" />
                    <link rel="icon" href="/images/favicon.ico" />
               </Head>

<section id="hero" data-stellar-background-ratio="0.5">
        <center>
            <Box sx={{mt:20, height:'250px'}}>
            <Typography variant='h3' color="#BFCC03" sx={{fontWeight:"bold", height:'100px'}}>
                <Typewriter
                  options={{
                    strings: ['tidak menemukan yang dicari?', 'silahkan ketik dalam kolom pencarian di bawah ini'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </Typography>
            <SearchBar />
            </Box>
        </center>
</section>


<Stack spacing={{ xs: 2, sm: 5 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" sx={{m:5}}>
    {data &&
      data.posts.map((item) => (
        <Box sx={{maxWidth:300}} key={item.id}>
          <div className="mb-5">
            <CoverImage slug={item.slug} title={item.title} url={item.coverImage.url} />
          </div>
            <h3 className="mb-3 text-3xl leading-snug">
                <Link href={`/posts/${item.slug}`} className="hover:underline">
                    {item.title}
                </Link>
            </h3>
        </Box>
            ))}
    </Stack>
</Layout>
  )
}

export default withApollo(ErrorPage);