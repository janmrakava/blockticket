import { memo } from 'react';

const PersonalForm: React.FC = () => {
  return (
    <>
      <h1>Personal Information</h1>
      <p>personalni informace</p>
    </>
  );
};

export const PersonalInfoForm = memo(PersonalForm);
