import { PencilSquareIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useEffect } from 'react';

import { getAllNewsThunk } from '@/features/news-feed/model';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RoutesService } from '@/services/routes.ts';
import { NewsFeedItem } from '@/types/news-feed.ts';
import { BaseTemplateFullHeightLayer, Link } from '@/ui';
import { PageInfo } from '@/ui';

import { NewsItem } from '../news-item';

export const NewsFeed = () => {
  const dispatch = useAppDispatch();

  const news: NewsFeedItem[] = useAppSelector((state) => state.newsFeed.news);
  const loading = useAppSelector((state) => state.newsFeed.loading);

  useEffect(() => {
    void dispatch(getAllNewsThunk());
  }, [dispatch]);

  const isListEmpty = news.length === 0 && !loading;

  return (
    <BaseTemplateFullHeightLayer
      className={clsx('flex', 'flex-col', 'gap-5', {
        'justify-center items-center flex-grow': isListEmpty,
      })}
    >
      {isListEmpty && (
        <PageInfo
          title={'Постов пока нет...'}
          boldTitle
          icon={<PencilSquareIcon />}
          description={
            <span>
              Будьте первым!{' '}
              <Link underline to={RoutesService.getPublishNews()}>
                Добавьте
              </Link>{' '}
              первую новость
            </span>
          }
        />
      )}

      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </BaseTemplateFullHeightLayer>
  );
};
