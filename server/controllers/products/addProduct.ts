import { Request, Response } from 'express';

const addProduct = (req : Request, res : Response) => {
  res.send('Hello from add add Product');
};

export default addProduct;
