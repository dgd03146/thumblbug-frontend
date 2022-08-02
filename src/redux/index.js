import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import newPostReducer from './newPostSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: newPostReducer
  }
});

export default store;
