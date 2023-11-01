import { Box, Select, FormControl, MenuItem, type SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import CZFlag from '../../../../public/CZ.png';
import SKFlag from '../../../../public/SK.png';
import { FormattedMessage } from 'react-intl';
import useStyles from '../../../styles/styles';

const HeadingInput: React.FC = () => {
  const classes = useStyles();
  const [selectedCountry, setSelectedCountry] = useState('Czech');

  const handleChange = (event: SelectChangeEvent): void => {
    setSelectedCountry(event.target.value);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        justifyContent: 'center'
      }}>
      <FormControl>
        <Select value={selectedCountry} onChange={handleChange} className={classes.selectCountry}>
          <MenuItem value="Czech" sx={{ display: 'flex', color: '#fff' }}>
            <img src={CZFlag} alt="Czech republic" className={classes.chooseTopFlagImg} />
            <span style={{ color: '#fff' }}>
              <FormattedMessage id="app.choosetop.czech" />
            </span>
          </MenuItem>
          <MenuItem value="Slovak" sx={{ display: 'flex', color: '#fff' }}>
            <img src={SKFlag} alt="Slovak republic" className={classes.chooseTopFlagImg} />
            <span style={{ color: '#fff' }}>
              <FormattedMessage id="app.choosetop.slovak" />
            </span>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default HeadingInput;
