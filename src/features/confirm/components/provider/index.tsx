import { ReactNode, useCallback, useEffect, useState } from 'react';

import { ConfirmOptions } from '@/features/confirm';
import { ConfirmDialog } from '@/ui';

import { ConfirmContext } from '../../model';

interface ConfirmDialogProviderProps {
  children?: ReactNode;
}

export const ConfirmDialogProvider = ({
  children,
}: ConfirmDialogProviderProps) => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const [resolve, setResolve] = useState<(success: boolean) => void>(() => {
    return () => void 0;
  });

  const confirm = useCallback(
    (params: ConfirmOptions) =>
      new Promise<boolean>((resolve) => {
        setOpen(true);
        setResolve(() => resolve);
        setTitle(params.title);
        setConfirmation(params.confirmation);
      }),
    []
  );

  useEffect(() => {
    console.log(resolve);
  }, [resolve]);

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      <ConfirmDialog
        open={open}
        setOpen={setOpen}
        title={title}
        confirmation={confirmation}
        resolve={resolve}
      />
      {children}
    </ConfirmContext.Provider>
  );
};
