export const selectAllCampers = state => state.campers.items;

export const selectCamperById = state => state.campers.details;

export const isLoading = state => state.campers.isLoading;

export const campersAdditionalData = state => state.campers;
