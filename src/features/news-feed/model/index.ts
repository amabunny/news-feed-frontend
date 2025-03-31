import { createReducer } from '@reduxjs/toolkit';

import { applyFiltersAction, resetNewsFeedAction } from './actions';
import { deleteNewsItemThunk, getAllNewsThunk } from './thunks';
import { NewsFeedState } from './types';

const initialState: NewsFeedState = {
  loading: true,
  news: [],
  error: null,
  appliedFilter: null,
};

const newsFeedReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(applyFiltersAction, (state, { payload }) => ({
      ...state,
      loading: true,
      appliedFilter: payload,
    }))
    .addCase(getAllNewsThunk.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      news: action.payload,
      error: null,
    }))
    .addCase(getAllNewsThunk.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message?.toString() ?? null,
    }))
    .addCase(deleteNewsItemThunk.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      news: state.news.filter((news) => news.id !== action.meta.arg),
    }))
    .addCase(resetNewsFeedAction, (state) => ({
      ...state,
      news: [],
    }))
);

export * from './selectors';
export * from './thunks';
export * from './types';
export { resetNewsFeedAction };
export { newsFeedReducer };
