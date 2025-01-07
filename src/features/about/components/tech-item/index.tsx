import clsx from 'clsx';
import { Link } from 'react-router';

import { Card } from '@/ui';

import { Technology } from '../../model/types';

type Props = Technology;

export const TechItem = ({ site, name, logo }: Props) => {
  return (
    <Card hoverAble className={clsx('px-7', 'py-5')}>
      <Link
        to={site}
        target={'_blank'}
        className={clsx('block', 'group', 'cursor-pointer', 'inset-0')}
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
            'md:group-hover:no-underline',
            'transition',
            'text-center'
          )}
        >
          {site}
        </div>
      </Link>
    </Card>
  );
};
