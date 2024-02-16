/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
const CartItemReview: React.FC<ICartReviewItem> = ({
  artist,
  imgSrc,
  date,
  place,
  price,
  ticketType,
  quantity
}) => {
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
  const handleDelete = (): void => {
    console.log('Delete item with id from cart');
  };

  return (
    <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <Box
        sx={{
          width: { xs: '40%', md: '20%', lg: '10%' }
        }}>
        <img src={imgSrc} alt="Image of artist" style={{ maxHeight: '80px' }} />
      </Box>
      <Box sx={{ width: { xs: '60%', md: '80%', lg: '90%' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: { xs: '15px', md: '16px', lg: '18px' }, fontWeight: 800 }}>
            {artist}
          </Typography>
          <CloseIcon onClick={handleDelete} sx={{ cursor: 'pointer' }} />
        </Box>
        <Typography sx={{ fontSize: { xs: '12px', md: '13px', lg: '15px' }, fontWeight: 400 }}>
          {date}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: { xs: '12px', md: '13px', lg: '15px' }, fontWeight: 400 }}>
            {place}
          </Typography>
          <Typography sx={{ fontWeight: 800, fontSize: { xs: '12px', md: '15px', lg: '20px' } }}>
            {price} {appLanguage === 'cs' ? 'CZK' : 'EUR'}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#80797B' }}>
            {ticketType}
          </Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#80797B' }}>
            {quantity}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export const CartReviewItem = memo(CartItemReview);
