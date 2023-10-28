import './Navbar.scss';

import { Box, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Navbar: React.FC = () => {
  const iconStyle = {
    color: 'black',
    fontSize: '30px'
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} lg={4}>
          <Typography>
            <img src="/logo.png" alt="TicketBlock Logo" id="logo-img" />
          </Typography>
        </Grid>
        <Grid item xs={2} md={2} lg={2} sx={{ marginTop: '12px', fontSize: 30 }}>
          <Stack>
            <Button>
              <SearchIcon style={iconStyle} />
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={2} md={2} lg={2} sx={{ marginTop: '12px', fontSize: 30 }}>
          <Stack>
            <Button>
              <ShoppingBasketIcon style={iconStyle} />
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={2} md={2} lg={2} sx={{ marginTop: '8px', fontSize: 30 }}>
          <Stack>
            <Button>
              <Avatar>
                <PersonIcon style={iconStyle} />
              </Avatar>
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={2} md={4} lg={2} sx={{ marginTop: '12px', fontSize: 30 }}>
          <Stack>
            <Button>
              <MenuIcon style={iconStyle} />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Navbar;
