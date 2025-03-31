import {
  Dialog as HeadlessUiDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  title?: ReactNode;
  children: ReactNode;
  buttons?: ReactNode;
}

export const Dialog = ({ setOpen, open, title, children, buttons }: Props) => {
  return (
    <HeadlessUiDialog
      open={open}
      onClose={() => setOpen?.(false)}
      as={'div'}
      className={'relative z-10 focus:outline-none'}
    >
      <DialogBackdrop className={'fixed inset-0 bg-black/30'} />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className={clsx(
              'w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl',
              'duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            )}
          >
            {title && (
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                {title}
              </DialogTitle>
            )}

            <div className={'text-xl text-white'}>{children}</div>

            {buttons && <div className="mt-4 flex gap-4">{buttons}</div>}
          </DialogPanel>
        </div>
      </div>
    </HeadlessUiDialog>
  );
};
