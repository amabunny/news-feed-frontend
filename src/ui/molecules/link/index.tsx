import clsx from 'clsx';
import { PropsWithChildren, ReactNode } from 'react';
import { Link as RouterLink, LinkProps, useLocation } from 'react-router';

interface OwnProps {
  icon?: ReactNode;
}

type Props = PropsWithChildren<LinkProps & OwnProps>;

export const Link = ({ children, icon, className, to, ...rest }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <RouterLink
      className={clsx(
        className,
        'text-white',
        'hover:text-gray-200',
        'flex',
        'items-center',
        'gap-2',
        'relative',
        {
          ['text-white/80']: isActive,
        }
      )}
      to={to}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      {children}
    </RouterLink>
  );
};
