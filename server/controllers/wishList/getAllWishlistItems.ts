import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';

import { getAllWishlistItemsQuery } from '../../database/queries';

const getAllWishListItems = async (req: IRequestPayload, res: Response, next: NextFunction) => {
  const { offset, limit } = req.query;
  const { id } = req.user;

  try {
    const data = await getAllWishlistItemsQuery(+id, +offset, +limit);
    if (data.rows.length) {
      res.json(data);
    } else {
      res.json({ message: 'There is no items in your wishlist' });
    }
  } catch (err) {
    next(err);
  }
};

export default getAllWishListItems;
