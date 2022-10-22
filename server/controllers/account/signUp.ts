import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import validateSighup from '../../helpers/signupValidation';
import { signupQuery, checkUserExist } from '../../database/queries/account';
import { CustomError } from '../../helpers';

const signup = async (req : Request, res : Response, next:NextFunction) => {
  try {
    const { id, email, password } = req.body;
    await validateSighup(req.body);
    const checkResultQuery = await checkUserExist(email);

    if (checkResultQuery) throw new CustomError(400, 'This email is already exist,Please check your email again ');
    const hashed = await bcrypt.hash(password, 10);

    await signupQuery({ ...req.body, password: hashed });
    res.cookie('token', { id, email }).json({ msg: 'Your Account Created Successfully' });
  } catch (err) {
    next(err);
  }
};

export default signup;
