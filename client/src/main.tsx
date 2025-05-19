import { router } from './App.tsx';
import './index.css';
import { StrictMode } from 'react';
import GlobalStyles from './styles/GlobalStyles.ts';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </StrictMode>
  </QueryClientProvider>
);
