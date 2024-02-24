import { memo } from 'react';

const FormPassword: React.FC = () => {
  return (
    <>
      <h1>Password Information</h1>
      <p>password informace</p>
    </>
  );
};

export const PasswordForm = memo(FormPassword);
