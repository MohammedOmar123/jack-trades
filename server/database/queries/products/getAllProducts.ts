import { Product, Category } from '../../../models';

const getAllProductsQuery = (limit: number, offset: number) => Product.findAll({
  attributes: ['id', 'title', 'gallery'],
  limit,
  offset,
});

const getProductsNumberQuery = () => Product.count();

const getAllCategoriesQuery = () => Category.findAll({
  attributes: ['id', 'name'],
});

export { getAllProductsQuery, getProductsNumberQuery, getAllCategoriesQuery };
