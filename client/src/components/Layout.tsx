import React, { useEffect } from 'react';

import LanguageSwitcher from './LanguageSwitcher';
import Footer from './FooterSection/Footer';

import Navbar from './HeroSection/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import Cookies from 'universal-cookie';

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const cookies = new Cookies();
  const dispatch = useDispatch();

  const checkValidityOfToken = (): void => {
    const token = cookies.get('authToken');
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!token) {
      dispatch(logout());
    }
  };
  useEffect(() => {
    checkValidityOfToken();
    const interval = setInterval(checkValidityOfToken, 5 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
