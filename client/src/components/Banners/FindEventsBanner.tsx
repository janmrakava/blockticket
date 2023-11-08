import { Box, Grid, Typography } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import SelectComponent from './SelectComponent';
import { BoxFlexRow, FindBannerBox, GridFindBanner } from '../../styles/styles';

enum EventTypes {
  MUSIC = 'MUSIC',
  SPORT = 'SPORT',
  VIP = 'VIP',
  FAMILY = 'FAMILY',
  ART = 'ART'
}
enum TimeTypes {
  WEEK = 'WEEK',
  WEEKEND = 'WEEKEND',
  MONTH = 'MONTH'
}

const FindEventsBanner: React.FC = () => {
  /**
   * *DEBUG later get array cities from BE
   */
  const citiesArray = [
    'Praha, CZ',
    'Brno, CZ',
    'Košice, SK',
    'Bratislava, SK',
    'Plzeň, CZ',
    'Ostrava, CZ'
  ];

  const [choosedCity, setChoosedCity] = useState<string>(citiesArray[0]);
  const [chooseEventType, setChooseEventType] = useState<string>(EventTypes.MUSIC);
  const [choosedTime, setChoosedTime] = useState<string>(TimeTypes.WEEKEND);

  const handleCityChange = (newActive: string): void => {
    setChoosedCity(newActive);
  };

  const handleEventTypeChange = (newActive: string): void => {
    setChooseEventType(newActive);
  };
  const handleTimeTypeChange = (newActive: string): void => {
    setChoosedTime(newActive);
  };

  return (
    <GridFindBanner container>
      <Grid item xs={12} md={12} lg={12}>
        <FindBannerBox>
          <PlaceOutlinedIcon />
          <SelectComponent
            active={choosedCity}
            valueArray={citiesArray}
            handleStateChange={handleCityChange}
            type="city"
          />
        </FindBannerBox>
        <Box sx={{ display: { xs: 'block', md: 'block', lg: 'flex' } }}>
          <BoxFlexRow>
            <Typography
              sx={{ fontSize: { xs: '25px', lg: '35px' }, fontWeight: { xs: 'bold', lg: '900' } }}>
              <FormattedMessage id="app.findbanner.find" />
            </Typography>
            <SelectComponent
              active={chooseEventType}
              handleStateChange={handleEventTypeChange}
              type="event"
              enumValues={Object.values(EventTypes)}
            />
          </BoxFlexRow>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: { xs: '60px', md: '60px', lg: '10px' }
            }}>
            <Typography
              sx={{ fontSize: { xs: '25px', lg: '35px' }, fontWeight: { xs: 'bold', lg: '900' } }}>
              <FormattedMessage id="app.findbanner.this" />
            </Typography>
            <SelectComponent
              active={choosedTime}
              handleStateChange={handleTimeTypeChange}
              type="time"
              enumValues={Object.values(TimeTypes)}
            />
          </Box>
        </Box>
      </Grid>
    </GridFindBanner>
  );
};

export default FindEventsBanner;
