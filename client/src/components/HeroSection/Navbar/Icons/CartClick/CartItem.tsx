/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import { memo } from 'react';

const CartItem: React.FC<ICartItemProps> = ({
  artist,
  imgSrc,
  date,
  place,
  quantity,
  price,
  ticketType
}) => {
  return (
    <Box sx={{ display: 'flex', margin: '10px', gap: '20px' }}>
      <Box>
        <img src={imgSrc} alt="Image of event" style={{ height: '100px' }} />
      </Box>
      <Box fontSize={'20px'}>
        <p style={{ fontSize: '15px', fontWeight: 800 }}>{artist}</p>
        <p style={{ fontSize: '12px', fontWeight: 400 }}>{date}</p>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <p style={{ fontSize: '12px', fontWeight: 400 }}>{place}</p>
            <p>{ticketType}</p>
          </Box>
          <Box>
            <p>{quantity}</p>
            <p>{price}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const ItemCart = memo(CartItem);
