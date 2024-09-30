import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    visibleItems: [],
    page: 1,
    itemsPerPage: 5,
    details: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
      const startIndex = (state.page - 1) * state.itemsPerPage;
      const newItems = state.items.slice(
        startIndex,
        startIndex + state.itemsPerPage
      );
      state.visibleItems = [...state.visibleItems, ...newItems];
    },
    applyFilters(state, action) {
      const { selectedCheckboxes, formFactor, showFavoritesOnly, favorites } =
        action.payload;

      let filteredItems = state.items;

      if (selectedCheckboxes.length > 0) {
        console.log(selectedCheckboxes);
        console.log(
          'before applyFilters',
          JSON.parse(JSON.stringify(filteredItems))
        );
        filteredItems = filteredItems.filter(item =>
          selectedCheckboxes.every(checkbox => item[checkbox] === true)
        );
        console.log(
          'after applyFilters',
          JSON.parse(JSON.stringify(filteredItems))
        );
      }

      if (formFactor) {
        filteredItems = filteredItems.filter(item => item.form === formFactor);
      }

      if (showFavoritesOnly) {
        filteredItems = filteredItems.filter(item =>
          favorites.includes(item.id)
        );
      }

      state.visibleItems = filteredItems.slice(0, state.itemsPerPage);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.visibleItems = state.items.slice(0, state.itemsPerPage);
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.details = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { incrementPage, applyFilters } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
