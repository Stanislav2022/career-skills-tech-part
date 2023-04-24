import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from './cards-operation';

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
  },
});

export const cardsReducer = cardssSlice.reducer;
