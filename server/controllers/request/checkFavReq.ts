import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';
import { checkInWishList } from '../../database/queries';
import { CustomError } from '../../helpers';

const checkFavReq = async (req : IRequestPayload, res : Response, next:NextFunction) => {
  const { productId } = req.params;
  const { id } = req.user;
  if (!(Number(productId) > 0)) throw new CustomError(400, 'Bad Request');

  try {
    const data = await checkInWishList(id, productId);
    if (data !== null) {
      res.status(200).send(true);
    } else {
      res.status(200).send(false);
    }
  } catch (error) {
    next(error);
  }
};

export default checkFavReq;
