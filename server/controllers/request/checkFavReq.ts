import { Request, Response } from 'express';

const checkFavReq = (req : Request, res : Response) => {
  res.send('Hello from checkFavReq');
};

export default checkFavReq;
