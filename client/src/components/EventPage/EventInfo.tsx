import { Box } from '@mui/material';

const EventInfo: React.FC = () => {
  return (
    <Box sx={{ background: '#4B4958', maxHeight: '430px' }}>
      <h1>Artist</h1>
      <p>Place</p>
      <p>Date</p>
      <p>Time</p>
      <p>Prices starting from 25 EUR</p>
      <p>18+ | EN</p>
      <p>3</p>
    </Box>
  );
};

export default EventInfo;
