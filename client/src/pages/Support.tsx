import { FormattedMessage } from 'react-intl';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { SupportGrid } from '../styles/supportStyles';
import SupportBanner from '../components/Support/SupportBanner';

const Support: React.FC = () => {
  const supportSections = [
    'ordertickets',
    'paymentdelivery',
    'cancelledevents',
    'myaccount',
    'ticketfast',
    'tickettransfer',
    'resale',
    'duplicates',
    'giftcards',
    'collectortickets',
    'accesibletickets'
  ];

  const supportBanners = supportSections.map((section, index) => {
    return <SupportBanner text={section} key={index} />;
  });
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
      {supportBanners}
    </SupportGrid>
  );
};

export default Support;
