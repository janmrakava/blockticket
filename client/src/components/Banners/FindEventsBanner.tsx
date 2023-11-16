/* eslint-disable react/prop-types */
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

interface IFindEventsProps {
  cities: Array<{ city: string; countryShortcut: string }> | null;
}

const FindEventsBanner: React.FC<IFindEventsProps> = ({ cities }) => {
  /**
   * *DEBUG later get array cities from BE
   */

  const compareCity = (cityA: { city: string }, cityB: { city: string }): number => {
    return cityA.city.localeCompare(cityB.city);
  };

  cities?.sort(compareCity);

  console.log(cities);

  const [choosedCity, setChoosedCity] = useState<string>(cities?.[0]?.city ?? '');
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
    <GridFindBanner
      container
      spacing={0}
      gap={3}
      sx={{ minHeight: '300px' }}
      alignItems="center"
      justifyContent="center">
      <Grid item xs={12} md={12} lg={12}>
        <FindBannerBox>
          <PlaceOutlinedIcon />
          <SelectComponent
            active={choosedCity}
            valueArray={cities}
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
