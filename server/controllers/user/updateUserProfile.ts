import { NextFunction, Response } from 'express';
// import { CustomError } from '../../helpers';
import { IRequestPayload } from '../../interfaces/IRequestPayload';
import { updateUserprofileValidation } from '../../validation';
import { updateUserProfileQuery } from '../../database/queries';

const updateUserProfile = async (req: IRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const { image, bio } = req.body;
    await updateUserprofileValidation.validateAsync(req.body);
    await updateUserProfileQuery(id, image, bio);
    res.json({ message: 'Your information updated successfully' });
  } catch (error) {
    next(error);
  }
};
export default updateUserProfile;
