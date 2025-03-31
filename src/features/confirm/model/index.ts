import { createContext } from 'react';

import { ConfirmProviderContext } from './types';

export const ConfirmContext = createContext<ConfirmProviderContext>({
  confirm: () => new Promise<boolean>((resolve) => resolve(false)),
});

export * from './types';
