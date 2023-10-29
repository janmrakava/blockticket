import React from 'react';
import Hero from './HeroSection/Hero';
import LanguageSwitcher from './LanguageSwitcher';
const Layout: React.FC = () => {
  return (
    <>
      <Hero />
      <LanguageSwitcher />
    </>
  );
};

export default Layout;
