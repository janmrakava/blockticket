import React, { useState } from 'react';
import HeadingInput from './HeadingInput';
import ChooseTypeEventsButton from './ChooseTypeEventsButton';
import { Grid, type Theme, useMediaQuery, FormControl } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import {
  MenuItemChooseType,
  SelectComp,
  ChooseEventGridCenter,
  ChooseEventGridCenterGap
} from '../../../styles/styles';

const ChooseTopEvent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('sport');

  const isXs = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  const handleActiveButton = (newActive: string): void => {
    setActiveButton(newActive);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <HeadingInput />
      </Grid>
      {isXs ? (
        <ChooseEventGridCenter item xs={12}>
          <FormControl
            sx={{
              textAlign: 'center'
            }}>
            <SelectComp
              value={activeButton}
              onChange={(event) => {
                setActiveButton(event.target.value as string);
              }}
              MenuProps={{
                MenuListProps: {
                  disablePadding: true
                }
              }}
              fullWidth>
              <MenuItemChooseType value="music">
                <FormattedMessage id="app.navigation.music" />
              </MenuItemChooseType>
              <MenuItemChooseType value="sport">
                <FormattedMessage id="app.navigation.sport" />
              </MenuItemChooseType>
              <MenuItemChooseType value="family">
                <FormattedMessage id="app.navigation.family" />
              </MenuItemChooseType>
              <MenuItemChooseType value="vip">
                <FormattedMessage id="app.navigation.vip" />
              </MenuItemChooseType>
              <MenuItemChooseType value="arts">
                <FormattedMessage id="app.navigation.arts" />
              </MenuItemChooseType>
            </SelectComp>
          </FormControl>
        </ChooseEventGridCenter>
      ) : (
        <ChooseEventGridCenterGap item sm={12} md={12} lg={12}>
          <ChooseTypeEventsButton
            type="music"
            activeButton={activeButton}
            makeButtonActive={handleActiveButton}
          />
          <ChooseTypeEventsButton
            type="sport"
            activeButton={activeButton}
            makeButtonActive={handleActiveButton}
          />
          <ChooseTypeEventsButton
            type="family"
            activeButton={activeButton}
            makeButtonActive={handleActiveButton}
          />
          <ChooseTypeEventsButton
            type="vip"
            activeButton={activeButton}
            makeButtonActive={handleActiveButton}
          />
          <ChooseTypeEventsButton
            type="arts"
            activeButton={activeButton}
            makeButtonActive={handleActiveButton}
          />
        </ChooseEventGridCenterGap>
      )}
    </Grid>
  );
};

export default ChooseTopEvent;
