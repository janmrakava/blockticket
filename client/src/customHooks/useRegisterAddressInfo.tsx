import { useState } from 'react';

export function useRegisterAddressInfo(): any {
  const [addressInfo, setAddressInfo] = useState<IAdressInfo>({
    country: '',
    city: '',
    street: '',
    streetNumber: '',
    zip: ''
  });
  const handleChangeAddressInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setAddressInfo({ ...addressInfo, [name]: value });
  };
  return {
    addressInfo,
    handleChangeAddressInfo
  };
}
