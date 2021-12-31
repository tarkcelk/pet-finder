import {
  CREATE_USER_ENDED,
  CREATE_USER_FULFILLED,
  CREATE_USER_REJECTED,
  FETCH_CITIES as FETCH_CITIES_FULFILLED,
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED,
  LOGOUT,
  USER_PENDING,
} from '../constants';
import {AnyAction} from 'redux';

const initialState = {
  error: null,
  userPending: false,
  data: null,
  cities: null,
  userCreated: false,
};

export const UserReducer = (state = initialState, action: AnyAction) => {
  const {type, payload} = action;

  switch (type) {
    case USER_PENDING:
      return {
        ...state,
        error: null,
        userPending: true,
      };
    case FETCH_USER_REJECTED:
      return {
        ...state,
        userPending: false,
        error: payload?.response?.data?.message,
        data: null,
      };
    case FETCH_USER_FULFILLED:
      return {
        userPending: false,
        data: payload,
      };
    case LOGOUT:
      return {
        ...state,
        userPending: false,
        data: null,
      };
    case FETCH_CITIES_FULFILLED:
      return {
        ...state,
        userPending: false,
        cities: payload,
      };
    case CREATE_USER_REJECTED:
      return {
        ...state,
        userPending: false,
        error: payload?.response?.data?.message,
        userCreated: false,
      };
    case CREATE_USER_FULFILLED:
      return {
        ...state,
        userPending: false,
        userCreated: true,
      };
    case CREATE_USER_ENDED:
      return {
        ...state,
        userCreated: false,
      };
    default:
      return state;
  }
};
