/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useParams } from 'react-router-dom';
import { type IEventProps } from '../components/EventBanners/MobileEventBanner';
import { useGetOneEvent } from '../api/eventQueries';

import { useSelector } from 'react-redux';
import { type RootState } from '../pages/store';
import { useEventsByCategory } from '../api/homeQueries';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { useGetUserInfo } from '../api/userQueries';
import { jwtDecode } from 'jwt-decode';
import { type DecodedToken } from './useHome';

export const useEvent = (): any => {
  const params = useParams();
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const {
    data: eventQueryData,
    error: eventQueryError,
    isLoading: eventQueryIsLoading
  } = useGetOneEvent(params.eventId);

  const eventData = eventQueryData as unknown as IEventProps | null;

  const {
    data: eventsByCategoryData,
    error: eventsByCategoryError,
    isLoading: eventsByCatagoryIsLoading
  } = useEventsByCategory(eventData?.category_of_event ?? '') || {}; // Fallback na prázdný objekt, pokud je category_of_event undefined

  const similarEventData = eventsByCategoryData as unknown as IEventProps[] | null;

  const [userId, setUserId] = useState<string>('');
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get('authToken');
    if (token) {
      setUserLoggedIn(true);
      const decodedToken = jwtDecode<DecodedToken>(token);
      setUserId(decodedToken.userId);
    } else {
      setUserLoggedIn(false);
    }
  }, []);
  const { data: userData } = useGetUserInfo(userId);

  return {
    eventData,
    eventQueryError,
    eventQueryIsLoading,
    appLanguage,
    similarEventData,
    eventsByCategoryError,
    eventsByCatagoryIsLoading,
    userLoggedIn,
    userData
  };
};
