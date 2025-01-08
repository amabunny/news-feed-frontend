import { lazy } from 'react';
import { Route, Routes } from 'react-router';

import { RoutesService } from '@/services/routes';
import { RouteParams } from '@/types/router';

const routes: RouteParams[] = [
  {
    index: true,
    Component: lazy(() => import('@/pages')),
  },
  {
    path: RoutesService.getNewsId(),
    Component: lazy(() => import('@/pages/news/id')),
  },
  {
    path: RoutesService.getPublishNews(),
    Component: lazy(() => import('@/pages/publish')),
  },
  {
    path: RoutesService.getNewsItemEdit(),
    Component: lazy(() => import('@/pages/news/edit')),
  },
  {
    path: RoutesService.getAbout(),
    Component: lazy(() => import('@/pages/about')),
  },
  {
    path: '*',
    Component: lazy(() => import('@/pages/not-found')),
  },
];

export const Router = () => (
  <Routes>
    {routes.map(({ Component, index, path }) => (
      <Route
        key={path ?? ''}
        path={path}
        index={index}
        element={<Component />}
      />
    ))}
  </Routes>
);
