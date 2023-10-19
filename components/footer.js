import * as React from 'react';
import { useRouter } from "next/router";

import AppBottomBar from '/components/appbottombar';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';

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
        spacing={{ xs: 1, sm: 1, md: 1 }}
        sx={{ml:3, mr:3}}
        justifyContent="center"
        alignItems="left"
      >
        <Item sx={{maxWidth:750, width:'100%'}}>
          <Avatar
                alt="Studiofru | Green Project"
                src="/images/favicon.ico"
                sx={{ width: 56, height: 56, mb:2 }}
              />
          <Typography variant="h6" gutterBottom>
          Studiofru | Green Project
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt:1, fontWeight: 'bold' }}>
          Human and nature.
          </Typography>
        </Item>
        <Item sx={{maxWidth:400, width:'100%'}}>
            <Typography variant="body2" sx={{mt:2}} gutterBottom>
            Semua foto yang dimuat di situs ini merupakan hak cipta dari Studiofru (Farhanaz Rupaidha) selaku fotografer asli. Foto - foto diambil langsung di tempat tanaman, hewan dan lokasi - lokasi tertentu tersebut berada.
            </Typography>
        </Item>
        <Item sx={{maxWidth:150, width:'100%'}}>
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
        <Item sx={{maxWidth:150, width:'100%'}}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Profil
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/tentang" underline="hover" color='inherit'>
                    Tentang
                </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/kontak" underline="hover" color='inherit'>
                    Kontak
                </Link>
            </Typography>
        </Item>
        <Item sx={{maxWidth:150, width:'100%'}}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Legal
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/termsofuse" underline="hover" color='inherit'>
                    Terms of Use
                </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/disclaimer" underline="hover" color='inherit'>
                    Disclaimer
                </Link>
            </Typography>
        </Item>
      </Stack>
    </Paper>
    <AppBottomBar />
</section>
  );
}