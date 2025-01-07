import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/lib/create-store';

export const useAppDispatch = (): AppDispatch => {
  return useDispatch<AppDispatch>();
};
