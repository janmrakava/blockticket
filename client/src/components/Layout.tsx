import React, { useEffect } from 'react';

import LanguageSwitcher from './LanguageSwitcher';
import Footer from './FooterSection/Footer';

import Navbar from './HeroSection/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
