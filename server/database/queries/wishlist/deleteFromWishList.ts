import { Favorite } from '../../../models';

const deleteFromWishListQuery = (
  user_id:string | number,
  product_id:string | number,
) => Favorite.destroy({
  where: {
    user_id,
    product_id,
  },
});
export default deleteFromWishListQuery;
