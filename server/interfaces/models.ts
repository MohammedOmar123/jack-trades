import {
  CreationOptional, ForeignKey, InferAttributes, InferCreationAttributes, Model,
} from 'sequelize';

/* eslint-disable import/prefer-default-export */
interface ICategory extends Model<InferAttributes<ICategory>, InferCreationAttributes<ICategory>> {
  id: CreationOptional<number>;
  name: string;
  image: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
  deletedAt: CreationOptional<Date>;
}

interface IFavorite extends Model<InferAttributes<IFavorite>, InferCreationAttributes<IFavorite>> {
  id: CreationOptional<number>;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
  deletedAt: CreationOptional<Date>;
  user_id: ForeignKey<IUser['id']>;
  product_id: ForeignKey<IProduct['id']>
}

interface IFeedback extends Model<InferAttributes<IFeedback>, InferCreationAttributes<IFeedback>> {
  id: CreationOptional<number>;
  nickname: string;
  message: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
  deletedAt: CreationOptional<Date>;
}

interface IProduct extends Model<InferAttributes<IProduct>, InferCreationAttributes<IProduct>> {
  id: CreationOptional<number>;
  title: string;
  description: string;
  gallery: string[];
  is_available: boolean;
  type: 'docnation' | 'exchange';
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
  deletedAt: CreationOptional<Date>;
  user_id: ForeignKey<IUser['id']>;
  category_id: ForeignKey<ICategory['id']>
}

interface IRequest extends Model<InferAttributes<IRequest>, InferCreationAttributes<IRequest>> {
  id: CreationOptional<number>;
  status: 'pending' | 'success' | 'fail';
  is_exchangable: boolean;
  sender_approval: boolean;
  receiver_approval: boolean;
  products: number[];
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
  deletedAt: CreationOptional<Date>;
  sender_id: ForeignKey<IUser['id']>
  receiver_id: ForeignKey<IUser['id']>
  product_id: ForeignKey<IProduct['id']>
  exchanged_id: ForeignKey<IProduct['id']>
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
