/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles'; // nebo import theme z vaší konfigurace

const styles = (theme: Theme) => {
  return {
    logoImg: {
      width: '50px',
      heiht: '50px',
      marginLeft: '20px'
    },
    logoImgTextMedium: {
      width: '60px',
      heiht: '60px',
      marginLeft: '20px'
    },
    logoImgText: {
      marginLeft: '20px'
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
