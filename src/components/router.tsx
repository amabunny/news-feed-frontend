import { Route, Routes } from 'react-router';

import { IndexPage } from '@/pages';
import { AboutPage } from '@/pages/about';
import { NewsEditPage } from '@/pages/news/edit.tsx';
import { NewsIdPage } from '@/pages/news/id';
import { NotFoundPage } from '@/pages/not-found.tsx';
import { PublishPage } from '@/pages/publish';
import { RoutesService } from '@/services/routes';

export const Router = () => (
  <Routes>
    <Route index element={<IndexPage />} />
    <Route path={RoutesService.getNewsId()} element={<NewsIdPage />} />
    <Route path={RoutesService.getPublishNews()} element={<PublishPage />} />
    <Route path={RoutesService.getNewsItemEdit()} element={<NewsEditPage />} />
    <Route path={RoutesService.getAbout()} element={<AboutPage />} />

    <Route path={'*'} element={<NotFoundPage />} />
  </Routes>
);
