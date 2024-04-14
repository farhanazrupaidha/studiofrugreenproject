import * as React from 'react'
import dynamic from 'next/dynamic'
import { gql, useQuery } from '@apollo/client';
import withApollo from '../config'

const PostPreview = dynamic(() => import('components/post-preview'), {
    ssr: false,
});

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const POST_CATEGORIES = gql`
  query Posts($first: Int!, $after: String, $slug: String) {
    postsConnection (where: {category: {slug: $slug}}, orderBy: createdAt_DESC, first: $first, after: $after) {
        pageInfo {
          pageSize
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        edges {
            node {
              title
              tags
              slug
              date
              excerpt
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
              author {
                name
                picture {
                  url(transformation: {
                    image: {
                      resize: {
                        width:100,
                        height:100,
                        fit:crop
                      }
                    }
                  })
                }
              }
              category {
                title
                stage
              }
              speciesLocation {
                title
                stage
              }
            }
        }
        aggregate {
          count
        }
    }
  }
`;

const BATCH_SIZE = 16;

const PostCategories = ({slug}) => {
  const { data, loading, error, fetchMore } = useQuery(POST_CATEGORIES, {
    variables: {
        first: BATCH_SIZE,
        after: null,
        slug: `${slug}`
  }});

  if (error) {
    return <p>Sorry, an error happened. Reload Please</p>;
  }
  
  if (!data && loading) {
    return <Box sx={{mt:5}}><center><LinearProgress color="secondary" /></center></Box>;
  }
  
  if (!data?.postsConnection.edges.length) {
    return <Box sx={{mt:5}}><center><Typography>Data not found</Typography></center></Box>;
  }
  
  const posts = data.postsConnection.edges.map((edge) => edge.node);
  const haveMorePosts= Boolean(data?.postsConnection?.pageInfo?.hasNextPage);
  

  return (
            <Box sx={{mb:5, mt:5}}>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    {posts.map((post) => {
                      const { id, title, slug, tags, coverImage, date, author, excerpt } = post;
                      return (
                        <PostPreview
                            key={id}
                            title={title}
                            tags={tags}
                            coverImage={coverImage}
                            date={date}
                            author={author}
                            slug={slug}
                            excerpt={excerpt}
                      />
                      );
                    })}
                  </div>
                  <center>
                  {haveMorePosts ? (
                    <form
                      method="post"
                      onSubmit={(event) => {
                        event.preventDefault();
                        fetchMore({ variables: { after: data.postsConnection.pageInfo.endCursor } });
                      }}
                    >
                      <Button variant="outlined" sx={{borderRadius: 5}} color="secondary" type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Load more"}
                      </Button>
                    </form>
                  ) : (
                    <Chip icon={<CheckCircleIcon />} color="secondary" variant="outlined" label="All posts have been loaded." />
                  )}
                  </center>
                </Box>  
             
  )
}


export default withApollo(PostCategories);
