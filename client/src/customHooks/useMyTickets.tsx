import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

import { type DecodedToken } from './useHome';
import Cookies from 'universal-cookie';
import { useGetUserTickets } from '../api/userQueries';

export const useMyTickets = (): any => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');

  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get('authToken');

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (token) {
      setUserLoggedIn(true);
      const decodedToken = jwtDecode<DecodedToken>(token);
      setUserId(decodedToken.userId);
    }
  }, []);

  const {
    data: ticketsData,
    isLoading: ticketsDataLoading,
    error: ticketsDataError
  } = useGetUserTickets(userId);

  return {
    userLoggedIn,
    ticketsData,
    ticketsDataLoading,
    ticketsDataError
  };
};
