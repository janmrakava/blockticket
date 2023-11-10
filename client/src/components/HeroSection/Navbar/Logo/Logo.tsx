import React from 'react';

import { Grid, Typography } from '@mui/material';

import {
  LogoImg,
  LogoImgText,
  LogoImgTextMedium,
  LogoTypographyBig,
  LogoTypographyMedium
} from '../../../../styles/styles';

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
        sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'none' } }}
      >
        <LogoTypographyMedium>
          <LogoImgTextMedium src="/logo.png" alt="TicketBlock Logo" />
          TicketBlock
        </LogoTypographyMedium>
      </Grid>
      <Grid item xs={4} md={4} lg={4} sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
        <LogoTypographyBig>
          <LogoImgText src="/logo.png" alt="TicketBlock Logo" />
          TicketBlock
        </LogoTypographyBig>
      </Grid>
    </>
  );
};

export default Logo;
