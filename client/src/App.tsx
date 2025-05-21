import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './ui/Layout';
import Admin from './pages/Admin';
import Calls from './pages/Calls';
import Call from './pages/Call';
import NoCallPlaceHolder from './ui/NoCallPlaceHolder';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate replace to={'/admin'} />,
      },

      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/calls',
        element: <Calls />,
        children: [
          {
            index: true,
            element: <NoCallPlaceHolder />,
          },
          {
            path: ':callId',
            element: <Call />,
          },
        ],
      },
    ],
  },
]);
