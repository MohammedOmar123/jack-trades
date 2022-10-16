import { Request, Response } from 'express';

const signin = (req : Request, res : Response) => {
  res.send('Hello signin');
};

export default signin;
