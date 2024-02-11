import { Box } from '@mui/material';
import styled from 'styled-components';

export const PaymentBannerContainer = styled(Box)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 20px;
  min-width: 353px;
  height: 50px;
  background-color: ${(props) => (props.$active ? '#ffffff' : '#131021')};
  color: ${(props) => (props.$active ? '#06020f' : '#ffffff')};
  margin: 10px 20px;
`;
