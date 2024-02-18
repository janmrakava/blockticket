import { Alert, Box, Button, Divider, Snackbar, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import './helpcss.css';
import { CardNumberInput, CartInputSmaller } from './styles';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';

interface ICardData {
  value: string;
  isValid: boolean;
}

const CardInput: React.FC = () => {
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false);
  const [cardNumberState, setCardNumberState] = useState<ICardData>({
    value: '',
    isValid: false
  });
  const [cardCVVState, setCardCVVState] = useState<ICardData>({
    value: '',
    isValid: false
  });
  const [cardExpirationDateState, setExpirationDateState] = useState<ICardData>({
    value: '',
    isValid: false
  });
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const validateCardNumber = (cardNumber: string): boolean => {
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');

    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cardNumberWithoutSpaces);
  };
  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    const newValueWithoutSpaces = value.replace(/\s/g, '');

    const newValueWithSpaces = newValueWithoutSpaces.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');

    const isValid = validateCardNumber(newValueWithoutSpaces);
    setCardNumberState({
      value: newValueWithSpaces,
      isValid
    });
  };

  const validateCVV = (cardCVV: string): boolean => {
    const cardCVVRegex = /^\d{3,4}$/;
    return cardCVVRegex.test(cardCVV) && cardCVV.length < 4;
  };
  const handleCardCVVChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const isValid = validateCVV(value);
    setCardCVVState({
      value,
      isValid
    });
  };
  const validateExpirationDate = (monthYearString: string): boolean => {
    const today = new Date();
    const cleanedMonthYearString = monthYearString.replace('/', '');
    const month = parseInt(cleanedMonthYearString.substring(0, 2), 10);
    const year = parseInt(cleanedMonthYearString.substring(2), 10) + 2000;

    const dateToValidate = new Date(year, month - 1);

    if (dateToValidate > today) {
      return true;
    } else {
      return false;
    }
  };
  const handleExpirationDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const isValid = validateExpirationDate(value);
    setExpirationDateState({
      value,
      isValid
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const isValidForm =
      cardCVVState.isValid && cardExpirationDateState.isValid && cardNumberState.isValid;

    if (isValidForm) {
      console.log('Transakce byla provedena');
    } else {
      setShowSnackBar(true);
      setTimeout(() => {
        setShowSnackBar(false);
      }, 5000);
    }
  };

  useEffect(() => {
    console.log('expiration: ', cardExpirationDateState.value);
  }, [cardExpirationDateState.value]);
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
