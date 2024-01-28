import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

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
`;
