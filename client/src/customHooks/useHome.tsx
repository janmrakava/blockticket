import { useState } from 'react';

export const useHome = (): any => {
  const [activeButton, setActiveButton] = useState<string>('music');

  const handleChangeActiveButton = (newState: string): void => {
    setActiveButton(newState);
  };

  return {
    activeButton,
    handleChangeActiveButton
  };
};
