/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Divider, MenuItem, Select } from '@mui/material';
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
/* 
const styles = (theme: Theme) => {
  return {    
    


 

      background: 'linear-gradient(90deg, rgba(2,90,179,1) 0%, rgba(1,174,247,1) 100%)',
      color: '#fff !important',
      borderRadius: '90px !important',
      height: '39px !important',
      width: '150px !important',
      fontWeight: 'bold !important',
      fontSize: '20px !important'
    },
    menuItemChooseType: {
      
    },
    imgCartEvent: {
    
    },
    footerHeading: {
      color: '#017CCC'
    },
    footerIcons: {
      width: '24px'
    },
    favoriteBanner: {
      background: 'linear-gradient(90deg, rgba(2,90,179,1) 0%, rgba(1,174,247,1) 100%)'
    },
    findBanner: {
      background:
        'linear-gradient(90deg, rgba(17,18,39,1) 0%, rgba(0,93,137,1) 22%, rgba(0,93,137,1) 50%, rgba(0,93,137,1) 50%, rgba(17,18,39,1) 100%)',
      padding: '20px !important'
    },
    selectType: {
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none !important'
      },
      '&:focus': {
        background: '#80797B !important'
      },
      '&:checked': {
        background: 'yellow !important'
      }
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
 */
