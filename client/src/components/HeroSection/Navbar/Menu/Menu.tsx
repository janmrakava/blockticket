import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

const Menu: React.FC = () => {
  return (
    <Grid item xs={5} md={5} lg={5} sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}>
      <Typography
        sx={{
          display: 'flex',
          marginTop: '12px'
        }}>
        <Button>
          <Link to="/deals">
            <FormattedMessage id="app.navigation.deals" />
          </Link>
        </Button>
        <Button>
          <Link to="/music">
            <FormattedMessage id="app.navigation.music" />
          </Link>
        </Button>
        <Button>
          <Link to="/sport">Sport</Link>
        </Button>
        <Button>
          <Link to="/family">
            <FormattedMessage id="app.navigation.family" />
          </Link>
        </Button>
        <Button>
          <Link to="/vip">VIP</Link>
        </Button>
        <Button>
          <Link to="/arts">
            <FormattedMessage id="app.navigation.arts" />
          </Link>
        </Button>
      </Typography>
    </Grid>
  );
};

export default Menu;
