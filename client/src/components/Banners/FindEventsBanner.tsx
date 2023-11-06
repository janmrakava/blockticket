import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import useStyles from '../../styles/styles';

const FindEventsBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.findBanner}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography>
          <FormattedMessage id="app.findbanner.find" />
        </Typography>
        <Typography>
          <FormattedMessage id="app.findbanner.this" />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FindEventsBanner;
