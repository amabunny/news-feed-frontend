import { z } from 'zod';

import { NewsFeedItem } from '@/types/news-feed';

export interface NewsFeedState {
  loading: boolean;
  news: NewsFeedItem[];
  error: string | null;
  appliedFilter: FilterSchema | null;
}

export const filterSchema = z.object({
  author: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdStart: z.string().optional().nullable(),
  createdEnd: z.string().optional().nullable(),
});

export type FilterSchema = z.infer<typeof filterSchema>;
