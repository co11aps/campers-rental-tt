import { configureStore } from '@reduxjs/toolkit';

import { campersReducer } from './campers/slice';
// import { filtersReducer } from './filters/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Persisting token field from auth slice to localstorage
const favouritesPersistConfig = {
  key: 'favourites', // Ключ кореневого об'єкта, в якому будуть зберігатися дані
  storage: storage,
  whitelist: ['favouriteList'],
};

export const store = configureStore({
  reducer: {
    favourites: persistReducer(favouritesPersistConfig, campersReducer),
    // filters: filtersReducer,
    campers: campersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
