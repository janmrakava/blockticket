import { Box, Typography } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const FooterUrl: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Typography>
        <Link to="/privacy" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}>
          <FormattedMessage id="app.footer.privacy" />
          <span>&nbsp;|&nbsp;</span>
        </Link>
        <Link to="/condition" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}>
          <FormattedMessage id="app.footer.condition" />
          <span>&nbsp;|&nbsp;</span>
        </Link>
        <Link to="/faq" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}>
          <FormattedMessage id="app.footer.faq" />
          <span>&nbsp;|&nbsp;</span>
        </Link>
        <Link to="/cookies" style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}>
          <FormattedMessage id="app.footer.cookies" />
          <span>&nbsp;|&nbsp;</span>
        </Link>
        <Link
          to="/cookiemanage"
          style={{ textDecoration: 'none', color: '#fff', fontSize: '14px' }}
        >
          <FormattedMessage id="app.footer.cookiemanage" />
          <span>&nbsp;|&nbsp;</span>
        </Link>
      </Typography>
    </Box>
  );
};

export default FooterUrl;
