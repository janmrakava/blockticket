import { Box, Typography } from '@mui/material';

/* eslint-disable react/prop-types */
interface IEventHeadingProps {
  eventName: string;
}

const EventHeading: React.FC<IEventHeadingProps> = ({ eventName }) => {
  const windowWidth = window.innerWidth;
  const repeatCount = Math.ceil(windowWidth / eventName.length);
  const repeatedTextArray = Array(repeatCount).fill(eventName);
  const repeatedText = repeatedTextArray.join(' * ');
  return (
    <Box
      sx={{
        border: '1px solid red',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}>
      <Typography
        sx={{
          fontFamily: 'Lexend-Zetta',
          fontWeight: 900,
          fontSize: 50,
          textTransform: 'uppercase'
        }}>
        {repeatedText}
      </Typography>
    </Box>
  );
};
export default EventHeading;
