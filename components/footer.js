import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const useStyles = makeStyles((theme) => ({
  box: {
  backgroundColor: theme.palette.secondary.primary,
  }
}));

export default function Footer () {
const classes = useStyles();
  return (
<section id="kontak" data-stellar-background-ratio="0.5">
    <Paper sx={{ flexGrow: 1 }}>
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        justifyContent="center"
        alignItems="left"
      >
        <Item sx={{maxWidth:650, width:'95%'}}>
          <Avatar
                alt="Wiwit. | Human and Nature"
                src="https://www.datocms-assets.com/82122/1664605536-wiwit-logo-750px.png"
                sx={{ width: 56, height: 56, mb:2 }}
              />
          <Typography variant="h6" gutterBottom>
          Wiwit. | Human and Nature
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt:1, fontWeight: 'bold' }}>
          Tumbuh bersama.
          </Typography>
        </Item>
        <Item sx={{maxWidth:230, width:'95%'}}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Profil
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/" underline="hover" color='inherit'>
                    Tentang
                </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/kontak" underline="hover" color='inherit'>
                    Kontak
                </Link>
            </Typography>
        </Item>
        <Item sx={{maxWidth:230, width:'95%'}}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Komunitas
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/forum" underline="hover" color='inherit'>
                    Forum
                </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="/kontribusi" underline="hover" color='inherit'>
                 Kontribusi
              </Link>
            </Typography>
        </Item>
      </Stack>
    </Paper>

    <Box sx={{ flexGrow: 1 }}>
      <Box position="static">
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1 }}>
        <IconButton href="https://twitter.com/studiofruworks" color="secondary" aria-label="Follow me on Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.youtube.com/channel/UCX5J82L560fv5r5hslQwI-A" color="secondary" aria-label="Follow me on YouTube">
            <YouTubeIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/studiofru/" color="secondary" aria-label="Follow me on Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://www.facebook.com/studiofruworks" color="secondary" aria-label="Follow me on Facebook">
            <FacebookIcon />
          </IconButton>
          </Box>
          <Box>
                  <Typography variant="caption" gutterBottom>
                    © 2022 - 2023 Wiwit. All rights reserved. Web developed by <Link href='https://www.studiofruworks.com'>Studiofru</Link>
                  </Typography>
          </Box>
        </Toolbar>
      </Box>
    </Box>
</section>
  );
}