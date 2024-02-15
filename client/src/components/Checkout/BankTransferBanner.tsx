import { memo } from 'react';

const BankTransfer: React.FC = () => {
  return (
    <>
      <h1>Bank Transfer</h1>
      <p>Bank transfer</p>
    </>
  );
};

export const BankTransferBanner = memo(BankTransfer);
