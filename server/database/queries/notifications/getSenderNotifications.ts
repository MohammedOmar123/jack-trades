import { Op } from 'sequelize';
import { Request, User } from '../../../models';

const getSenderNotificationsQuery = (sender_id:number) => Request.findAll({
  attributes: ['id', 'status', 'receiver_approval', 'products', 'createdAt', 'receiver_id', 'product_id', 'exchanged_id'],
  raw: true,
  nest: false,
  include: {
    model: User,
    attributes: ['id', 'first_name', 'last_name', 'image'],
    required: true,
    as: 'receiver',
  },
  paranoid: false,
  where: {
    sender_id,
    receiver_approval: {
      [Op.ne]: null,
    },
  },
});
export default getSenderNotificationsQuery;
