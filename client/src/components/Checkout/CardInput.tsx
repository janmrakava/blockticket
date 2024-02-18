import { Alert, Box, Button, Divider, Snackbar, Typography } from '@mui/material';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import './helpcss.css';
import { CardNumberInput, CartInputSmaller } from './styles';

import { useCardInput } from './useCardInput';

const CardInput: React.FC = () => {
  const {
    handleCardCVVChange,
    handleCardNumberChange,
    handleExpirationDateChange,
    handleSubmit,
    cardNumberState,
    cardCVVState,
    cardExpirationDateState,
    appLanguage,
    showSnackBar
  } = useCardInput();
  return (
    <Box sx={{ margin: '20px' }}>
      <Typography sx={{ fontSize: '20px', fontWeight: 800 }}>
        <FormattedMessage id="app.checkoutpage.cardinfo" />
      </Typography>
      <Divider sx={{ background: '#80797B', marginTop: '10px' }} />

      <form onSubmit={handleSubmit}>
        <Box sx={{ paddingTop: '20px' }}>
          <label htmlFor="cardNumber">
            <FormattedMessage id="app.checkoutpage.cardnumber" />
          </label>
          <CardNumberInput
            type="text"
            name="cardNumber"
            value={cardNumberState.value}
            onChange={handleCardNumberChange}
            inputMode="numeric"
            cardNumber={cardNumberState.value}
          />
        </Box>
        <Box
          sx={{
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            gap: '40px',
            justifyContent: 'space-between'
          }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <label htmlFor="expirationDate">
              <FormattedMessage id="app.checkoutpage.expiration" />
            </label>
            <CartInputSmaller
              type="text"
              name="expirationDate"
              value={cardExpirationDateState.value.replace(/(\d{2})(\d{2})/, '$1/$2')}
              onChange={handleExpirationDateChange}
              inputMode="numeric"
              placeholder="MM/YY"
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <label htmlFor="cvv">
              <FormattedMessage id="app.checkoutpage.securitycode" />
            </label>
            <CartInputSmaller
              type="text"
              name="cvv"
              pattern="[0-9]*"
              value={cardCVVState.value}
              onChange={handleCardCVVChange}
              inputMode="numeric"
            />
          </Box>
        </Box>
        <Button type="submit" variant="contained" fullWidth sx={{ marginTop: '20px' }}>
          Zaplatit
        </Button>
      </form>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
          {appLanguage === 'cs'
            ? 'Nesprávně zadané údaje. Prosím zkontrolujte vaše zadané údaje.'
            : 'Incorrectly entered data. Please check your entered data.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export const CardBanner = memo(CardInput);
