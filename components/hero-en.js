import React from 'react';
import dynamic from 'next/dynamic'

const SearchBar = dynamic(() => import('components/searchbar-en'), {
  ssr: false,
});
const DataCountFlora = dynamic(() => import('components/data-flora'), {
  ssr: false,
});
const DataCountFauna = dynamic(() => import('components/data-fauna'), {
  ssr: false,
});

import Typewriter from 'typewriter-effect';
import { format } from 'date-fns'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function Hero () {

  return (
<>
<Box sx={{m:'auto', mt:5, mb:5}}>
    <Box sx={{mb:5}}>
        <center>
            <Typography variant='h1' color="#22cc88" sx={{fontWeight:"bold", height:'130px', mb:10, m:3}}>
              Studiofru | Green Project
            </Typography>
            <Typography variant='h2' color="white" sx={{fontWeight:"bold", height:'110px'}}>
                <Typewriter
                  options={{
                    strings: ['Encyclopedia of Biodiversity'],
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
            <AccessTimeFilledIcon sx={{ fontSize: 40, color:"#22cc88"}} />
            <Typography variant="h6" gutterBottom color="#22cc88" sx={{textAlign: 'right'}}>10/10/2022</Typography>
            <Typography variant="h6" gutterBottom color="#22cc88" sx={{textAlign: 'right'}}>{format ( new Date(), 'do MMMM Y')}</Typography>
    </Box>
        <DataCountFlora />
        <DataCountFauna />
        <Box sx={{maxWidth:650, width:'100%'}}>
                <SearchBar />
        </Box>
    </Stack>
  </Box>
</>
  );
}

