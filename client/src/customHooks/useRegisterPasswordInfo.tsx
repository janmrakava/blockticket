import { useState } from 'react';

export function useRegisterPasswordInfo(): any {
  const [passwordInfo, setPasswordInfo] = useState<IPasswordInfo>({
    password: '',
    passwordAgain: '',
    phoneNumber: ''
  });
  const handleChangePasswordInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setPasswordInfo({ ...passwordInfo, [name]: value });
  };
  return {
    passwordInfo,
    handleChangePasswordInfo
  };
}
