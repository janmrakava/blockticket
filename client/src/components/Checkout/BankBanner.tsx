/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { memo } from 'react';

const BannerBank: React.FC<IBankBannerProps> = ({ name, imgSrc }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        width: '100%',
        height: '40px',
        alignItems: 'center',
        marginTop: '10px'
      }}>
      <img
        src={`/bank_images/${imgSrc}`}
        alt="Bank of image - Moneta"
        style={{ width: '30px', marginLeft: '20px' }}
      />
      <Typography>{name}</Typography>
    </Box>
  );
};

export const BankBanner = memo(BannerBank);
