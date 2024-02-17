import { Box, Button, Divider, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import './helpcss.css';
import { CardNumberInput, CartInputSmaller } from './styles';
interface ICardData {
  cardNumber: string;
  cvv: string;
  expirationDate: string;
}

const CardInput: React.FC = () => {
  const [cardData, setCardData] = useState<ICardData>({
    cardNumber: '',
    cvv: '',
    expirationDate: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const regex = /^[0-9\b]+$/;
    const { name, value } = event.target;
    if (value === '' || regex.test(value)) {
      setCardData((prevState) => ({
        ...prevState,
        [name]: value
      }));
      console.log('nastavuji card data');
    } else {
      event.preventDefault();
    }
  };

  const handleSubmit = (): void => {
    event?.preventDefault();
    console.log('Transakce byla provedena: ', cardData);
  };
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
            pattern="[0-9]*"
            value={cardData.cardNumber}
            onChange={handleInputChange}
            inputMode="numeric"
            cardNumber={cardData.cardNumber}
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
              {' '}
              <FormattedMessage id="app.checkoutpage.expiration" />
            </label>
            <CartInputSmaller
              type="text"
              name="expirationDate"
              pattern="[0-9]*"
              value={cardData.expirationDate}
              onChange={handleInputChange}
              inputMode="numeric"
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
              value={cardData.cvv}
              onChange={handleInputChange}
              inputMode="numeric"
            />
          </Box>
        </Box>
        <Button type="submit" variant="contained" fullWidth sx={{ marginTop: '20px' }}>
          Zaplatit
        </Button>
      </form>
    </Box>
  );
};

export const CardBanner = memo(CardInput);
