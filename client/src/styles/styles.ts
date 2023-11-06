/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles'; // nebo import theme z vaší konfigurace

const styles = (theme: Theme) => {
  return {
    logoImg: {
      width: '50px',
      height: '50px',
      marginLeft: '20px'
    },
    logoImgTextMedium: {
      width: '60px',
      height: '60px',
      marginLeft: '20px'
    },
    logoImgText: {
      marginLeft: '20px'
    },
    heroSection: {
      minHeight: '852px',
      backgroundImage: `url('../../../public/landing_3.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    dividerThinner: {
      backgroundColor: '#80797B',
      borderBottomWidth: '.1rem'
    },
    dividerThicker: {
      backgroundColor: '#80797B',
      borderBottomWidth: '3px'
    },
    chooseTopFlagImg: {
      borderRadius: '50%',
      width: '24px',
      marginRight: '20px',
      color: '#fff'
    },
    selectCountry: {
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      },
      display: 'flex',
      gap: '20px',
      color: '#fff'
    },
    chooseTypeEventButtonActive: {
      background: 'linear-gradient(90deg, rgba(2,90,179,1) 0%, rgba(1,174,247,1) 100%)',
      color: '#fff !important',
      borderRadius: '90px !important',
      padding: '10px 15px !important'
    },
    chooseTypeEventButton: {
      color: '#fff !important',
      fontWeight: 'bold !important'
    },
    selectEventType: {
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none !important'
      },

      background: 'linear-gradient(90deg, rgba(2,90,179,1) 0%, rgba(1,174,247,1) 100%)',
      color: '#fff !important',
      borderRadius: '90px !important',
      height: '39px !important',
      width: '150px !important',
      fontWeight: 'bold !important',
      fontSize: '20px !important'
    },
    menuItemChooseType: {
      '&:focus': {
        background: '#80797B !important'
      },
      '&:checked': {
        background: 'yellow !important'
      },
      display: 'flex !important',
      justifyContent: 'center !important',
      color: '#fff !important',
      background: '#131021 !important',
      bottomBorder: '1px solid red'
    },
    imgCartEvent: {
      width: '100px',
      height: '100px',
      marginLeft: 0
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
        'linear-gradient(90deg, rgba(17,18,39,1) 0%, rgba(0,93,137,1) 22%, rgba(0,93,137,1) 50%, rgba(0,93,137,1) 50%, rgba(17,18,39,1) 100%)'
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
