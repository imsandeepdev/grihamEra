import {fetch} from 'react-native';

const TIMEOUT = 10000000;
const API_URL = '';
let accToken = '';
let refToken = '';

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const HEADERS_LOGIN = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: '',
};

const setToken = (accessToken: string, refreshToken: string) => {
  refToken = refreshToken;
  accToken = accessToken;
};

const getAccessToken = () => {
  return accToken;
};

const getDatafromServer = (endpoint: string, param?: object) => {
  return new Promise((resolve, reject) => {
    const requestUrl = API_URL + endpoint;
    // console.log('ReqManager ', 'url :' + requestUrl);
    const finalHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-auth-dbp': accToken || '',
    };

    // console.log('ReqManager ', 'headers :' + JSON.stringify(finalHeader));

    let options;
    if (param !== undefined) {
      options = {
        method: 'GET',
        headers: finalHeader,
        body: JSON.stringify(param),
        disableAllSecurity: true,
        timeoutInterval: TIMEOUT,
      };
    } else {
      options = {
        method: 'GET',
        headers: finalHeader,
        disableAllSecurity: true,
        timeoutInterval: TIMEOUT,
      };
    }

    fetch(requestUrl, options)
      .then(response => response.text())
      .then(result => {
        // console.log('ReqManager ', 'headers :' + JSON.stringify(result));
        resolve({
          success: true,
          response: result,
        });
      })
      .catch(error => {
        // console.log('error', error);
        reject({
          success: false,
          response: error,
        });
      });
  });
};

interface ResponseType {
  success: boolean;
  response: object;
}

function postDataToServer(
  endpoint: string,
  param: object,
): Promise<ResponseType> {
  return new Promise((resolve, reject) => {
    const requestUrl = API_URL + endpoint;

    const finalHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-auth-dbp': accToken || '',
    };

    fetch(requestUrl, {
      method: 'POST',
      headers: finalHeader,
      body: JSON.stringify(param),
      disableAllSecurity: true,
      timeoutInterval: TIMEOUT,
    })
      .then(response => response.text())
      .then(result => {
        // console.log('ReqManager ', 'Response :' + JSON.stringify(result));
        resolve({
          success: true,
          response: result,
        });
      })
      .catch(error => {
        const err = JSON.parse(error?.bodyString);
        if (error !== 'timeout' && 'errors' in err) {
          // console.log({ err });
          // console.log('error :' + typeof JSON.parse(error.bodyString));
          reject({
            success: false,
            response: err.errors[0],
          });
        } else {
          let tempError = JSON.parse(error);
          // console.log('error :', tempError);
          if (error === 'timeout') {
            // console.log('errorTimeout' + tempError);
            tempError = JSON.stringify({
              bodyString: {
                error_code: 'EOT',
                errordesc: 'Timeout',
              },
            });
          }
          resolve({
            success: false,
            response: tempError,
          });
        }
      });
  });
}

export {getDatafromServer, postDataToServer};
