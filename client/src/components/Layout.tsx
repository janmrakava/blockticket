import React from 'react';
import Hero from './HeroSection/Hero';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './FooterSection/Footer';
import FavoriteBanner from './Banners/FavoriteBanner';
import MobileAppBanner from './Banners/MobileAppBanner';
const Layout: React.FC = () => {
  return (
    <>
      <Hero />
      <FavoriteBanner />
      <MobileAppBanner />
      <Footer />
    </>
  );
};

export default Layout;
