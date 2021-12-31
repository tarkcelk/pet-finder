import {
  ADD_TO_FAVORITE_FULFILLED,
  ADD_TO_FAVORITE_REJECTED,
  CREATE_PET_FULFILLED,
  CREATE_PET_REJECTED,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
  FETCH_FAVORITES_FULFILLED,
  FETCH_FAVORITES_REJECTED,
  FETCH_PETS_FULFILLED,
  FETCH_PETS_REJECTED,
  FETCH_PET_DETAIL_FULFILLED,
  FETCH_PET_DETAIL_REJECTED,
  FETCH_SUB_CATEGORIES_FULFILLED,
  FETCH_SUB_CATEGORIES_REJECTED,
  FETCH_USER_PETS_FULFILLED,
  FETCH_USER_PETS_REJECTED,
  PET_PENDING,
  SET_PUBLISH_STATUS_FULFILLED,
  SET_PUBLISH_STATUS_REJECTED,
} from '../constants';
import {AnyAction} from 'redux';

const initialState = {
  error: null,
  petPending: false,
  categories: [],
  subCategories: [],
  list: [],
  createdPet: null,
  detail: {},
  userPets: [],
  favorites: [],
};

export const PetReducer = (state = initialState, action: AnyAction) => {
  const {type, payload} = action;

  switch (type) {
    case PET_PENDING:
      return {
        ...state,
        error: null,
        petPending: true,
      };
    case FETCH_CATEGORIES_FULFILLED:
      return {
        ...state,
        petPending: false,
        categories: payload,
      };
    case FETCH_CATEGORIES_REJECTED:
      return {
        petPending: false,
        error: payload?.response?.data?.message,
        categories: null,
      };
    case FETCH_SUB_CATEGORIES_FULFILLED:
      return {
        ...state,
        petPending: false,
        subCategories: payload,
      };
    case FETCH_SUB_CATEGORIES_REJECTED:
      return {
        ...state,
        petPending: false,
        error: payload?.response?.data?.message,
        subCategories: null,
      };
    case CREATE_PET_FULFILLED:
      return {
        ...state,
        petPending: false,
        createdPet: payload,
      };
    case CREATE_PET_REJECTED:
      return {
        ...state,
        petPending: false,
        error: payload?.response?.data?.message,
        createdPet: null,
      };
    case FETCH_PETS_FULFILLED:
      return {
        ...state,
        petPending: false,
        list: payload,
      };
    case FETCH_PETS_REJECTED:
      return {
        ...state,
        error: payload?.response?.data?.message,
      };
    case FETCH_PET_DETAIL_FULFILLED:
      return {
        ...state,
        petPending: false,
        detail: payload,
      };
    case FETCH_PET_DETAIL_REJECTED:
      return {
        ...state,
        error: payload?.response?.data?.message,
        detail: {},
      };
    case FETCH_USER_PETS_FULFILLED:
      return {
        ...state,
        petPending: false,
        userPets: payload,
      };
    case FETCH_USER_PETS_REJECTED:
      return {
        ...state,
        error: payload?.response?.data?.message,
        userPublisheds: null,
      };
    case SET_PUBLISH_STATUS_FULFILLED:
      return {
        ...state,
        petPending: false,
      };
    case SET_PUBLISH_STATUS_REJECTED:
      return {
        ...state,
        petPending: false,
        error: payload?.response?.data?.message,
      };
    case ADD_TO_FAVORITE_FULFILLED:
      return {
        ...state,
        petPending: false,
      };
    case ADD_TO_FAVORITE_REJECTED:
      return {
        ...state,
        petPending: false,
        error: payload?.response?.data?.message,
      };
    case FETCH_FAVORITES_FULFILLED:
      return {
        ...state,
        petPending: false,
        favorites: payload,
      };
    case FETCH_FAVORITES_REJECTED:
      return {
        ...state,
        petPending: false,
        error: payload?.response?.data?.message,
      };
    default:
      return state;
  }
};
