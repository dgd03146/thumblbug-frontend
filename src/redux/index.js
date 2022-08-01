import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import layoutReducer from './layout-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer
  }
});

export default store;
