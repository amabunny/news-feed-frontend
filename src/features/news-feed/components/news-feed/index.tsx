import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilSquareIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { Filter } from '@/features/news-feed/components/filter';
import { getAllNewsThunk } from '@/features/news-feed/model';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RoutesService } from '@/services/routes.ts';
import { NewsFeedItem } from '@/types/news-feed.ts';
import { Link } from '@/ui';
import { PageInfo } from '@/ui';

import { NewsItem } from '../news-item';

export const NewsFeed = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const dispatch = useAppDispatch();

  const news: NewsFeedItem[] = useAppSelector((state) => state.newsFeed.news);
  const loading = useAppSelector((state) => state.newsFeed.loading);

  const handleFiltersClick = () => {
    setIsFiltersVisible((v) => !v);
  };

  useEffect(() => {
    void dispatch(getAllNewsThunk({}));
  }, [dispatch]);

  const isListEmpty = news.length === 0 && !loading;

  return (
    <div className={clsx('flex', 'flex-col', 'gap-5')}>
      <div>
        <div className={clsx('mb-5', 'px-5', 'md:px-0')}>
          <Link
            onClick={handleFiltersClick}
            to={''}
            icon={isFiltersVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            Фильтры
          </Link>
        </div>

        {isFiltersVisible && <Filter className={'mb-8'} />}
      </div>

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
    </div>
  );
};
