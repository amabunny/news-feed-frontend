import { useParams } from 'react-router';

import { NewsItemForm } from '@/features/news-feed';
import { BaseTemplate } from '@/ui';

export const NewsEditPage = () => {
  const { id } = useParams();

  return (
    <BaseTemplate>
      <NewsItemForm id={id} />
    </BaseTemplate>
  );
};
