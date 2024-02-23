import { Alert, Grid, Input, Typography, Snackbar, Button, Box } from '@mui/material';
import { LogoLogin } from '../components/Login/LoginLogo';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from './store';
import { FormattedMessage } from 'react-intl';

interface ILoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<ILoginData>({
    email: '',
    password: ''
  });
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const handleClick = (): void => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
    }, 5000);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (): void => {
    /**
     * todo login logic
     */
    console.log('Send data to server');
    console.log('email: ', loginData.email);
    console.log('password: ', loginData.password);
  };
  return (
    <Grid container sx={{ color: '#fff' }}>
      <Grid item xs={12} md={12} lg={12}>
        <LogoLogin />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Input
            id="e-mail"
            placeholder={appLanguage === 'cs' ? 'E-mailová adresa' : 'E-mail'}
            name="email"
            value={loginData.email}
            onChange={handleChange}
            sx={{
              background: '#4B4958',
              color: '#80797B',
              padding: '5px',
              width: '353px',
              height: '60px',
              borderRadius: '10px',
              paddingLeft: '20px',
              fontSize: '20px',
              marginTop: '50px'
            }}
          />
          <Input
            id="password"
            placeholder={appLanguage === 'cs' ? 'Heslo' : 'Password'}
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            sx={{
              background: '#4B4958',
              color: '#80797B',
              padding: '5px',
              width: '353px',
              height: '60px',
              borderRadius: '10px',
              paddingLeft: '20px',
              fontSize: '20px',
              marginTop: '20px'
            }}
          />
        </form>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: appLanguage === 'cs' ? '220px' : '200px',
          marginTop: '10px'
        }}>
        <Typography
          sx={{ fontSize: '15px', color: '#80797B', fontWeight: 500, cursor: 'pointer' }}
          onClick={handleClick}>
          <FormattedMessage id="app.loginpage.forgotpassword" />
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            width: '353px',
            height: '50px',
            fontSize: '20px',
            fontWeight: 800,
            textTransform: 'capitalize'
          }}>
          Login
        </Button>
      </Grid>
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
          fontSize: '20px',
          color: '#80797B'
        }}>
        <Typography>
          <FormattedMessage id="app.loginpage.orloginwith" />
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
            marginTop: '20px',
            marginBottom: '50px'
          }}>
          <img
            src="/social_icons/facebook.png"
            alt="Facebook icon"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          />
          <img
            src="/social_icons/google.png"
            alt="Google icon"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          />
          <img
            src="/social_icons/twitter.png"
            alt="Twitter icon"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          />
        </Box>
      </Grid>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
          {appLanguage === 'cs'
            ? 'Funkcionalita v současný okamžik nefunguje'
            : 'Functionality is currently not working'}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Login;