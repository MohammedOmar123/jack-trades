import { Request, Response } from 'express';

const getAllProducts = (req : Request, res : Response) => {
  res.send('Hello from  getAllProducts');
};

export default getAllProducts;
