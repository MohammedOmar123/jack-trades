// Review Here for the name of the file and the function
import { Request, Response } from 'express';

const updateRequest = (req : Request, res : Response) => {
  res.send('Hello from updateRequest');
};

export default updateRequest;
