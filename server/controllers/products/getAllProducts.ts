import { Request, Response, NextFunction } from 'express';
import {
  getAllProductsQuery, getProductsNumberQuery, getAllCategoriesQuery, getProductsTitleQuery,
} from '../../database/queries/products';
import { CustomError } from '../../helpers';
import { TStrOrStrArr } from '../../interfaces';

const getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const limit = Number(req.query.limit);
    const offset = Number(req.query.offset);
    let category: TStrOrStrArr = req.query.category as TStrOrStrArr;
    let type: TStrOrStrArr = req.query.type as TStrOrStrArr;
    let date = req.query.date as string;
    let search: TStrOrStrArr = req.query.search as TStrOrStrArr;

    const isValidInputsForPagination = (limit > 0) || !(offset >= 0);
    const isValidInputsForType = type === 'donation' || type === 'exchange' || typeof type === 'undefined';
    const isValidInputsForDate = date === 'newest' || date === 'oldest' || typeof date === 'undefined';

    if (!isValidInputsForPagination || !isValidInputsForType || !isValidInputsForDate) throw new CustomError(401, 'Bad Request');

    const categories = await getAllCategoriesQuery();
    const productsTitles = await getProductsTitleQuery();

    if (!search) { search = productsTitles.map((v: { title: string }) => v.title); }
    if (!category) { category = categories.map((v: { id: number }) => String(v.id)); }
    if (!type) { type = ['donation', 'exchange']; }
    if (!date || date) {
      if (date?.toLowerCase() === 'newst') {
        date = 'DESC';
      } else if (date?.toLowerCase() === 'oldest') {
        date = 'ASC';
      } else { date = 'DESC'; }
    }

    const products = await getAllProductsQuery({
      limit, offset, category, type, date, search,
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
