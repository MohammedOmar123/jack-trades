import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';

import { getAllWishlistItemsQuery } from '../../database/queries';

const getAllWishListItems = async (req : IRequestPayload, res :Response, next:NextFunction) => {
  const { id } = req.user;
  try {
    const data = await getAllWishlistItemsQuery(+id);
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
