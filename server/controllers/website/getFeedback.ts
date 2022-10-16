import { Request, Response } from 'express';

const getFeedback = (req : Request, res : Response) => {
  res.send('Hello from getFeedback');
};

export default getFeedback;
