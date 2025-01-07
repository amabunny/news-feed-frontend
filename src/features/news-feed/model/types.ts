import { NewsFeedItem } from '@/types/news-feed';

export interface NewsFeedState {
  loading: boolean;
  news: NewsFeedItem[];
  error: string | null;
}
