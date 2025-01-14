import {
  Checkbox as HeadlessCheckbox,
  Description,
  Field,
  Label,
} from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  label?: ReactNode;
  description?: ReactNode;
}

export const Checkbox = ({
  onChange,
  className,
  label,
  checked,
  description,
}: Props) => {
  return (
    <Field>
      <div className={clsx('flex', 'gap-3', 'items-center')}>
        {label && <Label className={'text-sm/6'}>{label}</Label>}
        <HeadlessCheckbox
          checked={checked}
          onChange={onChange}
          className={clsx(
            className,
            'group',
            'block',
            'size-4',
            'rounded',
            'border',
            'bg-white',
            'data-[checked]:bg-blue-500'
          )}
        >
          {/* Checkmark icon */}
          <svg
            className="stroke-white opacity-0 group-data-[checked]:opacity-100"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </HeadlessCheckbox>
      </div>
      {description && <Description>{description}</Description>}
    </Field>
  );
};
