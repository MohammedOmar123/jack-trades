import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import {
  LandingPage,
  AboutPage,
  SignIn,
  SignUp,
  ProfilePage,
  ProductsPage,
  ProductDetails,
} from './pages';

import Wishlist from './components/Wishlist';
import Requests from './components/Requests';
import { UserProducts } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1> 404 </h1>,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      }, {
        path: 'product/:id/details',
        element: <ProductDetails />,
      }, {
        path: 'profile/:userId',
        element: <ProfilePage />,
        children: [
          {
            index: true,
            element: <UserProducts />,
          },
          {
            path: 'wishlist',
            element: <Wishlist />,
          },
          {
            path: 'requests',
            element: <Requests />,
          },
        ],
      }, {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  }, {
    path: 'signin',
    element: <SignIn />,
  },
  {
    path: 'Signup',
    element: <SignUp />,
  },
]);

export default router;
