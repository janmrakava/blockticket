import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ChooseTypeEventButton, ChooseTypeEventButtonActive } from '../../../styles/styles';

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
  const typeOfButton = activeButton === type;
  return (
    <>
      {typeOfButton ? (
        <ChooseTypeEventButtonActive
          onClick={() => {
            makeButtonActive(type);
          }}>
          <FormattedMessage id={`app.navigation.${type}`} />
        </ChooseTypeEventButtonActive>
      ) : (
        <ChooseTypeEventButton
          onClick={() => {
            makeButtonActive(type);
          }}>
          <FormattedMessage id={`app.navigation.${type}`} />
        </ChooseTypeEventButton>
      )}
    </>
  );
};

export default ChooseTypeEventsButton;
