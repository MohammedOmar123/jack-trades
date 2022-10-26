import { Request, Response, NextFunction } from 'express';
import { getAllProductsQuery, getProductsNumberQuery } from '../../database/queries/products';
import { CustomError } from '../../helpers';

const getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { limit, offset } = req.query;
    if (!(Number(limit) > 0) && !(Number(offset) > 0)) throw new CustomError(401, 'Bad Request');

    const products = await getAllProductsQuery(+limit, +offset);
    const productsNumber = await getProductsNumberQuery();

    res.send({ totalProducts: productsNumber, products });
  } catch (error) {
    next(error);
  }
};

export default getAllProducts;
