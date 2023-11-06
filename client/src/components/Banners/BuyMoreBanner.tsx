import { Box, Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const BuyMoreBanner: React.FC = () => {
  return (
    <Grid container sx={{ background: '#9C114A', padding: '20px' }}>
      <Grid item xs={12} md={12} lg={12} sx={{ display: { xs: 'block', lg: 'flex' } }}>
        <Box sx={{ marginRight: '30%' }}>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: { xs: '30px', md: '50px', lg: '60px' },
              letterSpacing: '5px'
            }}
          >
            <FormattedMessage id="app.actionbanner.heading" />
          </Typography>
          <Typography
            sx={{ color: '#fff', fontWeight: '400', fontSize: '20px', marginTop: '20px' }}
          >
            <FormattedMessage id="app.actionbanner.note" />
          </Typography>
        </Box>
        <Typography sx={{ textAlign: 'center', marginTop: '30px' }}>
          <img src="/logos/tickets.png" alt="Action tickets image" />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BuyMoreBanner;
