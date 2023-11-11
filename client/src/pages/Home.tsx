import { Grid } from '@mui/material';
import BuyMoreBanner from '../components/Banners/BuyMoreBanner';
import FavoriteBanner from '../components/Banners/FavoriteBanner';
import FindEventsBanner from '../components/Banners/FindEventsBanner';
import MobileAppBanner from '../components/Banners/MobileAppBanner';
import EventBanner from '../components/EventBanners/MobileEventBanner';
import SearchResultBanner from '../components/EventBanners/SearchResultBanner';
import Hero from '../components/HeroSection/Hero';

const Home: React.FC = () => {
  const date = new Date();
  const userLoggedIn = true;
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
          userLoggedIn={userLoggedIn}
        />
        <EventBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={15647}
          imgSrc="/placeholderimg.png"
          wideScreen={false}
          userLoggedIn={userLoggedIn}
        />
        <EventBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={15647}
          imgSrc="/placeholderimg.png"
          wideScreen={false}
          userLoggedIn={userLoggedIn}
        />
        <EventBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
          wideScreen={true}
          userLoggedIn={userLoggedIn}
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
          userLoggedIn={userLoggedIn}
        />
        <SearchResultBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
          userLoggedIn={userLoggedIn}
        />
        <SearchResultBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
          userLoggedIn={userLoggedIn}
        />
        <SearchResultBanner
          name="Placeholder name"
          date={date}
          place="Placeholder name"
          popular={true}
          ticketsSold={647}
          imgSrc="/placeholderimg.png"
          userLoggedIn={userLoggedIn}
        />
      </Grid>
      <MobileAppBanner />

      <BuyMoreBanner />
    </>
  );
};

export default Home;
