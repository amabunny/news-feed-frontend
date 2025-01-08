import { useParams } from 'react-router';

import { BaseTemplate } from '@/ui';

export const NewsIdPage = () => {
  const { id } = useParams();
  return <BaseTemplate>new with id {id}</BaseTemplate>;
};

export default NewsIdPage;
