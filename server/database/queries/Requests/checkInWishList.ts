import { Favorite } from '../../../models';

const checkInWishList = (
  user_id : number,
  product_id : number,
) => Favorite.findOne({
  where: {
    user_id,
    product_id,
  },
});
export default checkInWishList;
