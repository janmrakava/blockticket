import { Grid, Typography, Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import useStyles from '../../styles/styles';

const MobileAppBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.favoriteBanner}>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          padding: '20px',
          display: { xs: 'block', lg: 'flex' },
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '200px'
        }}>
        <Box>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: '900',
              fontSize: '25px',
              marginTop: { lg: '50px' },
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '20px',
              whiteSpace: 'pre-line',
              letterSpacing: '5px'
            }}>
            <FormattedMessage id="app.mobilebanner.heading" />
          </Typography>

          <Typography
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '18px',
              margin: '25px 0px'
            }}>
            <FormattedMessage id="app.mobilebanner.note" />
          </Typography>
          <Box
            sx={{
              display: { xs: 'block', md: 'block', lg: 'flex' },
              justifyContent: 'space-evenly'
            }}>
            <Typography sx={{ textAlign: 'center', marginBottom: '20px' }}>
              <img src="/logos/appstore.png" alt="App Store Logo" />
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
              <img src="/logos/googleplay.png" alt="Google Play Logo" />
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
          <img src="/logos/Mobils.png" alt="Two mobile phones with mobile app" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MobileAppBanner;
