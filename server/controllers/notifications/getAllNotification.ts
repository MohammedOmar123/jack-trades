import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';

import { getReceiverNotificationsQuery, getSenderNotificationsQuery } from '../../database/queries';

const getAllNotifications = async (req: IRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    const receiverNotifications = await getReceiverNotificationsQuery(+id);

    const senderNotifications = await getSenderNotificationsQuery(id);

    const allNotifications = [...receiverNotifications, ...senderNotifications];
    if (!allNotifications.length) {
      res.json({ message: 'There is no notifications yet' });
    } else {
      res.json({ data: allNotifications });
    }
  } catch (error) {
    next(error);
  }
};

export default getAllNotifications;
