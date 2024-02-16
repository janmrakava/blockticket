import { Box, Divider, Input, InputAdornment, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { type RootState } from '../../pages/store';
import { BankBanner } from './BankBanner';

interface IBanks {
  name: string;
  imgSrc: string;
}

const BankTransfer: React.FC = () => {
  const banks: IBanks[] = [
    { name: 'Airbank', imgSrc: 'airbank.png' },
    { name: 'Banka Creditas', imgSrc: 'creditas.png' },
    { name: 'Česká spořitelna', imgSrc: 'ceska_sporitelna.png' },
    { name: 'ČSOB', imgSrc: 'csob.png' },
    { name: 'Fio banka', imgSrc: 'fio.png' },
    { name: 'Komerční banka', imgSrc: 'komercni_banka.png' },
    { name: 'mBank', imgSrc: 'mbank.png' },
    { name: 'Moneta', imgSrc: 'moneta.png' },
    { name: 'PPF Banka', imgSrc: 'ppf.png' },
    { name: 'Raiffeisen Bank', imgSrc: 'raiffeisen.png' },
    { name: 'Trinity bank', imgSrc: 'trinity.png' },
    { name: 'Unicredit Bank', imgSrc: 'unicredit.png' }
  ];

  const renderBanks = banks.map((bank, index) => {
    return (
      <Box key={index}>
        <BankBanner name={bank.name} imgSrc={bank.imgSrc} key={index} />
        <Divider sx={{ background: '#80797B', margin: '10px' }} />
      </Box>
    );
  });
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const [matchedBanks, setMatchedBanks] = useState<IBanks[]>();
  const [userInput, setUserInput] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(event.target.value);
    const myBank = banks.filter((bank) => bank.name.toLowerCase().includes(event.target.value));
    setMatchedBanks(myBank);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography>
        <FormattedMessage id="app.checkoutpage.banktransfertext" />
      </Typography>
      <Input
        placeholder={appLanguage === 'cs' ? 'Vaše banka' : 'Your bank'}
        onChange={handleChange}
        value={userInput}
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
      {matchedBanks != null && matchedBanks.length > 0 ? (
        matchedBanks.map((bank, index) => {
          return (
            <Box key={index}>
              <BankBanner name={bank.name} imgSrc={bank.imgSrc} key={index} />
              <Divider sx={{ background: '#80797B', margin: '10px' }} />
            </Box>
          );
        })
      ) : userInput !== '' ? (
        <Typography sx={{ marginTop: '10px' }}>
          <FormattedMessage id="app.checkoutpage.notsupported" />
        </Typography>
      ) : (
        renderBanks.slice(0, 3)
      )}
    </Box>
  );
};

export const BankTransferBanner = memo(BankTransfer);
