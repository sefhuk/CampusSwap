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
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/configureStore';
import LoginLoading from './pages/LoginLoading';
import SignInForm from './pages/Auth/SignInForm';

import eruda from 'eruda';

if (process.env.NODE_ENV === 'development') {
  eruda.init();
}

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
  {
    path: '/signin',
    element: <SignIn />,
    children: [
      { index: true, element: <SignInForm /> },
      {
        path: 'loading',
        element: <LoginLoading />,
      },
    ],
  },
  { path: '/signup', element: <SignUp /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
