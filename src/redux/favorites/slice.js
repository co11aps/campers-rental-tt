import { createSlice } from '@reduxjs/toolkit';

const initialFavorites = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: initialFavorites,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload;
      if (!state.items.find(item => item.id === product.id)) {
        state.items.push(product);
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
