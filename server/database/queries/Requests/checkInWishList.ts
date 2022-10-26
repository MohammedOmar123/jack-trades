import { Favorite } from '../../../models';

const checkInWishList = (
  user_id : string | number,
  product_id : string | number,
) => Favorite.findOne({
  where: {
    user_id,
    product_id,
  },
});
export default checkInWishList;
