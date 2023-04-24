import * as api from '../../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk(
  'users/fetch',
  async (_, thunkApi) => {
    try {
      const data = await api.fetchCards();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
