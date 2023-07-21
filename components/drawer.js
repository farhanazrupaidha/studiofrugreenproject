import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

import i18n from "../lib/i18n";
import LocaleSwitcher from "./localeswitcher";
import PostLocaleSwitch from "./post-locale-switch";

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


function DrawerToggle () {
  const [open, setOpen] = useState(false);
  const { locale } = useRouter();
  const formattedLocale = locale.split("-")[0];

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
                        {i18n.nav.ensiklopedia[formattedLocale]}
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
                    <ListItemButton href="/sains">
                      <ListItemText>
                        {i18n.nav.sains[formattedLocale]}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/pengetahuan">
                      <ListItemText>
                        {i18n.nav.pengetahuan[formattedLocale]}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/wisata">
                      <ListItemText>
                        {i18n.nav.wisata[formattedLocale]}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{mt:2}}>
                      <ListItemText>
                        {i18n.nav.komunitas[formattedLocale]}
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
                        {i18n.nav.kontribusi[formattedLocale]}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
              </List>
        <PostLocaleSwitch />
        <Button color="inherit" onClick={() => setOpen(false)}>X {i18n.nav.tutup[formattedLocale]}</Button>
      </Drawer>
    </div>
  );
}

export default DrawerToggle;