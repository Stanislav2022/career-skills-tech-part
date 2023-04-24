import { createSlice } from '@reduxjs/toolkit';

const followSlice = createSlice({
  name: 'follow',
  initialState: { items: [] },
  reducers: {
    addFollow(state, action) {
      state.items.push(action.payload);
    },
    removeFollow(state, action) {
      const arr = state.items.filter(e => e !== action.payload);
      state.items = arr;
    },
  },
});

export const { addFollow, removeFollow } = followSlice.actions;
export const followReducer = followSlice.reducer;
