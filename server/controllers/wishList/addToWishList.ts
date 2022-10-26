import { Response, NextFunction } from 'express';
import { addToWishListQuery } from '../../database/queries';
import { IRequestPayload } from '../../interfaces/IRequestPayload';
import { CustomError } from '../../helpers';

const addToWishList = async (req:IRequestPayload, res:Response, next: NextFunction) => {
  const { productId } = req.params;
  const { id } = req.user;
  if (!(Number(productId) > 0)) throw new CustomError(400, 'Bad Request');
  try {
    await addToWishListQuery(id, productId);
    res.status(201).send('You added the product to wishlist successfully');
  } catch (err) {
    next(err);
  }
};
export default addToWishList;
