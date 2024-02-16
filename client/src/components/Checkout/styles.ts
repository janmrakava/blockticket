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
export const BankBannerContainer = styled(Box)<{ $active: boolean }>`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 40px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? '#4b4958' : 'none')};

  &:hover {
    background-color: #4b4958;
  }
`;
export const PayBannerContainer = styled(Box)`
  margin: 20px;
  height: 100px;
  background: #4b4958;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
