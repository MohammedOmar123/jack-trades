import { Request, Response } from 'express';

const getAllWishListItems = (req : Request, res : Response) => {
  res.send('Hello getAll WishList items ');
};

export default getAllWishListItems;
