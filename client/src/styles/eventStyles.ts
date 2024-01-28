import { Box, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const movingHeading = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const EventHeadingBox = styled(Box)`
  border: 1px solid #80797b;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EventHeadingTypography = styled(Typography)`
  font-family: 'Lexend-Zetta';
  font-weight: 900;
  font-size: 50px;
  text-transform: uppercase;
  /* animation properties */
  transform: translateX(100%);
  animation: ${movingHeading} 20s linear infinite;
  @media (max-width: 900px) {
    font-size: 25px;
  }
`;
