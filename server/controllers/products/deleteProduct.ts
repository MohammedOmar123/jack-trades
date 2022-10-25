import { Request, Response, NextFunction } from 'express';
import { deleteProductQuery } from '../../database/queries';
import { CustomError } from '../../helpers';

const deleteProduct = async (req : Request, res : Response, next:NextFunction) => {
  try {
    const { productId } = req.params;
    if (!(Number(productId) > 0)) throw new CustomError(400, 'Bad Request');

    await deleteProductQuery(productId);
    res.send({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export default deleteProduct;
