import { z } from 'zod';

export const newsFeedItemSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, 'Поле обязательное'),
  content: z.string().min(1, 'Поле обязательное'),
  author: z.string().min(1, 'Поле обязательное'),
  createdTimestamp: z.string().optional(),
  isHot: z.boolean().optional().nullable(),
  hasLargeContent: z.boolean().optional().nullable(),
});

export const newsFeedItemListSchema = z.array(newsFeedItemSchema);

export type NewsFeedItem = z.infer<typeof newsFeedItemSchema>;
