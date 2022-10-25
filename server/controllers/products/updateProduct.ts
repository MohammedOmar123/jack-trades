import { Request, Response, NextFunction } from 'express';
import { updateProductQuery } from '../../database/queries';
import { validateUpdateData } from '../../validation';
import { CustomError } from '../../helpers';

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await validateUpdateData.validateAsync({
      id: +req.params.productId, ...req.body,
    });

    const [updated] = await updateProductQuery(data);

    if (updated) res.status(201).send({ message: 'You updated your product successfully' });
    else throw new CustomError(400, 'Bad Request, id doesn\'t exist');
  } catch (error) {
    next(error);
  }
};

export default updateProduct;
