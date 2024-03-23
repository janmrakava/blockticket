/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

import { type DecodedToken } from './useHome';
import Cookies from 'universal-cookie';
import { useGetUserTransactions } from '../api/userQueries';
import { Box } from '@mui/material';
import { type Transaction } from '../utils/interfaces';
import NoFavoritesEvents from '../components/FavoritesPage/NoFavoriteEvents';
import PreviousOrderItem from '../components/PreviousOrders/PreviousOrderItem';

export const usePreviousOrders = (): any => {
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
    data: transactionsData,
    isLoading: transactionsDataLoading,
    error: transactionsDataError
  } = useGetUserTransactions(userId);

  console.log(transactionsData);

  const renderTransactions =
    transactionsData && transactionsData.length > 0 ? (
      transactionsData?.map((transaction: Transaction, index: number) => {
        const ticketIDs = transaction.ticketIDs || [];
        const numberOfTickets = ticketIDs.length;
        const transactionDate = new Date(transaction.date);
        const yyyy = transactionDate.getFullYear();
        const mm = transactionDate.getMonth() + 1; // Měsíce začínají od 0
        const dd = transactionDate.getDate();
        const formattedDate = `${dd}.${mm}.${yyyy}`;
        return (
          <Box key={index}>
            <PreviousOrderItem
              id={transaction._id}
              date={formattedDate}
              price={transaction.price}
              numberOfTickets={numberOfTickets}
              state={transaction.state}
              method={transaction.method}
            />
          </Box>
        );
      })
    ) : (
      <NoFavoritesEvents />
    );
  return {
    userLoggedIn,
    transactionsDataLoading,
    transactionsDataError,
    renderTransactions
  };
};
