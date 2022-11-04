import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';

import { getReceiverNotificationsQuery, getSenderNotificationsQuery } from '../../database/queries';

const getAllNotifications = async (req: IRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    // when the user is in the receiver case
    const receiverNotifications = await getReceiverNotificationsQuery(+id);
    // when the user is in the sender case >> and that means his requests when he gets an approval.
    const senderNotifications = await getSenderNotificationsQuery(id);

    const allNotifications = [...receiverNotifications, ...senderNotifications];
    if (!allNotifications.length) {
      res.json({ message: 'There is no notifications yet' });
    } else {
      res.json({ message: [...receiverNotifications, ...senderNotifications] });
    }
  } catch (error) {
    next(error);
  }
};

export default getAllNotifications;
