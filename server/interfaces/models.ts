/* eslint-disable import/prefer-default-export */
interface ICategory {
  id: string;
  name: string;
  image: string;
}

interface IFavorite {
  id: string;
}

interface IFeedback {
  id: string;
  nickname: string;
  message: string;
}

interface IProduct {
  id: string;
  title: string;
  description: string;
  gallery: string[];
  is_available: boolean;
  type: string;
}

interface IRequest {
  id: string;
  status: 'pending' | 'success' | 'fail';
  is_exchangable: boolean;
  sender_approval: boolean;
  receiver_approval: boolean;
  products: number[];
}

interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image: string;
  bio: string;
}

export {
  ICategory,
  IFavorite,
  IFeedback,
  IProduct,
  IRequest,
  IUser,
};
