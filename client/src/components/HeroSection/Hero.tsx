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
          justifyContent="center" // Horizontální centrování
          alignItems="center" // Vertikální centrování
          spacing={2}
          sx={{
            color: '#fff'
          }}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '40px', lg: '80px' },
                fontWeight: 'bold',
                letterSpacing: '8.5px',
                textAlign: 'center' // Centrování textu
              }}>
              <FormattedMessage id="app.title" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '15px', lg: '20px' },
                fontWeight: 'normal',
                textAlign: 'center' // Centrování textu
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
