/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { EventInfoBoxText, PegiContainer } from '../OneEvent/styled';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import { FormattedMessage } from 'react-intl';

interface IEventInfoProps {
  artist: string;
  city: string;
  location: string;
  date: string;
  prices: Array<{
    prices: any;
    CZK: number;
    EUR: number;
    USD: number;
  }>;
}

const EventInfo: React.FC<IEventInfoProps> = ({ artist, city, location, date, prices }) => {
  const dateObject = new Date(date);

  const hours = dateObject.getHours().toString().padStart(2, '0');
  const minutes = dateObject.getMinutes().toString().padStart(2, '0');

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const currency = appLanguage === 'cs' ? 'CZK' : 'EUR';

  const price = prices[0].prices[currency];

  return (
    <Box
      sx={{
        background: '#4B4958',
        borderRadius: '20px',
        maxWidth: '900px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <Typography
        sx={{ fontSize: '50px', fontWeight: 'bold', fontFamily: 'Lexend', letterSpacing: '8.5px' }}
      >
        {artist}
      </Typography>
      <EventInfoBoxText>
        <img src="/icons_imgs/Location.png" style={{ height: '25px' }} />
        <Typography>
          {city}, {location}
        </Typography>
      </EventInfoBoxText>
      <EventInfoBoxText>
        <img src="/icons_imgs/Calendar.png" style={{ height: '25px' }} />
        <Typography>
          {day}.{month}.{year}
        </Typography>
      </EventInfoBoxText>
      <EventInfoBoxText>
        <img src="/icons_imgs/Time.png" style={{ height: '25px' }} />
        <Typography>
          {hours}:{minutes}
        </Typography>
      </EventInfoBoxText>
      <EventInfoBoxText>
        <Typography>
          <FormattedMessage id="app.oneeveent.pricestarts" />
          <br />
          <span style={{ fontWeight: 600 }}>
            {price} {currency}
          </span>
        </Typography>
      </EventInfoBoxText>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <PegiContainer>
          <p>18+ | CZ</p>
        </PegiContainer>
        <img src="/icons_imgs/Favorites.png" alt="Favorites" style={{ height: '25px' }} />
      </Box>
    </Box>
  );
};

export default EventInfo;
