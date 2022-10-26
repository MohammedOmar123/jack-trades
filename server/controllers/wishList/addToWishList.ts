import { Response, NextFunction } from 'express';
import { addToWishListQuery, checkInWishList } from '../../database/queries';
import { IRequestPayload } from '../../interfaces/IRequestPayload';
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
      await addToWishListQuery(id, (+productId));
      res.status(201).json({ message: 'You added the product to the wishlist successfully' });
    }
  } catch (err) {
    next(err);
  }
};
export default addToWishList;
