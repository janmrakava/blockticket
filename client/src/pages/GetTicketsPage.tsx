import { CircularProgress, Grid } from '@mui/material';
import { EventBanner } from '../components/GetTickets/EventBanner';
import { useGetTicketsPage } from '../customHooks/useGetTicketsPage';

const GetTicketsPage: React.FC = () => {
  const { eventData, appLanguage, eventQueryIsLoading } = useGetTicketsPage();

  console.log(eventData);

  return (
    <Grid container sx={{ color: '#fff' }} flexDirection={'column'}>
      <Grid item xs={12} md={12} lg={12}>
        {Boolean(eventQueryIsLoading) && <CircularProgress />}
        <EventBanner
          eventName={eventData.name[appLanguage]}
          eventImg={eventData.image}
          date={eventData.date_of_the_event}
          place={eventData.address_id.name_of_place}
          city={eventData.address_id.city}
        />
      </Grid>
    </Grid>
  );
};

export default GetTicketsPage;
