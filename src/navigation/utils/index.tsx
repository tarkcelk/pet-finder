import React from 'react';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {PageConfig} from 'types/pages';
import {Icon} from 'elements';

export const getOptionsByPage = (page: PageConfig): DrawerNavigationOptions => {
  const options: DrawerNavigationOptions = {
    drawerLabel: page.DisplayName,
    drawerIcon: () => <Icon name={page.IconName ?? 'paw'} />,
  };
  return options;
};

export const getOptions = (): DrawerNavigationOptions => ({
  header: () => null,
  drawerInactiveBackgroundColor: '#FFF',
  drawerActiveBackgroundColor: '#F4DCA8',
  drawerActiveTintColor: '#000',
  drawerLabelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerStyle: {
    backgroundColor: '#FFF',
  },
});
