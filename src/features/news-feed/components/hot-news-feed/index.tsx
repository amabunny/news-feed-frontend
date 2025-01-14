import { FireIcon } from '@heroicons/react/16/solid';
import { useEffect } from 'react';

import { NewsItem } from '@/features/news-feed/components/news-item';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { BaseTemplateFullHeightLayer, PageInfo } from '@/ui';

import { getAllNewsThunk } from '../../model';

export const HotNewsFeed = () => {
  const loading = useAppSelector((state) => state.newsFeed.loading);
  const news = useAppSelector((state) => state.newsFeed.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllNewsThunk({ isHot: true }));
  }, [dispatch]);

  const isListEmpty = news.length === 0 && !loading;

  return (
    <BaseTemplateFullHeightLayer>
      {isListEmpty && (
        <PageInfo
          title={'Постов пока нет...'}
          boldTitle
          icon={<FireIcon />}
          description={
            <span>Пометьте новость как избранную и она появится здесь!</span>
          }
        />
      )}
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </BaseTemplateFullHeightLayer>
  );
};
