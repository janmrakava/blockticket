import { Grid } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const NoFavoritesEvents: React.FC = () => {
  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '100px' }}>
      <h1>
        <FormattedMessage id="app.favoritespage.nofavoriteheading" />
      </h1>
    </Grid>
  );
};

export default NoFavoritesEvents;
