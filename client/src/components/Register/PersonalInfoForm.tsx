import { Box, Typography } from '@mui/material';
import { memo } from 'react';

const PersonalForm: React.FC = () => {
  return (
    <Box>
      <Typography>Personal Information</Typography>
    </Box>
  );
};

export const PersonalInfoForm = memo(PersonalForm);
