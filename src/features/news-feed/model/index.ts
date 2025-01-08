import { createSlice } from '@reduxjs/toolkit';

import { deleteNewsItemThunk, getAllNewsThunk } from './thunks';
import { NewsFeedState } from './types';

const initialState: NewsFeedState = {
  loading: true,
  news: [],
  error: null,
};

export const newsFeedSlice = createSlice({
  name: 'newsFeed',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNewsThunk.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(getAllNewsThunk.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      news: action.payload,
      error: null,
    }));

    builder.addCase(getAllNewsThunk.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message?.toString() ?? null,
    }));

    builder.addCase(deleteNewsItemThunk.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      news: state.news.filter((news) => news.id !== action.meta.arg),
    }));
  },
});

export * from './thunks';
