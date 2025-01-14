import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '@/lib/create-store';

export const isAnyFilterAppliedSelector = createSelector(
  (state: AppState) => state.newsFeed.appliedFilter,
  (appliedFilter) =>
    appliedFilter
      ? Object.values(appliedFilter).some((key) => Boolean(key))
      : false
);
