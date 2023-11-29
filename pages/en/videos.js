import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import { useRouter } from "next/router";
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getAllPostsForHome } from '../../lib/graphcms'

const Container = dynamic(() => import('components/container'));
const PostPreview = dynamic(() => import('components/post-preview-en'));
const Intro = dynamic(() => import('components/intro'), {
  ssr: false,
});
const Layout = dynamic(() => import('components/layout-en'));
const Location = dynamic(() => import('components/location-en'), {
  ssr: false,
});
const Paginate = dynamic(() => import('components/paginate-en'), {
  ssr: false,
});


import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import ReactPlayer from 'react-player/youtube';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Index({ posts, preview }) {

	const [blogPosts, setBlogPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPosts, setTotalPosts] = useState();
	const [postsPerPage] = useState(10);

	useEffect(() => {
		const fetchBlogPosts = async () => {
			const { posts, postsConnection } = await request(
				'https://api-ap-southeast-2.hygraph.com/v2/clijsrvoy05qk01t9f56qa446/master',
				`
			{
				posts (locales: en, where: {_search: "video"}, orderBy: date_DESC, first: ${postsPerPage}, skip: ${
					currentPage * postsPerPage - postsPerPage
				}) {
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
                          }
				 postsConnection {
					pageInfo {
					  pageSize
					}
				 }
			}
		 `
			);

			setBlogPosts(posts);
			setTotalPosts(postsConnection.pageInfo.pageSize);
		};

		fetchBlogPosts();
	}, [currentPage, postsPerPage]);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage !== Math.ceil(totalPosts / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
    <>
      <Layout preview={preview}>
               <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>Studiofru | Green Project - Video Documentation</title>
                     <meta name="description" content="Explore documentation regarding flora and fauna as well as the agricultural and plantation environment in Indonesia." />
                     <meta name="keywords" content="studiofru, documentation of agriculture in Indonesia, documentation of the natural environment in Indonesia, documentation of plantations in Indonesia" />
                     <meta name="robots" content="index, follow" />
                     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                     <meta name="language" content="en-US" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/video" hreflang="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en/video" hreflang="en-US" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en/video" hreflang="x-default" /> 
                     <meta name="revisit-after" content="3 days" />
                     <meta name="author" content="Studiofru | Green Project" /> 
                     <meta property="image" content="/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/video" />
                     <meta property="og:title" content="Studiofru | Green Project - Video Documentation" />
                     <meta property="og:description" content="Explore documentation regarding flora and fauna as well as the agricultural and plantation environment in Indonesia." />
                     <meta property="og:site_name" content="Studiofru |Green Project - Video Documentation" />
                     <meta property="og:image" content="/images/tanah.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project - Video Documentation" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/tanah.jpg" />
                    <link rel="icon" href="/images/favicon.ico" />
               </Head>
        <Container>
          <Intro />
          <Box sx={{mb:5}}>
            <h2 className="mb-10 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                Video Documentation
            </h2>   
            
            <Splide aria-label="Video Diary">
              <SplideSlide>
              <Typography variant="h4" sx={{mb:5}}>Video Diary</Typography>
                <section className="d-share">
                <ReactPlayer controls={true} loop={true} playing={true} url='https://youtube.com/playlist?list=PLQNlRTZc_hMXysrhTEc8v8SSAzhQQgxoh&si=UWK4qsLyblzoOOUT' />
                </section>
              </SplideSlide>  
            </Splide>                     
            </Box>
            <Divider sx={{mt:10, mb:10}} />            
          <Location />

			{blogPosts ? (
			<Box>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
				{blogPosts.map((blogPost) => (
                   <PostPreview
                     key={blogPost.slug}
                     title={blogPost.title}
                     coverImage={blogPost.coverImage}
                     date={blogPost.date}
                     tags={blogPost.tags}
                     author={blogPost.author}
                     slug={blogPost.slug}
                     excerpt={blogPost.excerpt}
                   />
                   ))}
                 </div>
                 <center>
                  <Paginate
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
                    currentPage={currentPage}
                    paginate={paginate}
                    previousPage={previousPage}
                    nextPage={nextPage}
                   />
                </center>
				</Box>
			) : (
				<div className="loading">Loading...</div>
			)}
        </Container>
      </Layout>
    </>
)
};

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}
