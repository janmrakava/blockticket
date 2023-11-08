import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const PopularBanner: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FF0051 !important',
        color: '#fff',
        width: '180px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Typography sx={{ fontSize: '15px', fontWeight: 'bold', margin: '10px' }}>
        <FormattedMessage id="app.eventbanner.popular" />
      </Typography>
    </Box>
  );
};

export default PopularBanner;
