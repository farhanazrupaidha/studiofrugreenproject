import '../styles/index.css';

import * as React from 'react'
import Head from 'next/head';

import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, useTheme, createTheme, responsiveFontSizes, } from '@mui/material/styles';
import { deepOrange, green, cyan, indigo, blueGrey, } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ReactPlayer from 'react-player/youtube';
const { motion,useScroll } = require("framer-motion");

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { usePostHog } from 'next-use-posthog';

export const primary = "#00bfbf";
export const black = "#111111";
export const white = "#fafafa";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp({ Component, pageProps }) {
usePostHog('phc_hIxyJYhMq4PNf6nFh6e5l8JX6tmKnDNgiaWLY6s201j', {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing()
    },
  })

 const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  let ModeTheme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
             ...(mode === 'light'
                  ? {
                      // palette values for light mode
                      primary: {
                              main: indigo [900],
                              primary: indigo [200]
                            },
                      secondary: {
                              main: green [300],
                              primary: indigo [400],
                            },
                      background: {
                              default: white,
                              paper: indigo [500],
                              chip: green [400],
                              Box: indigo [200]
                            },
                      color: black
                    }
                  : {
                      // palette values for dark mode
                     primary: {
                            main: green [100],
                            primary: blueGrey [200],
                           },
                     secondary: {
                            main: cyan [200],
                            primary: '#011C3E',
                           },
                     background: {
                            default: '#01142C',
                            paper: '#032146',
                            chip: cyan [50],
                            Box: blueGrey [700],
                           },
                     color: '#4C6AB0'
                    }),
          },
        }),
      [mode],
    );

const theme = responsiveFontSizes(ModeTheme);

const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
  setExpanded(newExpanded ? panel : false);
};

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Head>
               <link rel="icon" href="/images/favicon.ico" />
        </Head>
      <div style={{ position: 'fixed', bottom: '200px', right: '20px', backgroundColor: '#073EF8',  borderRadius: '20px'}}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content" 
          id="panel1d-header"
        >
          <Typography>Mode</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <section className="c-share">
          <ReactPlayer controls={true} loop={true} playing={true} url='https://youtube.com/playlist?list=PLQNlRTZc_hMXysrhTEc8v8SSAzhQQgxoh&si=UWK4qsLyblzoOOUT' />
        </section>
        <motion.div
              className="box"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
        <IconButton backgroundColor="green" onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />}
            </IconButton>
        </motion.div>
        </AccordionDetails>
      </Accordion>
        </div>

        <Component {...pageProps} />
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default MyApp