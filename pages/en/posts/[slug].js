import { useRouter } from 'next/router'
import * as React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getAllPostsWithSlugEn, getPostAndMorePostsEn } from 'lib/graphcms'

const ErrorPage = dynamic(() => import('components/errorpage'), {
  ssr: false,
});
const Container = dynamic(() => import('components/container'));
const PostBody = dynamic(() => import('components/post-body'));
const PostImage = dynamic(() => import('components/post-image'), {
  ssr: false,
});
const PostReference = dynamic(() => import('components/post-reference'), {
  ssr: false,
});
const MoreStories = dynamic(() => import('components/more-stories-en'), {
  ssr: false,
});
const Header = dynamic(() => import('components/header'), {
  ssr: false,
});
const PostHeader = dynamic(() => import('components/post-header'));
const PostTitle = dynamic(() => import('components/post-title'));
const SectionSeparator = dynamic(() => import('components/section-separator'), {
  ssr: false,
});
const Layout = dynamic(() => import('components/layout-en'));
const ShareButton = dynamic(() => import('components/socialsharebutton'), {
  ssr: false,
});

import { motion, useScroll } from "framer-motion"

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'next-share'

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
}));

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

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
                <Head
                     defaultTitle="Studiofru | Green Project"
                   >
                     <title>{post.title}</title>
                     <meta name="title" content={post.title}></meta>
                     <meta name="description" content={post.excerpt} />
                     <meta name="keywords" content={post.tags} />
                     <meta name="language" content="en-US" />
                     <meta name="revisit-after" content="3 days" />
                     <meta name="author" content="Studiofru" />                     
                     <meta property="image" content={post.coverImage.url} />
                     <meta property="og:title" content={post.title} />
                     <meta property="og:description" content={post.excerpt} />
                     <meta property="og:site_name" content="Studiofru | Green Project" />
                     <meta property="og:image" content={post.coverImage.url} />
                     <meta name="og:url" content={`https://studiofrugreenproject.com/en/posts/${post.slug}`}/>
                     <meta name="og:type" content="article" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:creator" content="@studiofruworks" />
                     <meta name="twitter:title" content={post.title} />
                     <meta property="twitter:description" content={post.excerpt} />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image" content={post.coverImage.url} />
                     <link rel="alternate" href={`https://studiofrugreenproject.com/posts/${post.slug}`} hreflang="id-ID" />
                     <link rel="alternate" href={`https://studiofrugreenproject.com/en/posts/${post.slug}`} hreflang="en-US" />
                     <link rel="alternate" href={`https://studiofrugreenproject.com/en/posts/${post.slug}`} hreflang="x-default" />
                     <meta name="robots" content="index, follow" />
                </Head>
              <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
              />
              <Box sx={{mt:5, mb:5}}>
                <center>
                  <script dangerouslySetInnerHTML={{
                    __html: `
                    atOptions = {
                      'key' : 'da63cf0c73cf0fedf2d8d957d26c0f2b',
                      'format' : 'iframe',
                      'height' : 90,
                      'width' : 728,
                      'params' : {}
                    };
                    document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/da63cf0c73cf0fedf2d8d957d26c0f2b/invoke.js"></scr' + 'ipt>');
                    `,
                  }} />
                </center>
              </Box>              
            <PostHeader
                title={post.title}
                tags={post.tags}
                coverImage={post.coverImage}
                date={post.date}
                updatedAt={post.updatedAt}
                author={post.author}
              />
              <Box sx={{mt:5, mb:5}}>
                <center>
                  <script dangerouslySetInnerHTML={{
                    __html: `
                    atOptions = {
                      'key' : 'da63cf0c73cf0fedf2d8d957d26c0f2b',
                      'format' : 'iframe',
                      'height' : 90,
                      'width' : 728,
                      'params' : {}
                    };
                    document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/da63cf0c73cf0fedf2d8d957d26c0f2b/invoke.js"></scr' + 'ipt>');
                    `,
                  }} />
                </center>
              </Box>              
              <PostImage cloudinaryImageLibrary={post.cloudinaryImageLibrary} title={post.title} />
              <PostBody content={post.content} />
              <PostReference reference={post.reference} />  
            </article>
            <center>
            <Box sx={{mt:7}}>
            <Divider sx={{mt:5, mb:3, maxWidth:300, width:'95%' }} />
            <Typography variant='h6' color="#ff0055">Share this article</Typography>
            <Box sx={{mb:5, mt:2}}>
            <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{mt:2, mb:4}}
            >
                <ShareButton />
                <TwitterShareButton
                    url={`https://studiofrugreenproject.com/en/posts/${post.slug}`}
                    title={post.title}
                >
                <LightTooltip disableFocusListener title="Share it on X">
                    <XIcon color="secondary" size="small" />
                </LightTooltip>
                </TwitterShareButton>
                <FacebookShareButton
                    url={`https://studiofrugreenproject.com/en/posts/${post.slug}`}
                    quote={post.title}
                    hashtag={'#studiofrugreenproject'}
                >
                <LightTooltip disableFocusListener title="Share it on Facebook">
                    <FacebookIcon color="secondary" size="small" />
                </LightTooltip>
                </FacebookShareButton>
                <WhatsappShareButton
                    url={`https://studiofrugreenproject.com/en/posts/${post.slug}`}
                    title={post.title}
                    separator="->"
                >
                <LightTooltip disableFocusListener title="Share it on  WhatsApp">
                    <WhatsAppIcon color="secondary" size="small" />
                </LightTooltip>
                </WhatsappShareButton>
            </Stack>
            </Box>                    
            <Divider sx={{mt:5, mb:5, maxWidth:300, width:'95%' }} />
              <Typography variant="h6" color="#ff0055" sx={{mt:2}}>Follow Studiofru | Green Project via social media to get short information about flora and fauna</Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{mt:2, mb:4}}
            >
              <LightTooltip disableFocusListener title="Follow me on YouTube">
              <IconButton href="https://www.youtube.com/channel/UCX5J82L560fv5r5hslQwI-A" color="secondary" aria-label="Follow me on YouTube">
                <YouTubeIcon />
              </IconButton>
              </LightTooltip>
              <LightTooltip disableFocusListener title="Follow me on Instagram">
              <IconButton href="https://www.instagram.com/studiofrugreenproject/" color="secondary" aria-label="Follow me on Instagram">
                <InstagramIcon />
              </IconButton>
              </LightTooltip>
              <LightTooltip disableFocusListener title="Follow me on Facebook">
              <IconButton href="https://www.facebook.com/studiofruworks" color="secondary" aria-label="Follow me on Facebook">
                <FacebookIcon />
              </IconButton> 
              </LightTooltip>  
              <LightTooltip disableFocusListener title="Follow me on X">
              <IconButton href="https://twitter.com/studiofruworks" color="secondary" aria-label="Follow me on X">
                <XIcon />
              </IconButton> 
              </LightTooltip>                   
              </Stack>       
            </Box>
            </center>
            <SectionSeparator />
            <Box sx={{mt:5, mb:5}}>
            <center>
              <script async="async" data-cfasync="false" src="//pl22692592.profitablegatecpm.com/47f63e668a1eda1f44ac16b60d1e0850/invoke.js"></script>
              <div id="container-47f63e668a1eda1f44ac16b60d1e0850"></div>
            </center>           
            </Box>
            <SectionSeparator />
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          Recent Notes
        </h2>        
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}       
      </Container>           
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePostsEn(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlugEn()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}