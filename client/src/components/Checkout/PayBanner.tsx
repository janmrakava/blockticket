/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';

const BannerToPay: React.FC<IPayBannerProps> = ({ type }) => {
  return (
    <Box
      sx={{
        margin: '20px',
        height: '100px',
        background: '#4B4958',
        padding: '20px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      }}>
      <Box>
        <Typography sx={{ fontSize: '15px', fontWeight: 800, marginBottom: '10px' }}>
          <FormattedMessage id={`app.checkoutpage.${type}`} />
        </Typography>
        <Typography sx={{ fontSize: '12px' }}>
          <FormattedMessage id={`app.checkoutpage.${type}text`} />
        </Typography>
      </Box>
      <img src={`/payment_methods/${type}_color.png`} alt="Image of method payment" />
    </Box>
  );
};

export const PayBanner = memo(BannerToPay);
