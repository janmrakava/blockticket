import { memo } from 'react';

const CartPage: React.FC = () => {
  return (
    <>
      <h1>Cart</h1>
      <p>cart items</p>
    </>
  );
};

export const Cart = memo(CartPage);
