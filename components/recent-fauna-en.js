import React from 'react';
import { useQuery, gql } from '@apollo/client';
import withApollo from "../config";
import Link from 'next/link'

import CoverImage from 'components/cover-image'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const FLORA = gql`
  query {
      posts(locales: en, where: {tags_contains_all: "Fauna"}, orderBy: date_DESC, first: 4) {
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

const Recent = ({posts, postsConnection}) => {
const { data, loading, error } = useQuery(FLORA);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (

<Box>
<Typography variant="h3" sx={{mb:5}}>Fauna</Typography>    
  <Stack spacing={{ xs: 2, sm: 3 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center"> 
    {data &&
      data.posts.map((item) => (
        <Box key={item.id} sx={{maxWidth:250, width:'100%', mb:2}}>       
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
</Box>
  )
}

export default withApollo(Recent);