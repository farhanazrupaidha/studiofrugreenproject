import '../styles/index.css';

import * as React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head';
import * as gtag from '../lib/gtag'

import { ThemeProvider, createTheme, responsiveFontSizes, } from '@mui/material/styles';
import {  green, cyan, indigo, blueGrey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

export const primary = "#00bfbf";
export const black = "#111111";
export const white = "#fafafa";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function reportWebVitals(metric) {
  metric.label === "web-vital" && console.log(metric);
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
      <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default MyApp