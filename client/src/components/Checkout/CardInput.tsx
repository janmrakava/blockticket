import { memo } from 'react';

const CardInput: React.FC = () => {
  return (
    <>
      <h1>Card</h1>
      <p>text</p>
    </>
  );
};

export const CardBanner = memo(CardInput);
