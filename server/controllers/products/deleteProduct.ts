import { Request, Response } from 'express';

const deleteProduct = (req : Request, res : Response) => {
  res.send('Hello from add delete Product');
};

export default deleteProduct;
