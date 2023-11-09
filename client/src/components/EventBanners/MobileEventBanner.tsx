/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import PopularBanner from './PopularBanner';
import {
  BoxFlexCenterSpaceBetween,
  BoxFlexRowCenter,
  EventBannerGridContainer,
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
import FavoritesDark from '../../../public/icons_imgs/FavoritesDark.png';
import { FormattedMessage } from 'react-intl';

interface IEventProps {
  name: string;
  date: Date;
  place: string;
  popular: boolean;
  ticketsSold: number;
  imgSrc: string;
}

const EventBanner: React.FC<IEventProps> = ({
  name,
  date,
  place,
  popular,
  ticketsSold,
  imgSrc
}) => {
  const newDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  const ticketSoldUpdated =
    ticketsSold > 1000 ? `${(ticketsSold / 1000).toFixed(1)}K` : ticketsSold;
  return (
    <>
      <EventBannerGridContainer container sx={{ backgroundImage: `url(${imgSrc})` }}>
        <MobileEventBannerGrid item xs={12}>
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
            <ImageIconSizeBigger
              src={FavoritesDark}
              alt="Favorite Icon"
              sx={{ marginRight: '20px' }}
            />
          </BoxFlexCenterSpaceBetween>

          <Box sx={{ marginTop: '0px', margin: '20px' }}>
            <PopularBanner />
            <TypographyExtraBold>{name}</TypographyExtraBold>
            <TypographyMedium>{newDate}</TypographyMedium>
            <ExtendedBoxFontSize>
              <PlaceOutlinedIcon />
              <Typography>{place}</Typography>
            </ExtendedBoxFontSize>
          </Box>
        </MobileEventBannerGrid>
      </EventBannerGridContainer>
    </>
  );
};

export default EventBanner;
