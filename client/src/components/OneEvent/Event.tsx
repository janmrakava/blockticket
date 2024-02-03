import { Box, CircularProgress, Grid } from '@mui/material';
import { useEvent } from '../../customHooks/useEvent';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import EventHeading from '../EventPage/EventHeading';
import BreadcrumbNavigation from '../EventPage/BreadcrumbNavigation';
import EventInfo from '../EventPage/EventInfo';
import GetTickets from '../EventPage/GetTickets';
import EventDescription from '../EventPage/EventDescription';
import NoMatch from '../NoMatch';

const Event: React.FC = () => {
  const { eventData, eventQueryError, eventQueryIsLoading } = useEvent();

  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  console.log(eventData);

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (eventQueryError) {
    return <NoMatch />;
  }

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
              <Box
                sx={{
                  maxWidth: '1000px',
                  maxHeight: '600px',
                  padding: '0px !important',
                  marginTop: '20px'
                }}>
                <img
                  src={`${eventData.image}`}
                  alt={`Artist ${eventData.name[appLanguage]}`}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={5} sx={{ marginTop: '20px' }}>
              <EventInfo
                artist={eventData.name[appLanguage]}
                city={eventData.address_id.city}
                location={eventData.address_id.name_of_place}
                date={eventData.date_of_the_event}
                prices={eventData.ticket_types}
              />
              <GetTickets />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{
                display: 'flex',
                flexDirection: { lg: 'row', md: 'row', xs: 'column' },
                alignItems: { xs: 'flex-start', lg: 'center' },
                gap: '3%',
                justifyContent: 'center'
              }}>
              <EventDescription
                description={eventData.description[appLanguage]}
                tickets={eventData.ticket_types}
              />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Event;
