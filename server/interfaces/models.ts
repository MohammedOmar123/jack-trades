import { CreationOptional } from 'sequelize';

/* eslint-disable import/prefer-default-export */
interface ICategory {
  id: CreationOptional<number>;
  name: string;
  image: string;
}

interface IFavorite {
  id: CreationOptional<number>;
}

interface IFeedback {
  id: CreationOptional<number>;
  nickname: string;
  message: string;
}

interface IProduct {
  id: CreationOptional<number>;
  title: string;
  description: string;
  gallery: string[];
  is_available: boolean;
  type: string;
}

interface IRequest {
  id: CreationOptional<number>;
  status: 'pending' | 'success' | 'fail';
  is_exchangable: boolean;
  sender_approval: boolean;
  receiver_approval: boolean;
  products: number[];
}

interface IUser {
  id: CreationOptional<number>;
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
