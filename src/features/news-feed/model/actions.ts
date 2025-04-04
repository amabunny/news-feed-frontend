import { createAction } from '@reduxjs/toolkit';

import { FilterSchema } from './types';

export const applyFiltersAction = createAction<FilterSchema | null>(
  'newsFeed/apply-filters'
);

export const resetNewsFeedAction = createAction('newsFeed/reset');
