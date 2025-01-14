import { createAsyncThunk } from '@reduxjs/toolkit';

import { applyFiltersAction } from '@/features/news-feed/model/actions.ts';
import {
  createNewsItem,
  deleteNewsItem,
  getAllNews,
  GetAllNewsParams,
  getNewsItem,
} from '@/services/models/news';
import { NewsFeedItem } from '@/types/news-feed';

export const getAllNewsThunk = createAsyncThunk(
  'newsFeed/fetchAllNews',
  (params: GetAllNewsParams, { dispatch }) => {
    dispatch(applyFiltersAction(params));
    return getAllNews(params);
  }
);

export const createOrUpdateNewsItemThunk = createAsyncThunk(
  'newsFeed/createNewsItem',
  (newsItem: NewsFeedItem) => {
    return createNewsItem(newsItem);
  }
);

export const getNewsItemThunk = createAsyncThunk(
  'newsFeed/getNewsItem',
  (id: string) => {
    return getNewsItem(id);
  }
);

export const deleteNewsItemThunk = createAsyncThunk(
  'newsFeed/deleteNewsItem',
  (id: number) => {
    return deleteNewsItem(id);
  }
);
