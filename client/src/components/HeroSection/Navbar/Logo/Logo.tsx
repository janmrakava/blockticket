import React from 'react';

import { Grid, Typography } from '@mui/material';

import { LogoImg, LogoImgText, LogoImgTextMedium } from '../../../../styles/styles';

const Logo: React.FC = () => {
  return (
    <>
      <Grid item xs={3} md={4} lg={4} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
        <Typography>
          <LogoImg src="/logo.png" alt="TicketBlock Logo" />
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
            fontWeight: '600',
            color: '#fff'
          }}>
          <LogoImgTextMedium src="/logo.png" alt="TicketBlock Logo" />
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
            fontSize: '40px',
            color: '#fff'
          }}>
          <LogoImgText src="/logo.png" alt="TicketBlock Logo" />
          TicketBlock
        </Typography>
      </Grid>
    </>
  );
};

export default Logo;
