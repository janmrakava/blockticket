import { Button, Divider, Typography } from '@mui/material';
import React, { memo, useEffect, useRef, useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { FormattedMessage } from 'react-intl';
import { CartBox, IconButtonBox } from './styled';
import { ItemCart } from './CartItem';

const iconStyle = {
  color: '#fff',
  fontSize: '30px'
};

const CartClick: React.FC = () => {
  const cartRef = useRef<HTMLDivElement | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);

  const handleCartClick = (): void => {
    setShowCart((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (cartRef.current != null && !cartRef.current.contains(e.target as Node)) {
      handleCartClick();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <IconButtonBox>
      <Button onClick={handleCartClick}>
        <ShoppingBasketIcon style={iconStyle} />
      </Button>
      {showCart && (
        <CartBox ref={cartRef}>
          <Typography
            sx={{ fontSize: '20px', fontWeight: '600', textAlign: 'center', padding: '20px' }}>
            <FormattedMessage id="app.reviewcart.heading" />
          </Typography>
          <Divider sx={{ background: '#fff', margin: '0 10px' }} />
          <ItemCart
            artist="placeholder"
            imgSrc="landing_2.jpeg"
            date="01.01.2025"
            quantity={1}
            ticketType="Standard"
            place="Praha"
            price={999}
          />
        </CartBox>
      )}
    </IconButtonBox>
  );
};

export const CartReview = memo(CartClick);
