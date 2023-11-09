import React, { useEffect, useRef } from 'react';

import { Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { FormattedMessage } from 'react-intl';
import CartItem from './CartItem';
import {
  CartClickBox,
  CartClickBoxIcon,
  CartClickTypography,
  DividerThinner
} from '../../../../../styles/styles';

interface ICartClickProps {
  showCart: boolean;
  empty: boolean;
  setCartShow: (state: boolean) => void;
}

const CartClick: React.FC<ICartClickProps> = ({ showCart, empty, setCartShow }) => {
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
    <CartClickBox ref={cartRef}>
      <CartClickTypography variant="h6">
        <CartClickBoxIcon>
          <ShoppingBasketIcon />
          <FormattedMessage id="app.reviewcart.heading" />
        </CartClickBoxIcon>
      </CartClickTypography>
      <DividerThinner />

      {empty ? (
        <Typography sx={{ textAlign: 'center' }} variant="h5">
          <FormattedMessage id="app.reviewcart.empty" />
        </Typography>
      ) : (
        <CartItem type="mobile" />
      )}
    </CartClickBox>
  );
};

export default CartClick;
