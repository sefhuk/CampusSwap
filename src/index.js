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
      { path: 'chat', element: <Chat /> },
      { path: 'my', element: <UserInfo /> },
    ],
  },
  {
    path: '/u/:campusId/sell',
    element: <UploadItem />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
