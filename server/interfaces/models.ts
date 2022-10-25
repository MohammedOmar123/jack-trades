import {
  CreationOptional, InferAttributes, InferCreationAttributes, Model,
} from 'sequelize';

/* eslint-disable import/prefer-default-export */
interface ICategory extends Model<InferAttributes<ICategory>, InferCreationAttributes<ICategory>> {
  id: CreationOptional<number>;
  name: string;
  image: string;
}

interface IFavorite extends Model<InferAttributes<IFavorite>, InferCreationAttributes<IFavorite>> {
  id: CreationOptional<number>;
}

interface IFeedback extends Model<InferAttributes<IFeedback>, InferCreationAttributes<IFeedback>> {
  id: CreationOptional<number>;
  nickname: string;
  message: string;
}

interface IProduct extends Model<InferAttributes<IProduct>, InferCreationAttributes<IProduct>> {
  id: CreationOptional<number>;
  title: string;
  description: string;
  gallery: string[];
  is_available: boolean;
  type: string;
  user_id?: number;
}

interface IRequest extends Model<InferAttributes<IRequest>, InferCreationAttributes<IRequest>> {
  id: CreationOptional<number>;
  status: 'pending' | 'success' | 'fail';
  is_exchangable: boolean;
  sender_approval: boolean;
  receiver_approval: boolean;
  products: number[];
}

interface IUser extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id: CreationOptional<number>;
  first_name: string;
  last_name: string;
  email: string;
  hashedPassword: string;
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
