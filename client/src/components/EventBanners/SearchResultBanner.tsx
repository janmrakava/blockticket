/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { type IEventProps } from './MobileEventBanner';
import { countDate, countTickets } from '../../utils/function';
import {
  BoxFlexCenterSpaceBetween,
  BoxFlexRowCenter,
  ExtendedBoxFontSize,
  ImageIconSizeBigger,
  MobileEventBannerGrid,
  TypographyBold,
  TypographyBoldFontSize,
  TypographyMedium
} from '../../styles/styles';
import { FormattedMessage } from 'react-intl';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import Tickets from '../../../public/icons_imgs/Ticket.png';
import Favorite from '../../../public/icons_imgs/Favorites.png';

const SearchResultBanner: React.FC<IEventProps> = ({ name, date, place, ticketsSold, imgSrc }) => {
  const newDate = countDate(date);
  const ticketSoldUpdated = countTickets(ticketsSold);
  return (
    <MobileEventBannerGrid
      item
      xs={10}
      md={5}
      lg={2.5}
      sx={{ backgroundImage: `url(${imgSrc})`, width: '343', height: '500px' }}>
      <BoxFlexCenterSpaceBetween>
        <BoxFlexRowCenter>
          <ImageIconSizeBigger src={Tickets} alt="Image of ticket" />
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
            <TypographyBold>
              <FormattedMessage id="app.eventbanner.ticketssold" />
            </TypographyBold>
            <TypographyBold>{ticketSoldUpdated}</TypographyBold>
          </Box>
        </BoxFlexRowCenter>
        <ImageIconSizeBigger src={Favorite} alt="Favorite Icon" sx={{ marginRight: '20px' }} />
      </BoxFlexCenterSpaceBetween>

      <Box
        sx={{
          marginTop: '0px',
          margin: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
        <TypographyBoldFontSize>{name}</TypographyBoldFontSize>
        <TypographyMedium>{newDate}</TypographyMedium>
        <ExtendedBoxFontSize>
          <PlaceOutlinedIcon />
          <Typography>{place}</Typography>
        </ExtendedBoxFontSize>
      </Box>
    </MobileEventBannerGrid>
  );
};

export default SearchResultBanner;
