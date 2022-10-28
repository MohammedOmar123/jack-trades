/* eslint-disable @typescript-eslint/no-unused-vars */
import { Op } from 'sequelize';
import { Product, Category } from '../../../models';
import { IArguments } from '../../../interfaces';

const getAllProductsQuery = ({
  limit, offset, category, type, date, search,
}: IArguments) => Product.findAll({
  limit,
  offset,
  where: {
    category_id: category,
    type,
    title: search,
  },
  order: [
    ['createdAt', `${date}`],
  ],
  attributes: ['id', 'title', 'gallery'],
});

const getProductsNumberQuery = () => Product.count();
const getProductsTitleQuery = () => Product.findAll({
  attributes: ['title'],
});

const getAllCategoriesQuery = () => Category.findAll({
  attributes: ['id', 'name'],
});

export {
  getAllProductsQuery, getProductsNumberQuery, getAllCategoriesQuery, getProductsTitleQuery,
};
