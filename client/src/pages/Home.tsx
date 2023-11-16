/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { CircularProgress, Grid } from '@mui/material';
import BuyMoreBanner from '../components/Banners/BuyMoreBanner';
import FavoriteBanner from '../components/Banners/FavoriteBanner';
import FindEventsBanner from '../components/Banners/FindEventsBanner';
import MobileAppBanner from '../components/Banners/MobileAppBanner';
import EventBanner from '../components/EventBanners/MobileEventBanner';
import SearchResultBanner from '../components/EventBanners/SearchResultBanner';
import Hero from '../components/HeroSection/Hero';

import { useState } from 'react';
import { type RootState } from './store';
import { useSelector } from 'react-redux';

import { type Event } from '../utils/interfaces';
import { useEventsByCategory, useUniqueCities } from '../api/homeQueries';

interface ICityObj {
  id: number;
  city: string;
}

const Home: React.FC = () => {
  /**
   * ! DEBUG VARIABLES
   */
  const date = new Date();
  const userLoggedIn = true;

  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const [activeButton, setActiveButton] = useState<string>('music');

  const handleChangeActive = (newState: string): void => {
    setActiveButton(newState);
  };

  const {
    data: eventsByCategoryData,
    error: eventsByCategoryError,
    isLoading: eventsByCatagoryIsLoading
  } = useEventsByCategory(activeButton);

  const {
    data: uniqueCitiesData,
    error: uniqueCitiesError,
    isLoading: uniqueCitiesIsLoading
  } = useUniqueCities();

  const uniqueCitiesObj = uniqueCitiesData as unknown as ICityObj[] | null;

  const uniqueCitiesArr = uniqueCitiesObj?.map((a) => a.city);

  const eventsData = eventsByCategoryData as unknown as Event[] | null;

  if (eventsByCategoryError instanceof Error) {
    return <p>Error: {eventsByCategoryError.message}</p>;
  }

  const eventBanners = eventsData ? (
    eventsData?.map((event: Event, index: number) => {
      const name = event.name[appLanguage];
      return (
        <EventBanner
          key={index}
          name={name || 'Unknown name'}
          date={event.date_of_the_event}
          place={event.address_id ? event.address_id.name_of_place : 'Unknown place'}
          popular={event.popular || false}
          ticketsSold={event.ticket_types.reduce((total, type) => total + type.sold, 0) || 0}
          imgSrc={event.image}
          wideScreen={index % 2 === 0}
          userLoggedIn={userLoggedIn}
        />
      );
    })
  ) : (
    <p>No data available</p>
  );

  return (
    <>
      <Hero selectedType={activeButton} handleChange={handleChangeActive} />
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
      <FindEventsBanner citiesArray={uniqueCitiesArr} />

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
