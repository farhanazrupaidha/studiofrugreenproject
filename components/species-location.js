import React from 'react';
import { useQuery, gql } from '@apollo/client';
import withApollo from "../config";
import Link from 'next/link'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box';

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
      borderRadius: 5,
      marginTop: theme.spacing(1),
      minWidth: 250,
    },
  }));

const LOCATION = gql`
  query SpeciesLocations {
    speciesLocations {
        title
        slug
        posts {
          title
          slug
          coverImage {
            url(transformation: {
              image: {
                resize: {
                  fit:crop,
                  width:2000,
                  height:1000
                }
              }
            })
          }          
        }
      }
  }
`;

const SpeciesLocation = () => {
    const { data, loading, error } = useQuery(LOCATION);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    if (loading) return null;
    if (error) return `Error! ${error}`;

return (
<Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        color="secondary"
        sx={{ my: 2 }}
      >
        Lokasi
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {data &&
            data.speciesLocations.map((item) => (
              <Link href={`/lokasi/${item.slug}`} className="hover:underline">
                <MenuItem value={item.title} key={item.id}>{item.title}</MenuItem>
              </Link>  
        ))}  
      </StyledMenu>   
</Box>
)
}

export default withApollo(SpeciesLocation);