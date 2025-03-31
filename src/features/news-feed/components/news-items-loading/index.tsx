import { useMemo } from 'react';

import { NewsItem } from '@/features/news-feed/components/news-item';
import { useAppSelector } from '@/lib/hooks';
import { NewsFeedItem } from '@/types/news-feed.ts';

export const NewsItemsLoading = () => {
  const loading = useAppSelector((state) => state.newsFeed.loading);
  const newsItems = useAppSelector((state) => state.newsFeed.news);

  const renderingNews = useMemo(
    () =>
      loading && !newsItems.length
        ? Array.from(
            { length: 6 },
            (_, index) =>
              ({
                id: index,
                isHot: false,
                author: '',
                content: '',
                title: '',
                createdTimestamp: new Date().toISOString(),
              }) as NewsFeedItem
          )
        : newsItems,
    [loading, newsItems]
  );

  return (
    <>
      {renderingNews.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} loading={loading} />
      ))}
    </>
  );
};
