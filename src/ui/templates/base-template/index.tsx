import clsx from 'clsx';
import { PropsWithChildren, useState } from 'react';

import { Header } from '../../organisms/header';

type Props = PropsWithChildren;

export const BaseTemplate = ({ children }: Props) => {
  const [contentBackdrop, setContentBackdrop] = useState(false);

  return (
    <div
      className={clsx(
        'bg-white',
        'text-black',
        'dark:bg-zinc-900',
        'dark:text-white',
        'relative'
      )}
    >
      <div className={clsx('sticky', 'top-0', 'z-10')}>
        <Header onMobileMenuVisibleChange={setContentBackdrop} />
      </div>

      <div
        className={clsx(
          'overflow-y-auto',
          'py-10',

          contentBackdrop && [
            'after:absolute',
            'after:content-[""]',
            'after:top-0',
            'after:left-0',
            'after:right-0',
            'after:bottom-0',
            'after:bg-zinc-900/90',
          ]
        )}
      >
        <div
          className={clsx(
            'container',
            'mx-auto',
            'flex',
            'flex-col',
            'flex-grow'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
