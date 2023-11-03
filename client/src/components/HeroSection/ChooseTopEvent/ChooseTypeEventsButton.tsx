import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '@mui/material';
import useStyles from '../../../styles/styles';

interface IChooseTypeEventProps {
  type: string;
  activeButton: string;
  makeButtonActive: (newActive: string) => void;
}

const ChooseTypeEventsButton: React.FC<IChooseTypeEventProps> = ({
  type,
  activeButton,
  makeButtonActive
}) => {
  const classes = useStyles();
  const classBtn =
    activeButton === type ? classes.chooseTypeEventButtonActive : classes.chooseTypeEventButton;
  return (
    <>
      <Button
        className={classBtn}
        onClick={() => {
          makeButtonActive(type);
        }}
      >
        <FormattedMessage id={`app.navigation.${type}`} />
      </Button>
    </>
  );
};

export default ChooseTypeEventsButton;
