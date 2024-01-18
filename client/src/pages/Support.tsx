import { FormattedMessage } from 'react-intl';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { SupportGrid } from '../styles/supportStyles';
import SupportBanner from '../components/Support/SupportBanner';

const Support: React.FC = () => {
  return (
    <SupportGrid
      sx={{
        marginLeft: { md: '50px', lg: '250px' },
        marginRight: { md: '50px', lg: '250px' }
      }}>
      <UserSettingsMenu />
      <h1 style={{ margin: 20 }}>
        <FormattedMessage id="app.support.heading" />
      </h1>
      <SupportBanner text="ordertickets" />
    </SupportGrid>
  );
};

export default Support;
