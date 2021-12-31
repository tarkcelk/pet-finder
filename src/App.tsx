import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state/store';
import NavigationRouter from './navigation/router';
import {navigationRef} from './utils/navigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  React.useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <NavigationRouter />
      </NavigationContainer>
    </Provider>
  );
}
