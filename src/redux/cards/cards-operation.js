import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6442593733997d3ef90dde3d.mockapi.io/api/v1';

export const fetchCards = createAsyncThunk(
  'users/fetch',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('/users');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFolowers = createAsyncThunk(
  'users/addFolowers',
  async (card, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${card.id}`, {
        followers: card.followers + 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFolowers = createAsyncThunk(
  'users/removeFolowers',
  async (card, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${card.id}`, {
        followers: card.followers - 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
