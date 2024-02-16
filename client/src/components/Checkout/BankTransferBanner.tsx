import { Box, Divider, Input, InputAdornment, Typography } from '@mui/material';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { type RootState } from '../../pages/store';
import { BankBanner } from './BankBanner';

const BankTransfer: React.FC = () => {
  const banks = [
    { name: 'Česká spořitelna', imgSrc: 'ceska_sporitelna.png' },
    { name: 'ČSOB', imgSrc: 'csob.png' },
    { name: 'Airbank', imgSrc: 'airbank.png' },
    { name: 'Banka Creditas', imgSrc: 'creditas.png' },
    { name: 'Fio banka', imgSrc: 'fio.png' },
    { name: 'Komerční banka', imgSrc: 'komercni_banka.png' },
    { name: 'mBank', imgSrc: 'mbank.png' },
    { name: 'Moneta', imgSrc: 'moneta.png' },
    { name: 'PPF Banka', imgSrc: 'ppf.png' },
    { name: 'Trinity bank', imgSrc: 'trinity.png' },
    { name: 'Unicredit Bank', imgSrc: 'unicredit.png' },
    { name: 'Raiffeisen Bank', imgSrc: 'raiffeisen.png' }
  ];

  const renderBanks = banks.map((bank, index) => {
    return <BankBanner name={bank.name} imgSrc={bank.imgSrc} key={index} />;
  });
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography>
        <FormattedMessage id="app.checkoutpage.banktransfertext" />
      </Typography>
      <Input
        placeholder={appLanguage === 'cs' ? 'Vaše banka' : 'Your bank'}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        sx={{
          color: '#80797B',
          padding: '10px',
          width: '100%',
          marginTop: '10px',
          background: '#4B4958'
        }}
      />
      {renderBanks}
    </Box>
  );
};

export const BankTransferBanner = memo(BankTransfer);
