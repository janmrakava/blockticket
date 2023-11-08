import React from 'react';
import Hero from './HeroSection/Hero';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './FooterSection/Footer';
import FavoriteBanner from './Banners/FavoriteBanner';
import MobileAppBanner from './Banners/MobileAppBanner';
import BuyMoreBanner from './Banners/BuyMoreBanner';
import FindEventsBanner from './Banners/FindEventsBanner';
import EventBanner from './EventBanners/MobileEventBanner';
import Logo from './HeroSection/Navbar/Logo/Logo';
const Layout: React.FC = () => {
  /*   const date = new Date();
   */
  return (
    <>
      <Hero />
      <FavoriteBanner />
      <MobileAppBanner />

      <BuyMoreBanner />

      <FindEventsBanner />
      {/* 
      <Footer />
      <EventBanner
        name="Placeholder name"
        date={date}
        place="Placeholder name"
        popular={true}
        ticketSold={15647}
        imgSrc="/placeholderimg.png"
      /> */}
    </>
  );
};

export default Layout;
