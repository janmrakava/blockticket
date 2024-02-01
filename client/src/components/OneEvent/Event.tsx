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

  console.log(eventData);

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
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              border: '1px solid red',
              gap: '21px',
              marginTop: '20px'
            }}>
            <Grid item xs={12} md={7} lg={7} sx={{ marginLeft: '20px', marginRight: '20px' }}>
              <Box sx={{ maxHeight: '600px' }}>
                <img
                  src={`${eventData.image}`}
                  alt={`Artist ${eventData.name[appLanguage]}`}
                  style={{ width: '100%' }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              sx={{ marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
              <EventInfo />
              <GetTickets />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Event;
