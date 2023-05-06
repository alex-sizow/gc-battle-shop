import axios from 'axios';
import { apiUrl } from '/config';
import Cookie from '../modules/cookie';

axios.defaults.baseURL = apiUrl;
axios.defaults.headers.common['Content-Type'] ='application/json';

axios.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Content-Type'] = 'application/json';

  const authToken = Cookie.get('authToken');

  if (authToken) {
    config.headers['Authorization'] = 'Bearer ' + authToken;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

// axios.interceptors.response.use(response => {
//   return response;
// }, function(error) {
//   // store.commit('fastNotification/ADD_NOTIFICATION', {
//   //   text: error.response
//   //     ? error.response.data.message || i18n.t('Unexpected error occurred')
//   //     : i18n.t('Network error. Check connection and refresh page'),
//   //   icon: 'warning',
//   // })
//
//   let originalRequest = error.config;
//
//   if (error.response && error.response.status === 401 && !originalRequest._retry) {
//     originalRequest._retry = true;
//
//     if (router.currentRoute.name !== 'social-auth') {
//       localStorage.setItem('prevRoute', router.currentRoute.fullPath);
//
//       const url = new URL(window.location.href)
//       const urlLang = url.searchParams.get('lang')
//         || 'en-US';
//
//       router.push(`/sign-in?lang=${urlLang}`);
//     }
//   }
//
//   return Promise.reject(error);
// })

export default axios;
