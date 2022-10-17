import { Request, Response } from 'express';

const addRequests = (req : Request, res : Response) => {
  res.send('Hello from addRequests');
};

export default addRequests;
