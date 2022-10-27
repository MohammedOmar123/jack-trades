import { Product, Category } from '../../../models';

interface IArguments {
  limit: number;
  offset: number;
  category?: string | string[];
  type?: string | string[];
}

const getAllProductsQuery = ({
  limit, offset, category, type,
}: IArguments) => Product.findAll({
  attributes: ['id', 'title', 'gallery'],
  limit,
  offset,
  where: {
    category_id: category,
    type,
  },
});
const getProductsNumberQuery = () => Product.count();

const getAllCategoriesQuery = () => Category.findAll({
  attributes: ['id', 'name'],
});

export { getAllProductsQuery, getProductsNumberQuery, getAllCategoriesQuery };
