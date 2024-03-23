/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

import { type DecodedToken } from './useHome';
import Cookies from 'universal-cookie';
import { useGetUserTickets } from '../api/userQueries';
import { Grid, Typography } from '@mui/material';
import { type TicketWithId } from '../utils/interfaces';
import NoFavoritesEvents from '../components/FavoritesPage/NoFavoriteEvents';

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

  const renderTickets =
    ticketsData && ticketsData.length > 0 ? (
      ticketsData?.map((ticket: TicketWithId, index: number) => {
        return (
          <Grid
            item
            xs={12}
            md={5}
            lg={3}
            key={index}
            sx={{
              height: '400px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
              border: '1px solid red',
              backgroundImage: `url(${ticket.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <Typography>{ticket.event}</Typography>
            <Typography>{ticket.name}</Typography>
          </Grid>
        );
      })
    ) : (
      <NoFavoritesEvents />
    );

  return {
    userLoggedIn,
    renderTickets,
    ticketsDataLoading,
    ticketsDataError
  };
};
