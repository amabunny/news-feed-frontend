import { NewsItem } from '@/features/news-feed/components/news-item';
import { useAppSelector } from '@/lib/hooks';

export const NewsItemsLoading = () => {
  const loading = useAppSelector((state) => state.newsFeed.loading);
  const newsItems = useAppSelector((state) => state.newsFeed.news);

  return (
    <>
      {newsItems.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} loading={loading} />
      ))}
    </>
  );
};
