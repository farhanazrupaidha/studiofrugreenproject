import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Helmet from 'react-helmet';

import Container from 'components/container'
import PostBody from 'components/post-body'
import MoreStories from 'components/more-stories'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import SectionSeparator from 'components/section-separator'
import Layout from 'components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'
import PostTitle from 'components/post-title'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'

import AdsenseListing from "components/adsense-listing";
import AdsenseArticle from "components/adsense-article";
import Location from "components/location";
import ShareButton from "components/socialsharebutton";

import { motion, useScroll } from "framer-motion"
import { DiscussionEmbed } from 'disqus-react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { scrollYProgress } = useScroll();

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
                <Helmet
                     htmlAttributes={{ lang: 'id' }}
                     defaultTitle="Wiwit. | Ensiklopedia Alam"
                   >
                     <title>{post.seo.title}</title>
                     <meta name="description" content={post.seo.description} />
                     <meta name="keywords" content={post.seo.keywords} />
                     <meta property="image" content={post.seo.image.url} />
                     <meta property="og:title" content={post.seo.title} />
                     <meta property="og:description" content={post.seo.description} />
                     <meta property="og:site_name" content="Wiwit. | Ensiklopedia Alam" />
                     <meta property="og:image" content={post.seo.image.url} />
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@AkuStudiofru" />
                     <meta name="twitter:title" content={post.seo.title} />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content={post.seo.image.url} />
                    <meta name="robots" content="noindex" />
                </Helmet>
              <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
              />
              <PostHeader
                title={post.title}
                tags={post.tags}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
                    <Typography variant="h5" sx={{mt:5}}>Referensi</Typography>
                    <Box sx={{mt:4, whiteSpace: 'nowrap', overflowX: 'auto'}}>
                        <Typography variant='body2'>
                            <div
                                dangerouslySetInnerHTML={{ __html: post.reference?.html }}
                            />
                        </Typography>
                    </Box>
              <AdsenseListing />
            </article>
        <center>
            <ShareButton />
            <Box sx={{mt:7, maxWidth: 700, width:'100%'}}>
                <Divider sx={{mt:6, mb:5, maxWidth:300, width:'95%' }} />
                <DiscussionEmbed
                    shortname='wiwit-1'
                    config={
                    {
                    url: post.url,
                    identifier: post.id,
                    title: post.title,
                    }
                    }
                />
            </Box>
        </center>
        <AdsenseArticle />
        <SectionSeparator />
        <Location />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}
