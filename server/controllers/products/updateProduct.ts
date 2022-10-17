import { Request, Response } from 'express';

const updateProduct = (req : Request, res : Response) => {
  res.send('Hello from  updateProduct');
};

export default updateProduct;
