import { useState, useEffect } from 'react'

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
      <Button color="inherit" onClick={() => setOpen(true)}><DragHandleIcon /></Button>
      <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
        <Toolbar sx={{m:'auto'}}>
                <IconButton
                  size="medium"
                  edge="start"
                  color="primary"
                  aria-label="menu"
                  href="/"
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
                  <ListItem disablePadding>
                      <ListItemText>
                        Species
                      </ListItemText>
                  </ListItem>
                  <Divider sx={{mr:5}} />
                  <ListItem disablePadding>
                    <ListItemButton href="/flora">
                      <ListItemText>
                        Flora
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/fauna">
                      <ListItemText>
                        Fauna
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/endemik">
                      <ListItemText>
                        Endemic
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{mt:2}}>
                      <ListItemText>
                        Others
                      </ListItemText>
                  </ListItem>
                  <Divider sx={{mr:5}} />
                  <ListItem disablePadding>
                    <ListItemButton href="/sains">
                      <ListItemText>
                        Science
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/pengetahuan">
                      <ListItemText>
                        Knowledge
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/wisata">
                      <ListItemText>
                        Travel
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/videos">
                      <ListItemText>
                        Video
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>                  
                  <ListItem disablePadding sx={{mt:2}}>
                      <ListItemText>
                        Community
                      </ListItemText>
                  </ListItem>
                  <Divider sx={{mr:5}} />
                  <ListItem disablePadding>
                    <ListItemButton href="/forum">
                      <ListItemText>
                        Forum
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
        <Button color="inherit" href="/en">English</Button>
        <Button color="inherit" onClick={() => setOpen(false)}>X Close</Button>
      </Drawer>
    </div>
  );
}

export default DrawerToggle;