import { createSlice } from '@reduxjs/toolkit';

const urlSlice = createSlice({
  name: 'url',
  initialState: {
    param: null,
  },
  reducers: {
    setParam: (state, action) => {
      state.param = action.payload.param;
    },
  },
});

export const { setParam } = urlSlice.actions;
export default urlSlice.reducer;
