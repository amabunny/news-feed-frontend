import { FireIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { BaseTemplateFullHeightLayer, PageInfo } from '@/ui';

import { getAllNewsThunk, resetNewsFeedAction } from '../../model';
import { NewsItemsLoading } from '../news-items-loading';

export const HotNewsFeed = () => {
  const loading = useAppSelector((state) => state.newsFeed.loading);
  const news = useAppSelector((state) => state.newsFeed.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllNewsThunk({ isHot: true }));
    return () => {
      dispatch(resetNewsFeedAction());
    };
  }, [dispatch]);

  const isListEmpty = news.length === 0 && !loading;

  return (
    <BaseTemplateFullHeightLayer className={clsx('grid', 'gap-5')}>
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

      <NewsItemsLoading />
    </BaseTemplateFullHeightLayer>
  );
};
