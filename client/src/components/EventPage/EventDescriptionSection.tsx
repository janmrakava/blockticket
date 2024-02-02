import { FormattedMessage } from 'react-intl';
import { EventDescriptionSectionHeading, EventDescriptionSectionText } from '../OneEvent/styled';
import { Box, Button } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

/* eslint-disable react/prop-types */
interface IEventDescriptionSectionProps {
  sectionNumber: string;
  name: string;
  text: string;
}

const EventDescriptionSection: React.FC<IEventDescriptionSectionProps> = ({
  sectionNumber,
  name,
  text
}) => {
  return <></>;
};

export default EventDescriptionSection;
