import { Favorite } from '../../../models';

const addToWishListQuery = async (user_id : string |
number, product_id : string | number) => Favorite.create({
  user_id,
  product_id,
});

export default addToWishListQuery;
