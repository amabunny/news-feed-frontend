import clsx from 'clsx';

interface Props {
  className?: string;
}

/** @desc Для использования нужно задать ширину и высоту */
export const Skeleton = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        'bg-gray-200 rounded-lg dark:bg-neutral-700 animate-pulse'
      )}
    />
  );
};
