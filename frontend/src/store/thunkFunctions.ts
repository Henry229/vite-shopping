import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/users/register', body);
      // payload: response.data
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
