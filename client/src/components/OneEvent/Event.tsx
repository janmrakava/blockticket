import { Box, CircularProgress, Grid } from '@mui/material';
import { useEvent } from '../../customHooks/useEvent';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import EventHeading from '../EventPage/EventHeading';
import BreadcrumbNavigation from '../EventPage/BreadcrumbNavigation';
import EventInfo from '../EventPage/EventInfo';

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
              margin: '20px',
              gap: '21px'
            }}>
            <Grid item xs={12} md={7} lg={7}>
              <img
                src={`${eventData.image}`}
                alt={`Artist ${eventData.name[appLanguage]}`}
                style={{ maxWidth: '1000px' }}
              />
            </Grid>
            <Grid item xs={12} md={7} lg={4}>
              <EventInfo />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Event;
