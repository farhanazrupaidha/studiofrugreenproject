
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  width:'97%',
  maxWidth:500
}));

export default function AppBottomBar () {
  return (
  <>
  <Box justifyContent="center" alignItems="center" sx={{ml:2, mr:2}}>
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 55 }}
        justifyContent="center"
        alignItems="center"
      >
        <Item>
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
          <IconButton href="https://id.pinterest.com/studiofru/" color="secondary" aria-label="Follow me on Pinterest">
            <PinterestIcon />
          </IconButton>
        </Item>

        <Item>
            <Typography variant="caption" gutterBottom>
                © 2022 - 2023 <Link href="https://studiofruworks.com">Studiofru</Link> | Green Project. All rights reserved.
            </Typography>
        </Item>
      </Stack>
  </Box>

</>
  );
}