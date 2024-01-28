import React from 'react';
import { UserSettingsMenuGrid } from '../../styles/supportStyles';
import UserSettingsMenuItem from './UserSettingsMenuItem';

const UserSettingsMenu: React.FC = () => {
  return (
    <UserSettingsMenuGrid container>
      <UserSettingsMenuItem route="settings" nameToRender="settings" />
      <UserSettingsMenuItem route="myTickets" nameToRender="mytickets" />
      <UserSettingsMenuItem route="previousOrders" nameToRender="previousorders" />
      <UserSettingsMenuItem route="support" nameToRender="support" />
      <UserSettingsMenuItem route="favorites" nameToRender="favorites" />
      <UserSettingsMenuItem route="logout" nameToRender="logout" />
    </UserSettingsMenuGrid>
  );
};

export default UserSettingsMenu;
