/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import { memo } from 'react';
import {
  CartItemContainer,
  CartItemHeading,
  CartItemText,
  CartItemTextBolder,
  CartItemTextBox,
  CartItemTextBoxForText,
  CartItemTextSmaller,
  CartTextContainer
} from './styled';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../../../pages/store';

const CartItem: React.FC<ICartItemProps> = ({
  artist,
  imgSrc,
  date,
  place,
  quantity,
  price,
  ticketType
}) => {
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
  return (
    <CartItemContainer>
      <Box>
        <img src={imgSrc} alt="Image of event" style={{ height: '100px' }} />
      </Box>
      <CartTextContainer>
        <CartItemHeading sx={{ fontWeight: 800 }}>{artist}</CartItemHeading>
        <CartItemText>{date}</CartItemText>
        <CartItemTextBox>
          <CartItemTextBoxForText>
            <CartItemText>{place}</CartItemText>
            <CartItemTextSmaller>{ticketType}</CartItemTextSmaller>
          </CartItemTextBoxForText>
          <CartItemTextBoxForText>
            <CartItemTextBolder sx={{ fontWeight: 800 }}>
              {price} {appLanguage === 'cs' ? 'CZK' : 'EUR'}
            </CartItemTextBolder>
            <CartItemTextSmaller>{quantity}</CartItemTextSmaller>
          </CartItemTextBoxForText>
        </CartItemTextBox>
      </CartTextContainer>
    </CartItemContainer>
  );
};

export const ItemCart = memo(CartItem);
