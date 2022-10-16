import { Request, Response } from 'express';

const filterProduct = (req : Request, res : Response) => {
  res.send('Hello from  filter Product');
};

export default filterProduct;
