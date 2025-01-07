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
        'bg-gray-700',
        'py-1.5',
        'px-3',
        'text-sm/6',
        'font-semibold',
        'text-white',
        'shadow-inner',
        'shadow-white/10',
        'focus:outline-none',
        'data-[hover]:bg-gray-600',
        'data-[open]:bg-gray-700',
        'data-[focus]:outline-1',
        'data-[focus]:outline-white'
      )}
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};
