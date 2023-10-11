import { useRouter } from 'next/router'
import { gql } from 'graphql-request';
import hygraphClient from 'lib/hygraphClient';
import ErrorPage from 'components/errorpage'

import i18n from "lib/i18n";
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

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'next-share'

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
  const { locale } = useRouter();
  const { locales, asPath } = useRouter().locale;
  const formattedLocale = locale.split("-")[0];

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
                     <meta name="description" content={post.seo.description} />
                     <meta name="keywords" content={post.seo.keywords} />
                     <meta property="image" content={post.seo.image.url} />
                     <meta property="og:title" content={post.seo.title} />
                     <meta property="og:description" content={post.seo.description} />
                     <meta property="og:site_name" content="Studiofru | Green Project" />
                     <meta property="og:image" content={post.seo.image.url} />
                      <meta name="og:url" content={`https://studiofrugreenproject.com/posts/${post.slug}`}/>
                     <meta name="og:type" content="website" />
                     <meta name="twitter:site" content="@studiofruworks" />
                     <meta name="twitter:title" content={post.seo.title} />
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
                    <Typography variant="h5" sx={{mt:5}}>{i18n.intro.referensi[formattedLocale]}</Typography>
                    <Box sx={{mt:4, whiteSpace: 'nowrap', overflowX: 'auto'}}>
                        <Typography variant='body2'>
                            <div
                                dangerouslySetInnerHTML={{ __html: post.reference?.html }}
                            />
                        </Typography>
                    </Box>
            </article>
            <Box sx={{mt:7}}>
            <Divider sx={{mt:5, mb:3, maxWidth:300, width:'95%' }} />
            <Typography variant='h5' color="#ff0055">{i18n.intro.bagikan[formattedLocale]}</Typography>
            <Box sx={{mb:5, mt:2}}>
            <Stack
                direction="row"
                spacing={1}
                justifyContent="left"
                alignItems="left"
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
                    hashtag={'#studiofruworks', '#studiofruarticle'}
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
            <Divider sx={{mt:5, mb:3, maxWidth:300, width:'95%' }} />
              <Typography variant="h6" color="#ff0055" sx={{mt:2}}>Ikuti Studiofru | Green Project melalui media sosial untuk mendapatkan informasi singkat mengenai flora dan fauna</Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="left"
                alignItems="left"
                sx={{mt:2, mb:4}}
            >
              <LightTooltip disableFocusListener title="Follow me on YouTube">
              <IconButton href="https://www.youtube.com/channel/UCX5J82L560fv5r5hslQwI-A" color="primary" aria-label="Follow me on YouTube">
                <YouTubeIcon />
              </IconButton>
              </LightTooltip>
              <LightTooltip disableFocusListener title="Follow me on Instagram">
              <IconButton href="https://www.instagram.com/studiofru/" color="primary" aria-label="Follow me on Instagram">
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
        <SectionSeparator />
        <Location />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  let paths = [];

  const { posts } = await hygraphClient.request(gql`
    {
      posts {
        slug
      }
    }
  `);

  for (const locale of locales) {
    paths = [
      ...paths,
      ...posts.map((post) => ({ params: { slug: post.slug }, locale })),
    ];
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const { post, morePosts } = await hygraphClient.request(
    gql`
      query PostPageQuery($slug: String!, $locale: Locale!) {
        post (where: {slug: $slug}, locales: [$locale]) {
        locale
        title
        slug
        content {
          html
        }
        reference {
          html
        }
        date
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
        tags
        seo {
              title
              description
              keywords
              image {
                url
              }
            }
      }

      morePosts: posts(locales: [$locale], orderBy: date_DESC, first: 8, where: {slug_not_in: [$slug]}) {
        locale
        title
        slug
        excerpt
        date
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
        tags
        seo {
              title
              description
              keywords
              image {
                url
              }
            }
      }
      }
    `,
    { slug: params.slug, locale }
  );

  return {
    props: {
      post,
      morePosts: morePosts || [],
    },
  };
}