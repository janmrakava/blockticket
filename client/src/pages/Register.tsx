import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { RegisterLogo } from '../components/Register/RegisterLogo';

const Register: React.FC = () => {
  return (
    <Grid container sx={{ color: '#fff' }}>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '20px',
          textAlign: 'center'
        }}>
        <RegisterLogo />
        <Typography sx={{ fontSize: '15px', marginTop: '20px' }}>
          <FormattedMessage id="app.registerpage.text" />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
