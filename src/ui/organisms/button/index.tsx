import { Button as HeadlessButton, ButtonProps } from '@headlessui/react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonProps>;

export const Button = ({ children, ...rest }: Props) => {
  return (
    <HeadlessButton
      className={clsx(
        'inline-flex',
        'items-center',
        'gap-2',
        'rounded-md',
        'bg-white/5',
        'py-1.5',
        'px-3',
        'text-sm/6',
        'text-white',
        'shadow-white/10',
        'focus:outline-none',
        'data-[hover]:bg-white/15',
        'data-[open]:bg-white/15',
        'data-[focus]:outline-1',
        'data-[focus]:outline-white',
        'transition-all'
      )}
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};
