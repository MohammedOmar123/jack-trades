// import { Response, NextFunction } from 'express';
// import { IRequestPayload } from '../../interfaces';
// import { validateCheckRequest } from '../../validation';
// import { getRequestQuery } from '../../database/queries';
// import { CustomError } from '../../helpers';

// const checkRequest = async (req : IRequestPayload, res : Response, next:NextFunction) => {
//   try {
//     const senderId = req.user.id;
//     const { productId } = req.params;
//     const data = await validateCheckRequest.validateAsync({ productId, senderId });

//     const queryResult = await getRequestQuery({
//       sender_id: data.senderId, product_id: data.productId,
//     });

//     if (queryResult) throw new CustomError(400, 'You already requested this item');

//     const result = await getProductTypeQuery(data.productId);

//     const type = result.getDataValue('type');

//     res.json({ type });
//   } catch (error) {
//     next(error);
//   }
// };

// export default checkRequest;
