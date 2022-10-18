import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  LandingPage,
  AboutPage,
  SignIn,
  SignUp,
  ProfilePage,
  ProductsPage,
  ProductDetails,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'products',
    element: <ProductsPage />,
  },
  {
    path: 'product/:id/details',
    element: <ProductDetails />,
  },
  {
    path: '/profile/:username',
    element: <ProfilePage />,
  },
  {
    path: 'signin',
    element: <SignIn />,
  },
  {
    path: 'Signup',
    element: <SignUp />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
]);

export {
  router,
  RouterProvider,
};
