import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';
import { getNameQuery } from '../../database/queries';

const checkAuth = async (req : IRequestPayload, res : Response, next:NextFunction) => {
  const { id } = req.user;
  try {
    const { first_name: lastName, last_name: firstName } = await getNameQuery(id);
    res.json({ id, lastName, firstName });
  } catch (error) {
    next(error);
  }
};

export default checkAuth;
