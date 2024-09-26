import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../services/axiosConfig';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/campers');
      return response.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
