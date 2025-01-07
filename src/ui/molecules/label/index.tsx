import { Label as HeadlessLabel } from '@headlessui/react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Label = ({ children, className }: Props) => {
  return (
    <HeadlessLabel
      className={clsx(className, 'text-sm/6', 'font-medium', 'text-white')}
    >
      {children}
    </HeadlessLabel>
  );
};
