import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilSquareIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { Filter } from '@/features/news-feed/components/filter';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RoutesService } from '@/services/routes.ts';
import { NewsFeedItem } from '@/types/news-feed.ts';
import { Link } from '@/ui';
import { PageInfo } from '@/ui';

import { getAllNewsThunk, isAnyFilterAppliedSelector } from '../../model';
import { NewsItem } from '../news-item';

export const NewsFeed = () => {
  const newsContainer = useRef<HTMLDivElement | null>(null);

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const dispatch = useAppDispatch();
  const isAnyFilterApplied = useAppSelector(isAnyFilterAppliedSelector);
  const news: NewsFeedItem[] = useAppSelector((state) => state.newsFeed.news);
  const loading = useAppSelector((state) => state.newsFeed.loading);

  const handleShowFiltersClick = () => {
    setIsFiltersVisible((v) => !v);
  };

  const handleClearFiltersClick = () => {
    void dispatch(getAllNewsThunk({}));
    setIsFiltersVisible(false);
  };

  const handleFiltersChangedInChildren = () => {
    newsContainer.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    void dispatch(getAllNewsThunk({}));
  }, [dispatch]);

  const isListEmpty = news.length === 0 && !loading;

  return (
    <div className={clsx('flex', 'flex-col', 'gap-5')}>
      <div>
        <div className={clsx('px-5', 'md:px-0')}>
          <Link
            onClick={handleShowFiltersClick}
            to={''}
            icon={isFiltersVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            Фильтры
          </Link>
        </div>

        {isFiltersVisible && (
          <Filter
            className={clsx('mt-5', 'mb-8')}
            onSubmit={handleFiltersChangedInChildren}
            onClear={handleFiltersChangedInChildren}
          />
        )}
      </div>

      {isListEmpty && isAnyFilterApplied && (
        <PageInfo
          title={'Нет подходящих новостей'}
          icon={<PencilSquareIcon />}
          description={
            <span>
              Попробуйте изменить фильтры.{' '}
              <Link underline to={''} onClick={handleClearFiltersClick}>
                Сбросить
              </Link>
            </span>
          }
        />
      )}

      {isListEmpty && !isAnyFilterApplied && (
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

      <div>
        <div ref={newsContainer} className={clsx('relative', '-top-24')} />

        <div className={clsx('grid', 'gap-5')}>
          {news.map((newsItem) => (
            <NewsItem key={newsItem.id} {...newsItem} />
          ))}
        </div>
      </div>
    </div>
  );
};
