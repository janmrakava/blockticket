import React, { useState } from 'react';
import { Box, FormControl, MenuItem, Typography } from '@mui/material';
import CZFlag from '../../../../public/CZ.png';
import SKFlag from '../../../../public/SK.png';
import { FormattedMessage } from 'react-intl';
import { ChooseTopFlagImg, SelectCountry } from '../../../styles/styles';

import '../../../pages/App.css';

const HeadingInput: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Czech');

  /*   const handleChange = (event: SelectChangeEvent<string>): void => {
    setSelectedCountry(event.target.value);
  }; */

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
          md: 'row',
          lg: 'row'
        },
        alignItems: 'center',
        gap: '20px',
        justifyContent: 'center',
        marginBottom: '50px'
      }}>
      <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '40px' }}>
        Top Events
      </Typography>
      <FormControl>
        <SelectCountry
          value={selectedCountry}
          onChange={(event) => {
            setSelectedCountry(event.target.value as string);
          }}
          MenuProps={{
            MenuListProps: {
              disablePadding: true
            }
          }}>
          <MenuItem
            value="Czech"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              background: '#131021 !important'
            }}>
            <ChooseTopFlagImg src={CZFlag} alt="Czech republic" />
            <span style={{ color: '#fff' }}>
              <FormattedMessage id="app.choosetop.czech" />
            </span>
          </MenuItem>
          <MenuItem
            value="Slovak"
            sx={{ display: 'flex', color: '#fff', background: '#131021 !important' }}>
            <ChooseTopFlagImg src={SKFlag} alt="Slovak republic" />
            <span style={{ color: '#fff' }}>
              <FormattedMessage id="app.choosetop.slovak" />
            </span>
          </MenuItem>
        </SelectCountry>
      </FormControl>
    </Box>
  );
};

export default HeadingInput;
