import React from 'react';
import Hero from './HeroSection/Hero';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './FooterSection/Footer';
import FavoriteBanner from './Banners/FavoriteBanner';
import MobileAppBanner from './Banners/MobileAppBanner';
import BuyMoreBanner from './Banners/BuyMoreBanner';
const Layout: React.FC = () => {
  return (
    <>
      <Hero />
      <FavoriteBanner />
      <MobileAppBanner />
      <BuyMoreBanner />
      <Footer />
    </>
  );
};

export default Layout;
