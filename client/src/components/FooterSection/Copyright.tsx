import React from 'react';
import { Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { FormattedMessage } from 'react-intl';

const Copyright: React.FC = () => {
  return (
    <>
      <Typography sx={{ display: 'flex', gap: '10px', color: '#4B4958', justifyContent: 'center' }}>
        <CopyrightIcon />
        <FormattedMessage id="app.footer.copyright" />
      </Typography>
    </>
  );
};

export default Copyright;
