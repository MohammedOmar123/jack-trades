import { Request, Response, NextFunction } from 'express';
import { filterProducts } from '../../database/queries/products';

const filterProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.query);
    const response = await filterProducts(req.query.category);

    res.send({ categoryIDs: response });
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};

export default filterProduct;
