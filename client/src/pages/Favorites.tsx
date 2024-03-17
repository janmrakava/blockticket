import { Grid } from '@mui/material';
import UserSettingsMenu from '../components/UserSettings/UserSettingsMenu';

const Favorites: React.FC = () => {
  return (
    <Grid container sx={{ maxWidth: '1228px', margin: '0 auto', color: '#fff' }}>
      <UserSettingsMenu active="favorites" />

      <h1>fABORIT EVNT</h1>
      <p>helell</p>
    </Grid>
  );
};

export default Favorites;
