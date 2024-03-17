/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { CircularProgress, Grid } from '@mui/material';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { useFavorites } from '../customHooks/useFavorites';
import NoFavoritesEvents from '../components/FavoritesPage/NoFavoriteEvents';
import { useEffect, useState } from 'react';
import { getEvent } from '../api/event/event';
import { type Event } from '../utils/interfaces';
import FavoriteEventBanner from '../components/FavoritesPage/FavoriteEventBanner';

const Favorites: React.FC = () => {
  const { userLoggedIn, userData, userDataLoading, userDataError } = useFavorites();

  const [favoriteEvents, setFavoriteEvents] = useState<Event[] | undefined>();

  useEffect(() => {
    const fetchEventDetails = async (eventId: string): Promise<Event | null> => {
      try {
        const response = await getEvent(eventId);
        if (!response) {
          throw new Error('Failed to fetch event details');
        }
        const event = response;
        return event;
      } catch (error) {
        console.error('Error fetching event details:', error);
        return null;
      }
    };

    const fetchEventData = async (): Promise<void> => {
      if (userData) {
        const eventDetailsPromises = userData.favorite_events.map(fetchEventDetails);
        const eventDetails = await Promise.all(eventDetailsPromises);
        setFavoriteEvents(eventDetails.filter((event) => event !== null) as Event[]);
      }
    };

    void fetchEventData();
  }, [userData]);
  const favoriteEventsRender = favoriteEvents?.map((event, index) => {
    return (
      <FavoriteEventBanner
        key={index}
        eventId={event._id}
        userId={userData._id}
        ticketsSold={event.ticket_types.reduce((total, type) => total + type.sold, 0) || 0}
        userLoggedIn={userLoggedIn}
        userFavoriteEvents={userData.favorite_events}
        name={event.name}
        dateOfTheEvent={event.date_of_the_event}
        image={event.image}
        place={event.address_id.name_of_place}
      />
    );
  });

  return (
    <Grid
      container
      sx={{
        maxWidth: '1228px',
        margin: '0 auto',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <UserSettingsMenu active="favorites" />
      {userDataLoading && <CircularProgress />}
      {userDataError && <div>Něco se nepovedlo</div>}
      {userData?.favorite_events && userData.favorite_events.length === 0 ? (
        <NoFavoritesEvents />
      ) : null}
      <Grid
        container
        spacing={0}
        gap={3}
        marginTop={5}
        marginBottom={5}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '50vh' }}>
        {favoriteEventsRender}
      </Grid>
      ;
    </Grid>
  );
};

export default Favorites;
