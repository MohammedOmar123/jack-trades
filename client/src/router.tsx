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
  AddProductPage,
} from './pages';

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
      }, {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'newProduct',
        element: <AddProductPage />,
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
