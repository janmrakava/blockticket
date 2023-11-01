import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '@mui/material';
import useStyles from '../../../styles/styles';

interface IChooseTypeEventProps {
  type: string;
  activeButton: string;
}

const ChooseTypeEventsButton: React.FC<IChooseTypeEventProps> = ({ type, activeButton }) => {
  const classes = useStyles();
  const classBtn =
    activeButton === type ? classes.chooseTypeEventButtonActive : classes.chooseTypeEventButton;
  return (
    <>
      <Button className={classBtn}>
        <FormattedMessage id={`app.navigation.${type}`} />
      </Button>
    </>
  );
};

export default ChooseTypeEventsButton;
