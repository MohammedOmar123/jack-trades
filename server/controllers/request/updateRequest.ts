import { Request, Response } from 'express';

const updateRequest = (req : Request, res : Response) => {
  res.send('Hello from updateRequest');
};
// Review function name and file name Here !
export default updateRequest;
