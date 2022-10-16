import { Request, Response } from 'express';

const signout = (req : Request, res : Response) => {
  res.send('Hello out');
};

export default signout;
