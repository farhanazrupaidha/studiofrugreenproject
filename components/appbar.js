import * as React from 'react';
import dynamic from 'next/dynamic'
import Script from 'next/script'

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const DrawerToggle = dynamic(() => import('components/drawer'), {
  ssr: false,
});
const Search = dynamic(() => import('components/search'), {
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
import Alert from '@mui/material/Alert';

import SouthIcon from '@mui/icons-material/South';

import { makeStyles } from '@mui/styles';

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
                Studiofru | Green Project
            </Link>
            </Typography>

            <Box sx={{ flexGrow: 0, mr:3, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Spesies
                </Button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
                <Link href="/flora" underline="hover" color="inherit" onClick={handleClose}>
                  <MenuItem>
                    FLORA
                  </MenuItem>
                </Link>
                <Link href="/fauna" underline="hover" color="inherit" onClick={handleClose}>
                  <MenuItem>
                    FAUNA
                  </MenuItem>
                </Link>
                <Link href="/endemik" underline="hover" color="inherit" onClick={handleClose}>
                <MenuItem>
                  ENDEMIK
                </MenuItem>
                </Link>
            </Menu>

                <Button
                    href="/sains"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    Sains
                </Button>
                <Button
                    href="/pengetahuan"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    Pengetahuan
                </Button>

                <Button
                    href="/wisata"
                    color= 'secondary'
                    sx={{ my: 2, display: 'block' }}
                >
                    Wisata
                </Button>
                <Button
                    href="/videos"
                    color= 'secondary'
                    sx={{ my: 2, mr:2, display: 'block' }}
                >
                    Video
                </Button>
                <Button
                    href="https://sociabuzz.com/studiofru/tribe"
                    color= 'secondary'
                    sx={{ my: 2, mr:2, display: 'block' }}
                >
                    DUKUNGAN
                </Button>
                <LocaleSwitch />
          </Box>
          <Search />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Alert 
        variant="filled" 
        severity="info"  
        action={
          <Button color="inherit" size="small" endIcon={<SouthIcon />}>
            DUKUNG
          </Button>
      }>
        Hallo 🙂 Situs ini kebetulan sedang membutuhkan dukungan dari teman - teman yang baik hati untuk terus berlanjut. 
        Dukungan berapa pun jumlahnya akan sangat berarti dan berharga. Terima kasih pada teman - teman yang telah mendukung untuk proyek ini terus berlanjut sehingga data - data keanekaragaman hayati dapat diakses dengan mudah dan kita dapat terus mengenal serta menghargai keberadaan mereka sebagai makhluk hidup yang mendiami tanah Indonesia.</Alert>
      <Script type="text/javascript" src="https://storage.sociabuzz.com/storage/js/main/buttononwebsite/index.min.js" />
      <Script
        dangerouslySetInnerHTML={{
          __html: `sbBoW.draw("studiofru","QmVyaSBEdWt1bmdhbg","position-bottom-middle","#22cc88","#FFFFFF")`,
        }}
      />
    </React.Fragment>
  );
}
export default ResponsiveAppBar;