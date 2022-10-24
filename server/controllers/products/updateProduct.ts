import { Request, Response, NextFunction } from 'express';
import { updateProductQuery } from '../../database/queries';

const updateProduct = async (req : Request, res : Response, next : NextFunction) => {
  const { productId } = req.params;
  const { title, description } = req.body;

  try {
    await updateProductQuery({ id: productId, title, description });
    res.status(201).send({ message: 'You updated your product successfully' });
  } catch (error) {
    next(error);
  }
};

export default updateProduct;
