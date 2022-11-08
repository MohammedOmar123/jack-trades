import { Response, NextFunction } from 'express';
import { validateChat } from '../../validation';
import { IRequestPayload } from '../../interfaces/IRequestPayload';
import { addMessageQuery } from '../../database/queries';

const addMessage = async (req: IRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { id: senderId } = req.user;
    const { receiverId, message } = req.body;
    await validateChat.validateAsync({ receiverId, message });
    const result = await addMessageQuery(senderId, receiverId, message);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default addMessage;
