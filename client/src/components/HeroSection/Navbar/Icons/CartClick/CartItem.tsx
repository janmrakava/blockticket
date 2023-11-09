import { Box, Typography } from '@mui/material';

import React from 'react';
import {
  CartItemBox,
  CartItemTypographyBasic,
  CartItemTypographyBold,
  CartItemTypographyColor,
  ImgCartEvent
} from '../../../../../styles/styles';
interface ICartItem {
  type: string;
}

const CartItem: React.FC<ICartItem> = ({ type }) => {
  console.log('CartItem: ', type);
  return (
    <CartItemBox>
      <Typography>
        <ImgCartEvent src="/landing_4.jpeg" alt="Image of event" />
      </Typography>
      <Box>
        <Typography>Placeholder name</Typography>
        <CartItemTypographyBasic variant="h6">Placeholder Date</CartItemTypographyBasic>
        <Box sx={{ display: 'flex', gap: '40px' }}>
          <CartItemTypographyBasic variant="h6">Placeholder Place</CartItemTypographyBasic>
          <CartItemTypographyBold variant="h6">Price</CartItemTypographyBold>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CartItemTypographyColor variant="h6">Type of ticket</CartItemTypographyColor>
          <CartItemTypographyColor variant="h6">Quantity</CartItemTypographyColor>
        </Box>
      </Box>
    </CartItemBox>
  );
};
export default CartItem;
