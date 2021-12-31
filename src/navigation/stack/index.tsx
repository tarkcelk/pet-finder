import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import * as Pages from 'pages';
import {PageConfig} from 'types/pages';

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {header: () => null};

const AuthStackNavigator = () => {
  return <StackScreens screens={[Pages.SignIn, Pages.SignUp]} />;
};

const ProfileStackNavigator = () => {
  return <StackScreens screens={[Pages.Profile]} />;
};

const HomeStackNavigator = () => (
  <StackScreens
    screens={[Pages.Landing, Pages.Home, Pages.PetDetail, Pages.Publish]}
  />
);

const FavoritesStackNavigator = () => (
  <StackScreens screens={[Pages.Favorites, Pages.PetDetail]} />
);

const PublishedsStack = () => (
  <StackScreens screens={[Pages.Publisheds, Pages.PetDetail]} />
);

type Props = {
  screens: PageConfig[];
};
const StackScreens: React.FC<Props> = ({screens}) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {screens.map((screen: PageConfig) => (
        <Stack.Screen name={screen.Name} component={screen.PageContainer} />
      ))}
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  AuthStackNavigator,
  FavoritesStackNavigator,
  PublishedsStack,
  ProfileStackNavigator,
};
