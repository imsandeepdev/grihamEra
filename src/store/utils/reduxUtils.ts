import {createAsyncThunk} from '@reduxjs/toolkit';
// import { setShowLoader } from '../slices/sukanyaSamriddhiYojna/showLoaderSlice';

import {showLoaderSlice} from '../slices/mobileApp/showLoaderSlice';

import {
  getDatafromServer,
  postDataToServer,
  putDataToServer,
  postDataToServerWithParse,
} from '../WebRequestManagerFetch';

export const createAsyncOperationThunk = <
  ResponseType extends Record<string, any>,
  PayloadType extends Record<string, any>,
>(
  typePrefix: string,
  apiEndpoint: string,
  successCallback?: (response: ResponseType) => void,
) =>
  createAsyncThunk<ResponseType, PayloadType>(
    `${typePrefix}/request`,
    async (payload, thunkAPI) => {
      try {
        console.log('typePrefix', typePrefix);

        console.log('payload', payload);

        if (
          payload?.extraParams?.progressIndicator === undefined ||
          payload?.extraParams?.progressIndicator
        ) {
          thunkAPI.dispatch(showLoaderSlice.actions.showLoader());
        }
        // thunkAPI.dispatch(showLoaderSlice.actions.showLoader());

        // thunkAPI.dispatch(setShowLoader(true));
        // console.log('PAYLOAD ==>', payload, 'TYPEPREFIX==>', typePrefix);

        // console.log('ShowLoader', payload.showLoader);
        // if (payload.showLoader === undefined || payload.showLoader) {
        //   // thunkAPI.dispatch(setShowLoader(true));
        //   // thunkAPI.dispatch(showLoaderSlice.actions.showLoader());

        // }
        // if (
        //   typePrefix !== 'mbSilentSmsGetStatus' &&
        //   typePrefix !== 'mbRegistration' &&
        //   typePrefix !== 'checkMbRegistrationWithDeviceId' &&
        //   typePrefix !== 'setTPin' &&
        //   typePrefix !== 'mbRegistrationCheck'
        // ) {
        //   if (payload.showLoader === undefined || payload.showLoader) {
        //     // thunkAPI.dispatch(showLoaderSlice.actions.showLoader());
        //   }
        // }

        let response: any;
        if (payload.method !== undefined && payload.method === 'GET') {
          response = await getDatafromServer(apiEndpoint + payload.query);
        } else {
          response = await postDataToServerWithParse(
            apiEndpoint,
            payload?.payload ? payload?.payload : payload,
          );

          // response = await postDataToServerWithParse(apiEndpoint, payload?.payload ? payload.payload : payload);
        }

        console.log('PAYLOAD ==> response', typePrefix, response);
        if (response.success) {
          if (
            payload?.extraParams?.progressIndicator === undefined ||
            payload?.extraParams?.progressIndicator
          ) {
            thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());
          }
          // thunkAPI.dispatch(setShowLoader(false));
          // thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());
          if (successCallback) {
            successCallback(response);
          }
          return response as unknown as ResponseType;
        } else {
          if (
            payload?.extraParams?.progressIndicator === undefined ||
            payload?.extraParams?.progressIndicator
          ) {
            thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());
          }
          // thunkAPI.dispatch(setShowLoader(false));
          // thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());
          return thunkAPI.rejectWithValue(response);
        }
      } catch (error) {
        console.log(`${typePrefix}Error`, error);
        if (
          payload?.extraParams?.progressIndicator === undefined ||
          payload?.extraParams?.progressIndicator
        ) {
          thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());
        }
        // thunkAPI.dispatch(setShowLoader(false));
        thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());
        return thunkAPI.rejectWithValue(error);
      }
    },
  );

export const createAsyncOperationThunkGet = <
  ResponseType extends Record<string, any>,
  PayloadType extends Record<string, any>,
>(
  typePrefix: string,
  apiEndpoint: string,
  // successCallback?: (response: ResponseType) => void
) =>
  createAsyncThunk<ResponseType, PayloadType>(
    `${typePrefix}/request`,
    async (payload: PayloadType, thunkAPI) => {
      try {
        thunkAPI.dispatch(setShowLoader(true));
        const response = await postDataToServer(apiEndpoint, payload);
        console.log(`${typePrefix}Res......`, response);
        if (response.success) {
          thunkAPI.dispatch(setShowLoader(false));
          return response as unknown as ResponseType;
        } else {
          thunkAPI.dispatch(setShowLoader(false));
          return thunkAPI.rejectWithValue(response);
        }
      } catch (error) {
        console.log(`${typePrefix}Error`, error);
        thunkAPI.dispatch(setShowLoader(false));
        return thunkAPI.rejectWithValue(error);
      }
    },
  );

export const createAsyncOperationThunkPut = <
  ResponseType extends Record<string, any>,
  PayloadType extends Record<string, any>,
>(
  typePrefix: string,
  apiEndpoint: string,
  // payload1: GenerateTPinOtpPayload,
  param: string,
  body: object,
  header?: string,
  successCallback?: (response: ResponseType) => void,
) =>
  createAsyncThunk<ResponseType, PayloadType>(
    `${typePrefix}/request`,
    async (payload: PayloadType, thunkAPI) => {
      try {
        console.log('PayLoad Request is......', payload);
        // thunkAPI.dispatch(setShowLoader(true));
        thunkAPI.dispatch(showLoaderSlice.actions.showLoader());

        const response = await putDataToServer(
          apiEndpoint,
          param,
          body,
          header,
        );
        console.log(`${typePrefix}Res......`, response);
        if (response.success) {
          // response = JSON.parse(response);
          // thunkAPI.dispatch(setShowLoader(false));
          thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());

          if (successCallback) {
            successCallback(response);
          }
          return response as unknown as ResponseType;
        } else {
          // thunkAPI.dispatch(setShowLoader(false));
          thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());
          return thunkAPI.rejectWithValue(response);
        }
      } catch (error) {
        console.log(`${typePrefix}Error`, error);
        // thunkAPI.dispatch(setShowLoader(false));
        thunkAPI.dispatch(showLoaderSlice.actions.hideLoader());
        return thunkAPI.rejectWithValue(error);
      }
    },
  );
