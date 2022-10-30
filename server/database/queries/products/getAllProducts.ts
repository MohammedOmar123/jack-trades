import { Product, Category } from '../../../models';
import { IArguments } from '../../../interfaces';

const getAllProductsQuery = ({
  limit, offset, category, type, date, search,
}: IArguments) => Product.findAndCountAll({
  limit,
  offset: offset * limit,
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
