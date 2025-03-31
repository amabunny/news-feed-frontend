import { MenuButton } from '@headlessui/react';
import {
  EllipsisHorizontalCircleIcon,
  FireIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { MouseEvent, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { ConfirmContext } from '@/features/confirm';
import { useAppDispatch } from '@/lib/hooks';
import { RoutesService } from '@/services/routes.ts';
import { NewsFeedItem } from '@/types/news-feed';
import { Card, DropdownMenu, Link, Skeleton } from '@/ui';

import { deleteNewsItemThunk } from '../../model';
import classes from './style.module.css';

type Props = NewsFeedItem & {
  loading?: boolean;
};

export const NewsItem = ({
  content,
  title,
  author,
  id,
  createdTimestamp,
  isHot,
  loading,
  hasLargeContent,
}: Props) => {
  const [heightLimited, setHeightLimited] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { confirm } = useContext(ConfirmContext);

  useEffect(() => {
    if (hasLargeContent) setHeightLimited(hasLargeContent);
  }, [hasLargeContent]);

  const handleShowFullClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setHeightLimited(false);
  };

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
      void dispatch(deleteNewsItemThunk(id)).then(() =>
        toast.success('Новость успешно удалена', { theme: 'dark' })
      );
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
          {loading ? (
            <div className={'animate-pulse'}>
              <Skeleton className={'h-2.5 w-24 mb-2'}></Skeleton>
            </div>
          ) : (
            <span className={'text-xs'}>Автор: {author}</span>
          )}

          {formattedDate && (
            <div className={'mb-2'}>
              {loading ? (
                <Skeleton className={'h-2.5 w-20'} />
              ) : (
                <span className={'text-xs'}>Создано: {formattedDate}</span>
              )}
            </div>
          )}
        </div>

        {isHot && (
          <span className={clsx('text-xs', 'relative', 'top-2')}>
            <FireIcon className={clsx('size-6', 'fill-orange-500')} />
          </span>
        )}
      </div>

      {loading ? (
        <Skeleton className={'w-32 h-8 mb-3'} />
      ) : (
        <h2 className={clsx('dark:text-white', 'mb-5', 'text-2xl')}>{title}</h2>
      )}

      {loading ? (
        <>
          <Skeleton className={'h-2.5 mb-2 lg:w-96'} />
          <Skeleton className={'h-2.5 mb-2 lg:w-96'} />
          <Skeleton className={'h-2.5 mb-2 lg:w-96'} />
        </>
      ) : (
        <div className={'relative'}>
          <div
            className={clsx(classes.stylesContainer, {
              'max-h-[70vh] lg:max-h-[40vh]': heightLimited,
            })}
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {heightLimited && (
            <div
              className={clsx(
                'h-12 w-full bg-gradient-to-b from-transparent to-neutral-800',
                'absolute bottom-0'
              )}
            />
          )}
        </div>
      )}

      {heightLimited && (
        <div>
          <Link to={'#'} underline onClick={handleShowFullClick}>
            Показать полностью
          </Link>
        </div>
      )}

      {!loading && (
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
      )}
    </Card>
  );
};
