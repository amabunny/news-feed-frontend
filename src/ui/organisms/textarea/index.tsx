import {
  Description,
  Field,
  Label,
  Textarea as HeadlessTextarea,
  TextareaProps,
} from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  label?: ReactNode;
  description?: ReactNode;
} & TextareaProps;

export const Textarea = ({ label, description, ...textareaProps }: Props) => {
  return (
    <div className="w-full">
      <Field>
        {label && (
          <Label className="text-sm/6 font-medium text-white">{label}</Label>
        )}
        {description && (
          <Description className="text-sm/6 text-white/50">
            {description}
          </Description>
        )}
        <HeadlessTextarea
          className={clsx(
            'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          {...textareaProps}
        />
      </Field>
    </div>
  );
};
