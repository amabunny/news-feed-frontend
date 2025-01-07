import clsx from 'clsx';
import { Link } from 'react-router';

import { Technology } from '../../model/types';

type Props = Technology;

export const TechItem = ({ site, name, logo }: Props) => {
  return (
    <Link
      to={site}
      target={'_blank'}
      className={clsx(
        'px-7',
        'py-5',
        'bg-zinc-800',
        'hover:bg-zinc-700/60',
        'transition-all',
        'md:rounded-md',
        'block',
        'group',
        'cursor-pointer'
      )}
    >
      <div className={clsx('mb-6')}>
        <div
          style={{ backgroundImage: `url(${logo})` }}
          className={clsx('h-28', 'bg-contain', 'bg-no-repeat', 'bg-center')}
        />
      </div>

      <div className={clsx('text-center')}>{name}</div>

      <div
        className={clsx(
          'text-sm',
          'underline',
          'group-hover:no-underline',
          'transition',
          'text-center'
        )}
      >
        {site}
      </div>
    </Link>
  );
};
