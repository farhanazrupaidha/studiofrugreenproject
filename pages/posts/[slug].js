import { useRouter } from 'next/router'
import * as React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'

const ErrorPage = dynamic(() => import('components/errorpage'), {
  ssr: false,
});
const Container = dynamic(() => import('components/container'), {
  ssr: false,
});
const PostBody = dynamic(() => import('components/post-body'), {
  ssr: false,
});
const MoreStories = dynamic(() => import('components/more-stories'), {
  ssr: false,
});
const RecentFlora = dynamic(() => import('components/recent-flora'), {
  ssr: false,
});
const RecentFauna = dynamic(() => import('components/recent-fauna'), {
  ssr: false,
});
const RecentSains = dynamic(() => import('components/recent-sains'), {
  ssr: false,
});;
const RecentWisata = dynamic(() => import('components/recent-wisata'), {
  ssr: false,
});
const RecentPengetahuan = dynamic(() => import('components/recent-pengetahuan'), {
  ssr: false,
});
const Header = dynamic(() => import('components/header'), {
  ssr: false,
});
const PostHeader = dynamic(() => import('components/post-header'), {
  ssr: false,
});
const PostTitle = dynamic(() => import('components/post-title'), {
  ssr: false,
});
const SectionSeparator = dynamic(() => import('components/section-separator'), {
  ssr: false,
});
const Layout = dynamic(() => import('components/layout'));
const Location = dynamic(() => import('components/location'), {
  ssr: false,
});
const ShareButton = dynamic(() => import('components/socialsharebutton'), {
  ssr: false,
});

import { motion, useScroll } from "framer-motion"
import ReactPlayer from 'react-player/youtube';
import { DiscussionEmbed } from 'disqus-react';
import { CommentCount } from 'disqus-react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                     <title>{post.seo.title}</title>
                     <meta name="title" content={post.seo.title}></meta>
                     <meta name="description" content={post.seo.description} />
                     <meta name="keywords" content={post.seo.keywords} />
                     <meta name="robots" content="index, follow" />
                     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                     <meta name="language" content="id-ID" />
                     <link rel="alternate" href={`https://studiofrugreenproject.com/posts/${post.slug}`} hreflang="id-ID" />
                     <link rel="alternate" href={`https://studiofrugreenproject.com/en/posts/${post.slug}`} hreflang="en-US" />
                     <link rel="alternate" href={`https://studiofrugreenproject.com/en/posts/${post.slug}`} hreflang="x-default" />
                     <meta name="revisit-after" content="3 days" />
                     <meta name="author" content="Studiofru" />                     
                     <meta property="image" content={post.seo.image.url} />
                     <meta property="og:title" content={post.seo.title} />
                     <meta property="og:description" content={post.seo.description} />
                     <meta property="og:site_name" content="Studiofru | Green Project" />
                     <meta property="og:image" content={post.seo.image.url} />
                     <meta name="og:url" content={`https://studiofrugreenproject.com/posts/${post.slug}`} />
                     <meta name="og:type" content="article" />
                     <meta property="og:locale" content="id-ID" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:creator" content="@studiofruworks" />
                     <meta name="twitter:title" content={post.seo.title} />
                     <meta property="twitter:description" content={post.seo.description} />
                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:image" content={post.seo.image.url} />
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
              <Accordion sx={{mt:5}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content" 
                  id="panel1a-header"
                  >        
                  <Typography variant="h6">Referensi</Typography>   
                </AccordionSummary>
                <AccordionDetails>   
                    <Box sx={{mt:4, whiteSpace: 'nowrap', overflowX: 'auto'}}>
                        <Typography variant='body2'>
                            <div
                                dangerouslySetInnerHTML={{ __html: post.reference?.html }}
                            />
                        </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>  
                   
            </article>
            <center>
            <Box sx={{mt:7}}>
            <Divider sx={{mt:5, mb:3, maxWidth:300, width:'95%' }} />
            <Typography variant='h6' color="#ff0055">Bagikan catatan ini</Typography>
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
                    url={`https://studiofrugreenproject.com/posts/${post.slug}`}
                    title={post.seo.title}
                >
                <LightTooltip disableFocusListener title="Share it on Twitter">
                    <IconButton><TwitterIcon color="primary" size="small" /></IconButton>
                </LightTooltip>
                </TwitterShareButton>
                <FacebookShareButton
                    url={`https://studiofrugreenproject.com/posts/${post.slug}`}
                    quote={post.seo.title}
                    hashtag={'#studiofrugreenproject'}
                >
                <LightTooltip disableFocusListener title="Share it on Facebook">
                    <IconButton><FacebookIcon color="primary" size="small" /></IconButton>
                </LightTooltip>
                </FacebookShareButton>
                <WhatsappShareButton
                    url={`https://studiofrugreenproject.com/posts/${post.slug}`}
                    title={post.seo.title}
                    separator="->"
                >
                <LightTooltip disableFocusListener title="Share it on  WhatsApp">
                    <IconButton><WhatsAppIcon color="primary" size="small" /></IconButton>
                </LightTooltip>
                </WhatsappShareButton>
            </Stack>
            </Box>
            <Box sx={{mt:5, maxWidth: 700, width:'100%'}}>
              <Divider sx={{mb:5, maxWidth:300, width:'95%' }} />
              <CommentCount
                shortname='studiofru-green-project'
                config={
                {
                  url: post.id,
                  identifier: post.id,
                  title: post.title,
                  }
                }
              >
              {/* Placeholder Text */}
                Komentar
              </CommentCount>        
              <DiscussionEmbed
                shortname='studiofru-green-project'
                config={
                {
                  url: post.url,
                  identifier: post.id,
                  title: post.title,
                  }
                }
              />
        </Box>          
            <Divider sx={{mt:5, mb:5, maxWidth:300, width:'95%' }} />
              <Typography variant="h6" color="#ff0055" sx={{mt:2}}>Ikuti Studiofru | Green Project melalui media sosial untuk mendapatkan informasi singkat mengenai flora dan fauna</Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{mt:2, mb:4}}
            >
              <LightTooltip disableFocusListener title="Follow me on YouTube">
              <IconButton href="https://www.youtube.com/channel/UCX5J82L560fv5r5hslQwI-A" color="primary" aria-label="Follow me on YouTube">
                <YouTubeIcon />
              </IconButton>
              </LightTooltip>
              <LightTooltip disableFocusListener title="Follow me on Instagram">
              <IconButton href="https://www.instagram.com/studiofrugreenproject/" color="primary" aria-label="Follow me on Instagram">
                <InstagramIcon />
              </IconButton>
              </LightTooltip>
              <LightTooltip disableFocusListener title="Follow me on Facebook">
              <IconButton href="https://www.facebook.com/studiofruworks" color="primary" aria-label="Follow me on Facebook">
                <FacebookIcon />
              </IconButton> 
              </LightTooltip>     
              </Stack>       
            </Box>
            </center>
        <SectionSeparator />
        <Box sx={{mb:5}}>
        <Box sx={{ mb:5}}> 
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          Dokumentasi Video
        </h2>
        </Box>  
        <section className="c-share">         
          <ReactPlayer controls={true} loop={true} url='https://youtube.com/playlist?list=PLQNlRTZc_hMXysrhTEc8v8SSAzhQQgxoh&si=UWK4qsLyblzoOOUT' />
        </section> 
        </Box> 
        <Divider sx={{mb:10, mt:10}} />
        <Location />
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          Catatan Terbaru
        </h2>
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