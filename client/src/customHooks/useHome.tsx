/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react';
import {
  useEventsByCategory,
  useEventsByCityCategoryTime,
  useUniqueCities
} from '../api/homeQueries';
import { type ICityObj } from '../pages/Home';
import { EventTypes, TimeTypes } from '../utils/enum';
import { type RootState } from '../pages/store';
import { useSelector } from 'react-redux';

import { type Event } from '../utils/interfaces';
import EventBanner from '../components/EventBanners/MobileEventBanner';
import SearchResultBanner from '../components/EventBanners/SearchResultBanner';
import { CircularProgress } from '@mui/material';
import Cookies from 'universal-cookie';

export const useHome = (): any => {
  const cookies = new Cookies();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = cookies.get('authToken');
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (token) {
      setUserLoggedIn(true);
    }
  }, []);

  /**
   * * AppLanguage
   */
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const [activeButton, setActiveButton] = useState<string>('music');

  const handleChangeActiveButton = (newState: string): void => {
    setActiveButton(newState);
  };

  /**
   * * States for FindBannerEvent
   */

  const [choosedCity, setChoosedCity] = useState<string>('Praha');
  const [chooseEventType, setChooseEventType] = useState<string>(EventTypes.MUSIC);
  const [choosedTime, setChoosedTime] = useState<string>(TimeTypes.WEEKEND);

  const handleCityChange = (newActive: string): void => {
    setChoosedCity(newActive);
  };

  const handleEventTypeChange = (newActive: string): void => {
    setChooseEventType(newActive);
  };
  const handleTimeTypeChange = (newActive: string): void => {
    setChoosedTime(newActive);
  };

  /**
   * * QUERIES   *
   */
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

  const {
    data: eventsByCityCategoryTimeData,
    error: eventsByCityCategoryTimeError,
    isLoading: eventsByCityCategoryTimeIsLoading
  } = useEventsByCityCategoryTime(choosedCity, chooseEventType, choosedTime);

  const citiesObj = uniqueCitiesData as unknown as ICityObj[] | null;

  const eventsData = eventsByCategoryData as unknown as Event[] | null;

  const searchResultsData = eventsByCityCategoryTimeData as unknown as Event[];

  /**
   * * Render Event Banners
   */
  const eventBanners = eventsData ? (
    eventsData?.map((event: Event, index: number) => {
      const name = event.name[appLanguage];
      return (
        <EventBanner
          key={index}
          id={event._id}
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

  const searchResults = searchResultsData ? (
    searchResultsData?.map((event: Event, index: number) => {
      const name = event.name[appLanguage];
      return (
        <SearchResultBanner
          id={event._id}
          key={index}
          name={name}
          date={event.date_of_the_event}
          place={event.address_id.name_of_place}
          popular={event.popular}
          ticketsSold={event.ticket_types.reduce((total, type) => total + type.sold, 0) || 0}
          imgSrc={event.image}
          userLoggedIn={userLoggedIn}></SearchResultBanner>
      );
    })
  ) : (
    <CircularProgress />
  );

  return {
    activeButton,
    handleChangeActiveButton,
    citiesObj,
    uniqueCitiesError,
    uniqueCitiesIsLoading,
    eventsByCategoryError,
    eventsByCatagoryIsLoading,
    eventsByCityCategoryTimeError,
    eventsByCityCategoryTimeIsLoading,
    choosedCity,
    handleCityChange,
    chooseEventType,
    handleEventTypeChange,
    choosedTime,
    handleTimeTypeChange,
    eventBanners,
    searchResults
  };
};
