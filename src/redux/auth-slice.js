import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  NAME: '',
  isLogin: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin(state, action) {
      state.isLogin = true;
      state.NAME = action.payload;
    },
    userLogout(state, action) {
      state.isLogin = false;
      state.NAME = '';
      localStorage.removeItem('token');
    }
  },
  extraReducers: {}
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
