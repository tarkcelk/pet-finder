const API_URL: string = 'http://192.168.1.3:3000/';
export const BASE_URL: string = `${API_URL}api`;
export const BASE_IMAGE_URL: string = `${API_URL}`;
export const $U_User = {
  Login: '/user/login/',
  Create: '/user/',
};

export const $U_City = {
  Get: '/city',
};

export const $U_Category = {
  List: '/category/',
  Sub: '/category/sub/',
};

export const $U_Pet = {
  Create: '/pet/',
  List: '/pet/',
  Detail: '/pet/',
  UserPets: '/pet/userPets/',
  Update: '/pet/',
  AddToFavorites: '/pet/addToFavorites/',
  UserFavorites: 'pet/userFavorites/',
};
