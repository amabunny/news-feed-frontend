import {
  Bars3Icon,
  ClipboardDocumentIcon,
  DocumentPlusIcon,
  FireIcon,
  NewspaperIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { RoutesService } from '@/services/routes';

import { Link } from '../../molecules/link';

interface Props {
  className?: string;
  onMobileMenuVisibleChange?: (visible: boolean) => void;
}

export const Header = ({ onMobileMenuVisibleChange, className }: Props) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const onMenuBarClick = () => {
    setMobileMenuVisible((visible) => !visible);
  };

  useEffect(() => {
    onMobileMenuVisibleChange?.(mobileMenuVisible);
  }, [mobileMenuVisible, onMobileMenuVisibleChange]);

  return (
    <header
      className={clsx(
        className,
        'py-4',
        'relative',
        'border-b',
        'bg-white',
        'dark:border-b-zinc-900',
        'dark:bg-zinc-800'
      )}
    >
      <div
        className={clsx(
          'container',
          'mx-auto',
          'gap-5',
          'px-7',
          'lg:px-2',
          'xl:px-0'
        )}
      >
        <button
          className={clsx(
            'flex',
            'md:hidden',
            'items-center',
            'gap-3',
            'w-full'
          )}
          onClick={onMenuBarClick}
        >
          {mobileMenuVisible ? (
            <XMarkIcon className={clsx('size-4')} />
          ) : (
            <Bars3Icon className={clsx('size-4')} />
          )}

          <span> Меню </span>

          {mobileMenuVisible && (
            <div
              className={clsx(
                'absolute',
                'bg-zinc-800',
                'z-50',
                'top-full',
                'left-0',
                'right-0',
                'px-7',
                'py-2',
                'flex',
                'flex-col',
                '[&>div]:py-2',
                'text-left',
                'border-b-2',
                'border-t-2',
                'border-zinc-900',
                'text-left'
              )}
            >
              <div>
                <HomeLink />
              </div>

              <div>
                <HotNewsLink />
              </div>

              <div>
                <AboutLink />
              </div>

              <div>
                <CreatePostLink />
              </div>
            </div>
          )}
        </button>

        <div className={clsx('hidden', 'md:block')}>
          <div
            className={clsx(
              'flex',
              'items-center',
              'gap-5',
              'justify-between',
              'leading-none'
            )}
          >
            <div className={clsx('flex', 'items-center', 'gap-5')}>
              <div>
                <HomeLink />
              </div>

              <div>
                <HotNewsLink />
              </div>

              <div>
                <AboutLink />
              </div>
            </div>

            <div className={clsx('flex', 'gap-5', 'items-center')}>
              <div>
                <CreatePostLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HomeLink = () => (
  <Link
    className={clsx('text-sm', 'w-full')}
    to={RoutesService.getIndex()}
    icon={<NewspaperIcon />}
  >
    Новости
  </Link>
);

const AboutLink = () => (
  <Link
    className={clsx('text-sm', 'w-full')}
    to={RoutesService.getAbout()}
    icon={<ClipboardDocumentIcon />}
  >
    О проекте
  </Link>
);

const CreatePostLink = () => (
  <Link
    className={clsx('text-sm', 'w-full')}
    to={RoutesService.getPublishNews()}
    icon={<DocumentPlusIcon />}
  >
    Создать пост
  </Link>
);

const HotNewsLink = () => (
  <Link
    className={clsx('text-sm', 'w-full')}
    to={RoutesService.getHotNews()}
    icon={<FireIcon />}
  >
    Горячее
  </Link>
);
