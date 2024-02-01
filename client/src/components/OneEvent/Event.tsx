import { Box, CircularProgress, Grid } from '@mui/material';
import { useEvent } from '../../customHooks/useEvent';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import EventHeading from '../EventPage/EventHeading';
import BreadcrumbNavigation from '../EventPage/BreadcrumbNavigation';
import EventInfo from '../EventPage/EventInfo';
import GetTickets from '../EventPage/GetTickets';

const Event: React.FC = () => {
  const { eventData, eventQueryError, eventQueryIsLoading } = useEvent();

  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  return (
    <Grid container sx={{ color: 'white' }}>
      {(eventQueryIsLoading as boolean) ? (
        <CircularProgress />
      ) : (
        <>
          <EventHeading eventName={eventData.name[appLanguage]} />
          <BreadcrumbNavigation
            items={[
              { to: '/', label: 'home' },
              { to: '/events', label: 'events' },
              { to: '/events/:category', label: `${eventData.category_of_event}` },
              { to: '/event/:id"', label: `${eventData.name[appLanguage]}` }
            ]}
          />
          <Grid
            container
            sx={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: '21px',
              alignItems: 'flex-start',
              margin: { xs: '0 20px' }
            }}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ maxWidth: '1000px', maxHeight: '600px', padding: '0px !important' }}>
                <img
                  src={`${eventData.image}`}
                  alt={`Artist ${eventData.name[appLanguage]}`}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={5}>
              <EventInfo
                artist={eventData.name[appLanguage]}
                city={eventData.address_id.city}
                location={eventData.address_id.name_of_place}
                date={eventData.date_of_the_event}
                prices={eventData.ticket_types}
              />
              <GetTickets />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Event;
