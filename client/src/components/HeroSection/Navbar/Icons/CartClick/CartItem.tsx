import { Box, Typography } from '@mui/material';

import React from 'react';
import useStyles from '../../../../../styles/styles';
interface ICartItem {
  type: string;
}

const CartItem: React.FC<ICartItem> = ({ type }) => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        gap: '20px',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}
    >
      <Typography>
        <img src="/landing_4.jpeg" alt="Image of event" className={classes.imgCartEvent} />
      </Typography>
      <Box>
        <Typography>Placeholder name</Typography>
        <Typography variant="h6" sx={{ fontSize: '12px', marginTop: '6px' }}>
          Placeholder Date
        </Typography>
        <Box sx={{ display: 'flex', gap: '40px' }}>
          <Typography variant="h6" sx={{ fontSize: '12px', marginTop: '6px' }}>
            Placeholder Place
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '14px', marginTop: '6px', fontWeight: 'bold' }}>
            Price
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontSize: '12px', marginTop: '6px', color: '#80797B' }}>
            Type of ticket
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '12px', marginTop: '6px', color: '#80797B' }}>
            Quantity
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default CartItem;
