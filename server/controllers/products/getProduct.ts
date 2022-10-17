import { Request, Response } from 'express';

const getProduct = (req : Request, res : Response) => {
  res.send('Hello from  getProduct');
};

export default getProduct;
