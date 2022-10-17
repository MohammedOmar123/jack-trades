import { Request, Response } from 'express';

const getUserProducts = (req : Request, res : Response) => {
  res.send('Hello from user products');
};
export default getUserProducts;
