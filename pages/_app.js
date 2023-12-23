import '../styles/index.css';

import React, { useEffect } from 'react'
import Head from 'next/head'
import posthog from 'posthog-js'

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import {  green, cyan, indigo, blueGrey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

export const primary = "#00bfbf";
export const black = "#111111";
export const white = "#fafafa";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function reportWebVitals(metric) {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
  window.gtag('event', metric.name, {
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
    event_label: metric.id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }) {
 
  useEffect(() => {
    posthog.init('phc_Q1PtwUBXBo54aOD2od03hCKu7JTP4rzHwZVNW5m3G8q', { api_host: 'https://app.posthog.com' })
    posthog.capture('my event', { property: 'value' })
  }, [])


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

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
      </Head>
      <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default MyApp