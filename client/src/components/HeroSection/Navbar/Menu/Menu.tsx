import React from 'react';

import { Grid, Typography } from '@mui/material';

import ItemMenu from './MenuItem';

const Menu: React.FC = () => {
  return (
    <Grid item xs={5} md={5} lg={5} sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}>
      <Typography
        sx={{
          display: 'flex',
          marginTop: '12px'
        }}
      >
        <ItemMenu type="deals" />
        <ItemMenu type="music" />
        <ItemMenu type="sport" />
        <ItemMenu type="family" />
        <ItemMenu type="vip" />
        <ItemMenu type="arts" />
      </Typography>
    </Grid>
  );
};

export default Menu;
