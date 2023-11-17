/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { CircularProgress, Grid } from '@mui/material';
import BuyMoreBanner from '../components/Banners/BuyMoreBanner';
import FavoriteBanner from '../components/Banners/FavoriteBanner';
import FindEventsBanner from '../components/Banners/FindEventsBanner';
import MobileAppBanner from '../components/Banners/MobileAppBanner';
import SearchResultBanner from '../components/EventBanners/SearchResultBanner';
import Hero from '../components/HeroSection/Hero';

import { useHome } from '../customHooks/useHome';

export interface ICityObj {
  city: string;
  countryShortcut: string;
}

const Home: React.FC = () => {
  /**
   * ! DEBUG VARIABLES
   */
  const date = new Date();
  const userLoggedIn = true;

  const {
    activeButton,
    handleChangeActiveButton,
    citiesObj,
    uniqueCitiesError,
    uniqueCitiesIsLoading,
    eventsByCategoryError,
    eventsByCatagoryIsLoading,
    choosedCity,
    handleCityChange,
    chooseEventType,
    handleEventTypeChange,
    choosedTime,
    handleTimeTypeChange,
    eventBanners
  } = useHome();

  if (eventsByCategoryError instanceof Error) {
    return <p>Error: {eventsByCategoryError.message}</p>;
  }

  return (
    <>
      <Hero selectedType={activeButton} handleChange={handleChangeActiveButton} />
      {eventsByCatagoryIsLoading && <CircularProgress />}
      {!eventsByCatagoryIsLoading && (
        <Grid
          container
          spacing={0}
          gap={3}
          marginTop={5}
          marginBottom={5}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '50vh' }}>
          {eventBanners}
        </Grid>
      )}
      <FavoriteBanner />

      {uniqueCitiesIsLoading ? (
        <CircularProgress />
      ) : (
        <FindEventsBanner
          cities={citiesObj}
          choosedCity={choosedCity}
          handleCityChange={handleCityChange}
          choosedEventType={chooseEventType}
          handleEventTypeChange={handleEventTypeChange}
          choosedTime={choosedTime}
          handleTimeTypeChange={handleTimeTypeChange}
        />
      )}

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
