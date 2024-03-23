/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { CircularProgress, Grid, Typography } from '@mui/material';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { FormattedMessage } from 'react-intl';
import { useMyTickets } from '../customHooks/useMyTickets';
import { type TicketWithId } from '../utils/interfaces';
import NoFavoritesEvents from '../components/FavoritesPage/NoFavoriteEvents';

const MyTickets: React.FC = () => {
  const { userLoggedIn, ticketsData, ticketsDataLoading, ticketsDataError } = useMyTickets();

  console.log('ticketsData: ', ticketsData);

  const renderTickets = ticketsData?.map((ticket: TicketWithId, index: number) => {
    console.log(ticket);
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
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
          border: '1px solid red'
        }}>
        <Typography>{ticket.event}</Typography>
        <Typography>{ticket.name}</Typography>
      </Grid>
    );
  });

  console.log('renderTickets: ', renderTickets);

  return (
    <Grid
      container
      sx={{ maxWidth: '1228px', margin: '0 auto', color: '#fff', marginBottom: '50px' }}>
      <UserSettingsMenu active="mytickets" />
      <Grid item xs={12} md={12} lg={12} sx={{ marginTop: '50px' }}>
        <h1>
          <FormattedMessage id="app.mytickets.heading" />
        </h1>
      </Grid>
      {ticketsDataLoading ? (
        <CircularProgress />
      ) : (
        <>
          {!ticketsData || ticketsData.length === 0 ? (
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
              {renderTickets}
            </Grid>
          )}
        </>
      )}
    </Grid>
  );
};

export default MyTickets;
