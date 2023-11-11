import React from 'react';
import Hero from './HeroSection/Hero';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './FooterSection/Footer';
import FavoriteBanner from './Banners/FavoriteBanner';
import MobileAppBanner from './Banners/MobileAppBanner';
import BuyMoreBanner from './Banners/BuyMoreBanner';
import FindEventsBanner from './Banners/FindEventsBanner';
import EventBanner from './EventBanners/MobileEventBanner';
import { Grid } from '@mui/material';
import SearchResultBanner from './EventBanners/SearchResultBanner';
const Layout: React.FC = () => {
  const date = new Date();

  return (
    <>
      <Hero />
      <Grid
        container
        spacing={0}
        gap={3}
        marginTop={5}
        marginBottom={5}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '50vh' }}>
        <EventBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={15647}
          imgSrc="/placeholderimg.png"
          wideScreen={true}
        />
        <EventBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={15647}
          imgSrc="/placeholderimg.png"
          wideScreen={false}
        />
        <EventBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={15647}
          imgSrc="/placeholderimg.png"
          wideScreen={false}
        />
        <EventBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
          wideScreen={true}
        />
      </Grid>
      <FavoriteBanner />
      <FindEventsBanner />
      <Grid
        container
        spacing={0}
        gap={3}
        marginTop={5}
        marginBottom={5}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '50vh' }}>
        <SearchResultBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
        />
        <SearchResultBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
        />
        <SearchResultBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
        />
        <SearchResultBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
        />
      </Grid>
      <MobileAppBanner />

      <BuyMoreBanner />

      <Footer />
    </>
  );
};

export default Layout;
