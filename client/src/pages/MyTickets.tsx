import { Grid } from '@mui/material';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { FormattedMessage } from 'react-intl';

const MyTickets: React.FC = () => {
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
    </Grid>
  );
};

export default MyTickets;
