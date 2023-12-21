import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SupportGrid = styled(Grid)`
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const UserSettingsMenuGrid = styled(Grid)`
  border: 1px solid #80797b;
  padding: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: space-around;

  & > div {
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: 600px) {
    & > div {
      flex-wrap: nowrap;
    }
  }
  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #80797b;
    border-radius: 1px;
  }

  &::-webkit-scrollbar-track {
    background-color: #afafbd;
    border-radius: 1px;
  }
`;
