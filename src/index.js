import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import {
  SelectCampus,
  Home,
  UploadItem,
  Chat,
  UserInfo,
  SignIn,
  SignUp,
  Root,
} from './pages';
import store from './redux/store';
import { Provider } from 'react-redux';

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
      {
        path: 'my',
        element: <UserInfo />,
      },
    ],
  },
  {
    path: '/u/:campusId/sell',
    element: <UploadItem />,
  },
  { path: '/signin', element: <SignIn /> },
  { path: '/signup', element: <SignUp /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
