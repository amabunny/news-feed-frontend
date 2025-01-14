import {
  NewsFeedItem,
  newsFeedItemListSchema,
  newsFeedItemSchema,
} from '@/types/news-feed';

const BASE_URL = import.meta.env.VITE_NEWS_FEED_ENDPOINT_URL;

export interface GetAllNewsParams {
  isHot?: boolean | null;
  author?: string | null;
  title?: string | null;
  content?: string | null;
  createdStart?: string | null;
  createdEnd?: string | null;
}
export const getAllNews = async (
  params: GetAllNewsParams
): Promise<NewsFeedItem[]> => {
  const url = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && typeof value !== 'undefined') {
      url.set(key, String(value));
    }
  });

  const newsList: unknown = await fetch(`${BASE_URL}/news?${url}`).then(
    (response) => response.json()
  );

  return newsFeedItemListSchema.parse(newsList);
};

export const createNewsItem = async (
  payload: Omit<NewsFeedItem, 'id'>
): Promise<NewsFeedItem> => {
  const response: unknown = await fetch(`${BASE_URL}/news`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());

  return newsFeedItemSchema.parse(response);
};

export const getNewsItem = async (id: string): Promise<NewsFeedItem> => {
  const response: unknown = await fetch(`${BASE_URL}/news/${id}`, {
    method: 'GET',
  }).then((response) => response.json());

  return newsFeedItemSchema.parse(response);
};

export const deleteNewsItem = async (id: number): Promise<NewsFeedItem> => {
  const response: unknown = await fetch(`${BASE_URL}/news/${id}`, {
    method: 'DELETE',
  }).then((response) => response.json());

  return newsFeedItemSchema.parse(response);
};
