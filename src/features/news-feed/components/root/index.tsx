import { useEffect } from 'react';

import { getAllNewsThunk } from '@/features/news-feed/model';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import { NewsItem } from '../news-item';

export const NewsFeed = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.newsFeed.news);

  useEffect(() => {
    void dispatch(getAllNewsThunk());
  }, [dispatch]);

  return (
    <div className={'flex flex-col gap-5'}>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </div>
  );
};
