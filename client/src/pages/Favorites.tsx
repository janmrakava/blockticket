/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { CircularProgress, Grid } from '@mui/material';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { useFavorites } from '../customHooks/useFavorites';
import NoFavoritesEvents from '../components/FavoritesPage/NoFavoriteEvents';

import { type Event } from '../utils/interfaces';
import FavoriteEventBanner from '../components/FavoritesPage/FavoriteEventBanner';

const Favorites: React.FC = () => {
  const { userLoggedIn, userData, userDataLoading, userDataError } = useFavorites();

  const favoriteEventsRender = userData?.map((event: Event, index: number) => {
    return (
      <FavoriteEventBanner
        key={index}
        eventId={event._id}
        userId={userData._id}
        ticketsSold={event.ticket_types.reduce((total, type) => total + type.sold, 0) || 0}
        userLoggedIn={userLoggedIn}
        userFavoriteEvents={userData}
        name={event.name}
        dateOfTheEvent={event.date_of_the_event}
        image={event.image}
        place={event.address_id.name_of_place}
      />
    );
  });

  console.log(favoriteEventsRender);

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
      {userDataError && <div>Něco se nepovedlo</div>}
      {userDataLoading ? (
        <CircularProgress />
      ) : (
        <>
          {!userData || userData.length === 0 ? (
            <NoFavoritesEvents />
          ) : (
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
          )}
        </>
      )}
    </Grid>
  );
};

export default Favorites;
