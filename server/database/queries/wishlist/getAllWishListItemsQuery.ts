import { Favorite, Product } from '../../../models';

const getAllItemsQuery = async (user_id : number) => Favorite.findAll({
  raw: true,
  attributes: ['product_id'],
  include: {
    model: Product,
    attributes: ['title', 'gallery'],
  },
  where: {
    user_id,
  },
});

export default getAllItemsQuery;
