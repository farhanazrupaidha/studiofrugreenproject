import React, { Component, useRouter } from 'react';

import DataCountFlora from '/components/dataflora-setupatok';
import DataCountFauna from '/components/datafauna-setupatok';


import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

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
    <Paper sx={{maxWidth:820, width:'100%'}}>
    <iframe width='100%' height='500px' src="https://api.mapbox.com/styles/v1/studiofru/cliof1jfa00og01r14zks3erq.html?title=false&access_token=pk.eyJ1Ijoic3R1ZGlvZnJ1IiwiYSI6ImNrZXBuYXlwcDN2cGwyc2x0Y2libnY2cmwifQ.LsxGcgeSlLKEYbnNldaEfw&zoomwheel=false#14.63/-6.78433/108.56724" title="Outdoors"></iframe> 
    </Paper>  
     
    <Box sx={{ borderRadius: 5, p:2,  }}>
            <AccessTimeFilledIcon sx={{ fontSize: 40, color:"#20C1FE"}} />
            <Typography variant="h5" gutterBottom color="primary" sx={{textAlign: 'right'}}>10/10/2022</Typography>
            <Typography variant="h5" gutterBottom color="primary" sx={{textAlign: 'right'}}>{`${date}`}</Typography>
            <Typography variant="h5" gutterBottom color="primary" sx={{textAlign: 'right'}}>{`${time}`}</Typography>
    </Box>
        <DataCountFlora />
        <DataCountFauna />
    </Stack>
  </Box>
  );
}

