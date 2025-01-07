import {
  Bars3Icon,
  ClipboardDocumentIcon,
  DocumentPlusIcon,
  NewspaperIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useState } from 'react';

import { RoutesService } from '@/services/routes.ts';
import { Link } from '@/ui/molecules';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const onMenuBarClick = () => {
    setMenuVisible((visible) => !visible);
  };

  return (
    <header
      className={clsx(
        'py-4',
        'bg-zinc-800',
        'border-b',
        'border-b-zinc-900',
        'backdrop-blur-sm',
        'z-50'
      )}
    >
      <div
        className={clsx(
          'container',
          'mx-auto',
          'gap-5',
          'px-7',
          'sm:px-7',
          'lg:px-2',
          'xl:px-0'
        )}
      >
        <button
          className={clsx('flex', 'md:hidden', 'items-center', 'gap-3')}
          onClick={onMenuBarClick}
        >
          {menuVisible ? (
            <XMarkIcon className={clsx('size-4')} />
          ) : (
            <Bars3Icon className={clsx('size-4')} />
          )}

          <span> Меню </span>

          {menuVisible && (
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
                'border-b-2',
                'border-t-2',
                'border-zinc-900'
              )}
            >
              <div>
                <HomeLink />
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
                <AboutLink />
              </div>
            </div>

            <div>
              <CreatePostLink />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HomeLink = () => (
  <Link
    className={clsx('text-sm')}
    to={RoutesService.getIndex()}
    icon={<NewspaperIcon className={clsx('size-4')} />}
  >
    Новости
  </Link>
);

const AboutLink = () => (
  <Link
    className={clsx('text-sm')}
    to={RoutesService.getAbout()}
    icon={<ClipboardDocumentIcon className={'size-4'} />}
  >
    О проекте
  </Link>
);

const CreatePostLink = () => (
  <Link
    className={clsx('text-sm')}
    to={RoutesService.getPublishNews()}
    icon={<DocumentPlusIcon className={'size-4'} />}
  >
    Создать пост
  </Link>
);
