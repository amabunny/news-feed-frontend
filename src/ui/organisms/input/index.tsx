import {
  Description,
  Field,
  Input as HeadlessInput,
  InputProps,
} from '@headlessui/react';
import clsx from 'clsx';
import { forwardRef, ReactNode } from 'react';

import { Label } from '@/ui/molecules';

import classes from './style.module.css';

type Props = {
  label?: ReactNode;
  description?: ReactNode;
} & InputProps;

export const Input = forwardRef<HTMLElement, Props>(
  ({ label, description, ...inputProps }: Props, ref) => {
    return (
      <div className="w-full">
        <Field>
          {label && <Label>{label}</Label>}
          {description && (
            <Description className="text-sm/6 text-white/50">
              {description}
            </Description>
          )}
          <HeadlessInput
            ref={ref}
            className={clsx(
              classes.input,
              'mt-3',
              'block',
              'w-full',
              'rounded-lg',
              'border-none',
              'bg-white/5',
              'py-1.5',
              'px-3',
              'text-sm/6',
              'text-white',
              'focus:outline-none',
              'data-[focus]:outline-2',
              'data-[focus]:-outline-offset-2',
              'data-[focus]:outline-white/25'
            )}
            {...inputProps}
          />
        </Field>
      </div>
    );
  }
);

Input.displayName = 'Input';
