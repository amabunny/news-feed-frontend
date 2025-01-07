import { Menu, MenuItem, MenuItems } from '@headlessui/react';
import clsx from 'clsx';
import { MouseEvent, PropsWithChildren, ReactNode } from 'react';

export interface DropdownMenuOption {
  label: ReactNode;
  icon?: ReactNode;
  key: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

type Props = PropsWithChildren<{
  options: DropdownMenuOption[];
}>;

export const DropdownMenu = ({ children, options }: Props) => {
  return (
    <Menu>
      {children}

      <MenuItems
        transition
        anchor="bottom end"
        className={clsx(
          'w-52',
          'origin-top-right',
          'rounded-xl',
          'bg-white/5',
          'p-1',
          'text-sm/6',
          'text-white',
          'transition',
          'duration-100',
          'ease-out',
          '[--anchor-gap:var(--spacing-1)]',
          'focus:outline-none',
          'data-[closed]:scale-95',
          'data-[closed]:opacity-0'
        )}
      >
        {options.map(({ label, icon, key, onClick }) => (
          <MenuItem key={key}>
            <button
              className={clsx(
                'group',
                'flex',
                'w-full',
                'items-center',
                'gap-2',
                'rounded-lg',
                'py-1.5',
                'px-3',
                'data-[focus]:bg-white/10'
              )}
              onClick={(e) => onClick?.(e)}
            >
              {icon}
              {label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
