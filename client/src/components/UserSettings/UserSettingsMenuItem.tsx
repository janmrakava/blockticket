import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface IUserSettingsMenuItemProps {
  route: string;
  nameToRender: string;
}
// eslint-disable-next-line react/prop-types
const UserSettingsMenuItem: React.FC<IUserSettingsMenuItemProps> = ({ route, nameToRender }) => {
  return (
    <Box sx={{ marginLeft: '50px', whiteSpace: 'nowrap' }}>
      <Link to={`/${route}`} style={{ textDecoration: 'none', color: '#fff' }}>
        {nameToRender}
      </Link>
    </Box>
  );
};

export default UserSettingsMenuItem;
