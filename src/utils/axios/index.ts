import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {BASE_URL} from 'consts/urls';

export const makeRequest = (config: AxiosRequestConfig) => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.withCredentials = true;
  axios.interceptors.response.use(onFulfilled, onRejected);
  return axios(config);
};

const onFulfilled = (response: AxiosResponse) => Promise.resolve(response);

const onRejected = (error: AxiosError) => Promise.reject(error);
