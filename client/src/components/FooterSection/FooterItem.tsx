import { Box, Button, Grow, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import React from 'react';
import { FormattedMessage } from 'react-intl';

interface IFooterItemProps {
  name: string;
  showOptions: boolean;
  handleChangeShow: (type: string) => void;
}

const FooterItem: React.FC<IFooterItemProps> = ({ name, showOptions, handleChangeShow }) => {
  return (
    <Box>
      <Box
        sx={{
          color: '#017CCC',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontWeight: 'bold'
        }}>
        <FormattedMessage id={`app.footer.${name}`} />
        <Button
          onClick={() => {
            handleChangeShow(name);
          }}>
          <Typography
            sx={{
              transform: showOptions ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s ease'
            }}>
            <KeyboardArrowDownIcon fontSize="large" />
          </Typography>
        </Button>
      </Box>
      <Box sx={{ display: showOptions ? 'flex' : 'none' }}>
        <Grow
          in={showOptions}
          style={{ transformOrigin: '0 0 0' }}
          {...(showOptions ? { timeout: 1000 } : { timeout: 1000 })}>
          <Box>
            <Typography>Čau</Typography>
            <Typography>Čau</Typography>
            <Typography>Čau</Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
};

export default FooterItem;
