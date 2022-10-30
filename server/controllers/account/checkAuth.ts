import { Response } from 'express';
import { IRequestPayload } from '../../interfaces';

const checkAuth = (req : IRequestPayload, res : Response) => {
  const { id } = req.user;
  res.json(id);
};

export default checkAuth;
