import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import layoutReducer from './layout-slice';
import projectReducer from './projects-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    projects: projectReducer
  }
});

export default store;
