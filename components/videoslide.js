import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

import ReactPlayer from 'react-player/youtube';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export default function VideoSlide () {
  return (
<Box sx={{mt:20}}>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
                <section className="d-share">
                    <ReactPlayer
                     width='80%'
                     height='550px'
                     url='https://youtube.com/playlist?list=PLQNlRTZc_hMXysrhTEc8v8SSAzhQQgxoh' />
                </section>
        </SwiperSlide>
        <SwiperSlide>
                <section className="d-share">
                    <ReactPlayer url='https://youtu.be/CdNd5sjimVw' />
                </section>
        </SwiperSlide>
      </Swiper>
    <Box>
    </Box>
</Box>
  );
}
