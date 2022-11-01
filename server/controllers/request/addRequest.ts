/* eslint-disable @typescript-eslint/naming-convention */
import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';
import { validateAddRequest } from '../../validation';
import { addRequestQuery, getProductDetailsQuery, getRequestQuery } from '../../database/queries';
import { CustomError } from '../../helpers';

const addRequests = async (req : IRequestPayload, res : Response, next:NextFunction) => {
  try {
    const senderId = req.user.id;
    // validate inputs
    const data = await validateAddRequest.validateAsync({ ...req.body, senderId });

    const queryResult = await getProductDetailsQuery([data.productId]);
    const { user_id, is_available, type } = queryResult;

    // check if the receiver id is really has this product.>> postman case
    if (user_id !== data.receiverId) throw new CustomError(400, 'Bad Request');

    // validate Availability
    if (!is_available) throw new CustomError(400, 'This item is not available right now');

    // if exchange >> check if the user really has these products
    if (type === 'exchange') {
      const isProductOwner = await getProductDetailsQuery(data.products);
      if (isProductOwner.user_id !== senderId) throw new CustomError(400, 'Please check your selected product');
    }

    // validate if the item already requested
    const queryOutput = await getRequestQuery({
      sender_id: data.senderId, product_id: data.productId,
    });
    if (queryOutput) throw new CustomError(400, 'You already requested this item');

    const result = await addRequestQuery({
      sender_id: data.senderId,
      receiver_id: data.receiverId,
      product_id: data.productId,
      type: type === 'exchange',
      products: data.products || null,
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default addRequests;
