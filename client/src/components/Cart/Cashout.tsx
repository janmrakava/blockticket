/* eslint-disable react/prop-types */
import { Box, Button, Divider, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import { CashOutContainer, CashOutSectionContainer } from './styled';
import { useNavigate } from 'react-router-dom';

const Cash: React.FC<ICashOutProps> = ({ prices, discount }) => {
  const [sumPrices, setSumPrices] = useState<number>(0);

  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
  console.log(prices);

  useEffect(() => {
    const sum = prices.reduce((acc, curr) => acc + curr, 0);
    setSumPrices(sum);
  }, [prices]);

  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/checkout');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <CashOutContainer
        sx={{
          float: {
            xs: 'center',
            md: 'right',
            lg: 'right'
          }
        }}>
        <h1>
          <FormattedMessage id="app.cartpage.cashoutheading" />
        </h1>
        <CashOutSectionContainer>
          <Typography sx={{ fontSize: { xs: '12px', md: '13px', lg: '15px' } }}>
            <FormattedMessage id="app.cartpage.subtotal" />
          </Typography>
          <Typography>
            {sumPrices} {appLanguage === 'cs' ? 'CZK' : 'EUR'}
          </Typography>
        </CashOutSectionContainer>
        <CashOutSectionContainer>
          <Typography sx={{ fontSize: { xs: '12px', md: '13px', lg: '15px' } }}>
            <FormattedMessage id="app.cartpage.discount" />
          </Typography>
          <Typography>
            {discount} {appLanguage === 'cs' ? 'CZK' : 'EUR'}
          </Typography>
        </CashOutSectionContainer>
        <Divider sx={{ background: '#80797B', marginTop: '20px' }} />
        <CashOutSectionContainer>
          <Typography sx={{ fontSize: { xs: '12px', md: '13px', lg: '15px' } }}>
            <FormattedMessage id="app.cartpage.total" />
          </Typography>
          <Typography>
            {sumPrices + discount} {appLanguage === 'cs' ? 'CZK' : 'EUR'}
          </Typography>
        </CashOutSectionContainer>
      </CashOutContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            padding: '10px 20px',
            width: '200px',
            margin: '20px'
          }}>
          <FormattedMessage id="app.cartpage.checkout" />
        </Button>
      </Box>
    </Box>
  );
};

export const CashOut = memo(Cash);
