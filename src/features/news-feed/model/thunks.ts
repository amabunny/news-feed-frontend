import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createNewsItem,
  deleteNewsItem,
  getAllNews,
  getNewsItem,
} from '@/services/models/news';
import { NewsFeedItem } from '@/types/news-feed';

export const getAllNewsThunk = createAsyncThunk('newsFeed/fetchAllNews', () => {
  return getAllNews();
});

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
