import { Request, Response } from 'express';

const getStatistics = (req : Request, res : Response) => {
  res.send('Hello from add getStatistics');
};

export default getStatistics;
