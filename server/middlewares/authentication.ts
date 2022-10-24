import { Request, Response, NextFunction } from 'express';
import { verifyToken, CustomError } from '../helpers';

const authentication = async (req:Request, res:Response, next:NextFunction) => {
  const { token } = req.cookies;
  try {
    const payload = await verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    const err = new CustomError(401, 'Unauthorized');
    next(err);
  }
};

export default authentication;
