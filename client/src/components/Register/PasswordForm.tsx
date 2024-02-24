import { Typography } from '@mui/material';
import { memo } from 'react';

const FormPassword: React.FC = () => {
  return (
    <>
      <Typography>Password Information</Typography>
    </>
  );
};

export const PasswordForm = memo(FormPassword);
