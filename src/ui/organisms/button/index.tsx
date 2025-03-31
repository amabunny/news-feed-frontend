import { Button as HeadlessButton, ButtonProps } from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  icon?: ReactNode;
  fullWidth?: boolean;
} & ButtonProps;

export const Button = ({
  children,
  className,
  fullWidth,
  icon,
  ...rest
}: Props) => {
  return (
    <HeadlessButton
      className={clsx(
        className,
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
        'transition-all',
        fullWidth && 'w-full'
      )}
      {...rest}
    >
      {icon && <span className={clsx('size-4')}>{icon}</span>}
      {children}
    </HeadlessButton>
  );
};
