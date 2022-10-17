import { Request, Response } from 'express';

const signIn = (req : Request, res : Response) => {
  res.send('Hello signin');
};

export default signIn;
