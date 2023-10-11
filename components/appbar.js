import * as React from 'react';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

import Typewriter from 'typewriter-effect';

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import DrawerToggle from "/components/drawer";
import Search from "/components/search";
import i18n from "../lib/i18n";
import LocaleSwitcher from "./localeswitcher";
import PostLocaleSwitch from "./post-locale-switch";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
  text: {
  fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5rem',
    },
  },
  box: {
    backgroundColor: 'secondary',
    color:'black'
    }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ResponsiveAppBar(props) {
  const classes = useStyles();

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

    const { locale } = useRouter();
    const formattedLocale = locale.split("-")[0];

  return (

<React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Box sx={{ mr:2, display: { xs: 'flex', md: 'none' } }}>
                <DrawerToggle />
            </Box>

            <IconButton
                size="medium"
                edge="start"
                color="inherit"
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
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontWeight: 'bold'
                }}
            >
            <Link href="/" color="inherit" underline="hover">
            <Typewriter
              options={{
                strings: ['Studiofru', '| Green Project'],
                autoStart: true,
                loop: true,
              }}
            />
            </Link>
            </Typography>

            <Box sx={{ flexGrow: 0, mr:3, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    onClick={handleOpenUserMenu}
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    {i18n.nav.spesies[formattedLocale]}
                </Button>

            <Menu
              sx={{ mt: '35px' }}
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link href="/flora"  color="inherit" underline="none">FLORA</Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link href="/fauna"  color="inherit" underline="none">FAUNA</Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ textTransform: 'uppercase' }}><Link href="/endemik"  color="inherit" underline="none">{i18n.nav.endemik[formattedLocale]}</Link></Typography>
                </MenuItem>
            </Menu>

                <Button
                    onClick={handleCloseNavMenu}
                    href="/sains"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    {i18n.nav.sains[formattedLocale]}
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    href="/pengetahuan"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    {i18n.nav.pengetahuan[formattedLocale]}
                </Button>

                <Button
                    onClick={handleCloseNavMenu}
                    href="/wisata"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    {i18n.nav.wisata[formattedLocale]}
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    href="/videos"
                    color= 'secondary'
                    sx={{ my: 2, mr:2, display: 'block' }}
                >
                    Video
                </Button>
                <PostLocaleSwitch />
          </Box>
          <Search />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default ResponsiveAppBar;