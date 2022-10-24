import { Request, Response, NextFunction } from 'express';
import { updateProductQuery } from '../../database/queries';
import { validateUpdateData } from '../../validation';

const updateProduct = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const data = await validateUpdateData.validateAsync({
      id: +req.params.productId, ...req.body,
    });

    console.log(data);

    await updateProductQuery(data);
    res.status(201).send({ message: 'You updated your product successfully' });
  } catch (error) {
    next(error);
  }
};

export default updateProduct;
