import { Response, Request, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorHandler = (error, req: Request, res: Response, next: NextFunction) => {
  const { status, message } = error;

  if (error.name === 'ValidationError') return res.status(400).json({ msg: error.message });
  res.status(status || 500).send({ msg: message || 'Internal Server Error' });
};
export default ErrorHandler;
