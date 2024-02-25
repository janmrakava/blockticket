/* eslint-disable react/prop-types */
import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  InputLabel
} from '@mui/material';
import { memo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const FormPassword: React.FC<IPasswordFormProps> = ({
  password,
  passwordAgain,
  phoneNumber,
  handleChange
}) => {
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography>
        <FormattedMessage id="app.registerpage.password" />
      </Typography>
      <form style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <FormControl sx={{ background: '#4B4958', borderRadius: '5px' }}>
          <InputLabel htmlFor="filled-adornment-password">
            {appLanguage === 'cs' ? 'Heslo' : 'Password'}
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
            sx={{ background: '#4B4958', borderRadius: '5px', width: '100%' }}
            inputProps={{
              style: { color: '#80797B' }
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box>
          <Typography sx={{ fontSize: '18px', fontWeight: 800 }}>
            <FormattedMessage id="app.registerpage.passwordrules" />
          </Typography>
          <ul style={{ marginLeft: '30px' }}>
            <li
              style={{
                margin: '5px 0px'
              }}>
              <FormattedMessage id="app.registerpage.passwordlength" />
              <img
                src="/register_page/wrong.png"
                style={{ width: '10px', marginLeft: '20px' }}
                alt="Unfulfilled condition "
              />
            </li>
            <li style={{ margin: '5px 0px' }}>
              <FormattedMessage id="app.registerpage.passwordbigletter" />
              <img
                src="/register_page/wrong.png"
                style={{ width: '10px', marginLeft: '20px' }}
                alt="Unfulfilled condition "
              />
            </li>
            <li style={{ margin: '5px 0px' }}>
              <FormattedMessage id="app.registerpage.passwordspecialsymbol" />
              <img
                src="/register_page/wrong.png"
                style={{ width: '10px', marginLeft: '20px' }}
                alt="Unfulfilled condition "
              />
            </li>
            <li style={{ margin: '5px 0px' }}>
              <FormattedMessage id="app.registerpage.passwordnumber" />
              <img
                src="/register_page/wrong.png"
                style={{ width: '10px', marginLeft: '20px' }}
                alt="Unfulfilled condition "
              />
            </li>
          </ul>
        </Box>
        <FormControl sx={{ background: '#4B4958', borderRadius: '5px' }}>
          <InputLabel htmlFor="filled-adornment-password">
            {appLanguage === 'cs' ? 'Heslo znovu' : 'Password again'}
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="passwordAgain"
            value={passwordAgain}
            onChange={handleChange}
            sx={{ background: '#4B4958', borderRadius: '5px', width: '100%' }}
            inputProps={{
              style: { color: '#80797B' }
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          label={appLanguage === 'cs' ? 'Telefonní číslo' : 'Phone number'}
          variant="filled"
          value={phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          sx={{ background: '#4B4958', borderRadius: '5px' }}
          InputProps={{
            style: { color: '#80797B' }
          }}
          fullWidth
        />
      </form>
    </Box>
  );
};

export const PasswordForm = memo(FormPassword);
