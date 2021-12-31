import {CommonActions} from '@react-navigation/routers';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params: object = {}) => {
  navigationRef.isReady() &&
    navigationRef.navigate(name as never, params as never);
};

export const getCurrentRoute = () => {
  return navigationRef?.getCurrentRoute();
};

export const reset = (routes: []) => {
  navigationRef.isReady() &&
    navigationRef.dispatch(CommonActions.reset({index: 0, routes}));
};
