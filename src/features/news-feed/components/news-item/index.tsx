import { MenuButton } from '@headlessui/react';
import {
  EllipsisHorizontalCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '@/lib/hooks';
import { RoutesService } from '@/services/routes.ts';
import { NewsFeedItem } from '@/types/news-feed';
import { DropdownMenu } from '@/ui';

import { deleteNewsItemThunk } from '../../model';
import classes from './style.module.css';

export const NewsItem = ({
  content,
  title,
  author,
  id,
  createdTimestamp,
}: NewsFeedItem) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEditClick = () => {
    if (id) {
      void navigate(RoutesService.getNewsItemEdit({ id: id.toString() }));
    }
  };

  const handleDeleteClick = () => {
    if (id) {
      void dispatch(deleteNewsItemThunk(id));
    }
  };

  const formattedDate = useMemo<string | null>(() => {
    if (!createdTimestamp) {
      return null;
    }

    const formatter = new Intl.DateTimeFormat('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    return formatter.format(new Date(createdTimestamp));
  }, [createdTimestamp]);

  return (
    <div
      className={clsx(
        'bg-zinc-800',
        'py-4',
        'px-7',
        'relative',
        'sm:rounded-md'
      )}
    >
      <div>
        <span className={'text-xs'}>Автор: {author}</span>
      </div>

      {formattedDate && (
        <div className={'mb-2'}>
          <span className={'text-xs'}>Создано: {formattedDate}</span>
        </div>
      )}

      <h2 className={clsx('text-white', 'mb-5', 'text-2xl')}>{title}</h2>

      <div
        className={classes.stylesContainer}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className={clsx('absolute right-2 top-2')}>
        <DropdownMenu
          options={[
            {
              label: 'Изменить',
              key: 'edit',
              icon: <PencilSquareIcon className={'size-4 fill-white/60'} />,
              onClick: handleEditClick,
            },
            {
              label: 'Удалить',
              key: 'delete',
              icon: <TrashIcon className={'size-4 fill-white/60'} />,
              onClick: handleDeleteClick,
            },
          ]}
        >
          <MenuButton
            className={clsx(
              'py-1',
              'px-1',
              'text-sm/6',
              'font-semibold',
              'text-white',
              'focus:outline-none',
              'data-[focus]:outline-1',
              'data-[focus]:outline-white'
            )}
          >
            <EllipsisHorizontalCircleIcon
              className={clsx('size-4', 'fill-white/60', 'hover:fill-white')}
            />
          </MenuButton>
        </DropdownMenu>
      </div>
    </div>
  );
};
