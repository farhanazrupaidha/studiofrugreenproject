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

import AdsenseDisplay from "components/adsense-display";
import AdsenseArticle from "components/adsense-article";
import AdsenseMultiplex from "components/adsense-multiplex";
import Location from "components/location";
import ShareButton from "components/socialsharebutton";

import { motion, useScroll } from "framer-motion"
import { DiscussionEmbed } from 'disqus-react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'next-share'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { scrollYProgress } = useScroll();

  return (
    <Layout preview={preview}>
      <Container>
        <Box sx={{mt:10}}>
            <AdsenseDisplay />
        </Box>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
                <Head
                     defaultTitle="Wiwit. | Ensiklopedia Alam"
                   >
                     <title>{post.title}</title>
                     <meta name="description" content={post.seo.description} />
                     <meta name="keywords" content={post.seo.keywords} />
                     <meta property="image" content={post.seo.image.url} />
                     <meta property="og:title" content={post.title} />
                     <meta property="og:description" content={post.seo.description} />
                     <meta property="og:site_name" content="Wiwit. | Ensiklopedia Alam" />
                     <meta property="og:image" content={post.seo.image.url} />
                      <meta name="og:url" content={`https://wiwit.net/posts/${post.slug}`}/>
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@AkuStudiofru" />
                     <meta name="twitter:title" content={post.title} />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image:src" content={post.seo.image.url} />
                </Head>
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
            </article>
        <Box sx={{mt:5}}>
        <Typography variant="h6">Bagikan</Typography>
        <Stack
            direction="row"
            spacing={1}
            sx={{mt:2, mb:4}}
        >
            <ShareButton />
            <TwitterShareButton
                url={`https://wiwit.net/posts/${post.slug}`}
                title={post.title}
            >
                <TwitterIcon color="primary" size="small" />
            </TwitterShareButton>
            <FacebookShareButton
                url={`https://wiwit.net/posts/${post.slug}`}
                quote={post.title}
                hashtag={'#wiwit-ensiklopediaalam'}
            >
                <FacebookIcon color="primary" size="small" />
            </FacebookShareButton>
            <WhatsappShareButton
                url={`https://wiwit.net/posts/${post.slug}`}
                title={post.title}
                separator="->"
            >
                <WhatsAppIcon color="primary" size="small" />
            </WhatsappShareButton>
        </Stack>
        </Box>
        <AdsenseArticle />
        <SectionSeparator />
        <Location />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
        <AdsenseMultiplex />
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
