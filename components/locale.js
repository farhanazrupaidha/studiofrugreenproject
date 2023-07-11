import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import TranslateIcon from '@mui/icons-material/Translate';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="secondary"
      >
        <TranslateIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
                <MenuItem onClick={handleClose}>
                  <Typography textAlign="center"><Link href="/"  color="inherit" underline="none">ID</Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography textAlign="center"><Link href="/en"  color="inherit" underline="none">EN</Link></Typography>
                </MenuItem>
      </Menu>
    </div>
  );
}