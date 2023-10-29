import React from 'react';
import './Navbar.scss';

import { Box, Grid } from '@mui/material';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Icons from './Icons/Icons';

const Navbar: React.FC = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Logo />
        <Menu />
        <Icons />
      </Grid>
    </Box>
  );
};
export default Navbar;
