import { Product } from '../../../models';

const getAllProductsQuery = (limit: number, offset: number) => Product.findAll({
  limit,
  offset,
});

const getProductsNumberQuery = () => Product.count();

export { getAllProductsQuery, getProductsNumberQuery };
