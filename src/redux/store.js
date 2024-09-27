import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites/slice';
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
const campersPersistConfig = {
  key: 'campers', // Ключ кореневого об'єкта, в якому будуть зберігатися дані
  storage: storage,
  whitelist: ['details'],
};

const favoritesPersistConfig = {
  key: 'favorites', // Ключ кореневого об'єкта
  storage: storage,
  whitelist: ['items'], // Сохраняем только items
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
