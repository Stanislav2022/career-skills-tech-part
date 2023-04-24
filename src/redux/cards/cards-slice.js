import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from './cards-operation';
import { addFolowers } from './cards-operation';
import { removeFolowers } from './cards-operation';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCards.pending]: store => {
      store.isLoading = true;
    },
    [fetchCards.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchCards.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addFolowers.pending]: store => {
      store.isLoading = true;
    },
    [addFolowers.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(index, 1, payload);
    },
    [addFolowers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [removeFolowers.pending]: store => {
      store.isLoading = true;
    },
    [removeFolowers.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(index, 1, payload);
    },
    [removeFolowers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
