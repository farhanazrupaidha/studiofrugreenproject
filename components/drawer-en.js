import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const LocaleSwitch = dynamic(() => import('components/locale-switch'), {
  ssr: false,
});

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import DragHandleIcon from '@mui/icons-material/DragHandle';

function DrawerToggle () {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button color="inherit" onClick={() => setOpen(true)}  id="labeldiv"><DragHandleIcon /></Button>
      <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
        <Toolbar sx={{m:'auto'}}>
                <IconButton
                  size="medium"
                  edge="start"
                  color="primary"
                  aria-label="menu"
                  href="/en"
                  sx={{ mr: 1 }}
                >
            <Avatar
              alt="Studiofru | Green Project"
              src="/images/favicon.ico"
              sx={{width:32, height:32}}
            />
                </IconButton>
            <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                Studiofru  | Green Project
            </Typography>
        </Toolbar>
        <Divider sx={{m:1}} />
        <List sx={{ mr: 2, ml:2 }}>               
                  <ListItem disablePadding sx={{mt:2}}>
                      <ListItemText>
                        Community
                      </ListItemText>
                  </ListItem>
                  <Divider sx={{mr:5}} />
                  <ListItem disablePadding>
                    <ListItemButton href="https://sociabuzz.com/studiofru/tribe">
                      <ListItemText>
                        Donation
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/kontribusi">
                      <ListItemText>
                        Contribution
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
              </List>
        <LocaleSwitch />       
        <Button color="inherit" onClick={() => setOpen(false)}>X Close</Button>
      </Drawer>
    </div>
  );
}

export default DrawerToggle;