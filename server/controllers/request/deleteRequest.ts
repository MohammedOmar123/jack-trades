import { Request, Response } from 'express';

const deleteRequest = (req : Request, res : Response) => {
  res.send('Hello from deleteRequest');
};

export default deleteRequest;
