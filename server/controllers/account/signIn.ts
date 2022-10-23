/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';

import { compare } from 'bcrypt';
import { signinValidationSchema } from '../../validation';
import { signinQuery } from '../../database/queries';
import { CustomError } from '../../helpers';

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const validationResponse = await signinValidationSchema({ email, password });

  const userData = await signinQuery({ email });
  if (!userData) throw new CustomError(404, 'you have to signup first');

  const isPasswordTrue = await compare(password, userData.toJSON().password);

  if (!isPasswordTrue) throw new CustomError(404, 'You enterd a wrong password');

  res.send({ message: 'logged successfully' });
};

export default signIn;
