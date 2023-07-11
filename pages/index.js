import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';

import Container from '../components/container'
import MoreStories from '../components/more-stories'
import PostPreview from "../components/post-preview";
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Location from "../components/location"
import Layout from '../components/layout'
import Hero from '../components/hero'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Paginate from '../components/paginate';

import AdsenseListing from "../components/adsense-listing";
import AdsenseDisplay from "../components/adsense-display";

import Box from '@mui/material/Box';
import Pagination from "@mui/material/Pagination";

export default function Index({ posts, preview }) {
    const heroPost = posts[0]
    const morePosts = posts.slice(1)

	const [blogPosts, setBlogPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPosts, setTotalPosts] = useState();
	const [postsPerPage] = useState(14);

	useEffect(() => {
		const fetchBlogPosts = async () => {
			const { posts, postsConnection } = await request(
				'https://api-ap-southeast-2.hygraph.com/v2/clijsrvoy05qk01t9f56qa446/master',
				`
			{
				posts (orderBy: date_DESC, first: ${postsPerPage}, skip: ${
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
                     <title>Studiofru | Green Project</title>
                     <meta name="description" content="Jelajah ensiklopedia dan berbagai informasi mengenai flora dan fauna" />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian" />
                     <meta name="author" content="Studiofru | https://studiofrugreenproject.com/" />
                     <meta property="image" content="/images/fotopetani_1.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/" />
                     <meta property="og:title" content="Studiofru | Green Project" />
                     <meta property="og:description" content="Jelajah ensiklopedia dan berbagai informasi mengenai flora dan fauna" />
                     <meta property="og:site_name" content="Studiofru | Green Project" />
                     <meta property="og:image" content="/images/fotopetani_1.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="/images/fotopetani_1.jpg" />
                    <link rel="icon" href="/images/favicon.ico" />
               </Head>
        <Hero />
        <Box sx={{mt:3, mb:3}}>
            <AdsenseListing />
        </Box>
        <Container>
          <Box sx={{mb:5, mt:5}}>
            <h2 className="mb-10 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                Catatan terbaru
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
        <AdsenseDisplay />
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

