import React, { useRef, useEffect, useState } from 'react';

import PersonIcon from '@mui/icons-material/Person';

import SettingsImg from '../../../../../../public/icons_imgs/Settings.png';
import SupportImg from '../../../../../../public/icons_imgs/Support.png';
import OrderImg from '../../../../../../public/icons_imgs/Orders.png';
import TicketImg from '../../../../../../public/icons_imgs/Ticket.png';
import FavoritesImg from '../../../../../../public/icons_imgs/Favorites.png';

import { Avatar, Box } from '@mui/material';

import UserClickItem from './UserClickItem';
import {
  DividerThicker,
  DividerThinner,
  UserClickBox,
  UserClickTypography
} from '../../../../../styles/styles';
import LogoutItem from './LogoutItem';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

interface IUserClickProps {
  menuShow: boolean;
  setMenuShow: (state: boolean) => void;
}
interface DecodedToken {
  firstName: string;
  lastName: string;
}

const UserClick: React.FC<IUserClickProps> = ({ menuShow, setMenuShow }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  const cookies = new Cookies();

  const [fullName, setFullName] = useState<string>('');

  useEffect(() => {
    const token = cookies.get('authToken');
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      const name = `${decodedToken.firstName} ${decodedToken.lastName}`;
      setFullName(name);
    }
  }, []);
  return (
    <>
      <UserClickBox ref={menuRef}>
        <UserClickTypography variant="h5">
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
            <Avatar>
              <PersonIcon></PersonIcon>
            </Avatar>
            {fullName}
          </Box>
        </UserClickTypography>
        <DividerThicker />
        <UserClickItem text="settings" imgSrc={SettingsImg} />
        <DividerThinner />
        <UserClickItem text="orders" imgSrc={OrderImg} />
        <DividerThinner />
        <UserClickItem text="tickets" imgSrc={TicketImg} />
        <DividerThinner />
        <UserClickItem text="favorites" imgSrc={FavoritesImg} />
        <DividerThinner />
        <UserClickItem text="support" imgSrc={SupportImg} />
        <DividerThinner />
        <LogoutItem />
        <DividerThicker />
      </UserClickBox>
    </>
  );
};
export default UserClick;
