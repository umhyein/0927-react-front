import axios from 'axios';
import history from 'libs/history';
import toastr from 'libs/toastr';

axios.defaults.timeout = 5000;

axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  bindError(error);
  return Promise.reject(error.response);
});

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  bindError(error);
  return Promise.reject(error.response);
});

const bindError = (error) => {
  if(error.response.status != 401) {
    toastr.error('네트워크 오류가 발생했습니다.', 'Oops!');
  }
};

export default axios;
