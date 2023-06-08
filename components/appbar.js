import * as React from 'react';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import DrawerToggle from "/components/drawer";
import Search from '/components/search';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import BadgeIcon from '@mui/icons-material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    color: 'primary',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };



  return (
<React.Fragment>
 <CssBaseline />
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            href="/"
            sx={{ mr: 2 }}
          >
            <Avatar
              alt="Wiwit. | Human and Nature"
              src="https://www.datocms-assets.com/82122/1664605536-wiwit-logo-750px.png"
              sx={{width:32, height:32}}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            | Ensiklopedia Alam
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
             <DrawerToggle />
          </Box>

          <Box sx={{ flexGrow: 1, mr:3, display: { xs: 'none', md: 'flex' } }}>
                         <Button
                             onClick={handleOpenUserMenu}
                             color= 'secondary'
                             sx={{ my: 2, display: 'block' }}
                         >
                             Ensiklopedia
                         </Button>
                     <Menu
                       sx={{ mt: '53px'}}
                       id="menu-appbar"
                       anchorEl={anchorElUser}
                       anchorOrigin={{
                         vertical: 'top',
                         horizontal: 'right',
                       }}
                       keepMounted
                       transformOrigin={{
                         vertical: 'top',
                         horizontal: 'right',
                       }}
                       open={Boolean(anchorElUser)}
                       onClose={handleCloseUserMenu}
                     >
                         <MenuItem sx={{ width: 150, maxWidth: '100%' }} onClick={handleCloseUserMenu}>
                           <ListItemText href="/flora"><Link href="/flora"  color="inherit" underline="none">Flora</Link></ListItemText>
                         </MenuItem>
                         <MenuItem onClick={handleCloseUserMenu}>
                            <ListItemText href="/flora"><Link href="/"  color="inherit" underline="none">Fauna</Link></ListItemText>
                         </MenuItem>
                         <MenuItem onClick={handleCloseUserMenu}>
                            <ListItemText href="/flora"><Link href="/inovasi"  color="inherit" underline="none">Inovasi</Link></ListItemText>
                         </MenuItem>
                     </Menu>
                         <Button
                             onClick={handleCloseNavMenu}
                             href="/forum"
                             color= 'secondary'
                             sx={{ my: 2, display: 'block' }}
                         >
                             Forum
                         </Button>
                         <Button
                             onClick={handleCloseNavMenu}
                             href="kontribusi"
                             color= 'secondary'
                             sx={{ my: 2, display: 'block' }}
                         >
                             Kontribusi
                         </Button>
                   </Box>

          <Search />
        </Toolbar>
      </Container>
    </AppBar>
</React.Fragment>
  );
}
export default ResponsiveAppBar;