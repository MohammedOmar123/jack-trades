import { Request, Response, NextFunction } from 'express';
import { getAllProductsQuery, getProductsNumberQuery, getAllCategoriesQuery } from '../../database/queries/products';
import { CustomError } from '../../helpers';

const getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const limit = Number(req.query?.limit);
    const offset = Number(req.query?.offset);
    type IStrOrStrArr = string | string[];
    let category: IStrOrStrArr = req.query.category as IStrOrStrArr;
    let type: IStrOrStrArr = req.query.type as IStrOrStrArr;

    if (!(limit > 0) && !(offset > 0)) throw new CustomError(401, 'Bad Request');
    console.log(limit, offset, category, type);

    const categories = await getAllCategoriesQuery();
    if (!category) {
      category = categories.map((v: { id: number }) => String(v.id));
    }
    if (!type) {
      type = ['donation', 'exchange'];
    }
    const products = await getAllProductsQuery({
      limit, offset, category, type,
    });
    const productsNumber = await getProductsNumberQuery();

    res.send({
      totalProducts: productsNumber,
      totalPages: Math.floor(productsNumber / +limit),
      products,
      categories,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllProducts;
