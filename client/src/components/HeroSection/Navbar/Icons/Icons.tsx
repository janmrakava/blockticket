import React from 'react';

import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Icons: React.FC = () => {
  const iconStyle = {
    color: '#fff',
    fontSize: '30px'
  };
  return (
    <>
      <Grid item xs={2} md={2} lg={1} sx={{ marginTop: '12px', fontSize: 30 }}>
        <Stack>
          <Button>
            <SearchIcon style={iconStyle} />
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={2} md={2} lg={1} sx={{ marginTop: '12px', fontSize: 30 }}>
        <Stack>
          <Button>
            <ShoppingBasketIcon style={iconStyle} />
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={2} md={2} lg={1} sx={{ marginTop: '8px', fontSize: 30 }}>
        <Stack>
          <Button>
            <Avatar>
              <PersonIcon style={iconStyle} />
            </Avatar>
          </Button>
        </Stack>
      </Grid>
      <Grid
        item
        xs={2}
        md={2}
        lg={1}
        sx={{ marginTop: '12px', fontSize: 30, display: { sm: 'block', lg: 'none' } }}>
        <Stack>
          <Button>
            <MenuIcon style={iconStyle} />
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default Icons;
