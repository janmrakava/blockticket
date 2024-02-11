import { Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { CartReviewItem } from '../components/Cart/CartReviewItem';
import { CartSteps } from '../components/Cart/CartSteps';
import { PromoInput } from '../components/Cart/PromoInput';

const CartPage: React.FC = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Grid
      container
      sx={{
        color: '#fff',
        maxWidth: '1228px',
        margin: '0 auto'
      }}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography sx={{ fontSize: '20px', fontWeight: 800, padding: '20px' }}>
          <FormattedMessage id="app.cartpage.heading" />
        </Typography>
        {isMd && (
          <Grid item md={12} lg={12}>
            <CartSteps active="review" />
          </Grid>
        )}
        <Divider sx={{ background: '#80797B', margin: '0 20px' }} />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <CartReviewItem
          artist="Placeholder"
          imgSrc="landing_2.jpeg"
          ticketType="Standard"
          quantity={1}
          price={999}
          date="01.01.2025"
          place="Prague O2 aréna"
        />
        <Divider sx={{ background: '#80797B', margin: '0 20px' }} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <PromoInput />
      </Grid>
    </Grid>
  );
};

export const Cart = memo(CartPage);
