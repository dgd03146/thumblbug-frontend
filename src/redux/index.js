import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import newPostReducer from './newPostSlice';
import layoutReducer from './layout-slice';
import projectReducer from './projects-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: newPostReducer
    layout: layoutReducer,
    projects: projectReducer
  }
});

export default store;
