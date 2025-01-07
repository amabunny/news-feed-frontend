import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Header } from '@/ui/organisms';

type Props = PropsWithChildren;

export const BaseTemplate = ({ children }: Props) => {
  return (
    <div
      className={clsx('bg-zinc-900', 'text-white', 'h-dvh', 'flex', 'flex-col')}
    >
      <div>
        <Header />
      </div>
      <div className={'overflow-y-auto py-10'}>
        <div className={'container mx-auto'}>{children}</div>
      </div>
    </div>
  );
};
