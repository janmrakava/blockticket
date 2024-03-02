import { Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { CartSteps } from '../components/Cart/CartSteps';
import { PromoInput } from '../components/Cart/PromoInput';
import { CashOut } from '../components/Cart/Cashout';
import { useSelector } from 'react-redux';
import { type RootState } from './store';
import { useState } from 'react';
import CartReviewItem from '../components/Cart/CartReviewItem';

const Cart: React.FC = () => {
  const theme = useTheme();

  const [price, setPrice] = useState<number>(0);

  const handleCountPrice = (ticketPrice: number): void => {
    setPrice((prev) => prev + ticketPrice);
  };

  const cart = useSelector((state: RootState) => state.cart);
  console.log('Cart: ', cart);

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
        <Typography sx={{ fontSize: '40px', fontWeight: 900, padding: '20px' }}>
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
        {cart.map((item, index) => {
          return (
            <CartReviewItem
              eventId={item.eventId}
              ticketType={item.ticketType}
              quantity={item.quantity}
              key={index}
              countPrice={handleCountPrice}
            />
          );
        })}

        <Divider sx={{ background: '#80797B', margin: '0 20px' }} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <PromoInput />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <CashOut sumPrice={price} discount={0} showButton={true} />
      </Grid>
    </Grid>
  );
};

export default Cart;
