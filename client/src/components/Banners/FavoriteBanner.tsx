import React from 'react';

import { Button, Grid, IconButton, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { FormattedMessage } from 'react-intl';
import useStyles from '../../styles/styles';
import { Link } from 'react-router-dom';

const FavoriteBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} md={12} lg={12} className={classes.favoriteBanner}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography
          sx={{
            color: '#fff',
            fontWeight: '900',
            fontSize: '25px',
            margin: '20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '20px'
          }}>
          <FormattedMessage id="app.favoritebanner.heading" />
          <FavoriteBorderIcon fontSize="large" />
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Typography
          sx={{ color: '#fff', margin: '10px 20px', fontWeight: '400', fontSize: '18px' }}>
          <FormattedMessage id="app.favoritebanner.note" />
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{ color: '#fff', margin: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Button
          sx={{ color: '#017CCC', background: '#fff', fontWeight: '900', borderRadius: '100px' }}
          size="large">
          <FormattedMessage id="app.login.login" />
        </Button>
        <IconButton>
          <Link to="/twitter" style={{ textDecoration: 'none', color: '#fff' }}>
            <TwitterIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/facebook" style={{ textDecoration: 'none', color: '#fff' }}>
            <FacebookIcon fontSize="large" />
          </Link>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default FavoriteBanner;
