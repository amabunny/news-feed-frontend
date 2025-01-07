import clsx from 'clsx';

import { techItems } from '../../model';
import { Description } from '../description';
import { TechItem } from '../tech-item';

export const About = () => {
  return (
    <div>
      <Description className={clsx('mb-10')} />

      <div
        className={clsx(
          'grid',
          'md:grid-cols-2',
          'lg:grid-cols-4',
          'gap-5',
          'w-full'
        )}
      >
        {techItems.map((item) => (
          <TechItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};
