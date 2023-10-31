import React, { useState } from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import SearchBar from './SearchBar/SearchBar';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

const Icons: React.FC = () => {
  const theme = useTheme();
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  const iconStyle = {
    color: '#fff',
    fontSize: '30px'
  };
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const toggleMenu = (state: boolean): void => {
    setOpenMenu(state);
  };

  return (
    <>
      <Grid item xs={3} md={2} lg={1} sx={{ marginTop: '12px', fontSize: 30 }}>
        <SearchBar showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />
      </Grid>
      {!showSearchBar && (
        <>
          <Grid
            item
            xs={2}
            md={2}
            lg={1}
            sx={{
              marginTop: '12px',
              fontSize: 30,
              display: isXs && showSearchBar ? 'none' : 'block'
            }}>
            <Stack>
              <Button>
                <ShoppingBasketIcon style={iconStyle} />
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={2}
            md={2}
            lg={1}
            sx={{
              marginTop: '8px',
              fontSize: 30,
              display: isXs && showSearchBar ? 'none' : 'block'
            }}>
            <Stack>
              <Button>
                <Avatar>
                  <PersonIcon style={iconStyle} />
                </Avatar>
              </Button>
            </Stack>
          </Grid>
          {openMenu && isLg ? (
            <HamburgerMenu openMenu={openMenu} setMenuOpen={toggleMenu} />
          ) : (
            <Grid
              item
              xs={2}
              md={2}
              lg={1}
              sx={{
                marginTop: '12px',
                fontSize: 30,
                display: { xs: showSearchBar ? 'none' : 'block', sm: 'block', lg: 'none' }
              }}>
              <Stack>
                <Button>
                  <MenuIcon
                    style={iconStyle}
                    onClick={() => {
                      setOpenMenu(true);
                    }}
                  />
                </Button>
              </Stack>
            </Grid>
          )}
        </>
      )}
    </>
  );
};

export default Icons;
