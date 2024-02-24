/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Snackbar,
  Typography,
  useMediaQuery
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { RegisterLogo } from '../components/Register/RegisterLogo';
import { StepIndicator } from '../components/Register/StepIndicator';
import { useState } from 'react';
import { PersonalInfoForm } from '../components/Register/PersonalInfoForm';
import { PasswordForm } from '../components/Register/PasswordForm';
import { AddressInfoForm } from '../components/Register/AddressInfoForm';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { RegistrationResult } from '../components/Register/RegistrationResult';
import { useTheme } from '@mui/material/styles';

import { checkEmail } from '../api/users/user';

export interface UniqueEmailResult {
  canUse: boolean;
}

const Register: React.FC = () => {
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false);

  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: new Date(),
    gender: ''
  });

  const handleDateChange = (value: Date): void => {
    const dateWithoutTime = new Date(value);
    dateWithoutTime.setHours(0, 0, 0, 0);
    setPersonalInfo({ ...personalInfo, dateOfBirth: dateWithoutTime });
  };

  const isAgeAbove18 = (dateOfBirth: Date): boolean => {
    const today = new Date();
    const diff = today.getTime() - dateOfBirth.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    return age >= 18;
  };

  const isEmailCorrect = async (email: string): Promise<UniqueEmailResult> => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    if (isValidEmail) {
      const isUniqueEmail = await checkEmail(email);
      return isUniqueEmail;
    } else {
      return { canUse: false };
    }
  };

  const handleChangePersonalInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const arraySteps = ['personalInfo', 'passwordInfo', 'addressInfo', 'finishedRegistration'];
  const [currentStep, setCurrentStep] = useState<string>(arraySteps[0]);
  const [showResultRegistration, setShowResultRegistration] = useState<boolean>(false);
  const [succesfullRegistration, setSuccesfullRegistration] = useState<boolean>(true);
  const [warningMessage, setWarningMessage] = useState<string>('');

  const checkPersonalInfo = async (): Promise<boolean> => {
    const validEmail = await isEmailCorrect(personalInfo.email);
    if (!isAgeAbove18(personalInfo.dateOfBirth)) {
      setWarningMessage('invalidage');
      return false;
    } else if (!validEmail.canUse) {
      setWarningMessage('invalidemail');
      return false;
    } else {
      return true;
    }
  };

  const handleNext = async (): Promise<void> => {
    const currentIndex = arraySteps.indexOf(currentStep);
    const isPersonalInfoValid = await checkPersonalInfo();
    if (isPersonalInfoValid) {
      if (currentIndex !== arraySteps.length - 2) {
        setCurrentStep(arraySteps[currentIndex + 1]);
      }
    } else {
      setShowSnackBar(true);
      setTimeout(() => {
        setShowSnackBar(false);
        setWarningMessage('');
        console.log(personalInfo);
      }, 5000);
    }
  };
  const handleBack = (): void => {
    const currentIndex = arraySteps.indexOf(currentStep);
    if (currentIndex !== 0) {
      setCurrentStep(arraySteps[currentIndex - 1]);
    }
  };

  const finishRegistration = (): void => {
    setSuccesfullRegistration(true);
    setCurrentStep('finishedRegistration');
    setShowResultRegistration(true);
  };

  const theme = useTheme();

  const showLogo = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      sx={{
        color: '#fff',
        padding: '20px',
        maxWidth: '1228px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        gap: '70px',
        justifyContent: 'center'
      }}>
      <Box sx={{ width: { xs: '100%', md: '45%', lg: '45%' } }}>
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
          {showLogo && (
            <Box>
              <RegisterLogo />
              <Typography sx={{ fontSize: '15px', marginTop: '20px' }}>
                <FormattedMessage id="app.registerpage.text" />
              </Typography>
            </Box>
          )}
          {!showLogo && <img src="/register_page/image_reg.png" style={{ width: '100%' }} />}
        </Grid>
      </Box>
      <Box sx={{ width: { xs: '100%', md: '45%', lg: '45%' } }}>
        <Grid item xs={12} md={12} lg={12}>
          <StepIndicator active={arraySteps.indexOf(currentStep)} />
        </Grid>
        <Grid item xs={12} md={12} lg={12} sx={{ marginTop: '20px' }}>
          <Typography sx={{ fontSize: '23px', fontWeight: 800 }}>
            <FormattedMessage id="app.registerpage.registerheading" />
          </Typography>
          <Divider sx={{ background: '#80797B', marginTop: '10px' }} />
        </Grid>
        <Grid item xs={12} md={12} lg={12} sx={{ marginTop: '20px' }}>
          {currentStep === 'personalInfo' && (
            <PersonalInfoForm
              firstName={personalInfo.firstName}
              lastName={personalInfo.lastName}
              email={personalInfo.email}
              dateOfBirth={personalInfo.dateOfBirth}
              gender={personalInfo.gender}
              handleChange={handleChangePersonalInfo}
              handleDateChange={handleDateChange}
            />
          )}
          {currentStep === 'passwordInfo' && <PasswordForm />}
          {currentStep === 'addressInfo' && <AddressInfoForm />}
          {showResultRegistration && <RegistrationResult result={succesfullRegistration} />}
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: currentStep !== 'personalInfo' ? 'space-between' : 'flex-end'
          }}>
          {currentStep !== 'personalInfo' && currentStep !== 'finishedRegistration' && (
            <Button variant="contained" onClick={handleBack}>
              <ArrowBackIcon />
            </Button>
          )}

          {currentStep !== 'addressInfo' && currentStep !== 'finishedRegistration' && (
            <Button variant="contained" onClick={handleNext} sx={{ float: 'right' }}>
              <ArrowBackIcon sx={{ transform: 'rotate(180deg)' }} />
            </Button>
          )}

          {currentStep === 'addressInfo' && (
            <Button variant="contained" onClick={finishRegistration} sx={{ float: 'right' }}>
              <FormattedMessage id="app.registerpage.finishregistration" />
            </Button>
          )}
        </Grid>
      </Box>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
          {warningMessage !== '' ? (
            <FormattedMessage id={`app.registerpage.${warningMessage}`} />
          ) : null}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Register;
