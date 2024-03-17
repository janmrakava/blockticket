/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

interface IUserSettingsMenuItemProps {
  route: string;
  nameToRender: string;
  active: boolean;
}
// eslint-disable-next-line react/prop-types
const UserSettingsMenuItem: React.FC<IUserSettingsMenuItemProps> = ({
  route,
  nameToRender,
  active
}) => {
  console.log('nameToRender: ', nameToRender, ' active: ', active);
  return (
    <Box
      sx={{
        marginLeft: '50px',
        whiteSpace: 'nowrap',
        textDecoration: active ? 'underline' : 'none',
        border: '1px solid red'
      }}>
      <Link to={`/${route}`} style={{ textDecoration: 'none', color: '#fff' }}>
        <FormattedMessage id={`app.usersettingsmenu.${nameToRender}`} />
      </Link>
    </Box>
  );
};

export default UserSettingsMenuItem;
