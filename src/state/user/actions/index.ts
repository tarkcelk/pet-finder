import {$U_City, $U_User} from 'consts/urls';
import {makeRequest} from 'utils/axios';
import {
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED,
  USER_PENDING,
  LOGOUT,
  FETCH_CITIES,
  FETCH_CITIES_REJECTED,
  CREATE_USER_FULFILLED,
  CREATE_USER_REJECTED,
} from '../constants';
import {User} from 'types/entity';
import {ApiResponse, ApiError} from 'types/api';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {navigate} from 'utils/navigation';
import {SCREENS} from 'consts';
import {showAlert} from 'utils/app/alert';

export const fulfilled = (data: User) => ({
  type: FETCH_USER_FULFILLED,
  payload: data,
});

export const rejected = (error: ApiError) => ({
  type: FETCH_USER_REJECTED,
  payload: error,
});

export const createUserFulfilled = (data: User) => ({
  type: CREATE_USER_FULFILLED,
  payload: data,
});

export const createUserRejected = (error: ApiError) => ({
  type: CREATE_USER_REJECTED,
  payload: error,
});

export const pending = () => ({
  type: USER_PENDING,
});

export const logout = () => ({
  type: LOGOUT,
});

export const fetchCities =
  () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      method: 'get',
      url: $U_City.Get,
    })
      .then((response: ApiResponse) =>
        dispatch({
          type: FETCH_CITIES,
          payload: response.data,
        }),
      )
      .catch((error: ApiError) =>
        dispatch({
          type: FETCH_CITIES_REJECTED,
          payload: error,
        }),
      );
  };

export const login =
  (email: string, password: string) =>
  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      method: 'post',
      url: $U_User.Login,
      data: {
        email,
        password,
      },
    })
      .then((response: ApiResponse) => {
        dispatch(fulfilled(<User>response.data));
        navigate(SCREENS.HOME);
      })
      .catch((error: ApiError) => dispatch(rejected(error)));
  };

export const createUser =
  (user: User) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      method: 'post',
      url: $U_User.Create,
      data: user,
    })
      .then((response: ApiResponse) => {
        showAlert(
          'Başarılı',
          `Kullanıcı kaydınız başarılı bir şekilde yapılmıştır , lütfen giriş yapınız.`,
          {
            onPress: () => navigate(SCREENS.SIGN_IN),
            text: 'Tamam',
          },
        );

        dispatch(createUserFulfilled(<User>response.data));
      })
      .catch((error: ApiError) => dispatch(createUserRejected(error)));
  };
