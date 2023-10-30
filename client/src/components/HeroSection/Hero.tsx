import React from 'react';
import Navbar from './Navbar/Navbar';
import useStyles from '../../styles/styles';

import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.heroSection}>
      <Navbar />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            color: '#fff'
          }}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '40px', md: '60px', lg: '80px' },
                fontWeight: '800',
                letterSpacing: '8.5px',
                textAlign: 'center'
              }}>
              <FormattedMessage id="app.title" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '20px', md: '28px', lg: '36px' },
                fontWeight: '400',
                textAlign: 'center'
              }}>
              <FormattedMessage id="app.description" />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
