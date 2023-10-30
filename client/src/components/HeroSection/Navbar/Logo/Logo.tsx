import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useStyles from '../../../../styles/styles';

const Logo: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={3} md={4} lg={4} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
        <Typography>
          <img src="/logo.png" alt="TicketBlock Logo" className={classes.logoImg} />
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
          <img src="/logo.png" alt="TicketBlock Logo" className={classes.logoImgTextMedium} />
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
          <img src="/logo.png" alt="TicketBlock Logo" className={classes.logoImgText} />
          TicketBlock
        </Typography>
      </Grid>
    </>
  );
};

export default Logo;
