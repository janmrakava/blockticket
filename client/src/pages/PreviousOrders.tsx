/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { CircularProgress, Grid } from '@mui/material';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { FormattedMessage } from 'react-intl';
import { usePreviousOrders } from '../customHooks/usePreviousOrders';
import PreviousOrderItem from '../components/PreviousOrders/PreviousOrderItem';

const PreviousOrders: React.FC = () => {
  const { ticketsDataLoading, ticketsDataError, renderTransactions } = usePreviousOrders();
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
          id="ID objednávky"
          date="Datum"
          price={'cena'}
          numberOfTickets={'Počet vstupenek'}
          state="Stav"
          method="Metoda"
        />
        {ticketsDataError && <div>Něco se nepovedlo</div>}
        {ticketsDataLoading ? <CircularProgress /> : renderTransactions}
      </Grid>
    </Grid>
  );
};

export default PreviousOrders;
