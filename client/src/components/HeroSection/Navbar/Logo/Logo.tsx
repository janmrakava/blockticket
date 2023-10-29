import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './Logo.scss';

const Logo: React.FC = () => {
  return (
    <>
      <Grid item xs={4} md={4} lg={4} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
        <Typography>
          <img src="/logo.png" alt="TicketBlock Logo" id="logo-img" />
        </Typography>
      </Grid>
      <Grid
        item
        xs={4}
        md={4}
        lg={4}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'none' } }}>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '30px',
            fontWeight: '600'
          }}>
          <img src="/logo.png" alt="TicketBlock Logo" id="logo-img-text-medium" />
          TicketBlock
        </Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={4} sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '900',
            fontSize: '40px'
          }}>
          <img src="/logo.png" alt="TicketBlock Logo" id="logo-img-text" />
          TicketBlock
        </Typography>
      </Grid>
    </>
  );
};

export default Logo;
