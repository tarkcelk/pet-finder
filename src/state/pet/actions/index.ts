import {$U_Category, $U_Pet} from 'consts/urls';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {ApiError, ApiResponse} from 'types/api';
import {makeRequest} from 'utils/axios';
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
  FETCH_PET_DETAIL_FULFILLED,
  FETCH_PET_DETAIL_REJECTED,
  FETCH_SUB_CATEGORIES_FULFILLED,
  FETCH_USER_PETS_FULFILLED,
  PET_PENDING,
  SET_PUBLISH_STATUS_FULFILLED,
  SET_PUBLISH_STATUS_REJECTED,
} from '../constants';
import {Category, SubCategory, Pet, Filter, PetDto} from 'types/entity/pet';
import {showAlert} from 'utils/app/alert';
import {navigate} from 'utils/navigation';
import {SCREENS} from 'consts';

export const pending = () => ({
  type: PET_PENDING,
});

export const fetchCategoriesFulfilled = (data: Category[]) => ({
  type: FETCH_CATEGORIES_FULFILLED,
  payload: data,
});

export const fetchCategoriesRejected = (error: ApiError) => ({
  type: FETCH_CATEGORIES_REJECTED,
  payload: error,
});

export const fetchCategories =
  () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      url: $U_Category.List,
      method: 'get',
    })
      .then((response: ApiResponse) =>
        dispatch(fetchCategoriesFulfilled(response.data as Category[])),
      )
      .catch((error: ApiError) => dispatch(fetchCategoriesRejected(error)));
  };

export const fetchSubCategoriesFulfilled = (data: SubCategory[]) => ({
  type: FETCH_SUB_CATEGORIES_FULFILLED,
  payload: data,
});

export const fetchSubCategoriesRejected = (error: ApiError) => ({
  type: FETCH_SUB_CATEGORIES_FULFILLED,
  payload: error,
});
export const fetchSubCategories =
  (categoryId: number) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      url: `${$U_Category.Sub}${categoryId}`,
      method: 'get',
    })
      .then((response: ApiResponse) =>
        dispatch(fetchSubCategoriesFulfilled(response.data as SubCategory[])),
      )
      .catch((error: ApiError) => dispatch(fetchSubCategoriesRejected(error)));
  };
const createPetFulfilled = (data: Pet) => ({
  type: CREATE_PET_FULFILLED,
  payload: data,
});

const createPetRejected = (error: ApiError) => ({
  type: CREATE_PET_REJECTED,
  payload: error,
});

export const createPet =
  (petFormData: FormData) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());

    makeRequest({
      url: $U_Pet.Create,
      method: 'post',
      data: petFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response: ApiResponse) => {
        dispatch(createPetFulfilled(<Pet>response.data)),
          showAlert('Başarılı', 'İlan başarılı bir şekilde yayına alınmıştır', {
            onPress: () => navigate(SCREENS.PUBLISHEDS),
            text: 'Tamam',
          });
      })
      .catch((error: ApiError) => dispatch(createPetRejected(error)));
  };

const fetchPetsFulfilled = (data: Pet[]) => ({
  type: FETCH_PETS_FULFILLED,
  payload: data,
});

const fetchPetsRejected = (error: ApiError) => ({
  type: FETCH_PETS_FULFILLED,
  payload: error,
});

export const fetchPets =
  ({filteredSearchText = '', filteredCategory = 0}: Filter = {}) =>
  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    let url: string = $U_Pet.List;
    url = `${url}?searchText=${filteredSearchText}&category=${filteredCategory}`;
    dispatch(pending());
    makeRequest({
      url,
      method: 'get',
    })
      .then((response: ApiResponse) =>
        dispatch(fetchPetsFulfilled(response.data as Pet[])),
      )
      .catch((error: ApiError) => dispatch(fetchPetsRejected(error)));
  };

const fetchPetDetailFulfilled = (data: PetDto) => ({
  type: FETCH_PET_DETAIL_FULFILLED,
  payload: data,
});

const fetchPetDetailRejected = (error: ApiError) => ({
  type: FETCH_PET_DETAIL_REJECTED,
  payload: error,
});

export const fetchPetDetail =
  (petId: string) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      url: `${$U_Pet.Detail}${petId}`,
      method: 'get',
    })
      .then((response: ApiResponse) =>
        dispatch(fetchPetDetailFulfilled(<PetDto>response.data)),
      )
      .catch((error: ApiError) => dispatch(fetchPetDetailRejected(error)));
  };

export const fetchUserPublisheds =
  (userId: string) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      url: `${$U_Pet.UserPets}?userId=${userId}`,
      method: 'get',
    })
      .then((response: ApiResponse) =>
        dispatch({
          type: FETCH_USER_PETS_FULFILLED,
          payload: response.data as Pet[],
        }),
      )
      .catch((error: ApiError) =>
        dispatch({
          type: FETCH_USER_PETS_FULFILLED,
          payload: error,
        }),
      );
  };

export const setPublishStatus =
  (pet: Pet) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      url: `${$U_Pet.Update}`,
      method: 'put',
      data: pet,
    })
      .then((response: ApiResponse) => {
        dispatch({type: SET_PUBLISH_STATUS_FULFILLED, payload: response.data});
      })
      .catch((error: ApiError) =>
        dispatch({type: SET_PUBLISH_STATUS_REJECTED, payload: error}),
      );
  };

export const addToFavorites =
  (petId: string, userId: string) =>
  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      url: $U_Pet.AddToFavorites,
      method: 'put',
      data: {petId, userId},
    })
      .then((response: ApiResponse) => {
        showAlert('Başarılı', 'Favorilere eklenmiştir');
        dispatch({
          type: ADD_TO_FAVORITE_FULFILLED,
          payload: response.data,
        });
      })
      .catch((error: ApiError) =>
        dispatch({
          type: ADD_TO_FAVORITE_REJECTED,
          payload: error,
        }),
      );
  };

export const getFavorites =
  (userId: object) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(pending());
    makeRequest({
      url: `${$U_Pet.UserFavorites}?userId=${userId}`,
      method: 'get',
    })
      .then((response: ApiResponse) =>
        dispatch({
          type: FETCH_FAVORITES_FULFILLED,
          payload: response.data,
        }),
      )
      .catch((error: ApiError) =>
        dispatch({
          type: FETCH_FAVORITES_REJECTED,
          payload: error,
        }),
      );
  };
