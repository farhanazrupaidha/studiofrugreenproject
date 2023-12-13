import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getAllPostsForHomeEn } from '../lib/graphcms'

const Container = dynamic(() => import('components/container'));
const PostPreview = dynamic(() => import('components/post-preview-en'), {
  ssr: false,
});
const Layout = dynamic(() => import('components/layout-en'));
const Location = dynamic(() => import('components/location-en'), {
  ssr: false,
});
const Hero = dynamic(() => import('components/hero-en'));
const SectionSeparator = dynamic(() => import('components/section-separator'), {
  ssr: false,
});
const RecentFlora = dynamic(() => import('components/recent-flora-en'), {
  ssr: false,
});
const RecentFauna = dynamic(() => import('components/recent-fauna-en'), {
  ssr: false,
});
const Paginate = dynamic(() => import('components/paginate-en'), {
  ssr: false,
});

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

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
				posts (locales: en, orderBy: date_DESC, first: ${postsPerPage}, skip: ${
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
                            seo {
                                  title
                                  description
                                  keywords
                                  image {
                                    url
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
                     <title>Studiofru | Green Project - Encyclopedia of Biodiversity</title>
                     <meta name="title" content="Studiofru | Green Project - Explore encyclopedias and various information regarding naming identities, origins, history and benefits of various plants and animals in Indonesia." />
                     <meta name="description" content="Explore encyclopedias and various information regarding naming identities, origins, history and benefits of various plants and animals in Indonesia." />
                     <meta name="keywords" content="studiofru, encyclopedia, nature encyclopedia, flora encyclopedia, fauna encyclopedia, farming, livestock, animal, plants, biodiversity in Indonesia" />
                     <meta name="robots" content="index, follow" />   
                     <meta name="language" content="en-US" />                 
                     <link rel="alternate" href="https://studiofrugreenproject.com" hreflang="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en" hreflang="en-US" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en" hreflang="x-default" />
                     <meta name="author" content="Studiofru | Green Project" /> 
                     <meta property="image" content="/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/en" />
                     <meta property="og:title" content="Studiofru | Green Project - Encyclopedia of Biodiversity" />
                     <meta property="og:description" content="Explore encyclopedias and various information regarding naming identities, origins, history and benefits of various plants and animals in Indonesia."/>
                     <meta property="og:site_name" content="Studiofru | Green Project - Encyclopedia of Biodiversity" />
                     <meta property="og:image" content="/images/tanah.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project  - Encyclopedia of Biodiversity" />
                     <meta property="twitter:description" content="Explore encyclopedias and various information regarding naming identities, origins, history and benefits of various plants and animals in Indonesia."/>
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image" content="/images/tanah.jpg" />
               </Head>
        <Hero />

        <Container>
          <SectionSeparator />
          <Box sx={{mb:5, mt:5}}>
            <h2 className="mb-10 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
               Recent Articles
            </h2>
          </Box>
          <Location />
			{blogPosts ? (
			<Box>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
				{blogPosts.map((blogPost) => (
                   <PostPreview
                     key={blogPost.slug}
                     title={blogPost.title}
                     tags={blogPost.tags}
                     coverImage={blogPost.coverImage}
                     date={blogPost.date}
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
      <Divider sx={{m:10}} />    
      <Box sx={{ml:5}}>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Based on Topic
      </h2>
      </Box>        
      <Box sx={{mb:10}}>
        <Splide aria-label="New Articles">
              <SplideSlide>
                <RecentFlora />
              </SplideSlide>  
              <SplideSlide>
                <RecentFauna />
              </SplideSlide>                                                    
        </Splide> 
      </Box>             
      </Layout>
    </>
)
};

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHomeEn(preview)) || []
  return {
    props: { posts, preview },
  }
}
