import { Button, Divider, Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { RegisterLogo } from '../components/Register/RegisterLogo';
import { StepIndicator } from '../components/Register/StepIndicator';
import { useState } from 'react';
import { PersonalInfoForm } from '../components/Register/PersonalInfoForm';
import { PasswordForm } from '../components/Register/PasswordForm';
import { AddressInfoForm } from '../components/Register/AddressInfoForm';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { RegistrationResult } from '../components/Register/RegistrationResult';

const Register: React.FC = () => {
  const arraySteps = ['personalInfo', 'passwordInfo', 'addressInfo', 'finishedRegistration'];
  const [currentStep, setCurrentStep] = useState<string>(arraySteps[0]);
  const [showResultRegistration, setShowResultRegistration] = useState<boolean>(false);
  const [succesfullRegistration, setSuccesfullRegistration] = useState<boolean>(true);

  const [validInputs, setValidInputs] = useState<boolean>(true);

  const handleNext = (): void => {
    const currentIndex = arraySteps.indexOf(currentStep);
    if (currentIndex !== arraySteps.length - 2) {
      setCurrentStep(arraySteps[currentIndex + 1]);
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

  return (
    <Grid container sx={{ color: '#fff', padding: '20px', maxWidth: '1228px', margin: '0 auto' }}>
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
        <Typography sx={{ fontSize: '18px', fontWeight: 800 }}>
          <FormattedMessage id="app.registerpage.personal" />
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12} sx={{ marginTop: '20px' }}>
        {currentStep === 'personalInfo' && <PersonalInfoForm />}
        {currentStep === 'passwordInfo' && <PasswordForm />}
        {currentStep === 'addressInfo' && <AddressInfoForm />}
        {showResultRegistration && <RegistrationResult result={setSuccesfullRegistration} />}
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
    </Grid>
  );
};

export default Register;
