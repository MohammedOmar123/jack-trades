import { Request, Response } from 'express';

const signup = (req : Request, res : Response) => {
  res.send('Hello signup');
};

export default signup;
