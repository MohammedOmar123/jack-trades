import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces/IRequestPayload';

import { addToWishListQuery, checkInWishList, getProductQuery } from '../../database/queries';
import { CustomError } from '../../helpers';

const addToWishList = async (req:IRequestPayload, res:Response, next: NextFunction) => {
  const { productId } = req.params;
  const { id } = req.user;

  try {
    if (!(Number(productId) > 0)) throw new CustomError(400, 'Bad Request');

    // Check if the product is already added to the wishList.
    const isExist = await checkInWishList(id, +(productId));

    if (isExist) {
      throw new CustomError(400, 'This item is already exist in the WishList');
    } else {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { user_id } = await getProductQuery(+productId);
      if (id === user_id) {
        throw new CustomError(400, 'You can not add your items to your wishlist');
      }
      await addToWishListQuery(id, (+productId));
      res.status(201).json({ message: 'You added the product to the wishlist successfully' });
    }
  } catch (err) {
    next(err);
  }
};
export default addToWishList;
