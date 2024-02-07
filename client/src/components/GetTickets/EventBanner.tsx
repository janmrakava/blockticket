/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import { memo } from 'react';

const GetTicketsEventBanner: React.FC<EventBannerProps> = ({
  eventImg,
  eventName,
  date,
  place,
  city
}) => {
  return (
    <>
      <Box>
        <img src={eventImg} alt="Image of event" />
      </Box>
      <Box>
        <h1>{eventName}</h1>
        <h3>{date}</h3>
        <h3>{place}</h3>
        <h3>{city}</h3>
      </Box>
    </>
  );
};

export const EventBanner = memo(GetTicketsEventBanner);
