import { ExclamationTriangleIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';

import { BaseTemplate, BaseTemplateFullHeightLayer, PageInfo } from '@/ui';

export const NotFoundPage = () => {
  return (
    <BaseTemplate>
      <BaseTemplateFullHeightLayer
        className={clsx('flex', 'flex-col', 'justify-center', 'items-center')}
      >
        <PageInfo
          title={'404'}
          icon={<ExclamationTriangleIcon />}
          description={'Страница не найдена'}
        />
      </BaseTemplateFullHeightLayer>
    </BaseTemplate>
  );
};

export default NotFoundPage;
