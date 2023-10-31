import React from 'react';

import Grid from '@mui/material/Grid';
import { Button, MenuItem, Divider, Drawer, Box, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

interface IHamburgerMenuProps {
  openMenu: boolean;
  setMenuOpen: (state: boolean) => void;
}
const HamburgerMenu: React.FC<IHamburgerMenuProps> = ({ openMenu, setMenuOpen }) => {
  const toggleDrawer = (): void => {
    setMenuOpen(!openMenu);
  };

  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '500px'
            }
          }
        }}>
        <Box
          sx={{
            p: 2,
            height: 1,
            backgroundColor: '#131021',
            width: '100%'
          }}>
          <IconButton sx={{ mb: 2 }} onClick={toggleDrawer}>
            <CloseIcon sx={{ color: '#fff', width: '24px' }} />
          </IconButton>
          <Grid
            container
            sx={{
              display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
              width: '100%',
              textAlign: 'center',
              backgroundColor: '#131021',
              padding: '10px 20px 40px 20px'
            }}>
            <Divider sx={{ backgroundColor: '#80797B', borderBottomWidth: '3px' }} />

            <Grid item xs={12} md={12} sm={12} lg={0}>
              <Button>
                <Link to={'/deals'} style={{ textDecoration: 'none' }}>
                  <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                    <FormattedMessage id="app.navigation.deals" />
                  </MenuItem>
                </Link>
              </Button>
            </Grid>
            <Divider sx={{ backgroundColor: '#80797B', borderBottomWidth: '.1rem' }} />
            <Grid item xs={12} md={12} sm={12} lg={0}>
              <Button>
                <Link to={'/music'} style={{ textDecoration: 'none' }}>
                  <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                    <FormattedMessage id="app.navigation.music" />
                  </MenuItem>
                </Link>
              </Button>
            </Grid>
            <Divider sx={{ backgroundColor: '#80797B', borderBottomWidth: '.1rem' }} />

            <Grid item xs={12} md={12} sm={12} lg={0}>
              <Button>
                <Link to={'/sport'} style={{ textDecoration: 'none' }}>
                  <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                    Sport
                  </MenuItem>
                </Link>
              </Button>
            </Grid>
            <Divider sx={{ backgroundColor: '#80797B', borderBottomWidth: '.1rem' }} />

            <Grid item xs={12} md={12} sm={12} lg={0}>
              <Button>
                <Link to={'/family'} style={{ textDecoration: 'none' }}>
                  <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                    <FormattedMessage id="app.navigation.family" />
                  </MenuItem>
                </Link>
              </Button>
            </Grid>
            <Divider sx={{ backgroundColor: '#80797B', borderBottomWidth: '.1rem' }} />

            <Grid item xs={12} md={12} sm={12} lg={0}>
              <Button>
                <Link to={'/vip'} style={{ textDecoration: 'none' }}>
                  <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                    VIP
                  </MenuItem>
                </Link>
              </Button>
            </Grid>
            <Divider sx={{ backgroundColor: '#80797B', borderBottomWidth: '.1rem' }} />

            <Grid item xs={12} md={12} sm={12} lg={0}>
              <Button>
                <Link to={'/arts'} style={{ textDecoration: 'none' }}>
                  <MenuItem sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                    <FormattedMessage id="app.navigation.arts" />
                  </MenuItem>
                </Link>
              </Button>
            </Grid>
            <Divider sx={{ backgroundColor: '#80797B', borderBottomWidth: '3px' }} />
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
