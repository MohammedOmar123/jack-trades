import { Request, Response } from 'express';

const filterProduct = async (req: Request, res: Response) => {
  res.send('hello from all products');
};

export default filterProduct;
