import * as React from 'react';
import AppBottomBar from '/components/appbottombar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

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
 <Paper elevation={2}>
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
          Wiwit. | Ensiklopedia Alam
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
    <AppBottomBar />
</section>
)
}