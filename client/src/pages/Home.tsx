import { CircularProgress, Grid } from '@mui/material';
import BuyMoreBanner from '../components/Banners/BuyMoreBanner';
import FavoriteBanner from '../components/Banners/FavoriteBanner';
import FindEventsBanner from '../components/Banners/FindEventsBanner';
import MobileAppBanner from '../components/Banners/MobileAppBanner';
import EventBanner from '../components/EventBanners/MobileEventBanner';
import SearchResultBanner from '../components/EventBanners/SearchResultBanner';
import Hero from '../components/HeroSection/Hero';
import { useQuery } from 'react-query';
import { getEventsByCategory } from '../api/events/events';
import { useState } from 'react';

const Home: React.FC = () => {
  /**
   * ! DEBUG VARIABLES
   */
  const date = new Date();
  const userLoggedIn = true;

  const [activeButton, setActiveButton] = useState<string>('music');
  const [intervalMs, setIntervalMs] = useState<number>(30000);

  const handleChangeActive = (newState: string): void => {
    setActiveButton(newState);
  };

  const { data, error, isLoading } = useQuery(
    ['eventsByCategory', activeButton],
    async () => await getEventsByCategory(activeButton),
    {
      refetchInterval: intervalMs
    }
  );

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Data jsou k dispozici v proměnné data
  console.log('Data:', data);

  return (
    <>
      <Hero selectedType={activeButton} handleChange={handleChangeActive} />
      {isLoading && <CircularProgress />}
      {!isLoading && (
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
      )}
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
