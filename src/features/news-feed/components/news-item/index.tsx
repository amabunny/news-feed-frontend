import { MenuButton } from '@headlessui/react';
import {
  EllipsisHorizontalCircleIcon,
  FireIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { ConfirmContext } from '@/features/confirm';
import { useAppDispatch } from '@/lib/hooks';
import { RoutesService } from '@/services/routes.ts';
import { NewsFeedItem } from '@/types/news-feed';
import { Card, DropdownMenu } from '@/ui';

import { deleteNewsItemThunk } from '../../model';
import classes from './style.module.css';

export const NewsItem = ({
  content,
  title,
  author,
  id,
  createdTimestamp,
  isHot,
}: NewsFeedItem) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { confirm } = useContext(ConfirmContext);

  const handleEditClick = () => {
    if (id) {
      void navigate(RoutesService.getNewsItemEdit({ id: id.toString() }));
    }
  };

  const handleDeleteClick = async () => {
    const result = await confirm({
      confirmation: 'Вы действительно хотите удалить новость?',
      title: 'Вы уверены?',
    });

    if (result && id) {
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
    <Card className={clsx('relative')} indents>
      <div
        className={clsx(
          'grid',
          'gap-6',
          'grid-flow-col',
          'justify-start',
          'bg-opacity-5'
        )}
      >
        <div>
          <span className={'text-xs'}>Автор: {author}</span>
          {formattedDate && (
            <div className={'mb-2'}>
              <span className={'text-xs'}>Создано: {formattedDate}</span>
            </div>
          )}
        </div>

        {isHot && (
          <span className={clsx('text-xs', 'relative', 'top-2')}>
            <FireIcon className={clsx('size-6', 'fill-orange-500')} />
          </span>
        )}
      </div>

      <h2 className={clsx('dark:text-white', 'mb-5', 'text-2xl')}>{title}</h2>

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
    </Card>
  );
};
