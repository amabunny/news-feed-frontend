import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid';

import { Dialog } from '../../molecules/dialog';
import { Button } from '../button';

interface Props {
  title: string;
  confirmation: string;
  okLabel?: string;
  cancelLabel?: string;
  resolve: (success: boolean) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ConfirmDialog = ({
  confirmation,
  cancelLabel,
  okLabel,
  title,
  resolve,
  open,
  setOpen,
}: Props) => {
  return (
    <Dialog
      open={open}
      setOpen={() => {
        setOpen(false);
        resolve(false);
      }}
      buttons={
        <>
          <Button
            onClick={() => {
              resolve(true);
              setOpen(false);
            }}
          >
            {okLabel ?? 'OK'}
          </Button>
          <Button
            onClick={() => {
              resolve(false);
              setOpen(false);
            }}
          >
            {cancelLabel ?? 'Отмена'}
          </Button>
        </>
      }
      title={
        <div className={'flex items-center gap-2 mb-2'}>
          <QuestionMarkCircleIcon width={15} height={15} /> {title}
        </div>
      }
    >
      {confirmation}
    </Dialog>
  );
};
