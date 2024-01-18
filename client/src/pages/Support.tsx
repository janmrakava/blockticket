import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';
import { SupportGrid } from '../styles/supportStyles';

const Support: React.FC = () => {
  return (
    <SupportGrid
      sx={{
        marginLeft: { md: '50px', lg: '250px' },
        marginRight: { md: '50px', lg: '250px' }
      }}>
      <UserSettingsMenu />
      <h1 style={{ margin: 20 }}>Support section</h1>
    </SupportGrid>
  );
};

export default Support;
