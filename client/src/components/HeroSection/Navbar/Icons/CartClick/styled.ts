import { Box } from '@mui/material';
import styled from 'styled-components';

export const IconButtonBox = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const CartBox = styled(Box)`
  position: absolute;
  top: 100%;
  width: 350px;
  margin-top: 10px;
  min-height: 200px;
  background-color: #131021;
  border: 1px solid #025ab3;
  border-radius: 10px;
  color: #fff;
`;
