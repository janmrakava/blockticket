/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from '@mui/material';
import PopularBanner from './PopularBanner';
import {
  BoxFlexCenterSpaceBetween,
  BoxFlexRowCenter,
  ExtendedBoxFontSize,
  ImageIconSizeBigger,
  MobileEventBannerGrid,
  TypographyBold,
  TypographyExtraBold,
  TypographyMedium
} from '../../styles/styles';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import Tickets from '../../../public/icons_imgs/Ticket.png';
import Favorite from '../../../public/icons_imgs/Favorites.png';
import InFavorite from '../../../public/icons_imgs/InFavorite.png';

/* import FavoritesDark from '../../../public/icons_imgs/FavoritesDark.png';
 */
import { FormattedMessage } from 'react-intl';
import { countDate, countTickets } from '../../utils/function';
import { useState } from 'react';

export interface IEventProps {
  name: string;
  date: Date;
  place: string;
  popular?: boolean;
  ticketsSold: number;
  imgSrc: string;
  wideScreen?: boolean;
  userLoggedIn: boolean;
}

const EventBanner: React.FC<IEventProps> = ({
  name = 'Unknown name',
  date,
  place,
  popular,
  ticketsSold,
  imgSrc,
  wideScreen,
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
      sm={5}
      md={5}
      lg={wideScreen === true ? 6 : 4}
      sx={{ backgroundImage: `url(${imgSrc})`, height: '400px' }}>
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
        {userLoggedIn &&
          (!inFavorite ? (
            <IconButton>
              <ImageIconSizeBigger
                src={Favorite}
                alt="Favorite Icon"
                sx={{ marginRight: '20px' }}
                onClick={handleFavorite}
              />
            </IconButton>
          ) : (
            <IconButton>
              <ImageIconSizeBigger
                src={InFavorite}
                alt="Favorite Icon"
                sx={{ marginRight: '20px' }}
                onClick={handleFavorite}
              />
            </IconButton>
          ))}
      </BoxFlexCenterSpaceBetween>

      <Box sx={{ marginTop: '0px', margin: '20px' }}>
        {(popular ?? false) && <PopularBanner />}
        <TypographyExtraBold>{name}</TypographyExtraBold>
        <TypographyMedium>{newDate}</TypographyMedium>
        <ExtendedBoxFontSize>
          <PlaceOutlinedIcon />
          <Typography>{place}</Typography>
        </ExtendedBoxFontSize>
      </Box>
    </MobileEventBannerGrid>
  );
};

export default EventBanner;
