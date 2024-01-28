import { CircularProgress, Grid } from '@mui/material';
import { useEvent } from '../../customHooks/useEvent';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import EventHeading from '../EventPage/EventHeading';
import BreadcrumbNavigation from '../EventPage/BreadcrumbNavigation';

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
        </>
      )}
    </Grid>
  );
};

export default Event;
