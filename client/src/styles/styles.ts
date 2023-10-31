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
    menuItem: {
      color: '#fff',
      fontSize: '20px',
      fontWeight: 'bold'
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
