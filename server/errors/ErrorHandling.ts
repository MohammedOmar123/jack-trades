import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorHandling = (error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.log('Just for testing: We are in ErrorHandling ===> ', error.message);
  res.status(error.status || 500).json({ msg: 'Internal Server Error' });
};

export default ErrorHandling;
