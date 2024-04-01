import '../styles/index.css';

import React, { useEffect } from 'react'
import Head from 'next/head'
import posthog from 'posthog-js'

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import {  green, cyan, indigo, blueGrey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function reportWebVitals(metric) {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
  window.gtag('event', metric.name, {
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
    event_label: metric.id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

export const primary = "#00bfbf";
export const black = "#111111";
export const white = "#fafafa";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


function MyApp({ Component, pageProps }) {
 
  useEffect(() => {
    posthog.init('phc_Q1PtwUBXBo54aOD2od03hCKu7JTP4rzHwZVNW5m3G8q', { api_host: 'https://app.posthog.com' })
    posthog.capture('my event', { property: 'value' })
  }, [])

 const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
           ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: {
                            main: blueGrey [50],
                            primary: blueGrey [200]
                          },
                    secondary: {
                            main: black,
                            primary: indigo [400],
                          },
                    background: {
                            default: white,
                            paper: blueGrey [50],
                            chip: cyan [50],
                            Box: indigo [200],
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

  const MyTheme = responsiveFontSizes (theme)

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={MyTheme}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
          </Head>
          <CssBaseline /> 
            <div style={{ position: 'fixed', bottom: '50px', right: '38px', backgroundColor: '#032146',  borderRadius: '20px', transform: 'rotate(45deg)'}}>
              <IconButton onClick={colorMode.toggleColorMode} color="primary">
                {theme.palette.mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}                
              </IconButton>
            </div>          
            <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default MyApp