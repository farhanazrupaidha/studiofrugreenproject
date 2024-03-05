import React from 'react';
import { CldImage } from 'next-cloudinary';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import AdsClickIcon from '@mui/icons-material/AdsClick';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function PostImage({ cloudinaryImageLibrary, title }) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
<Box>  
    <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
        {cloudinaryImageLibrary.map((pic) => (
          <CldImage
            width="100"
            height="100"
            crop='fill'
            src={pic.public_id}
            alt={title}
            blurDataURL={pic.public_id}
            placeholder='blur'
            loading="lazy"
            onClick={handleClickOpen}
          />
        ))}  
    </Stack>

    <Divider sx={{mt:3, mb:1, maxWidth:300, width:'95%' }} />
    <AdsClickIcon color="primary" />  

    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Gallery
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>

    <Splide aria-label="Gallery">     
        {cloudinaryImageLibrary.map((pic) => (
          <SplideSlide>
            <Box sx={{ m:'auto', textAlign: 'center' }}>
              <center>
                <CldImage
                  width={pic.width/1.5}
                  height={pic.height/1.5}
                  src={pic.public_id}
                  alt={title}
                  blurDataURL={pic.public_id}
                  placeholder='blur'
                  loading="lazy"
                />
              </center>
            </Box>
          </SplideSlide>    
        ))}                                              
    </Splide>   
    
      </Dialog>

</Box>  
  )
}