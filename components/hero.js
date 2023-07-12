import React, { Component, useRouter } from 'react';
import { useLazyQuery, useQuery, gql } from '@apollo/client';
import withApollo from "../config";
import CountUp from 'react-countup';
import SearchBar from '/components/searchbar';

import Typewriter from 'typewriter-effect';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import YardIcon from '@mui/icons-material/Yard';

const FLORA = gql`
  query {
  postsConnection(where: {_search: "Flora"}) {
    aggregate {
      count
    }
  }
  }
`;

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const DataCountFlora = ({postsConnection}) => {
const { data, loading, error } = useQuery(FLORA);

  if (loading) return null;
  if (error) return `Error! ${error}`;


  return (
<section id="hero" data-stellar-background-ratio="0.5">
<Box sx={{m:'auto', mt:5}}>
    <Box sx={{mb:5}}>
        <center>
            <Typography variant='h1' color="#BFCC03" sx={{fontWeight:"bold"}}>
                <Typewriter
                  options={{
                    strings: ['Jelajah Ensiklopedia', 'Flora'],
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
            <Paper sx={{ borderRadius: 5, p:2, maxWidth:200, width:'100%' }}>
                  <Typography sx={{ fontSize: 14, mb:1, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                    Data: FLORA
                  </Typography>
                  <YardIcon sx={{ fontSize: 40}} />
                  <Typography gutterBottom variant="h3" color='#BFCC03' textAlign= 'right'><CountUp end={data.postsConnection.aggregate.count} /></Typography>
            </Paper>
        <Box sx={{maxWidth:650, width:'100%'}}>
                <SearchBar />
        </Box>
    </Stack>
  </Box>
</section>
  );
}

export default withApollo(DataCountFlora);