import React from 'react';
import { useQuery, gql } from '@apollo/client';
import withApollo from "../config";
import Link from 'next/link'
import dynamic from 'next/dynamic'

const SearchBar = dynamic(() => import('components/searchbar'), {
  ssr: false,
});
const CoverImage = dynamic(() => import('components/cover-image'),{ 
ssr: false,
});

import Typewriter from 'typewriter-effect';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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
<>
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

<Stack spacing={{ xs: 2, sm: 3 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" sx={{m:5}}>
    {data &&
      data.posts.map((item) => (
        <Box sx={{maxWidth:250}} key={item.id}>
          <div className="mb-5">
            <CoverImage slug={item.slug} title={item.title} url={item.coverImage.url} />
          </div>
            <Typography variant="h5" color="secondary" sx={{mb:1}}>
                <Link href={`/posts/${item.slug}`} className="hover:underline">
                    {item.title}
                </Link>
            </Typography>
        </Box>
            ))}
    </Stack>
    </>        
  )
}

export default withApollo(ErrorPage);