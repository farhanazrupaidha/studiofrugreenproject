import React, { Component, useRouter } from 'react';

import DataCountFlora from '/components/dataflora-setupatok';
import DataCountFauna from '/components/datafauna-setupatok';


import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';



export default function Hero () {

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
<Box sx={{m:'auto', mt:5, mb:5}}>
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
    </Stack>
  </Box>
  );
}

