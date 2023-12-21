import React from 'react';
import { UserSettingsMenuGrid } from '../../styles/supportStyles';
import UserSettingsMenuItem from './UserSettingsMenuItem';

const UserSettingsMenu: React.FC = () => {
  return (
    <UserSettingsMenuGrid container>
      <UserSettingsMenuItem route="settings" nameToRender="Settings" />
      <UserSettingsMenuItem route="myTickets" nameToRender="My Tickets" />
      <UserSettingsMenuItem route="previousOrders" nameToRender="Previous Orders" />
      <UserSettingsMenuItem route="support" nameToRender="Support" />
      <UserSettingsMenuItem route="favorites" nameToRender="Favorites" />
      <UserSettingsMenuItem route="logout" nameToRender="Logout" />
    </UserSettingsMenuGrid>
  );
};

export default UserSettingsMenu;
