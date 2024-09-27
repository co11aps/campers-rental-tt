import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './favorites/slice';
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

const campersPersistConfig = {
  key: 'campers',
  storage: storage,
  whitelist: ['details'],
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage: storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    campers: persistReducer(campersPersistConfig, campersReducer),
    // filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
