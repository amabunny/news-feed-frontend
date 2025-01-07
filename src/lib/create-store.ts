import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { newsFeedSlice } from '@/features/news-feed';

export const createStore = () => {
  return configureStore({
    reducer: combineReducers({
      newsFeed: newsFeedSlice.reducer,
    }),
  });
};

type Store = ReturnType<typeof createStore>;

export type AppState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
