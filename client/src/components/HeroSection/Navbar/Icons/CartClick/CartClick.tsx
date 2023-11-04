import React, { useEffect, useRef } from 'react';

import { Box, Divider, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { FormattedMessage } from 'react-intl';
import useStyles from '../../../../../styles/styles';
import CartItem from './CartItem';

interface ICartClickProps {
  showCart: boolean;
  empty: boolean;
  setCartShow: (state: boolean) => void;
}

const CartClick: React.FC<ICartClickProps> = ({ showCart, empty, setCartShow }) => {
  const classes = useStyles();
  const cartRef = useRef<HTMLDivElement | null>(null);

  const toggleCart = (): void => {
    setCartShow(!showCart);
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (cartRef.current != null && !cartRef.current.contains(e.target as Node)) {
      toggleCart();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box
      ref={cartRef}
      sx={{
        display: {
          xs: 'block'
        },
        backgroundColor: '#131021',
        padding: '20px',
        color: '#fff',
        maxWidth: '393px',
        borderRadius: '10px',
        position: 'absolute',
        top: '78px',
        right: '45px'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          display: 'flex',
          gap: '20px',
          marginBottom: '20px'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
          <ShoppingBasketIcon />
          <FormattedMessage id="app.reviewcart.heading" />
        </Box>
      </Typography>
      <Divider className={classes.dividerThinner} sx={{ marginBottom: '20px' }} />

      {empty ? (
        <Typography sx={{ textAlign: 'center' }} variant="h5">
          <FormattedMessage id="app.reviewcart.empty" />
        </Typography>
      ) : (
        <CartItem type="mobile" />
      )}
    </Box>
  );
};

export default CartClick;
