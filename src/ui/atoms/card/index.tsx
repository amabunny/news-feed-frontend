import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  indents?: boolean;
  hoverAble?: boolean;
}>;

export const Card = ({ children, className, indents, hoverAble }: Props) => {
  return (
    <div
      className={clsx(className, 'bg-zinc-800', 'md:rounded-md', {
        ['px-7 py-4']: indents,
        ['lg:hover:bg-zinc-700/60 lg:transition-all']: hoverAble,
      })}
    >
      {children}
    </div>
  );
};
