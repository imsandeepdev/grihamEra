import {Config} from '../utils/config';
import axios from 'axios';
import NavigationService from '../../navigator/NavigationService';

const multiGetRequest = ({url}) =>
  new Promise((resolve, reject) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    const requestUrl = Config.API_URL + url;
    console.log('HEADER=>>', headers, 'Req URL=>', requestUrl);

    axios
      .get(requestUrl, {headers})
      .then(response => {
        console.log('AXIOS GET RESPONSE ON API', response);
        if (response.status == '200') {
          resolve(response.data);
        } else if (response.status == 401) {
          NavigationService.reset('LoginScreen');
          reject(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch(error => {
        reject(error);
        console.log('ERROR==>', error);
        if (error.message === 'Network request failed') {
        } else if (error.message == 'Request failed with status code 401') {
        }
      });
  });

const multipartRequest = ({url, needAuth, formData, hideLoader = false}) =>
  new Promise((resolve, reject) => {
    const headerWithoutAuth = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    const headers = headerWithoutAuth;
    const requestUrl = Config.API_URL + url;
    console.log('Request params ==> ', formData, ' ==> ', requestUrl);

    axios
      .post(requestUrl, formData, {headers})
      .then(response => {
        console.log('AXIOS RESPONSE ON API', response);
        console.log('AXIOS RESPONSE ON API==>', response.data.statusCode);

        if (response.status == '200') {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
        console.log('errorr==>', error);
        if (error == 'Network Error') {
          console.log('Check Internet Connection');
        } else {
          console.log('error.message');
        }
      });
  });

const multipostRequest = ({url, needAuth, data, hideLoader = false}) =>
  new Promise((resolve, reject) => {
    const headerWithoutAuth = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const headers = headerWithoutAuth;
    const requestUrl = Config.API_URL + url;
    console.log('Request params ==> ', requestUrl);
    console.log('forms data ==> ', data);

    axios
      .post(requestUrl, data, {headers})
      .then(response => {
        console.log('AXIOS RESPONSE ON API', response);
        console.log('AXIOS RESPONSE ON API==>', response.status);

        if (response.status == '200') {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
        console.log('errorr==>', error);
        if (error == 'Network Error') {
          console.log('Check Internet Connection');
        } else {
          console.log('error.message');
        }
      });
  });

// const multipostRequest = async ({url, needAuth, data, hideLoader = false}) => {
//   console.log('Hello Bro Sandeep');
//   const headerWithoutAuth = {
//     Accept: 'application/json',
//     'content-Type': 'application/json',
//   };
//   const headers = headerWithoutAuth;
//   const requestUrl = Config.API_URL + url;
//   console.log('Request params ==> ', requestUrl);
//   console.log('forms data ==> ', data);

//   axios
//     .post(requestUrl, data, {headers})
//     .then(response => {
//       console.log('Rsssfjsjfdsfd=>', response);
//     })
//     .catch(err => {
//       console.log('erorr=>', err);
//     });
// };

export default {
  multipartRequest,
  multiGetRequest,
  multipostRequest,
};
