import React from 'react';
import Navbar from './Navbar/Navbar';
import useStyles from '../../styles/styles';

import Box from '@mui/material/Box';

const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.heroSection}>
      <Navbar />
    </Box>
  );
};

export default Hero;
