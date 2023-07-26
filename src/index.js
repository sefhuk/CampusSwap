import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

import { SelectCampus, Home, UploadItem, Chat, UserInfo } from './pages';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/init',
    element: <SelectCampus />,
  },
  {
    path: '/u/:campusId',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'sell',
        element: <UploadItem />,
      },
      { path: 'chat', element: <Chat /> },
      { path: 'my', element: <UserInfo /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
