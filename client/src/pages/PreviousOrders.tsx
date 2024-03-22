import { Grid } from '@mui/material';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { FormattedMessage } from 'react-intl';
import PreviousOrderItem from '../components/PreviousOrders/PreviousOrderItem';

const PreviousOrders: React.FC = () => {
  return (
    <Grid
      container
      sx={{ maxWidth: '1228px', margin: '0 auto', color: '#fff', marginBottom: '50px' }}>
      <UserSettingsMenu active="previousorders" />
      <Grid item xs={12} md={12} lg={12} sx={{ marginTop: '50px' }}>
        <h1>
          <FormattedMessage id="app.previousorders.heading" />
        </h1>
      </Grid>
      <Grid item xs={12} md={12} lg={12} sx={{ marginTop: '50px' }}>
        <PreviousOrderItem
          id={'123456'}
          date={new Date()}
          price={1999}
          numberOfTickets={1}
          state={'paid'}
        />
      </Grid>
    </Grid>
  );
};

export default PreviousOrders;
