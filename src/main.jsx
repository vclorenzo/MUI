import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notes from './pages/HomePage.jsx';
import Create from './pages/Create.jsx';
import NotFound from './pages/NotFound.jsx';
import Profiles from './pages/Profiles.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Notes />,
      },
      {
        path: 'create',
        element: <Create />,
      },
      {
        path: 'profiles',
        element: <Profiles />,
        children: [
          {
            path: ':profileId',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </React.StrictMode>
);
