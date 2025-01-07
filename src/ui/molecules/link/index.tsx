import clsx from 'clsx';
import { PropsWithChildren, ReactNode } from 'react';
import { Link as RouterLink, LinkProps, useLocation } from 'react-router';

interface OwnProps {
  icon?: ReactNode;
  underline?: boolean;
}

type Props = PropsWithChildren<LinkProps & OwnProps>;

export const Link = ({
  children,
  icon,
  className,
  underline,
  to,
  ...rest
}: Props) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <RouterLink
      className={clsx(
        className,
        'text-black',
        'dark:text-white',
        'dark:hover:text-gray-200',
        'inline-flex',
        'items-center',
        'gap-2',
        'relative',
        {
          'dark:text-white/80': isActive,
          'underline hover:no-underline': underline,
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
