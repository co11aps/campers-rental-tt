import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    selectedCheckboxes: [],
    formFactor: null,
    showFavoritesOnly: false,
  },
  reducers: {
    toggleCheckbox(state, action) {
      const value = action.payload;
      if (state.selectedCheckboxes.includes(value)) {
        state.selectedCheckboxes = state.selectedCheckboxes.filter(
          item => item !== value
        );
      } else {
        state.selectedCheckboxes.push(value);
      }
    },
    setFormFactor(state, action) {
      state.formFactor = action.payload;
    },
    toggleFavoritesOnly(state) {
      state.showFavoritesOnly = !state.showFavoritesOnly;
    },
    resetFilters(state) {
      state.selectedCheckboxes = [];
      state.formFactor = null;
      state.showFavoritesOnly = false;
    },
  },
});

export const {
  toggleCheckbox,
  setFormFactor,
  resetFilters,
  toggleFavoritesOnly,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
