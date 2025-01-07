import { Switch as HeadlessUISwitch } from '@headlessui/react';
import clsx from 'clsx';

interface Props {
  checked?: boolean;
  setChecked?: (checked: boolean) => void;
}

export const Switch = ({ checked, setChecked }: Props) => {
  return (
    <HeadlessUISwitch
      checked={checked}
      onChange={setChecked}
      className={clsx(
        'group',
        'relative',
        'flex',
        'h-5',
        'w-11',
        'cursor-pointer',
        'rounded-full',
        'bg-white/10',
        'p-1',
        'transition-colors',
        'duration-200',
        'ease-in-out',
        'focus:outline-none',
        'data-[focus]:outline-1',
        'data-[focus]:outline-white',
        'data-[checked]:bg-white/20'
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none',
          'inline-block',
          'size-3',
          'translate-x-0',
          'rounded-full',
          'bg-white',
          'ring-0',
          'shadow-lg',
          'transition',
          'duration-200',
          'ease-in-out',
          'group-data-[checked]:translate-x-6'
        )}
      />
    </HeadlessUISwitch>
  );
};
