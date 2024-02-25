import { useState } from 'react';

export function useRegisterPasswordInfo(): any {
  const [passwordInfo, setPasswordInfo] = useState<IPasswordInfo>({
    password: '',
    passwordAgain: '',
    phoneNumber: ''
  });
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState<boolean>(false);
  const [isPasswordContainSpecial, setIsPasswordContainSpecial] = useState<boolean>(false);
  const [isPasswordContainCapital, setIsPasswordContainCapital] = useState<boolean>(false);
  const [isPasswordContainNumber, setIsPasswordContainNumber] = useState<boolean>(false);

  const specialSymbolRegex = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>/?]+/;
  const containsUpperCaseRegex = /[A-Z]/;
  const containsNumberRegex = /\d/;

  const handleChangePasswordInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    if (name === 'password') {
      setIsPasswordLengthValid(() => value.length >= 8);
      setIsPasswordContainSpecial(() => specialSymbolRegex.test(value));
      setIsPasswordContainCapital(() => containsUpperCaseRegex.test(value));
      setIsPasswordContainNumber(() => containsNumberRegex.test(value));
    }
    setPasswordInfo({ ...passwordInfo, [name]: value });
  };
  return {
    passwordInfo,
    handleChangePasswordInfo,
    isPasswordLengthValid,
    isPasswordContainSpecial,
    isPasswordContainCapital,
    isPasswordContainNumber
  };
}
