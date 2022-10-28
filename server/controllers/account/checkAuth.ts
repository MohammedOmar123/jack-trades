import { Request, Response } from 'express';

const checkAuth = (req : Request, res : Response) => {
  res.sendStatus(200);
};

export default checkAuth;
