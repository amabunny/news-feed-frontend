import { NewsFeed } from '@/features/news-feed';
import { BaseTemplate } from '@/ui';

export const IndexPage = () => {
  return (
    <BaseTemplate>
      <NewsFeed />
    </BaseTemplate>
  );
};

export default IndexPage;
