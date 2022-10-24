import { Request, Response, NextFunction } from 'express';
import { deleteProductQuery } from '../../database/queries';

const deleteProduct = async (req : Request, res : Response, next:NextFunction) => {
  const { productId } = req.params;
  try {
    await deleteProductQuery(productId);
    res.send({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export default deleteProduct;
