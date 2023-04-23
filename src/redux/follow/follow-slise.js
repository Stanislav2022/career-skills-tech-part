import { createSlice } from '@reduxjs/toolkit';

const followInitialState = [];
const followSlice = createSlice({
  name: 'follow',
  initialState: followInitialState,
  reducers: {
    addFollow: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
    },
    removeFollow: (store, { payload }) =>
      store.filter(({ user }) => user !== payload),
  },
});

export const { addFollow, removeFollow } = followSlice.actions;
export const followReducer = followSlice.reducer;
