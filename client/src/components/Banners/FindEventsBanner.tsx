import { Grid } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import SelectComponent from './SelectComponent';
import {
  BoxFlexRow,
  FindBannerBox,
  FindBannerBoxFlex,
  FindBannerBoxMargin,
  FindBannerTypography,
  GridFindBanner
} from '../../styles/styles';

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
        <FindBannerBoxFlex>
          <BoxFlexRow>
            <FindBannerTypography>
              <FormattedMessage id="app.findbanner.find" />
            </FindBannerTypography>
            <SelectComponent
              active={chooseEventType}
              handleStateChange={handleEventTypeChange}
              type="event"
              enumValues={Object.values(EventTypes)}
            />
          </BoxFlexRow>
          <FindBannerBoxMargin>
            <FindBannerTypography>
              <FormattedMessage id="app.findbanner.this" />
            </FindBannerTypography>
            <SelectComponent
              active={choosedTime}
              handleStateChange={handleTimeTypeChange}
              type="time"
              enumValues={Object.values(TimeTypes)}
            />
          </FindBannerBoxMargin>
        </FindBannerBoxFlex>
      </Grid>
    </GridFindBanner>
  );
};

export default FindEventsBanner;
