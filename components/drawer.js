import { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import DragHandleIcon from '@mui/icons-material/DragHandle';

import Bahasa from "components/bahasa";

function DrawerToggle () {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button color="inherit" onClick={() => setOpen(true)}><DragHandleIcon /></Button>
      <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
      <Toolbar>
                <IconButton
                  size="medium"
                  edge="start"
                  color="primary"
                  aria-label="menu"
                  href="/"
                  sx={{ mr: 1, ml:2 }}
                >
            <Avatar
              alt="Wiwit. | Human and Nature"
              src="https://www.datocms-assets.com/82122/1664605536-wiwit-logo-750px.png"
              sx={{width:32, height:32}}
            />
                </IconButton>
            <Typography variant="h6" component="div">
              | Human and Nature
            </Typography>
          </Toolbar>
          <Divider sx={{m:1}} />
        <List sx={{ mr: 2, ml:2 }}>
                  <ListItem disablePadding>
                      <ListItemText>
                        Ensiklopedia
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
                    <ListItemButton href="/pengetahuan">
                      <ListItemText>
                        Pengetahuan
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{mt:2}}>
                      <ListItemText>
                        Komunitas
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
                        Kontribusi
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <Bahasa />
              </List>
        <Button color="inherit" onClick={() => setOpen(false)}>X Tutup</Button>
      </Drawer>
    </div>
  );
}

export default DrawerToggle;