import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { coursesReducer } from './slice';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const persistedCoursesReducer = persistReducer(persistConfig, coursesReducer);

export const store = configureStore({
  reducer: {
    coursesData: persistedCoursesReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
