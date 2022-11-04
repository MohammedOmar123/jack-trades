import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';
import { getAllRequestsQuery } from '../../database/queries';

const getAllRequest = async (req : IRequestPayload, res : Response, next:NextFunction) => {
  try {
    const { id } = req.user;
    const allRequests = await getAllRequestsQuery(id);
    if (!allRequests.length) {
      res.json({ message: 'There is no requests yet' });
      return;
    }
    res.json({ message: allRequests });
  } catch (error) {
    next(error);
  }
};

export default getAllRequest;
