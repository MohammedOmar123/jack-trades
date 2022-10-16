// Review function name and file name Here !
import { Request, Response } from 'express';

const viewItemDetails = (req : Request, res : Response) => {
  res.send('Hello from view notifications');
};

export default viewItemDetails;
