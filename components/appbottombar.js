
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
  width:400,
}));

export default function BottomAppBar () {
  return (
  <>
  <Box>
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ md: 45 }}
        justifyContent="center"
        alignItems="center"
      >
        <Item>
        <IconButton href="https://twitter.com/AkuStudiofru" color="secondary" aria-label="Follow me on Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.youtube.com/channel/UCX5J82L560fv5r5hslQwI-A" color="secondary" aria-label="Follow me on YouTube">
            <YouTubeIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/studiofru/" color="secondary" aria-label="Follow me on Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://www.facebook.com/AkuStudiofru/" color="secondary" aria-label="Follow me on Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://id.pinterest.com/studiofru/" color="secondary" aria-label="Follow me on Pinterest">
            <PinterestIcon />
          </IconButton>
        </Item>

        <Item>
        <Box sx={{ flexGrow: 1 }} />
                  <Typography variant="caption" gutterBottom>
                    © 2022 - 2023 Wiwit. | Human and Nature. All rights reserved.
                  </Typography>
        </Item>
      </Stack>
  </Box>

</>
  );
}