/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import { memo } from 'react';

const ResultRegistration: React.FC<IResultRegistrationProps> = ({ result }) => {
  return (
    <>
      {result && <Typography>Úspěšná registrace</Typography>}
      {!result && <Typography>Neúspěšná registrace</Typography>}
    </>
  );
};

export const RegistrationResult = memo(ResultRegistration);
