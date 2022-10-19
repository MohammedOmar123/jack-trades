import { NextFunction, Request, Response } from 'express';
import { getUserProfileQuery } from '../../database/queries';
// import CustomError from '../../errors/CustomError';

const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  try {
    const response = await getUserProfileQuery(userId);
    if (response != null) {
      res.json(response);
    } else {
      res.status(404).json({ msg: 'Opss, User Not Found' });

      // // how I can end the request if I do the THROW NEW CUSTOMERROR
      // throw new CustomError(404, 'Opss, User Not Found');
    }
  } catch (error) {
    next(error);
  }
};
export default getUserProfile;
