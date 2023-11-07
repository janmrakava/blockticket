import React, { useState } from 'react';
import HeadingInput from './HeadingInput';
import ChooseTypeEventsButton from './ChooseTypeEventsButton';
import { Grid, type Theme, useMediaQuery, Select, MenuItem, FormControl } from '@mui/material';
import useStyles from '../../../styles/styles';
import { FormattedMessage } from 'react-intl';

const ChooseTopEvent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('sport');

  const isXs = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  const handleActiveButton = (newActive: string): void => {
    setActiveButton(newActive);
  };

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <HeadingInput />
      </Grid>
      {isXs ? (
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <FormControl
            sx={{
              textAlign: 'center'
            }}>
            <Select
              value={activeButton}
              sx={{
                '& .MuiSvgIcon-root': {
                  color: 'white'
                }
              }}
              className={classes.selectEventType}
              onChange={(event) => {
                handleActiveButton(event.target.value);
              }}
              MenuProps={{
                MenuListProps: {
                  disablePadding: true
                }
              }}
              fullWidth>
              <MenuItem value="music" className={classes.menuItemChooseType}>
                <FormattedMessage id="app.navigation.music" />
              </MenuItem>
              <MenuItem value="sport" className={classes.menuItemChooseType}>
                <FormattedMessage id="app.navigation.sport" />
              </MenuItem>
              <MenuItem value="family" className={classes.menuItemChooseType}>
                <FormattedMessage id="app.navigation.family" />
              </MenuItem>
              <MenuItem value="vip" className={classes.menuItemChooseType}>
                <FormattedMessage id="app.navigation.vip" />
              </MenuItem>
              <MenuItem value="arts" className={classes.menuItemChooseType}>
                <FormattedMessage id="app.navigation.arts" />
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      ) : (
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
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
        </Grid>
      )}
    </Grid>
  );
};

export default ChooseTopEvent;
