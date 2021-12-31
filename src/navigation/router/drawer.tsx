import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  AuthStackNavigator,
  FavoritesStackNavigator,
  HomeStackNavigator,
  ProfileStackNavigator,
  PublishedsStack,
} from '../stack';
import {SCREENS} from 'consts';
import * as Pages from 'pages';
import {getOptions, getOptionsByPage} from '../utils';
import {useAppSelector} from 'hooks/redux';

const DrawerNavigator = () => {
  const isSignedIn = useAppSelector(state => !!state.user.data);
  const Drawer = createDrawerNavigator();

  let drawerKeyCounter = 0;
  const getDrawerKeyCounter = () => (drawerKeyCounter += 1);

  return (
    <Drawer.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={getOptions()}>
      {isSignedIn ? (
        <Drawer.Screen
          key={`drawerKey-${getDrawerKeyCounter()}`}
          name={SCREENS.PROFILE}
          component={ProfileStackNavigator}
          options={getOptionsByPage(Pages.Profile)}
        />
      ) : (
        <Drawer.Screen
          key={`drawerKey-${getDrawerKeyCounter()}`}
          name={SCREENS.AUTH}
          component={AuthStackNavigator}
          options={getOptionsByPage(Pages.SignIn)}
        />
      )}
      <Drawer.Screen
        key={`drawerKey-${getDrawerKeyCounter()}`}
        name={SCREENS.HOME}
        component={HomeStackNavigator}
        options={getOptionsByPage(Pages.Home)}
      />
      {isSignedIn && (
        <>
          <Drawer.Screen
            key={`drawerKey-${getDrawerKeyCounter()}`}
            name={SCREENS.PUBLISHEDS}
            component={PublishedsStack}
            options={getOptionsByPage(Pages.Publisheds)}
          />
          <Drawer.Screen
            key={`drawerKey-${getDrawerKeyCounter()}`}
            name={SCREENS.FAVORITES}
            component={FavoritesStackNavigator}
            options={getOptionsByPage(Pages.Favorites)}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
