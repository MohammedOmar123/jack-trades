import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { validateSighup } from '../../validation';
import { signupQuery, checkUserExist } from '../../database/queries/account';
import { CustomError } from '../../helpers';
import generateToken from '../../helpers/generateToken';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    await validateSighup(req.body);

    const checkResultQuery = await checkUserExist(email);

    if (checkResultQuery) throw new CustomError(400, 'This email is already exist,Please check your email again');

    const hashed = await bcrypt.hash(password, 10);
    const result = await signupQuery({ ...req.body, password: hashed });

    const token = await generateToken(result.getDataValue('id'), email);

    res.cookie('token', token, { httpOnly: true, secure: true }).json({ msg: 'Your Account Created Successfully' });
  } catch (err) {
    next(err);
  }
};

export default signup;
