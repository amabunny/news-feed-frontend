import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export const BaseTemplateFullHeightLayer = ({ children, className }: Props) => {
  return <div className={clsx(className, 'flex-grow')}>{children}</div>;
};
