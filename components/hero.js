import React from 'react';
import dynamic from 'next/dynamic'

const SearchBar = dynamic(() => import('components/searchbar'), {
  ssr: false,
});
const DataCountFlora = dynamic(() => import('components/data-flora'), {
  ssr: false,
});
const DataCountFauna = dynamic(() => import('components/data-fauna'), {
  ssr: false,
});

import Typewriter from 'typewriter-effect';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function Hero () {

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
<section id="hero" data-stellar-background-ratio="0.5">
<Box sx={{m:'auto', mt:5, mb:5}}>
    <Box sx={{mb:5}}>
        <center>
            <Typography variant='h1' color="#22cc88" sx={{fontWeight:"bold", height:'130px', mb:15, m:3}}>
              Studiofru | Green Project
            </Typography>
            <Typography variant='h2' color="primary" sx={{fontWeight:"bold", height:'110px', mt:10}}>
                <Typewriter
                  options={{
                    strings: ['Ensiklopedia Keanekaragaman Hayati'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </Typography>
        </center>
    </Box>

    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="center"
      alignItems="center"
      sx={{mb:2}}
    >
    <Box sx={{ borderRadius: 5, p:2, maxWidth:200, width:'100%' }}>
            <AccessTimeFilledIcon sx={{ fontSize: 30, color:"#22cc88"}} />
            <Typography variant="h6" color="#22cc88" sx={{textAlign: 'right'}}>10/10/2022</Typography>
            <Typography variant="h6" color="#22cc88" sx={{textAlign: 'right'}} suppressHydrationWarning>{`${date}`}</Typography>
            <Typography variant="h6" color="#22cc88" sx={{textAlign: 'right'}} suppressHydrationWarning>{`${time}`}</Typography>
    </Box>
        <DataCountFlora />
        <DataCountFauna />
        <Box sx={{maxWidth:650, width:'100%'}}>
          <SearchBar />
        </Box>
    </Stack>
  </Box>
</section>
  );
}

