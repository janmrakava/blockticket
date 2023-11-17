/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from '@mui/material';
import { type IEventProps } from './MobileEventBanner';
import { countDate, countTickets } from '../../utils/function';
import {
  BoxFlexCenterSpaceBetween,
  BoxFlexRowCenter,
  ExtendedBoxFontSize,
  ImageIconSizeBigger,
  MobileEventBannerGrid,
  SearchResultBox,
  TypographyBold,
  TypographyBoldFontSize,
  TypographyMedium
} from '../../styles/styles';
import { FormattedMessage } from 'react-intl';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import Tickets from '../../../public/icons_imgs/Ticket.png';
import Favorite from '../../../public/icons_imgs/Favorites.png';
import InFavorite from '../../../public/icons_imgs/InFavorite.png';
import { useState } from 'react';

const SearchResultBanner: React.FC<IEventProps> = ({
  name,
  date,
  place,
  ticketsSold,
  imgSrc,
  userLoggedIn
}) => {
  const [inFavorite, setInFavorite] = useState<boolean>(false);

  const handleFavorite = (): void => {
    setInFavorite((prev) => !prev);
  };

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
          <IconButton>
            <ImageIconSizeBigger src={Tickets} alt="Image of ticket" />
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
            <TypographyBold>
              <FormattedMessage id="app.eventbanner.ticketssold" />
            </TypographyBold>
            <TypographyBold>{ticketSoldUpdated}</TypographyBold>
          </Box>
        </BoxFlexRowCenter>
        {userLoggedIn &&
          (!inFavorite ? (
            <ImageIconSizeBigger
              src={Favorite}
              alt="Favorite Icon"
              sx={{ marginRight: '20px' }}
              onClick={handleFavorite}
            />
          ) : (
            <ImageIconSizeBigger
              src={InFavorite}
              alt="Favorite Icon"
              sx={{ marginRight: '20px' }}
              onClick={handleFavorite}
            />
          ))}
      </BoxFlexCenterSpaceBetween>

      <SearchResultBox>
        <TypographyBoldFontSize>{name}</TypographyBoldFontSize>
        <TypographyMedium>{newDate}</TypographyMedium>
        <ExtendedBoxFontSize>
          <PlaceOutlinedIcon />
          <Typography>{place}</Typography>
        </ExtendedBoxFontSize>
      </SearchResultBox>
    </MobileEventBannerGrid>
  );
};

export default SearchResultBanner;
