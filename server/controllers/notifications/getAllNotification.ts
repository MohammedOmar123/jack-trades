import { Request, Response } from 'express';

const getAllNotifications = (req : Request, res : Response) => {
  res.send('Hello getAllNotifications');
};

export default getAllNotifications;
