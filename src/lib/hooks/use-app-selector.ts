import { UseSelector, useSelector } from 'react-redux';

import { AppState } from '@/lib/create-store.ts';

export const useAppSelector: UseSelector<AppState> = useSelector;
