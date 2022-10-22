import { Request, Response, NextFunction } from 'express';
import validateSighup from '../../helpers/signupValidation';

const signup = async (req : Request, res : Response, next:NextFunction) => {
  try {
    const validateResult = await validateSighup(req.body);
    res.send(validateResult);
  } catch (err) {
    next(err);
  }
};

export default signup;
