import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import Box from '@mui/material/Box';    
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material';
import Button from '@mui/material/Button';

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.default',
    overflowY:'auto',
    height:'100%',
    maxHeight: 700,
    display:'block',
    width: '100%',
    maxWidth:1200,
    p:5,
    boxShadow: 100,
    borderRadius: 5
};

export default function CommentBox ({ post }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


return (
<Box>
    <Button aria-label="delete" onClick={handleOpen} color="secondary" variant="contained" sx={{borderRadius:5}}>
        <AccessibilityNewIcon /> <Typography variant='subtitle' sx={{ml:1}}>Formulir Donasi</Typography>
    </Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{overflow:'scroll'}}
    >
    <Box sx={style}>
    <Box sx={{mt:5, maxWidth: 700, width:'100%'}}>
              <Divider sx={{mb:5, maxWidth:300, width:'95%' }} />      
              <DiscussionEmbed
                shortname='studiofru-green-project'
                config={
                {
                  url: post.url,
                  identifier: post.id,
                  title: post.title,
                  }
                }
              />
            </Box> 
    <Button
      variant="contained"
      color="secondary"
      sx={{borderRadius: 5, mt: 3}}
      onClick={handleClose}
    >
      Tutup
    </Button>
    </Box>
    </Modal>

</Box>
)
}

