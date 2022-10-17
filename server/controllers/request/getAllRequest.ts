import { Request, Response } from 'express';

const getAllRequest = (req : Request, res : Response) => {
  res.send('Hello from getAllRequests');
};

export default getAllRequest;
