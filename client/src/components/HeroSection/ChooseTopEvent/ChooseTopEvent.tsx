import React, { useState } from 'react';
import HeadingInput from './HeadingInput';
import ChooseTypeEventsButton from './ChooseTypeEventsButton';
import { Grid } from '@mui/material';

const ChooseTopEvent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('sport');

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <HeadingInput />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <ChooseTypeEventsButton type="music" activeButton={activeButton} />
        <ChooseTypeEventsButton type="sport" activeButton={activeButton} />
        <ChooseTypeEventsButton type="family" activeButton={activeButton} />
        <ChooseTypeEventsButton type="vip" activeButton={activeButton} />
        <ChooseTypeEventsButton type="arts" activeButton={activeButton} />
      </Grid>
    </Grid>
  );
};

export default ChooseTopEvent;
