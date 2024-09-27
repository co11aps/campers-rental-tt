import { createSlice } from '@reduxjs/toolkit';

const initialFavorites = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: initialFavorites,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const camper = action.payload;
      if (!state.items.find(item => item.id === camper.id)) {
        state.items.push(camper);
      }
    },
    removeFromFavorites: (state, action) => {
      const camperId = action.payload;
      state.items = state.items.filter(item => item.id !== camperId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
