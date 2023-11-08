import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { FormattedMessage } from 'react-intl';
import { FooterCopyrightTypography } from '../../styles/styles';

const Copyright: React.FC = () => {
  return (
    <>
      <FooterCopyrightTypography>
        <CopyrightIcon />
        <FormattedMessage id="app.footer.copyright" />
      </FooterCopyrightTypography>
    </>
  );
};

export default Copyright;
