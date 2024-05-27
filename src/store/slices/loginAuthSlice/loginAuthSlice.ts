import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';

import api from '../../services/api';
import {Config} from '../../utils/config';
const initialState = {
  error: null,
  authLoginState: {
    status: 'idle',
    response: {},
  },
};

export const getHandalLoginSlice = createAsyncThunk<void, void>(
  'login/auth',
  async (data, thunkAPI) => {
    console.log('THUNK API', thunkAPI);
    api
      .multipostRequest({
        needAuth: false,
        data: data,
        url: Config.LoginAPI,
      })
      .then(response => {
        console.log('SLICE RESPONSE==>', response);
        return response;
      });
  },
);

export const loginAuthSlice = createSlice({
  name: 'login/auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHandalLoginSlice.pending, _state => {
        console.log('PENDING==>');
        // state.casaAccountState = initialState.casaAccountState;
        //  _state.authLoginState.status = 'loading';
      })
      .addCase(getHandalLoginSlice.fulfilled, (_state, _action) => {
        const responseData = _action;
        console.log('CasaAccount Success Data...... ', responseData);
        // _state.authLoginState.status = 'succeeded';
        // _state.authLoginState.response = {responseData};
      })
      .addCase(getHandalLoginSlice.rejected, (_state, _action) => {
        console.log('REJECTED==>', _action);
        //_state.authLoginState.status = 'failed';
      });
  },
});
