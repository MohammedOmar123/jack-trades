import { Request, Response } from 'express';

const getUserProfile = (req : Request, res : Response) => {
  res.send('Hello from user Profile');
};
export default getUserProfile;
