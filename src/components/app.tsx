import { useMemo } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { createStore } from '@/lib/create-store';

import { Router } from './router.tsx';

export const App = () => {
  const store = useMemo(() => createStore(), []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </>
  );
};
