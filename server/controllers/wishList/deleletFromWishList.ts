import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';
import deleteFromWishListQuery from '../../database/queries/wishlist/deleteFromWishList';
import { CustomError } from '../../helpers';

const deleteFromWishList = async (req : IRequestPayload, res : Response, next:NextFunction) => {
  const { productId } = req.params;
  const { id } = req.user;

  if (!(Number(productId) > 0)) throw new CustomError(400, 'Bad Request');

  try {
    await deleteFromWishListQuery(id, productId);
    res.status(200).send('You removed the product from wishlist successfully');
  } catch (err) {
    next(err);
  }
};

export default deleteFromWishList;
