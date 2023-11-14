import React from 'react';

import SearchBar from '/components/searchbar';
import DataCountFlora from '/components/data-flora';
import DataCountFauna from '/components/data-fauna';

import Typewriter from 'typewriter-effect';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function Hero () {

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
<section id="hero" data-stellar-background-ratio="0.5">
<Box sx={{m:'auto', mt:5, mb:5}}>
    <Box sx={{mb:5}}>
        <center>
            <Typography variant='h1' color="#BFCC03" sx={{fontWeight:"bold", height:'130px'}}>
                <Typewriter
                  options={{
                    strings: ['Jelajah Ensiklopedia'],
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
            <AccessTimeFilledIcon sx={{ fontSize: 40, color:"#BFCC03"}} />
            <Typography variant="h5" gutterBottom color="#BFCC03" sx={{textAlign: 'right'}}>10/10/2022</Typography>
            <Typography variant="h5" gutterBottom color="#BFCC03" sx={{textAlign: 'right'}}>{`${date}`}</Typography>
            <Typography variant="h5" gutterBottom color="#BFCC03" sx={{textAlign: 'right'}}>{`${time}`}</Typography>
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

