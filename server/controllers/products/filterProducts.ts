import { Request, Response } from 'express';

const filterProduct = async (req: Request, res: Response) => {
  res.send('hello from filter products');
};

export default filterProduct;
