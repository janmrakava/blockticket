import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const BuyMoreBanner: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Typography>
          <FormattedMessage id="app.actionbanner.heading" />
        </Typography>
        <Typography>
          <FormattedMessage id="app.actionbanner.note" />
        </Typography>
        <Typography>
          <img src="/logos/tickets.png" alt="Action tickets image" />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BuyMoreBanner;
