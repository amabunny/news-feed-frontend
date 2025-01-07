import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Header } from '../../organisms/header';

type Props = PropsWithChildren;

export const BaseTemplate = ({ children }: Props) => {
  return (
    <div
      className={clsx('bg-zinc-900', 'text-white', 'flex', 'flex-col', 'h-dvh')}
    >
      <div>
        <Header />
      </div>

      <div
        className={clsx(
          'flex',
          'flex-col',
          'flex-grow',
          'overflow-y-auto',
          'py-10'
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
