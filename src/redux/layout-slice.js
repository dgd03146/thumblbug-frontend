import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerFixed: true
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    headerFix: (state) => {
      state.headerFixed = true;
    },
    notHeaderFix: (state) => {
      state.headerFixed = false;
    }
  },
  extraReducers: {}
});

export const layoutActions = layoutSlice.actions;
export default layoutSlice.reducer;
