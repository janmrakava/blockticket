/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Divider, Grid, MenuItem, Select, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LandingPage from '../../public/landing_3.jpeg';

export const LogoImg = styled('img')`
  width: 50px;
  height: 50px;
  margin-left: 20px;
`;

export const LogoImgTextMedium = styled('img')`
  width: 60px;
  height: 60px;
  margin-left: 20px;
`;

export const LogoImgText = styled('img')`
  margin-left: 20px;
`;

export const HeroSection = styled(Box)`
  min-height: 852px;
  background-image: url(${LandingPage});
  background-size: cover;
  background-position: center;
`;

export const DividerThinner = styled(Divider)`
  background-color: #80797b;
  border-bottom-width: 0.1rem;
  marginbottom: 20px;
`;
export const DividerThicker = styled(Divider)`
  background-color: #80797b;
  border-bottom-width: 3px;
`;

export const ImgCartEvent = styled('img')`
  width: 100px;
  height: 100px;
  marginleft: 0px;
`;

export const SelectCountry = styled(Select)`
  display: flex;
  gap: 20px;
  color: #fff;
`;

export const ChooseTopFlagImg = styled('img')`
  border-radius: 50%;
  width: 24px;
  margin-right: 20px;
  color: #fff;
  background: #131021;
`;
export const ChooseTypeEventButtonActive = styled(Button)`
  background: linear-gradient(90deg, rgba(2, 90, 179, 1) 0%, rgba(1, 174, 247, 1) 100%);
  color: #fff;
  border-radius: 90px;
  padding: 10px 15px;
`;

export const ChooseTypeEventButton = styled(Button)`
  color: #fff;
  font-weight: bold;
`;

export const SelectComp = styled(Select)`
  background: #131021;
  border-radius: 90px;
  background: linear-gradient(90deg, rgba(2, 90, 179, 1) 0%, rgba(1, 174, 247, 1) 100%);
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  padding: 3px 20px;
`;
export const MenuItemChooseType = styled(MenuItem)`
  display: flex;
  justify-content: center;
  color: #fff;
  background: #131021 !important;
`;

export const FavoriteBannerGrid = styled(Grid)`
  background: linear-gradient(90deg, rgba(2, 90, 179, 1) 0%, rgba(1, 174, 247, 1) 100%);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TypographyFavoriteBannerHeader = styled(Typography)`
  color: #fff;
  font-weight: 900;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  white-space: pre-line;
`;

export const TypographyFavoriteBannerText = styled(Typography)`
  color: #fff;
  margin: 10px 20px;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 50px;
`;

export const GridFavoriteBanner = styled(Grid)`
  color: #fff;
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FavoriteBannerButton = styled(Button)`
  color: #017ccc;
  background: #fff;
  font-weight: 900;
  border-radius: 70px;
  padding: 10px 30px;
`;

export const MobileBannerTypographyHeading = styled(Typography)`
  color: #fff;
  font-weight: 900;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  white-space: pre-line;
  letter-spacing: 5px;
`;

export const MobileBannerTypographyText = styled(Typography)`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin: 25px 0px;
`;

export const BuyMoreTypographyHeading = styled(Typography)`
  color: #fff;
  font-weight: bold;
  letter-spacing: 5px;
`;

export const BuyMoreTypographyText = styled(Typography)`
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  margin-top: 20px;
`;

export const GridFindBanner = styled(Grid)`
  background: linear-gradient(
    90deg,
    rgba(17, 18, 39, 1) 0%,
    rgba(0, 93, 137, 1) 22%,
    rgba(0, 93, 137, 1) 50%,
    rgba(0, 93, 137, 1) 50%,
    rgba(17, 18, 39, 1) 100%
  );
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FindBannerBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BoxFlexRow = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FooterCopyrightTypography = styled(Typography)`
  display: flex;
  gap: 10px;
  color: #4b4958;
  justify-content: center;
`;

export const FooterItemBox = styled(Box)`
  color: #017ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

export const FooterTypographyHeading = styled(Typography)`
  color: #017ccc;
  font-weight: 900;
  font-size: 30px;
`;

export const FooterGridFlex = styled(Grid)`
  display: flex;
  color: #fff;
  justify-content: space-between;
`;

export const FooterGridMargin = styled(Grid)`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;
