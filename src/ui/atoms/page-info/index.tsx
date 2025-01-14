import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  title: string;
  boldTitle?: boolean;
  icon: ReactNode;
  description?: ReactNode;
}

export const PageInfo = ({ title, boldTitle, icon, description }: Props) => {
  return (
    <div className={clsx('flex', 'flex-col', 'items-center')}>
      {icon && <div className={clsx('size-40', 'mb-5')}>{icon}</div>}
      <div
        className={clsx('text-center', 'text-2xl', 'md:text-5xl', 'mb-5', {
          'font-bold': boldTitle,
        })}
      >
        {title}
      </div>
      {description && (
        <div className={clsx('text-sm', 'text-center')}>{description}</div>
      )}
    </div>
  );
};
