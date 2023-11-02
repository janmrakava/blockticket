import React, { useRef, useEffect } from 'react';

import PersonIcon from '@mui/icons-material/Person';

import SettingsImg from '../../../../../../public/icons_imgs/Settings.png';
import LogoutImg from '../../../../../../public/icons_imgs/Logout.png';
import SupportImg from '../../../../../../public/icons_imgs/Support.png';
import OrderImg from '../../../../../../public/icons_imgs/Orders.png';
import TicketImg from '../../../../../../public/icons_imgs/Ticket.png';
import FavoritesImg from '../../../../../../public/icons_imgs/Favorites.png';

import { Avatar, Box, Divider, Typography } from '@mui/material';

import UserClickItem from './UserClickItem';
import useStyles from '../../../../../styles/styles';

interface IUserClickProps {
  userFullName: string;
  userLoggedIn: boolean;
  menuShow: boolean;
  setMenuShow: (state: boolean) => void;
}

const UserClick: React.FC<IUserClickProps> = ({
  userFullName,
  userLoggedIn,
  menuShow,
  setMenuShow
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const classes = useStyles();

  const toggleMenu = (): void => {
    setMenuShow(!menuShow);
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (menuRef.current != null && !menuRef.current.contains(e.target as Node)) {
      toggleMenu();
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
      <Box
        ref={menuRef}
        sx={{
          display: {
            xs: 'block'
          },
          backgroundColor: '#131021',
          padding: '20px',
          color: '#fff',
          maxWidth: '320px',
          borderRadius: '10px',
          position: 'absolute',
          top: '78px',
          right: '45px'
        }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            gap: '20px',
            marginBottom: '20px'
          }}>
          <Avatar>
            <PersonIcon></PersonIcon>
          </Avatar>
          {userFullName}
        </Typography>
        <Divider className={classes.dividerThicker} />
        <UserClickItem text="settings" imgSrc={SettingsImg} />
        <Divider className={classes.dividerThinner} />
        <UserClickItem text="orders" imgSrc={OrderImg} />
        <Divider className={classes.dividerThinner} />{' '}
        <UserClickItem text="tickets" imgSrc={TicketImg} />
        <Divider className={classes.dividerThinner} />{' '}
        <UserClickItem text="favorites" imgSrc={FavoritesImg} />
        <Divider className={classes.dividerThinner} />{' '}
        <UserClickItem text="support" imgSrc={SupportImg} />
        <Divider className={classes.dividerThinner} />{' '}
        <UserClickItem text="logout" imgSrc={LogoutImg} />
        <Divider className={classes.dividerThicker} sx={{ marginBottom: '20px' }} />
      </Box>
    </>
  );
};
export default UserClick;
