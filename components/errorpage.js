import AdsenseListing from "components/adsense-listing";
import Container from 'components/container'
import SearchBar from 'components/searchbar';
import Layout from "components/layout";

import Typewriter from 'typewriter-effect';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Custom404() {
  return (
<Layout>
        <center>
            <Box sx={{mt:20, height:'250px'}}>
            <Typography variant='h3'>
                <Typewriter
                  options={{
                    strings: ['tidak menemukan yang dicari?', 'silahkan ketik dalam kolom pencarian di bawah ini'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </Typography>
            <SearchBar />
            <Button href='/' color='secondary' variant='contained' sx={{mb:5, mt:10}}>Back to Homepage</Button>
            <AdsenseListing />
            </Box>
        </center>
</Layout>
  )
}