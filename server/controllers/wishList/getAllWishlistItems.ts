import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';
import getAllItemsQuery from '../../database/queries/wishlist/getAllWishListItemsQuery';

const getAllWishListItems = async (req : IRequestPayload, res :Response, next:NextFunction) => {
  const { id } = req.user;
  try {
    const data = await getAllItemsQuery(+id);
    if (data.length) {
      res.json({ message: data });
    } else {
      res.json({ message: 'There is no items in your wishlist' });
    }
  } catch (err) {
    next(err);
  }
};

export default getAllWishListItems;
