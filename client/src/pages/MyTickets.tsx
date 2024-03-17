import { Grid } from '@mui/material';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';

const MyTickets: React.FC = () => {
  return (
    <Grid container sx={{ maxWidth: '1228px', margin: '0 auto', color: '#fff' }}>
      <UserSettingsMenu active="mytickets" />

      <h1>Moje lístky EVeNT</h1>
      <p>hele moje lístky</p>
    </Grid>
  );
};

export default MyTickets;
