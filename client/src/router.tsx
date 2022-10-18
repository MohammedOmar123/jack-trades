import { createBrowserRouter } from 'react-router-dom';

import {
  LandingPage,
  AboutPage,
  SignIn,
  SignUp,
  ProfilePage,
  ProductsPage,
  ProductDetails,
} from './pages';
import App from './App';

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
        path: 'profile/:username',
        element: <ProfilePage />,
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
