/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';

import { signinValidationSchema } from '../../validation';

const signIn = async (req: Request, res: Response) => {
  const loginInformation = req.body;
  const validationResponse = await signinValidationSchema(loginInformation);
  console.log('jsldkfj', validationResponse);

  res.send('Hello signin');
};

export default signIn;
