import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';
import {
  updateRequestQuery, getIsExchangeableQuery,
  declineAllOtherRequests, checkRequestQuery,
  deleteSuccessRequestQuery,
} from '../../database/queries';
import { updateRequestValidation } from '../../validation';
import { CustomError } from '../../helpers';

const updateRequest = async (req: IRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const { requestId } = req.params;
    const { receiverApproval, productId } = req.body;

    if (!(Number(requestId) > 0)) throw new CustomError(401, 'Bad Request');
    await updateRequestValidation.validateAsync({ receiverApproval });

    // check if the request still valid and for the current user
    const queryResult = await checkRequestQuery(+requestId, +id);
    if (!queryResult) throw new CustomError(400, 'This request does\'nt exist anymore');
    if (!receiverApproval) {
      await updateRequestQuery(+requestId, false, null, 'fail');
      res.json({ message: 'You decline the request' });
      return;
    }

    const queryOutput = await getIsExchangeableQuery(+requestId);
    if (!queryOutput.is_exchangable) {
      updateRequestQuery(+requestId, true, null, 'success');
    } else {
      if (!queryResult.products.includes(productId)) throw new CustomError(400, 'Choose one of the offered products');
      await updateRequestQuery(+requestId, true, productId, 'success');
    }

    await declineAllOtherRequests(+requestId, (+queryOutput.product_id));
    await deleteSuccessRequestQuery(+requestId, id);
    res.json({ message: 'Operation done successfully' });
  } catch (error) {
    next(error);
  }
};

export default updateRequest;
