import { Box, Typography } from '@mui/material';
import { EventInfoBoxText } from '../OneEvent/styled';

const EventInfo: React.FC = () => {
  return (
    <Box
      sx={{
        background: '#4B4958',
        width: { xs: '353px', lg: '430px' },
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
      <Typography
        sx={{ fontSize: '50px', fontWeight: 'bold', fontFamily: 'Lexend', letterSpacing: '8.5px' }}>
        Artist
      </Typography>
      <EventInfoBoxText>
        <img src="/icons_imgs/Location.png" style={{ height: '25px' }} />
        <Typography>Place</Typography>
      </EventInfoBoxText>
      <EventInfoBoxText>
        <img src="/icons_imgs/Calendar.png" style={{ height: '25px' }} />
        <Typography>Date</Typography>
      </EventInfoBoxText>
      <EventInfoBoxText>
        <img src="/icons_imgs/Time.png" style={{ height: '25px' }} />
        <Typography>Time</Typography>
      </EventInfoBoxText>
      <EventInfoBoxText>
        <Typography>
          Prices starting from <br />
          <span style={{ fontWeight: 600 }}>25 EUR</span>
        </Typography>
      </EventInfoBoxText>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            width: '128px',
            background: '#131021',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '40px',
            padding: '5px'
          }}>
          <p>18+ | CZ</p>
        </Box>
        <img src="/icons_imgs/Favorites.png" alt="Favorites" style={{ height: '25px' }} />
      </Box>
    </Box>
  );
};

export default EventInfo;
