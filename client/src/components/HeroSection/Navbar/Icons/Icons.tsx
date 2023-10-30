import React, { useEffect, useRef, useState } from 'react';

import { Grid, alpha, styled, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';

const Icons: React.FC = () => {
  const searchBarRef = useRef<HTMLDivElement | null>(null);

  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const iconStyle = {
    color: '#fff',
    fontSize: '30px'
  };
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.4),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.6)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    color: '#fff',
    width: '250%'
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '40ch'
      }
    }
  }));

  const handleShowSearchBar = (): void => {
    setShowSearchBar(true);
  };
  const handleClickOutside = (e: MouseEvent): void => {
    if (searchBarRef.current != null && !searchBarRef.current.contains(e.target as Node)) {
      setShowSearchBar(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <Grid item xs={3} md={2} lg={1} sx={{ marginTop: '12px', fontSize: 30 }}>
        <Stack>
          {!showSearchBar && (
            <Button onClick={handleShowSearchBar}>
              <SearchIcon style={iconStyle} />
            </Button>
          )}
          {showSearchBar && (
            <Search ref={searchBarRef}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
          )}
        </Stack>
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
                <MenuIcon style={iconStyle} />
              </Button>
            </Stack>
          </Grid>
        </>
      )}
    </>
  );
};

export default Icons;
