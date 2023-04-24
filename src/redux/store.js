import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';

import { cardsReducer } from './cards/cards-slice';
import { followReducer } from './follow/follow-slice';
// import { filterReducer } from './filter/filter-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const followPersistConfig = {
  key: 'follow',
  storage,
};

export const store = configureStore({
  reducer: {
    follow: persistReducer(followPersistConfig, followReducer),
    cards: cardsReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
