import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

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
          <Link to="/deals" style={{ textDecoration: 'none' }}>
            <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
              <FormattedMessage id="app.navigation.deals" />
            </MenuItem>
          </Link>
        </Button>
        <Button>
          <Link to="/music" style={{ textDecoration: 'none' }}>
            <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
              <FormattedMessage id="app.navigation.music" />
            </MenuItem>
          </Link>
        </Button>
        <Button>
          <Link to="/sport" style={{ textDecoration: 'none' }}>
            <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>Sport</MenuItem>
          </Link>
        </Button>
        <Button>
          <Link to="/family" style={{ textDecoration: 'none' }}>
            <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
              <FormattedMessage id="app.navigation.family" />
            </MenuItem>
          </Link>
        </Button>
        <Button>
          <Link to="/vip" style={{ textDecoration: 'none' }}>
            <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>VIP</MenuItem>
          </Link>
        </Button>
        <Button>
          <Link to="/arts" style={{ textDecoration: 'none' }}>
            <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
              <FormattedMessage id="app.navigation.arts" />
            </MenuItem>
          </Link>
        </Button>
      </Typography>
    </Grid>
  );
};

export default Menu;
