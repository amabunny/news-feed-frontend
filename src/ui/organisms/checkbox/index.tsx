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
  id?: string;
}

export const Checkbox = ({
  onChange,
  className,
  label,
  checked,
  description,
  id,
}: Props) => {
  return (
    <>
      <Field className={clsx('flex', 'gap-3', 'items-center', 'flex-wrap')}>
        <HeadlessCheckbox
          id={id}
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

        {label && (
          <Label className={'text-sm/6'} htmlFor={id}>
            {label}
          </Label>
        )}

        {description && (
          <Description className={'basis-full'}>{description}</Description>
        )}
      </Field>
    </>
  );
};
