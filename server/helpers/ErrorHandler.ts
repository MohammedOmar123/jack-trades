import { Response, Request, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorHandler = (error, req: Request, res: Response, next: NextFunction) => {
  const { status, message } = error;
  res.status(status || 500).send(message || 'Internal Server Error');
};
export default ErrorHandler;
