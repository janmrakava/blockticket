import React from 'react';

import Grid from '@mui/material/Grid';
import { Drawer, Box, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import HamburgerItem from './HamburgemItem';
import { DividerThicker, DividerThinner } from '../../../../../styles/styles';

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
            <CloseIcon sx={{ color: '#fff', fontSize: '50px' }} />
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
            <DividerThicker />
            <HamburgerItem type="deals" />
            <DividerThinner />
            <HamburgerItem type="music" />
            <DividerThinner />
            <HamburgerItem type="sport" />
            <DividerThinner />
            <HamburgerItem type="family" />
            <DividerThinner />
            <HamburgerItem type="vip" />
            <DividerThinner />
            <HamburgerItem type="arts" />
            <DividerThicker />
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
