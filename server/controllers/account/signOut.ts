import { Request, Response } from 'express';

const signOut = (req : Request, res : Response) => {
  res.send('Hello out');
};

export default signOut;
