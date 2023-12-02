import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getAllPostsForHome } from '../../lib/graphcms'

const Container = dynamic(() => import('components/container'));
const PostPreview = dynamic(() => import('components/post-preview'));
const Intro = dynamic(() => import('components/intro'));
const Layout = dynamic(() => import('components/layout'));
const Location = dynamic(() => import('components/location'), {
  ssr: false,
});
const Paginate = dynamic(() => import('components/paginate'), {
  ssr: false,
});

const Hero = dynamic(() => import('components/hero-setupatok'));


import Box from '@mui/material/Box';
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
				posts (where: {_search: "setu patok"}, orderBy: date_DESC, first: ${postsPerPage}, skip: ${
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
                     <title>Studiofru | Green Project - Setu Patok Mundu Cirebon</title>
                     <meta name="description" content="Jelajah ensiklopedia dan berbagai informasi mengenai flora dan fauna di wilayah Konservasi Danau Setu Patok Mundu Cirebon" />
                     <meta name="keywords" content="studiofru, ensiklopedia, ensiklopedia alam, ensiklopedia flora, ensiklopedia fauna, perkebunan, pertanian, setu patok, danau setu patok, setu patok cirebon, cirebon" />
                     <meta name="robots" content="index, follow" />
                     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                     <meta name="language" content="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/locations/setupatok" hreflang="id-ID" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en/locations/setupatok" hreflang="en-US" />
                     <link rel="alternate" href="https://studiofrugreenproject.com/en/locations/setupatok" hreflang="x-default" /> 
                     <meta name="revisit-after" content="3 days" />
                     <meta name="author" content="Studiofru | Green Project" /> 
                     <meta property="image" content="/images/tanah.jpg" />
                     <meta property="og:url" content="https://studiofrugreenproject.com/location/setupatok" />
                     <meta property="og:title" content="Studiofru | Green Project - Setu Patok Mundu Cirebon" />
                     <meta property="og:description" content="Jelajah ensiklopedia dan berbagai informasi mengenai flora dan fauna di wilayah Konservasi Danau Setu Patok Mundu Cirebon" />
                     <meta property="og:site_name" content="Studiofru | Green Project - Setu Patok Mundu Cirebon" />
                     <meta property="og:image" content="https://www.studiofrugreenproject.com/images/tanah.jpg" />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content="Studiofru | Green Project - Setu Patok Mundu Cirebon" />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content="https://www.studiofrugreenproject.com/images/tanah.jpg" />
                     <link rel="icon" href="/images/favicon.ico" />
                     <link href='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' rel='stylesheet' />
               </Head>        
        <Container>
          <Intro />
            <h2 className="mb-10 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                Wilayah Konservasi Danau Setu Patok
            </h2>
          <Hero />
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
