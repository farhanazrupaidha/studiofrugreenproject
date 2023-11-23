import * as React from 'react';
import dynamic from 'next/dynamic'

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const DrawerToggle = dynamic(() => import('components/drawer-en'), {
  ssr: false,
});
const Search = dynamic(() => import('components/search-en'), {
  ssr: false,
});
const LocaleSwitch = dynamic(() => import('components/locale-switch'), {
  ssr: false,
});

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
                href="/en"
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
            <Link href="/en" color="inherit" underline="hover">
                Studiofru | Green Project
            </Link>
            </Typography>

            <Box sx={{ flexGrow: 0, mr:3, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    onClick={handleOpenUserMenu}
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    Species
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
                  <Button href="/flora" color="inherit">FLORA</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button href="/fauna" color="inherit">FAUNA</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button href="/endemik" color="inherit">ENDEMIC</Button>
                </MenuItem>
            </Menu>

                <Button
                    onClick={handleCloseNavMenu}
                    href="/sains"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    SCIENCE
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    href="/pengetahuan"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    KNOWLEDGE
                </Button>

                <Button
                    onClick={handleCloseNavMenu}
                    href="/wisata"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    TRAVEL
                </Button>
                <Button
                    onClick={handleCloseNavMenu}
                    href="/videos"
                    color= 'secondary'
                    sx={{ my: 2, mr:2, display: 'block' }}
                >
                    VIDEO
                </Button>
                <LocaleSwitch />
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