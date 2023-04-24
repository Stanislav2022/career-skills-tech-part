import { createSlice, nanoid } from '@reduxjs/toolkit';

const followInitialState = [];

const followSlice = createSlice({
  name: 'follow',
  initialState: followInitialState,
  reducers: {
    addFollow: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    removeFollow: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});

export const { addFollow, removeFollow } = followSlice.actions;
export const followReducer = followSlice.reducer;
