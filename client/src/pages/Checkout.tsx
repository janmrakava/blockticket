import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { CartSteps } from '../components/Cart/CartSteps';
import { PaymentBanner } from '../components/Checkout/PaymentBanner';
import { useState } from 'react';
import { DetailContact } from '../components/Checkout/ContactDetail';
import { CheckoutEventBanner } from '../components/Checkout/EventBannerCheckout';
import { PromoInput } from '../components/Cart/PromoInput';
import { CashOut } from '../components/Cart/Cashout';

const Checkout: React.FC = () => {
  const theme = useTheme();
  const [activeMethod, setActiveMethod] = useState<string>('card');

  const changePaymentMethod = (type: string): void => {
    setActiveMethod(type);
  };

  const paymentMethods = ['card', 'banktransfer', 'paypal', 'applepay', 'googlepay'];
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  const renderPaymentMethods = paymentMethods.map((method, index) => {
    return (
      <>
        <PaymentBanner
          type={method}
          active={method === activeMethod}
          key={index}
          onClick={() => {
            changePaymentMethod(method);
          }}
        />
        <Divider sx={{ background: '#80797B', margin: '0 20px' }} />
      </>
    );
  });

  return (
    <Grid container sx={{ color: '#ffffff', maxWidth: '1228px', margin: '0 auto' }}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography sx={{ fontSize: '40px', fontWeight: 900, padding: '20px' }}>
          <FormattedMessage id="app.checkoutpage.heading" />
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        {isMd && (
          <Grid item md={12} lg={12}>
            <CartSteps active="payment" />
          </Grid>
        )}
        <Divider sx={{ background: '#80797B', margin: '0 20px' }} />
      </Grid>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse', lg: 'row-reverse' },
          alignItems: 'flex-start',
          width: '100%'
        }}>
        {isXs && <Divider sx={{ background: '#80797B', margin: '0 20px' }} />}
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={{ fontSize: '20px', fontWeight: 900, padding: '20px' }}>
            <FormattedMessage id="app.checkoutpage.contactinfo" />
          </Typography>
          <DetailContact
            firstName="John"
            lastName="Doe"
            email="johndoe@email.com"
            telNumber="123456789"
          />
          <Divider sx={{ background: '#80797B', margin: '0 20px' }} />
          <Typography sx={{ fontSize: '20px', fontWeight: 900, padding: '20px' }}>
            <FormattedMessage id="app.checkoutpage.orderreview" />
          </Typography>
          <CheckoutEventBanner
            artist="Placeholder"
            imgSrc="landing_2.jpeg"
            typeTicket="Standard"
            price={399}
            quantity={1}
          />
          <Divider sx={{ background: '#80797B', margin: '0 20px' }} />
          <PromoInput />
          <CashOut discount={0} prices={[199, 299, 399]} showButton={false} />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
          {isXs && <Divider sx={{ background: '#80797B', margin: '0 20px' }} />}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={{ fontSize: '20px', fontWeight: 900, padding: '20px 20px 10px 20px' }}>
            <FormattedMessage id="app.checkoutpage.paymentmethodheading" />
          </Typography>
          {renderPaymentMethods}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Checkout;
