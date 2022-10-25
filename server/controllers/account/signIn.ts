import { Request, Response, NextFunction } from 'express';

import { compare } from 'bcrypt';
import { signinValidationSchema } from '../../validation';
import { signinQuery } from '../../database/queries';
import { CustomError } from '../../helpers';

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = await signinValidationSchema(req.body);

    const userData = await signinQuery({ email });
    if (!userData) throw new CustomError(404, 'you have to signup first');

    const isPasswordTrue = await compare(password, password);

    if (!isPasswordTrue) throw new CustomError(404, 'You enterd a wrong password');

    res.send({ message: 'logged successfully' });
  } catch (err) {
    next(err);
  }
};

export default signIn;
