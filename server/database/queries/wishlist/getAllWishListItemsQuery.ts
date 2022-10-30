import { Favorite, Product } from '../../../models';

const getAllWishlistItemsQuery = async (user_id : number) => Favorite.findAll({
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

export default getAllWishlistItemsQuery;
