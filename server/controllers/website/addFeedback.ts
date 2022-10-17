import { Request, Response } from 'express';

const addFeedback = (req : Request, res : Response) => {
  res.send('Hello from add feedback');
};

export default addFeedback;
